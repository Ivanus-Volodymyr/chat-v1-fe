# Flirty Chat

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), designed to create a playful and flirty chat application. The app features a real-time chat with a charming AI persona powered by WebSocket (`socket.io-client`), state management with Redux (`@reduxjs/toolkit`, `react-redux`), and a delightful UI styled with Tailwind CSS and Mantine PostCSS presets. The frontend communicates with a NestJS backend (not included in this repo) for real-time messaging, content moderation, and flirty responses.

## Features

- **Real-time Chat**: Engage in playful, flirty conversations with an AI persona using WebSocket for streaming responses.
- **Content Moderation**: Messages are moderated to ensure fun and appropriate interactions.
- **Responsive Design**: Fully responsive UI with a pink-purple gradient theme, smooth animations, and a flirty vibe.
- **State Management**: Uses Redux for managing chat sessions, messages, and UI state (e.g., sidebar toggle).
- **Styling**: Tailwind CSS with Mantine PostCSS presets for a modern, vibrant look with smooth transitions and animations.
- **Dynamic Chat Input**: Auto-resizing textarea with Enter/Send and Shift+Enter/newline functionality.
- **Chat History**: Sidebar with chat history and a "New Chat" button to start fresh conversations.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org) (v18 or higher)
- [pnpm](https://pnpm.io) (recommended package manager, or use npm/yarn)
- A running NestJS backend with WebSocket support (e.g., on `http://localhost:5000`)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd chat-v1-fe
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and configure environment variables (if needed):
   ```env
   NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
   ```

4. Run the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```
   This uses Next.js with Turbopack for faster development. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Available Scripts

- `pnpm dev`: Starts the development server with Turbopack.
- `pnpm build`: Builds the app for production with Turbopack.
- `pnpm start`: Runs the production build.
- `pnpm lint`: Runs ESLint to check code quality.

## Project Structure

- `app/page.tsx`: Main page with a welcoming UI and chat interface.
- `components/Sidebar.tsx`: Sidebar for chat history with a toggle button for mobile.
- `components/ChatListItem.tsx`: Individual chat item in the sidebar with navigation to chat sessions.
- `components/ChatList.tsx`: List of chat sessions in the sidebar.
- `components/Loader.tsx`: Animated loading spinner for async operations.
- `components/Header.tsx`: Header with sidebar toggle and user avatar.
- `components/NewChatButton.tsx`: Button to create a new chat session.
- `components/ChatInput.tsx`: Dynamic textarea for sending messages with WebSocket integration.
- `components/ChatMessage.tsx`: Individual chat message with user/system styling and avatar.
- `components/ChatMessagesList.tsx`: List of messages in the active chat session.
- `components/EmptyChat.tsx`: Placeholder for empty chat sessions with a flirty call-to-action.
- `app/chat/[sessionId]/page.tsx`: Dynamic route for specific chat sessions.

## Dependencies

### Production
- `@reduxjs/toolkit`: State management for chat data and UI state.
- `axios`: HTTP client for API requests (e.g., fetching chat history).
- `next`: Next.js framework (v15.0.3).
- `react`, `react-dom`: React core libraries.
- `react-redux`: Redux bindings for React.
- `socket.io-client`: WebSocket client for real-time messaging.

### Development
- `@types/node`, `@types/react`, `@types/react-dom`: TypeScript type definitions.
- `eslint`, `eslint-config-next`: Linting for code quality.
- `postcss`, `postcss-preset-mantine`, `postcss-simple-vars`: PostCSS plugins for Mantine styling.
- `tailwindcss`: Utility-first CSS framework.
- `typescript`: TypeScript for type-safe development.

See `package.json` for version details.

## Styling

The app uses Tailwind CSS with a custom pink-purple gradient theme (`from-pink-100/50 to-purple-100/50`, `bg-pink-500`, `bg-purple-600`) to create a flirty and engaging atmosphere. Mantine PostCSS presets enhance styling with variables and utilities. Components feature smooth animations (`fadeIn`, `slideInLeft`, `slideInRight`) for a delightful UX.

## Backend Integration

The frontend expects a NestJS backend with WebSocket support (e.g., `socket.io`) running at `http://localhost:5000`. The backend should handle:
- WebSocket events (`join`, `message`, `responseChunk`, `responseEnd`, `error`) for real-time chat.
- Content moderation for user messages.
- Chat session creation and message history.

Configure the backend URL in `.env.local` if different from `http://localhost:5000`.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs): Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn): Interactive Next.js tutorial.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs): Guide to utility-first CSS.
- [Redux Toolkit Documentation](https://redux-toolkit.js.org): State management with Redux.
- [Socket.IO Documentation](https://socket.io/docs/v4/client): WebSocket client for real-time communication.

Check out the [Next.js GitHub repository](https://github.com/vercel/next.js) for feedback and contributions.

## Deploy on Vercel

Deploy your Next.js app using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). Ensure the backend is deployed and accessible (e.g., on Render or another platform).

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! Please open an issue or pull request on the [GitHub repository](<your-repo-url>) for suggestions or improvements.

## License

This project is licensed under the MIT License.