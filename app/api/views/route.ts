import { NextResponse } from 'next/server';
let views = 127;
export async function GET(){ views++; return NextResponse.json({views}); }