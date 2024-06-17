import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export const GET = async (request, { params }) => {
  const { name } = params;
  try {
    const getData = await prisma.catalog.findFirst({
      where: {
        name,
      },
    });

    return NextResponse.json({ message: "Success get data", data: getData });
  } catch (error) {
    return NextResponse.json({ message: "Failed get data", error });
  }
};
