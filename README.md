# EduVault Exam Workflow Prototype

Static site (no build step). Sample data only; all clicks stay in the visitor's browser and reset on reload.

## Deploy on Vercel

Option A: Vercel CLI
    npm i -g vercel
    cd eduvault-prototype
    vercel          # first deploy (answer the prompts, framework: Other)
    vercel --prod   # production URL

Option B: GitHub
1. Push this folder to a new GitHub repository.
2. In Vercel: Add New > Project > Import the repository.
3. Framework preset: Other. Build command: leave empty. Output directory: leave empty (root).
4. Deploy.

## Run locally
    npx serve .
then open the printed URL. (Opening index.html directly from disk will not work, because browsers block ES modules on file://.)
