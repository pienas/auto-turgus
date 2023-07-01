# Auto-turgus

My personal project for a game (GTA V) server vehicle store.

## How do I deploy this?

Install local dependencies

```
yarn
```

Ensure the `.env` file has required environment variables:

```
DATABASE_URL=file:./db.sqlite

NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000

DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=

NEXT_PUBLIC_ADMIN_USER_ID=
```

You can see example file at `.env.example`.

Seed the database with dummy data:

```
yarn db-seed
```

Run app in development mode:

```
yarn dev
```

## How do I use it?

You can switch between vehicles either by pressing on vehicles card or by using up and down arrow keys on your keyboard.
If you would like to add more vehicles you can do it using this url:

```
http://localhost:3000/vehicles/new
```

In there in the right up corner you must connect with Discord.
After connecting with your Discord you will see a blank page with a sign out button.
This is supposed to happen to prevent unauthorized actions.

To authorize yourself to add a new vehicle you must add yourself as an admin in `.env` file.
Easiest way to do so is to open up Prisma Studio:

```
yarn prisma studio
```

and navigate to `User` tab. In there you can copy your user id and paste it in `.env` file:

```
NEXT_PUBLIC_ADMIN_USER_ID=your user id
```

Now after refreshing the page you can add a new vehicle.

After adding a new vehicle you can see it in the main page at `http://localhost:3000/`.

To modify/delete any vehicle head to this url:

```
http://localhost:3000/vehicles
```

## Stack

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [tRPC](https://trpc.io)
