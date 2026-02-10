import { NextResponse } from "next/server";
import pool from "@/lib/mysql";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      address,
      country,
      town,
      selectedProducts,
      currency,
      saleTerm,
      paymentTerm,
      message,
    } = body;

    // Query SQL untuk menyimpan data
    // Pastikan Anda sudah membuat tabel 'quotes' di database Anda
    const [result] = await pool.query(
      `INSERT INTO quotes 
            (name, email, phone, address, country, town, products, currency, sale_term, payment_term, message) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        email,
        phone,
        address,
        country,
        town,
        JSON.stringify(selectedProducts), // Simpan array produk sebagai JSON
        currency,
        saleTerm,
        paymentTerm,
        message,
      ],
    );

    return NextResponse.json(
      { message: "Success", id: (result as any).insertId },
      { status: 201 },
    );
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { message: "Failed to save data" },
      { status: 500 },
    );
  }
}
