import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const PUT = async (request, { params }) => {
  const { id } = params;
  const { name, price, description } = await request.json();
  try {
    const data = await prisma.catalog.findFirst({
      where: {
        id,
      },
    });

    if (!data) {
      return NextResponse.json({ message: "Data not found" });
    }

    const update = await prisma.catalog.update({
      where: {
        id,
      },
      data: {
        name,
        price,
        description,
      },
    });

    return NextResponse.json({
      message: "Success update data catalog",
      data: update,
    });
  } catch (error) {
    return NextResponse.json({ message: "Failed create catalog", error });
  }
};
