<h1 align="center">Dynamic Pricing Dashboard</h1>

## Frontend Internship Assignment Submission

A responsive pricing and subscription dashboard built using React and Vite.

This project demonstrates dynamic state management, external JSON-based data handling, billing logic abstraction, currency conversion, and clean modular component architecture.

---

![Dashboard Preview](screenshot.png)
# Assignment Requirements Mapping

## Functional Requirements

' Three subscription plans: Basic, Standard, Premium  
' Each plan displays:  
' Price  
' Billing period  
' Minimum four features  
' Monthly / Yearly billing toggle  
' Yearly pricing includes automatic discount calculation  
' Currency selector (USD / INR)  
' One plan visually highlighted as Recommended  

All functional requirements have been fully implemented.

---

## Data Requirements

' Pricing data loaded from external JSON file (pricing.json)  
' JSON acts as mock API source  
' UI updates dynamically when billing type or currency changes  
' No hardcoded pricing inside UI components  

---

## Non-Functional Requirements

' Fully responsive layout (Mobile / Tablet / Desktop)  
' Clean and modular component structure  
' Global state management using Context API  
' Basic accessibility support  
' Maintainable folder architecture  

---

# Tech Stack

' React (Functional Components + Hooks)  
' Vite  
' Context API  
' Custom CSS  
' External JSON (Mock API Simulation)  

---

# Project Structure

Dynamic-Pricing-Provider/

├── public/  
│   ├── screenshot.png
│   └── vite.svg  

├── src/  
│   ├── assets/  
│  
│   ├── components/  
│   │   ├── BillingToggle.jsx  
│   │   ├── CurrencySelector.jsx  
│   │   ├── PlanCard.jsx  
│   │   └── PricingGrid.jsx  
│  
│   ├── context/  
│   │   └── PricingContext.jsx  
│  
│   ├── data/  
│   │   └── pricing.json  
│  
│   ├── App.css  
│   ├── App.jsx  
│   ├── index.css  
│   └── main.jsx  

├── index.html  
├── package.json  
├── vite.config.js  
├── eslint.config.js  
└── README.md  

---

# Architecture & Design Decisions

## Global State with Context API

' Billing type and currency selection managed globally  
' Avoids prop drilling  
' Centralized pricing logic  
' Ensures synchronized UI updates  

Trade-off: For large-scale apps, Redux or Zustand may scale better.

---

## External JSON as Data Source

' Plan details and currency rates stored in pricing.json  
' Separates UI from data  
' Easily extendable to real backend API  

Trade-off: Currently synchronous (no async API simulation).

---

## Pricing Logic

' yearlyPrice = monthlyPrice × 12 × (1 - discount)  
' Currency conversion applied dynamically  
' Discount applied only on yearly billing  

---

## Component Design

' PricingContext – Global state provider  
' PricingGrid – Layout wrapper  
' PlanCard – Individual plan display  
' BillingToggle – Billing mode switch  
' CurrencySelector – Currency dropdown selector  

Each component follows Single Responsibility Principle.

---

# Responsiveness

' CSS Grid layout  
' Flexible card sizing  
' Media queries for smaller devices  
' Center-aligned headings and controls  

---

# Accessibility

' Semantic HTML structure  
' Keyboard accessible controls  
' Proper button roles  
' Clear visual hierarchy  

---

# How to Run Locally

1. Clone the repository  
2. Run:

npm install  

3. Start development server:

npm run dev  

4. Open browser:

http://localhost:5173  

---

# Future Improvements

' Connect to real backend API  
' Add animations and transitions  
' Add unit testing  
' Convert to TypeScript  
' Add Dark/Light theme toggle  

---


## Author

Developed by Palla Chetana Reddy 
Dynamic Pricing Dashboard – 2026  