import { NextRequest, NextResponse } from 'next/server';
import fs from 'node:fs/promises';
import path from 'path';
import prisma from '@/lib/prisma';
import { decrypt } from '@/lib/session';


export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('avatar') as File | null;

        if (!file) return NextResponse.json({ success: false, message: 'No file' }, { status: 400 });

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const uploadDir = path.join(process.cwd(), 'public/img/avatar');
        await fs.mkdir(uploadDir, { recursive: true });

        const filename = `${Date.now()}-${(file as any).name?.replace(/\s/g, '_') ?? 'upload'}`;
        const filePath = path.join(uploadDir, filename);
        await fs.writeFile(filePath, buffer);
        const publicPath = `/img/avatar/${filename}`;
        const name = formData.get('name') as string | "";
        const cookie = request.cookies.get?.('session') ?? null;
        const payload = cookie ? await decrypt(cookie.value) : null;

        const user = await prisma.user.findUnique({
            where: { id: payload?.userId as string },
            select: { image: true }
        });

        if (user?.image && user.image !== "/default-avatar.png") {
            const oldPath = path.join(process.cwd(), "public", user.image);

            try {
                await fs.unlink(oldPath);
                console.log("Old avatar deleted:", oldPath);
            } catch (err) {
                console.log("Old avatar not found or could not be deleted.");
            }
        }
        const savedFileRecord = await prisma.user.update({
            where: { id: payload?.userId as string },
            data: { 
                image: publicPath,
                name: name
            }
        });

        return NextResponse.json({ success: true, fileId: savedFileRecord.id });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false, message: 'Upload failed' }, { status: 500 });
    }
}