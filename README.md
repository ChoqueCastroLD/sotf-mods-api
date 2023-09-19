# Elysia with Bun runtime

## Setup
First create a .env (you can clone .env.example) and fill the variables
```env
PORT=
DATABASE_URL=
```

To setup the project run:

```bash
bun install
bunx prisma generate
```

## Getting Started
To run the project run the following commands

```bash
bun run src/index.ts
```

## Development
To start the development server run:
```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.