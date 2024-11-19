// app/api/auth/login.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Dummy check (replace with your actual authentication logic)
  if (email === 'test@example.com' && password === 'password') {
    return NextResponse.json({ success: true, message: 'Logged in!' });
  }
  return NextResponse.json({ success: false, message: 'Invalid credentials' });
}
