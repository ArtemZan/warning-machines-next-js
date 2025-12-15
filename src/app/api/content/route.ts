import { NextResponse } from 'next/server';
import { siteContent } from '@/lib/content';

export function GET() {
  return NextResponse.json(siteContent);
}

