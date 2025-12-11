
import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    try{
        const body = await request.json();
        console.log("body",body);
        
        const deletedAt = new Date();
        console.log("body.id", body.id);
        
        const deletedRecord = await prisma.dashboardSite.update({
            where:{
                id:body.id,
            },
            data:{
                deletedAt:deletedAt
            }  
        });
        return NextResponse.json({ success: true, data: deletedRecord }, {status: 200});
    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false, message: 'Upload failed' }, { status: 500 });
    }
}