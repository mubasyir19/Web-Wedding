import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (request) => {
  const { email, phoneNumber, address, description } = await request.json();
  try {
    const create = await prisma.company.create({
      data: {
        email,
        phoneNumber,
        address,
        description,
      },
    });

    return NextResponse.json({
      message: "Success create data company",
      data: create,
    });
  } catch (error) {
    return NextResponse.json({ message: "Failed create catalog", error });
  }
};
