import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

export const POST = async (request) => {
  const { fullname, username, password } = await request.json();
  try {
    if (!fullname || !username || !password) {
      return NextResponse.json({ message: "all fields are required" });
    }

    const existingAdmin = await prisma.admin.findFirst({ where: { username } });
    if (existingAdmin) {
      return NextResponse.json({
        message: "An account has already been registered",
      });
    }

    const newAdmin = await prisma.admin.create({
      data: {
        fullname,
        username,
        password: bcrypt.hashSync(password, 10),
      },
    });

    return NextResponse.json({
      message: "Register Successfully",
      data: newAdmin,
    });
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.json({ message: "An error occurred", error: error });
  }
};
