import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Randomly return success (80%) or failure (20%) for testing
    const success = Math.random() > 0.2

    if (success) {
      return NextResponse.json(
        {
          success: true,
          orderId: `ORD-${Date.now()}`,
          message: "Order placed successfully",
        },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Payment processing failed. Please try again.",
        },
        { status: 400 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your order.",
      },
      { status: 500 }
    )
  }
}
