import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const PUT = async (request, { params }) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("status");
  const { id } = params;

  try {
    const findOrder = await prisma.order.findFirst({
      where: {
        id,
      },
    });

    if (!findOrder) {
      return NextResponse.json({ message: "Order not found" });
    }

    let newStatus;
    if (query === "Approve") {
      newStatus = "Approve";
    } else if (query === "Reject") {
      newStatus = "Reject";
    } else {
      return NextResponse.json({ message: "Invalid Status" });
    }

    const updateOrder = await prisma.order.update({
      where: { id },
      data: {
        status: newStatus,
      },
    });

    return NextResponse.json({
      message: "Success update status",
      data: updateOrder,
    });
  } catch (error) {
    console.error("Error updating order status:", error);
    return NextResponse.json({ message: "Failed to update status", error });
  }
};
