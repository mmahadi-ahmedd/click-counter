# Click-Tracking System - Frontend

## Live Demo
You can see the live frontend here:  
[Click-Tracking System Demo](https://click-counter-634f9.web.app/)

---

## Overview
This is the **frontend** of a simple click-tracking system.  
It provides:
- A **home page** with buttons to redirect to Amazon and Walmart.
- A **dashboard page** showing total clicks per site.

The frontend communicates with a backend hosted at **[btn-counter-server.vercel.app](https://btn-counter-server.vercel.app)**, which handles click tracking and statistics.

---

## Tech Stack
- **Frontend:** React (Vite)  
- **Styling:** Tailwind CSS + DaisyUI  
- **HTTP Requests:** Axios  

---

## Features
1. **Home Page**
   - Two buttons:  
     - "Go to Amazon" → backend logs click → redirects to Amazon  
     - "Go to Walmart" → backend logs click → redirects to Walmart  

2. **Dashboard**
   - Displays total clicks for Amazon and Walmart.  
   - Fetches data from backend `/stats` endpoint.  
   - Styled with DaisyUI `stats` component.
