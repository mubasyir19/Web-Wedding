import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const catalogs = await prisma.catalog.findMany();

    return NextResponse.json({
      message: "success get list catalog",
      data: catalogs,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed get list catalog",
      error,
    });
  }
};
