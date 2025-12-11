import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/acion/auth';
import prisma from '@/lib/prisma';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const session = await getServerSession(authOptions);
        if(!session)return ;
        const createdAt = new Date();
        const newDashboardRecord = await prisma.dashboardSite.create({
            data:{
                userId: session.user.id,
                siteUrl: body.siteUrl,
                license: false,
                createdAt: createdAt,
            }
        })

        return NextResponse.json({ success: true, fileId: newDashboardRecord.id });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false, message: 'Upload failed' }, { status: 500 });
    }
}