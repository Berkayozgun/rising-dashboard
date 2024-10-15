# Rising Dashboard

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure

```plaintext
.eslintrc.json
.gitignore
.next/
.vscode/
next-env.d.ts
next.config.mjs
package.json
postcss.config.mjs
public/
README.md
src/
  app/
    components/
      Sidebar.tsx
      AdAlert.tsx
      Chart.tsx
      InfoData.tsx
      TransactionTable.tsx
    dashboard/
      page.tsx
    layout.tsx
    globals.css
tailwind.config.ts
tsconfig.json
```

### Key Files and Directories

- **`src/app/components/Sidebar.tsx`**: Sidebar component.
- **`src/app/layout.tsx`**: Root layout component.
- **`src/app/globals.css`**: Global CSS styles.
- **`tailwind.config.ts`**: Tailwind CSS configuration.
- **`next.config.mjs`**: Next.js configuration.
- **`package.json`**: Project dependencies and scripts.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `.next` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start`

Starts the production build.

### `npm run lint`

Runs the linter to check for code quality issues.

## Workflow

1. **Login Process**:
   - The user sends a POST request to `https://recruitment-api.vercel.app/login`.
   - The request should be sent in `application/json` format with the content `{username: "admin", password: "admin123"}`.
   - Upon successful response, the user is redirected to the dashboard and the JWT token is stored.

2. **Dashboard Data**:
   - Some data in the dashboard is fetched from the endpoints `https://recruitment-api.vercel.app/get-table` and `https://recruitment-api.vercel.app/get-info`.
   - These requests should be made with the JWT token obtained after login.

3. **Chart Screens**:
   - Dummy data should be used in the chart screens. This data can be defined within the code or fetched from a source like `jsonplaceholder`.

4. **Table Actions**:
   - When action buttons in the tables are clicked, a dropdown should open, and clicking any button in the dropdown should print "Number of IP" in the browser console.

5. **Sidebar**:
   - The functionality of the buttons in the sidebar is not important, but they should be present to maintain design consistency.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
