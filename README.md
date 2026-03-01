# Dynamic Pricing Dashboard

## Overview

A responsive subscription pricing dashboard built using React and Vite.

This project demonstrates dynamic UI updates, state management using Context API, currency conversion, and clean component architecture.

---

## Features

- Three subscription plans: Basic, Standard, Premium  
- Monthly and Yearly billing toggle  
- Automatic yearly discount calculation  
- Currency selector (USD / INR)  
- Highlighted Recommended plan  
- Pricing data loaded from external JSON  
- Dynamic UI updates when billing or currency changes  
- Fully responsive design (Mobile / Tablet / Desktop)  
- Clean component structure  
- Basic accessibility support  

---

## Tech Stack

- React  
- Vite  
- Context API  
- Custom CSS  
- JSON (Mock API data source)  

---

## Architecture & Design Decisions

### 1. Context API for Global State

- Used React Context to manage billing type and currency  
- Avoided prop drilling  
- Centralized pricing logic  

### 2. External JSON Data

- Pricing plans and currency rates stored in pricing.json  
- Simulates mock API behavior  
- Makes UI automatically update when data changes  

### 3. Memoized Price Calculation

- Used useMemo to optimize price computation  
- Prevents unnecessary recalculations on re-renders  

### 4. Component Structure

- PricingProvider – Global state management  
- PricingGrid – Plan layout  
- PlanCard – Individual plan display  

Each component follows single responsibility principle.

---

## Pricing Logic

- Monthly price shown as base price  
- Yearly price = monthlyPrice × 12 × (1 - discount)  
- Currency conversion applied dynamically using currencyRates  
- Discount applied: 20%  

---

## Responsiveness

- CSS Grid layout for plan alignment  
- Adaptive layout for tablet and mobile  
- Center-aligned headings and controls  
- Flexible card sizing  

---

## Folder Structure

src/
├── components/
├── context/
├── data/
├── App.jsx
└── main.jsx

---

## How to Run Locally

npm install  
npm run dev  

Then open:  
http://localhost:5173  

---

## Future Improvements

- Connect to real backend API  
- Add animation transitions  
- Add theme switcher (Light/Dark mode)  
- Add unit testing  
- Add TypeScript support  

---

## Author

Developed as part of a Frontend Internship Assignment.