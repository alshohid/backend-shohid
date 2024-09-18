import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  try {
    const prisma = new PrismaClient();
    let result = await prisma.socials.findMany();
    return NextResponse.json({ status: "success", data: result });
  } catch (error: any) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
