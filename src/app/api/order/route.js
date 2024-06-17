import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const listOrder = await prisma.order.findMany({
      include: {
        catalog: true,
      },
    });

    return NextResponse.json({
      message: "Success get list order",
      data: listOrder,
    });
  } catch (error) {
    return NextResponse.json({ message: "Failed get list order", error });
  }
};
