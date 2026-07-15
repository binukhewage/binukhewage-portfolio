import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Mock successful submission logging
    console.log("Contact form submission received:", { name, email, message });

    return NextResponse.json({
      success: true,
      message: `Thank you, ${name}! Your message has been received.`
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid JSON body provided." },
      { status: 400 }
    );
  }
}
