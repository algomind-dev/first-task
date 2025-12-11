import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/acion/auth';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        
        const session = await getServerSession(authOptions);
        // if(!session)return ;

        const allDashboardRecord  = await prisma.dashboardSite.findMany({
            where:{
                userId:session?.user.id,
                deletedAt: null
            }
        })
        console.log("allDashboardRecord: ", allDashboardRecord);
        
        // return allDashboardRecord;
        return NextResponse.json({ success: true, fileId: allDashboardRecord });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false, message: 'Upload failed' }, { status: 500 });
    }
}