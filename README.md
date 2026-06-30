# community-hero-vibe2ship
# Civentra — Civic Intelligence Workspace

Civentra is a full-stack, AI-powered civic issue reporting and routing platform designed to transform how citizens report local structural failures and how municipalities receive and triage them. By combining multimodal AI analysis, real-time data streaming, and automated document generation, Civentra reduces reporting times to under 2 minutes and automates manual triage routing for local governments.

🌐 **Live Application:** [Insert Your Firebase Hosting URL Here]
📑 **Project Description:** [Insert Your Google Doc Link Here]

---

## 🚀 Key Features

* **Multi-method Authentication:** Complete account access via Google Sign-In (OAuth), Phone OTP (SMS verification with invisible reCAPTCHA), or traditional Email/Password login powered by Firebase Auth.
* **Live Camera Capture & Auto-GPS:** Direct browser webcam stream execution using the WebRTC API for on-the-spot evidence collection, matched with automatic location stamping using the Browser Geolocation API.
* **Multimodal Gemini AI Triage:** Sends both visual evidence (photos) and unstructured text descriptions to `gemini-1.5-flash` using a tailored system prompt. The API forces a structured JSON payload determining the issue category, urgency level, and precise municipal department routing.
* **Smart Fallback Logic:** Client-side keyword-based fallback system ensuring that reports are safely indexed and given a foundational category even if the network or Gemini API is temporarily offline.
* **Real-time Incident Feed Dashboard:** Powered by Firebase Firestore (`onSnapshot` listeners). New incidents, updates, and resolution statuses stream to all active dashboards instantly without requiring page refreshes.
* **A4 Document Engineering:** One-click dynamic PDF generation using `html2canvas` and `jsPDF`. Generates a formatted, physical-ready A4 record including visual evidence, GPS coordinates, AI metadata, and inspector sign-off panels.
* **Developer Sandbox Mode:** Built-in local mock environment bypass allowing developers to evaluate the end-to-end user reporting pipeline instantly without configuring a live Firebase environment.

---

## 🛠️ System Architecture & Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | React 19 (Vite) | High-performance Single Page Application (SPA) container |
| **Styling Engine** | Vanilla CSS | Scalable design tokens utilizing Native CSS Custom Properties |
| **Authentication** | Firebase Authentication | Secure handling of Google OAuth, SMS OTP, and Email states |
| **Database** | Firebase Firestore | Real-time, distributed NoSQL document storage |
| **Image Hosting** | ImgBB API | High-speed third-party Content Delivery Network (CDN) for image assets |
| **Generative AI** | Google Gemini 1.5 Flash | Multimodal text + vision parsing for automated civic sorting |
| **Document Compiler** | html2canvas + jsPDF | Client-side DOM tracking and vector A4 PDF compilation |
| **Location / Media** | Geolocation & WebRTC APIs | Core native browser hardware integration |

---

## 🛠️ Local Development & Setup

Follow these steps to run Civentra locally on your machine.

### Prerequisites
Ensure you have **Node.js 20+** and **npm** installed.

### 1. Clone the Repository
```bash
git clone [https://github.com/YOUR_GITHUB_USERNAME/Civentra.git](https://github.com/YOUR_GITHUB_USERNAME/Civentra.git)
cd Civentra

2. Install Project Dependencies
Bash
npm install
3. Setup Environment Variables
Create a .env file in the root directory of the project and supply your active credentials:

Code snippet
# Google Gemini API Configuration
VITE_GEMINI_API_KEY=your_google_ai_studio_api_key

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Third-Party Image Hosting CDN
VITE_IMGBB_API_KEY=your_imgbb_api_key
4. Run the Development Server
Bash
npm run dev
The application will open locally at http://localhost:5173.

🤖 Google Ecosystem Integration
Google Gemini API (gemini-1.5-flash)
The application implements the @google/generative-ai SDK on the client side. The prompt forces a structured JSON output by defining responseMimeType: "application/json".

The core prompt treats the model as an automated municipal clerk:

JSON
{
  "category": "Roads & Traffic | Waste Management | Utilities | Public Safety",
  "urgency": "Low | Medium | High | Critical",
  "suggested_department": "Department Name"
}
Prototype engineering for this schema was refined and validated within Google AI Studio to evaluate edge cases on multimodal image/text data inputs before codebase integration.

Firebase Hosting Deployment
The production build of the website is compiled and pushed to Google's global CDN using the Firebase CLI interface:

Bash
# Build the React optimized production bundle
npm run build

# Deploy assets directly to Firebase Hosting
firebase deploy --only hosting