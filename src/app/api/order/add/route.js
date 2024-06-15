import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (request) => {
  const { customerName, customerEmail, catalogId } = await request.json();

  try {
    const newOrder = await prisma.order.create({
      data: {
        customerName,
        customerEmail,
        catalogId,
      },
    });

    return NextResponse.json({
      message: "Success create Order",
      data: newOrder,
    });
  } catch (error) {
    return NextResponse.json({ message: "Failed create Order", error });
  }
};
