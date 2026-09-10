# NovaMath

NovaMath is a Next.js mathematics calculator and problem-solving platform.

## Deploy on Vercel

1. Upload the contents of this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Select **Next.js** as the framework (auto-detected).
4. Use the default build settings:
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: default
5. Click **Deploy**.

No environment variables are required for the current application.

## Deploy on Render

Create a Render Web Service from the GitHub repository:

- Runtime: Node
- Build Command: `npm install && npm run build`
- Start Command: `npm start`

## Local development

```bash
npm install
npm run dev
```

Production test:

```bash
npm run build
npm start
```
