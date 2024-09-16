import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
export async function POST(req:Request) {
    try {
        let reqBody=await req.json();
        const prisma=new PrismaClient();
        const count=await prisma.users.count({where:reqBody});

        // UpdateAt-Now=2min/3min

        if(count===1){
            return  NextResponse.json({status:"success",data:"Valid Code"})
        }
        else{
            return  NextResponse.json({status:"fail",data:"Invalid Code"})
        }
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}