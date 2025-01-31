# PortfolioV2
🧐 This project is a portfolio website that includes a contact form which sends messages to a Discord channel using a webhook. The backend is built with Node.js and Express, and the frontend is built with React.

## 🎥 Demo
- [Live Demo](https://portfolio2-plum-three.vercel.app/)

## 💻 Technical Stack
- Frontend:
  - React.js
  - TypeScript
  - TailwindCSS
  - Next.js

- Backend:
  - Node.js
  - Express.js

- DevOps:
  - Vercel: A platform for frontend hosting, deployment, and Analytics.

- Additional Tools:
  - Framer Motion: For animations and transitions.
  - React Icons: For icons.
  - React Scroll: For smooth scrolling.
  - React Typed: For typing animations.
  - React Reveal: For reveal animations.
  - React Icons: For icons.

### Prerequisites

- Node.js and npm installed on your machine.
- A Discord webhook URL for receiving messages.

### Installation

1. **Clone the Repository**:
```bash
   git clone https://github.com/yourusername/PortfolioV2.git
   cd portfolio2
```

2. **Install Dependencies**:
   Navigate to both the frontend and backend directories and install the necessary packages.

```bash
   # For backend
   cd backend
   npm install
```

### 🏁 Running the Application
1. **Start the Backend Server**:
   - Navigate to the `backend` directory and start the server.
```bash
cd backend
   node server.mjs
```
2. **Start the Frontend**:
   - Navigate to the `frontend` (root) directory and start the development server. 
```bash
  npm run build
  npm run dev
```
3. **Set Up Environment Variables**:
   - Create a `.env` file in the `backend` directory.
   - Add your Discord webhook URL to the `.env` file:

```bash
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
```

4. **Ensure `.env` is in `.gitignore`**:
   - Make sure your `.env` file is listed in your `.gitignore` to prevent it from being committed to your repository.

```bash
# .gitignore
.env
```

### 🚀 Deployment

- **Environment Variables**: When deploying, set your environment variables in your hosting provider's dashboard (e.g., Vercel, Heroku) instead of using a `.env` file.
- **CORS Configuration**: Ensure CORS is configured to allow requests from your domain.

## 📊 Performance
- Fast Load Times:
  - Optimized images and fonts for quick loading, enhancing user experience.
- Efficient Animations:
  - Utilizes Framer Motion to create smooth animations, improving user experience.
- Lighthouse Score: 
  - Aim for high scores in performance, accessibility, best practices, and SEO.
- Optimized Code:
  - Use of TypeScript for catching errors early and maintaining clean, efficient code.

## ✍️ Authors
- [@aballal-source](https://github.com/aballal-source)

### Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

---
