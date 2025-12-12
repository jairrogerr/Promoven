# API Contracts & Backend Implementation Guide

## Overview
This document outlines the API structure required to transition the Promoven One MVP from a mock-based frontend to a fully functional full-stack application.

## Current State (Mocked)
- **Data Source:** `/frontend/src/data/mockData.js` (Static arrays for features, pricing, testimonials).
- **Authentication:** Simulated in `Login.jsx` and `Signup.jsx` using `setTimeout` and local state.
- **Dashboard Data:** Hardcoded in `DashboardDemo.jsx` (Stats, Recent Activity, Chart data).
- **AI Chat:** Simulated responses in `DashboardDemo.jsx` using local state array.

## Backend Implementation Roadmap

### 1. Authentication (Priority High)
- **Protocol:** JWT (JSON Web Tokens).
- **Endpoints:**
    - `POST /api/auth/register`: Create new user (MEI).
    - `POST /api/auth/login`: Authenticate and return JWT.
    - `GET /api/auth/me`: Validate token and return user profile.
    - `POST /api/auth/social`: Handle Google/Apple callbacks.

### 2. User/MEI Profile
- **Database Model:** `User` (MongoDB).
- **Fields:** `name`, `email`, `cnpj`, `companyName`, `planType` (free/essential/complete).

### 3. Financial Dashboard
- **Database Model:** `Transaction` (Income/Expense).
- **Endpoints:**
    - `GET /api/finance/summary`: Return total revenue, expenses, and profit for current month.
    - `GET /api/finance/transactions`: List recent transactions with pagination.
    - `POST /api/finance/transactions`: Add new revenue/expense.
    - `GET /api/finance/chart-data`: Return aggregated data for charts (monthly flow).

### 4. AI Assistant Integration
- **Service:** OpenAI API (GPT-4o) or similar.
- **Endpoints:**
    - `POST /api/ai/chat`: Send user message context + financial context -> Return AI advice.
    - **Context Injection:** Backend must fetch user's recent financial summary and append to system prompt ("You are a financial advisor for a MEI...") before calling LLM.

### 5. Invoicing (NFe)
- **Integration:** External NFe API (e.g., eNotas, FocusNFe).
- **Endpoints:**
    - `POST /api/invoice/emit`: Trigger invoice generation.
    - `GET /api/invoice/list`: Sync and list emitted invoices.

## Frontend Integration Steps
1. Replace `mockData.js` imports with `axios` or `react-query` hooks.
2. Update `Login.jsx` to store JWT in `localStorage` or `HttpOnly Cookie`.
3. Create `AuthContext.js` to manage global user state.
4. Replace hardcoded stats in `DashboardDemo.jsx` with data fetched from `/api/finance/summary`.
