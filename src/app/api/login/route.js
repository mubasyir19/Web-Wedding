import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

export const POST = async (request) => {
  const { username, password } = await request.json();

  if (!username || !password) {
    return NextResponse.json({
      message: "Username and password are required.",
    });
  }

  const checkUser = await prisma.admin.findFirst({ where: { username } });
  if (checkUser) {
    const isPasswordValid = bcrypt.compareSync(password, checkUser.password);
    if (isPasswordValid) {
      const user = {
        id: checkUser.id,
        fullname: checkUser.fullname,
        username: checkUser.username,
      };

      const token = jwt.sign(user, process.env.TOKEN_SECRET);

      return NextResponse.json({ data: token });
    } else {
      return NextResponse.json({ message: "Invalid Password" });
    }
  } else {
    return NextResponse.json({ message: "Invalid username" });
  }

  // return NextResponse.json({ message: "Account not found" }, { status: 400 });
};
