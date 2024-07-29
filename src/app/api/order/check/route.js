import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (request) => {
    const {customerEmail} = await request.json();
    try {
        const getData = await prisma.order.findFirst({
            where: {
                customerEmail
            }
        })

        return NextResponse.json({ 
            message: "success get Order",
            data: getData,
         });

    } catch (error) {
        return NextResponse.json({ message: "Failed get data order" });
    }
}