# Twitter Clone V4

A full-stack Twitter clone built with **Next.js 13**, **Firebase**, and **Tailwind CSS**. Users can sign in with Google, create tweets with optional image attachments, like and comment on posts, and browse a real-time news and suggested-users widget.

> Created by [Kusal Kalinga](https://github.com/kusalkalinga00) for learning purposes.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Firebase Setup](#firebase-setup)
  - [Google OAuth Setup](#google-oauth-setup)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)

---

## Features

- **Google Authentication** — Sign in / sign out via Google using NextAuth.js.
- **Create Tweets** — Post text tweets with optional image uploads stored in Firebase Storage.
- **Real-time Feed** — Posts load and update in real time using Firestore `onSnapshot` listeners.
- **Like Posts** — Toggle likes on any post; like counts update instantly.
- **Comment on Posts** — Open a comment modal to reply to any tweet; comment counts are shown inline.
- **Delete Posts** — Authors can permanently delete their own posts (and attached images).
- **Post Detail Page** — Click a post to view it with all its comments on a dedicated page.
- **News Widget** — Displays top US business headlines fetched from an external news API.
- **Suggested Users Widget** — Shows random user suggestions fetched from the Random User API.
- **Smooth Animations** — Post entrance/exit transitions powered by Framer Motion.
- **Responsive Layout** — Mobile-friendly sidebar that collapses on small screens.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 13](https://nextjs.org/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Authentication | [NextAuth.js 4](https://next-auth.js.org/) (Google Provider) |
| Database | [Firebase Firestore](https://firebase.google.com/docs/firestore) |
| File Storage | [Firebase Storage](https://firebase.google.com/docs/storage) |
| State Management | [Recoil](https://recoiljs.org/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Heroicons v1](https://heroicons.com/) |
| Date Formatting | [react-moment](https://github.com/headzoo/react-moment) |

---

## Project Structure

```
twitter-clone-v4/
├── atom/
│   └── modalAtom.js          # Recoil atoms for comment modal state
├── components/
│   ├── Comment.js            # Individual comment component
│   ├── CommentModal.js       # Modal for submitting comments
│   ├── Feed.js               # Main tweet feed with real-time listener
│   ├── Input.js              # Tweet composer (text + image upload)
│   ├── News.js               # Single news article card
│   ├── Post.js               # Individual tweet card (like, comment, delete)
│   ├── Sidebar.js            # Left navigation sidebar
│   ├── SidebarMenuItem.js    # Reusable sidebar nav item
│   └── Widgets.js            # Right panel (news + suggested users)
├── pages/
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth].js  # NextAuth API route (Google Provider)
│   │   └── hello.js              # Default Next.js API example
│   ├── auth/
│   │   └── signin.js         # Custom sign-in page
│   ├── posts/
│   │   └── [id].js           # Dynamic post detail page
│   ├── _app.js               # App wrapper (SessionProvider, RecoilRoot)
│   ├── _document.js          # Custom HTML document
│   └── index.js              # Home page (Feed + Sidebar + Widgets)
├── public/                   # Static assets (logo, favicon)
├── styles/                   # Global CSS
├── firebase.js               # Firebase app initialization (Firestore + Storage)
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── postcss.config.js         # PostCSS configuration
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- [Yarn](https://yarnpkg.com/) or npm
- A [Firebase](https://firebase.google.com/) project with Firestore and Storage enabled
- A [Google Cloud](https://console.cloud.google.com/) OAuth 2.0 client credential

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/kusalkalinga00/twitter-clone-v4.git
cd twitter-clone-v4

# 2. Install dependencies
yarn install
# or
npm install

# 3. Add environment variables (see below)
cp .env.local.example .env.local   # or create .env.local manually

# 4. Start the development server
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### Environment Variables

Create a `.env.local` file in the project root and populate it with the following keys:

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
MESSANGING_SENDER_ID=your_firebase_messaging_sender_id
APP_ID=your_firebase_app_id

# Google OAuth (via Google Cloud Console)
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret

# NextAuth
NEXTAUTH_URL=http://localhost:3000
SECRET=a_random_secret_string
```

> **Note:** Only `NEXT_PUBLIC_FIREBASE_API_KEY` is exposed to the browser (prefixed with `NEXT_PUBLIC_`). All other variables remain server-side only.

---

### Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Register a **Web app** and copy the config values into `.env.local`.
3. Enable **Firestore Database** in production or test mode.
4. Enable **Firebase Storage**.
5. Add the following Firestore security rules to allow authenticated reads/writes:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{postId} {
      allow read: if true;
      allow write: if request.auth != null;

      match /likes/{likeId} {
        allow read: if true;
        allow write: if request.auth != null;
      }

      match /comments/{commentId} {
        allow read: if true;
        allow write: if request.auth != null;
      }
    }
  }
}
```

---

### Google OAuth Setup

1. Open the [Google Cloud Console](https://console.cloud.google.com/).
2. Navigate to **APIs & Services → Credentials** and create an **OAuth 2.0 Client ID** (Web application type).
3. Add the following to **Authorised redirect URIs**:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://your-production-domain.com/api/auth/callback/google` (production)
4. Copy the **Client ID** and **Client Secret** into `.env.local`.

---

## Available Scripts

| Script | Description |
|---|---|
| `yarn dev` | Starts the development server on [http://localhost:3000](http://localhost:3000) |
| `yarn build` | Creates an optimised production build |
| `yarn start` | Starts the production server (requires `yarn build` first) |
| `yarn lint` | Runs the Next.js ESLint linter |

---

## Deployment

The recommended way to deploy this application is with [Vercel](https://vercel.com/):

1. Push your repository to GitHub.
2. Import the project on the [Vercel dashboard](https://vercel.com/new).
3. Add all environment variables from `.env.local` in the **Environment Variables** section of the Vercel project settings.
4. Deploy — Vercel automatically builds and serves the Next.js app.

For other platforms, run `yarn build && yarn start` and ensure all environment variables are set in the hosting environment.
