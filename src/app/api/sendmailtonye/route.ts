import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Allowed origins (localhost + your deployed site)
const allowedOrigins = [
  "https://tonye-edits-portfolio.vercel.app",
  "https://dinaka.vercel.app",
];

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    },
  );
}

export async function POST(req: NextRequest) {
  try {
    // Get the request origin
    const origin = req.headers.get("origin") || "";

    // Validate the allowed origins
    if (!allowedOrigins.includes(origin)) {
      return new NextResponse(
        JSON.stringify({ error: "CORS policy does not allow this origin." }),
        { status: 403 },
      );
    }

    // Parse request body
    const { name, email, message } = await req.json();

    // Create nodemailer transporter (Use .env variables)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dinakanwamu@gmail.com", // Replace with your email
        pass: "qtbkbbxdtxblbshi", // Repla
      },
    });

    // Set email options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "jimgeorgedivine@gmail.com",
      subject: "New Message from Portfolio",
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new NextResponse(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": origin,
        },
      },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to send email." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
