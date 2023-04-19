import { Prisma, PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Test user',
    email: 'test@test.com',
    password: 'test',
    tasks: {
      create: [
        {
          content: 'Im a non completed task',
          completed: false,
        },
        {
          content: 'Im a completed task',
          completed: true,
        },
      ],
    },
  },
  {
    name: 'Another test user',
    email: 'anotherTest@test.com',
    password: 'anotherTest',
    tasks: {
      create: [
        {
          content: 'Im a completed task',
          completed: true,
        },
        {
          content: 'Im a non completed task',
          completed: false,
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);

  for (const u of userData) {
    const user = await prisma.user.create({
      data: {
        ...u,
        password: await hash(u.password, 12),
      },
    });
    console.log(`Created user with id: ${user.id}`);
  }

  console.log(`Seeding finished.`);
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
