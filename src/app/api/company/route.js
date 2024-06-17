import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const response = await prisma.company.findFirst({
      where: {
        id: "c74cb2a9-cef9-49b2-a367-828329564a45",
      },
    });

    return NextResponse.json({ message: "success get data", data: response });
  } catch (error) {
    return NextResponse.json({ message: "failed get data", error });
  }
};
