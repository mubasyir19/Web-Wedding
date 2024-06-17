import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const PUT = async (request, { params }) => {
  const { id } = params;
  const { email, phoneNumber, address, description } = await request.json();
  try {
    const data = await prisma.company.findFirst({
      where: {
        id,
      },
    });

    if (!data) {
      return NextResponse.json({ message: "Data not found" });
    }

    const update = await prisma.company.update({
      where: {
        id,
      },
      data: {
        email,
        phoneNumber,
        address,
        description,
      },
    });

    return NextResponse.json({
      message: "Success update data company",
      data: update,
    });
  } catch (error) {
    return NextResponse.json({ message: "Failed create catalog", error });
  }
};
