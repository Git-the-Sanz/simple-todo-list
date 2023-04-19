import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { LoginButton, LogoutButton } from './components/auth';
import Welcome from './components/welcome';
import TaskList from './components/taskList';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <main>
        <div className='flex justify-center mt-4'>
          <LoginButton />
        </div>
        <Welcome />
      </main>
    );
  }

  const feed = await prisma.task.findMany({
    where: {
      user: { email: session?.user?.email as string },
    },
  });

  return (
    <main>
      <div className='flex justify-center mt-4'>
        <LogoutButton />
      </div>
      <TaskList feed={feed} />
    </main>
  );
}
