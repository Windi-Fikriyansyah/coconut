import { NextResponse } from "next/server";
import pool from "@/lib/mysql";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      address, // Di gambar Anda gunakan sebagai "Identify"
      country,
      town, // Town / City
      companyName,
      businessType,
      selectedProducts,
      paymentMethod,
      quantity,
      message,
    } = body;

    const [result] = await pool.query(
      `INSERT INTO samples 
            (name, email, phone, address, country, town, company_name, business_description, products, payment_method, quantity, message) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        email,
        phone,
        address,
        country,
        town,
        companyName || null, // Gunakan null jika kosong
        businessType || null,
        JSON.stringify(selectedProducts),
        paymentMethod || null,
        quantity || null,
        message || null,
      ],
    );

    return NextResponse.json(
      { message: "Success", id: (result as any).insertId },
      { status: 201 },
    );
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { message: "Failed to save sample request" },
      { status: 500 },
    );
  }
}
