import { projects } from "@/lib/constants";

export interface ProjectDetail {
  id: string;
  longDescription: string;
  problem: string;
  solution: string;
  features: { title: string; description: string }[];
  challenges: { title: string; description: string }[];
  architecture: string;
  keyLearnings: string[];
  metrics?: { label: string; value: string }[];
}

export const projectDetails: Record<string, ProjectDetail> = {
  "ai-student-travel-planner": {
    id: "ai-student-travel-planner",
    longDescription:
      "AI Student Travel Planner is a lightweight, budget-first travel planning web application designed specifically for college students who struggle with managing limited travel budgets. The app removes the friction of spreadsheet-based planning by providing an instant, rule-based expense allocation engine that splits a total budget into four practical categories.",
    problem:
      "Planning a trip on a tight student budget usually means juggling spreadsheets, guessing allocations, and spending hours trying to figure out how much to set aside for food, stay, and transport. Most existing tools are either too complex (full travel agency platforms) or too generic (simple calculators).",
    solution:
      "A single-page Streamlit application that asks three simple inputs — destination, total budget in INR, and trip duration — and instantly generates a smart, percentage-based expense breakdown. The rule-based allocation engine splits the budget into Stay (35%), Food (30%), Transport (20%), and Emergency Buffer (15%) using Pandas for clean tabular output.",
    features: [
      {
        title: "Guided Input Flow",
        description:
          "Simple, intuitive inputs: destination (text), budget in INR (number input with ₹1,000 minimum), and trip duration (slider from 1–7 days). No learning curve required.",
      },
      {
        title: "Smart Budget Allocation",
        description:
          "Rule-based engine splits the total budget into four practical categories the moment you click Generate Smart Plan. No external API calls, no sign-up, no complexity.",
      },
      {
        title: "Clean Tabular Output",
        description:
          "Results are rendered in a responsive, full-width Pandas DataFrame inside Streamlit for easy reading on any screen size. The table updates instantly on every input change.",
      },
      {
        title: "Loading Feedback",
        description:
          "A spinner keeps the experience smooth while the plan is 'crafted', with a success message confirming the result. No blank screens or silent failures.",
      },
      {
        title: "Zero External Dependencies",
        description:
          "Runs entirely on local logic (Pandas + Streamlit), making it fast, free, and easy to self-host. No API keys, no rate limits, no surprises.",
      },
    ],
    challenges: [
      {
        title: "Integer-Round Allocation",
        description:
          "Ensuring the four percentage-based allocations always sum back to the total budget without floating-point drift. Solved with explicit integer casting and a final correction step.",
      },
      {
        title: "Mobile-Friendly Layout",
        description:
          "Streamlit's default layout is desktop-first. Used `use_container_width=True` on the DataFrame and centered layout to make it usable on smaller screens.",
      },
      {
        title: "Input Validation",
        description:
          "Preventing edge cases like zero/negative budgets or trip durations outside the 1–7 day range. Added minimum bounds and sliders to constrain inputs naturally.",
      },
    ],
    architecture:
      "Single-file Streamlit application (app.py). User inputs are captured via Streamlit widgets, processed through a pure-Python allocation function, and rendered as a Pandas DataFrame. No backend, database, or external API — everything runs in a single Streamlit Cloud container.",
    keyLearnings: [
      "Simplicity wins: a focused single-purpose tool often beats a feature-rich platform for specific user segments like students.",
      "Pandas DataFrames make for excellent in-app data display with zero frontend code — perfect for data-heavy tools.",
      "Streamlit's reactive model means every UI interaction triggers a re-render, so input validation must happen at the widget level.",
    ],
    metrics: [
      { label: "Categories", value: "4" },
      { label: "External APIs", value: "0" },
      { label: "Load Time", value: "<1s" },
    ],
  },
  "krishi-seva-center": {
    id: "krishi-seva-center",
    longDescription:
      "Krishi Seva Center (कृषि AI: लाइव किसान सेवा केंद्र) is a full-stack web application built to solve real agricultural challenges in India. It provides an intelligent, easy-to-use interface where farmers can upload crop photos to detect diseases, check live weather conditions for their region, get real-time mandi commodity prices, and track their farm's health analytics — all accessible in both Hindi and English.",
    problem:
      "Indian farmers face critical information gaps: crop diseases go undiagnosed until it's too late, mandi prices are opaque, and weather forecasts are hard to access in regional languages. Existing agricultural apps are either too complex, English-only, or don't address the daily workflow of a smallholder farmer.",
    solution:
      "A bilingual (Hindi/English) full-stack platform combining React 19 frontend with FastAPI backend. Farmers can upload a crop photo, select the crop type, and instantly receive disease identification (with confidence score) plus treatment remedy. The same app provides live Patna weather via Open-Meteo API, real-time mandi commodity prices, and tracks farm health analytics across sessions.",
    features: [
      {
        title: "AI Crop Disease Detection",
        description:
          "Upload a crop photo and select crop type to instantly receive disease name (in Hindi & English), confidence score, and treatment remedy. Supports 8 major crops: Wheat, Rice, Cotton, Sugarcane, Maize, Tomato, Potato, Brinjal.",
      },
      {
        title: "Live Weather Station (Patna)",
        description:
          "Real-time weather data fetched from the Open-Meteo API. Displays temperature, humidity, wind speed, and weather condition. Includes Smart Agro Alert warnings for bad weather (e.g., stop pesticide spraying during rain).",
      },
      {
        title: "Live Mandi Bhav (Commodity Prices)",
        description:
          "Daily commodity price index for 8 major crops. Prices displayed in ₹/quintal format with dynamic fluctuations. Helps farmers make informed selling decisions.",
      },
      {
        title: "Farm Health Analytics",
        description:
          "Tracks total scans, healthy vs. diseased detections. Visual health score with animated progress bar. Persisted locally via browser storage across sessions.",
      },
      {
        title: "Bilingual Interface (Hindi / English)",
        description:
          "Full toggle between Hindi (हिंदी) and English. All labels, alerts, results, and advisory content switch language seamlessly — no page reload needed.",
      },
      {
        title: "Nearby Agri-Shop Locator",
        description:
          "Lists nearby agri input shops (fertilizer, pesticide, seed stores) with names and contact info. Focuses on the Patna, Bihar region.",
      },
      {
        title: "FAQ & Scan History",
        description:
          "Common farming questions answered in both languages. Maintains a session-based record of previous disease detections with crop type and timestamp.",
      },
    ],
    challenges: [
      {
        title: "Bilingual Data Architecture",
        description:
          "Every label, alert, and advisory needed both Hindi and English versions. Built a language-keyed dictionary structure so adding a third language later is a single file change.",
      },
      {
        title: "Open-Meteo API Integration",
        description:
          "Handling async HTTP calls from FastAPI with proper error fallbacks. Used httpx AsyncClient with a try/except wrapper that returns a safe default if the API is unreachable.",
      },
      {
        title: "CORS Configuration",
        description:
          "React frontend (Vercel) and FastAPI backend (Render) live on different domains. Configured CORS middleware with explicit allowed origins to keep the API secure.",
      },
      {
        title: "Image Upload Pipeline",
        description:
          "Accepting multipart file uploads, validating file types, and processing the image server-side. Used FastAPI's UploadFile and python-multipart for clean handling.",
      },
    ],
    architecture:
      "React 19 + Vite frontend (deployed on Vercel) communicates with a FastAPI backend (deployed on Render) via REST. The backend fetches live weather from Open-Meteo API, serves the crop disease database, and handles file uploads. All frontend state is managed with React hooks; no global state library needed for this scope. CORS middleware is configured to allow only the Vercel frontend origin.",
    keyLearnings: [
      "Bilingual UX is a hard requirement for real-world Indian products — not a 'nice to have'. Plan the data model with i18n from day one.",
      "FastAPI's automatic OpenAPI docs saved hours of manual API documentation. Every endpoint was testable from /docs immediately.",
      "Deploying frontend and backend on different platforms (Vercel + Render) works well for small teams, but CORS and environment variables need careful setup.",
    ],
    metrics: [
      { label: "Crops Supported", value: "8" },
      { label: "Languages", value: "2" },
      { label: "Live APIs", value: "1" },
    ],
  },
};

export const getProjectDetail = (id: string): ProjectDetail | undefined => {
  return projectDetails[id];
};

export const getAllProjectIds = (): string[] => {
  return projects.map((p) => p.id);
};