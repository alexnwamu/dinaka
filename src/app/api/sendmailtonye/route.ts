import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // Enable CORS in the response headers
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Handle CORS preflight
    if (req.method === "OPTIONS") {
      return new NextResponse(null, { status: 200, headers });
    }

    // Destructure the form data from the request body
    const { name, email, message } = await req.json();

    // Create a transporter object using environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dinakanwamu@gmail.com", // Replace with your email
        pass: "qtbkbbxdtxblbshi", // Replace with your email password
      },
    });

    // Set up email data
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "jimgeorgedivine@gmail.com",
      subject: "New Message from Portfolio",
      html: `
        <h2>Contact Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new NextResponse(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new NextResponse(
      JSON.stringify({ message: "Failed to send email." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
