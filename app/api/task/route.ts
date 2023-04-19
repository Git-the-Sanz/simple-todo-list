import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { NextResponse } from 'next/server';

// POST /api/task
// Required fields in body: content
// Optional fields in body: completed
export async function POST(request: Request) {
  const { content, completed } = await request.json();

  const session = await getServerSession(authOptions);

  if (session) {
    const result = await prisma.task.create({
      data: {
        content: content,
        completed: completed,
        user: { connect: { email: session?.user?.email as string } },
      },
    });
    return NextResponse.json({ result });
  } else {
    return new NextResponse(JSON.stringify({ error: 'unauthorized' }), {
      status: 401,
    });
  }
}
