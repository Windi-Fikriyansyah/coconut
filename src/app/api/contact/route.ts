import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/mysql';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, company, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const [result] = await pool.query(
            'INSERT INTO contact_messages (name, email, company, message) VALUES (?, ?, ?, ?)',
            [name, email, company || null, message]
        );

        return NextResponse.json(
            { message: 'Message sent successfully', id: (result as any).insertId },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error saving contact message:', error);
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        );
    }
}
