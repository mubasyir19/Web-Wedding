import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (request) => {
  const { name, price, description } = await request.json();
  try {
    const create = await prisma.catalog.create({
      data: {
        name,
        price,
        description,
      },
    });

    return NextResponse.json({
      message: "Success add new catalog",
      data: create,
    });
  } catch (error) {
    return NextResponse.json({ message: "Failed create catalog", error });
  }
};
