import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    const deleteData = await prisma.catalog.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({ message: "Success delete data", deleteData });
  } catch (error) {
    return NextResponse.json({ message: "Failed delete data", error });
  }
};
