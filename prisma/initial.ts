import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
  await prisma.user.createMany({
    data: [
      { id: 1, name: 'name', password: 'cb825a05d743c50112becede14b2c132' },
      { id: 2, name: 'foo', password: '3858f62230ac3c915f300c664312c63f' },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });