import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id = parseInt(searchParams.get("id") as any);
        const prisma = new PrismaClient();
        const result = await prisma.news_list.findMany({
        where: { id: id },
        include:{categories:{
            select:{
                id:true,name:true
            }
        }}
        });
        return NextResponse.json({ status: "success", data: result });
    } catch (e) {
        return NextResponse.json({ status: "fail", data: e });
    }
    }
