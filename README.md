This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install modules and run prisma migration and seed:

```bash
npm run prisma
```

Wait for the seeding to be completed and then:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can use any of these 2 users to authenticate:

```json
[
  {
    "email": "test@test.com",
    "password": "test"
  },
  {
    "email": "anotherTest@test.com",
    "password": "anotherTest"
  }
]
```

## Stack choice

I chose NEXT.js as it provides cutting-edge features like SSR, automatic code splitting and Server components. Coupled with Prisma, an ORM with great DX, I can talk with the database directly in SSR. 

Next Auth allows to add authentication in a matter of minutes, it's easy to use and extend while allowing me to use my own database for the users.

Tailwind allows me to write less CSS and focus more on the layout and behaviour of the app, while allowing quick reverse design decisions

## To do

- Set deadlines to tasks
- Better UX by setting a loading state for actions
- Create an SDK to interface with the API, for i.e. SWR
- Dockerize app with multi-stage
- Finish unit testing and add E2E with Cypress
- Allow new sign ups
