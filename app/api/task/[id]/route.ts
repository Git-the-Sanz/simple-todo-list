import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function PUT(request: Request, { params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(JSON.stringify({ error: 'unauthorized' }), {
      status: 401,
    });
  }

  const task = await prisma.task.update({
    where: { id: Number(params.id) },
    data: { completed: true },
  });

  return NextResponse.json(task);
}

export async function DELETE(request: Request, { params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(JSON.stringify({ error: 'unauthorized' }), {
      status: 401,
    });
  }

  const task = await prisma.task.delete({
    where: { id: Number(params.id) },
  });

  return NextResponse.json(task);
}
