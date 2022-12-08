# nextjs-starter-template

This is a boot starter template or example app for Spanning Labs [Next.js](https://nextjs.org/) app in the existing mono-repo. This project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Follow the below steps:

- Navigate to `spanning/apps`

```
cd <repo-home>/spanning/apps
```

- Run the following command to create a new project with this Starter:

```
yarn create next-app [project-name] -e https://github.com/spanninglabs/templates/tree/main/nextjs-starter-template
# or
npx create-next-app [project-name] -e https://github.com/spanninglabs/templates/tree/main/nextjs-starter-template
```

- Change to project directory

```
cd [project-name]
```

- Remove `.git` directory and `.gitignore` file

```
rm -rf .git
rm .gitignore
```

- Update `name` in `package.json` with [project-name]

```
"name": "[project-name]",
```

- Clean up README.md

- For using `apps_shared`, follow steps to [configure it](https://github.com/spanninglabs/spanning/tree/feature/ui_library/apps/apps_shared)

- Run the development server:

```bash
npm run dev
# or
yarn dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
