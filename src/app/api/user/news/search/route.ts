import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const keywords = searchParams.get("keywords") as any;
        const prisma = new PrismaClient();
        const result = await prisma.news_list.findMany({
        where: { title: { contains: keywords } },
        });
        return NextResponse.json({ status: "success", data: result });
    } catch (e) {
        return NextResponse.json({ status: "fail", data: e });
    }
    }
