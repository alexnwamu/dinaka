import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest, res: NextResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all domains
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  // Destructure the form data from the request body
  const { name, email, message } = await req.json();

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail", // Replace with your email service
    auth: {
      user: "dinakanwamu@gmail.com", // Replace with your email
      pass: "qtbkbbxdtxblbshi", // Replace with your email password
    },
  });

  // Set up email data
  const mailOptions = {
    from: ` <${email}>`, // Sender address
    to: "jimgeorgedivine@gmail.com ", // List  of receivers
    subject: "New Message from Portfolio", // Subject line
    html: `
        <h2>j Request Details</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b> Message:</b> ${message}</p>
    `, // Plain text body
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Failed to send email." }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
