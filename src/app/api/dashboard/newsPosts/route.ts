import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const headerlist = headers();
    // const user_Id = parseInt(headerlist.get("id") as any);
    const reqBody = await req.json();

    const prisma = new PrismaClient();
    console.log(reqBody,"reqbody")
    const result = await prisma.news_list.create({
      data: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error: any) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
