# Multi-Step Form

A responsive multi-step subscription form built with React. The app guides users through a structured onboarding flow where they provide personal details, choose a plan, add optional extras, review their selection, and complete the purchase.

Live demo: https://multi-step-form-ten-psi.vercel.app/

## Overview

This project simulates a modern checkout experience with a multi-page form layout. It is designed to feel like a polished SaaS signup flow with a left sidebar for progress tracking and a dynamic form area that changes based on the current step.

Users can:
- Enter personal information
- Select a plan with monthly or yearly billing
- Choose optional add-ons
- Review a final summary before submission
- See a confirmation screen after completing the form

## Features

- Multi-step form navigation
- Monthly/yearly billing toggle
- Plan selection cards with visual indicators
- Add-on options selection
- Final review and summary page
- Success confirmation screen
- Responsive layout for desktop and smaller screens

## Tech Stack

- React
- JavaScript
- CSS
- React Hook Form
- react-switch

## Project Structure

- `src/App.js` – renders the main form component
- `src/components/` – reusable UI blocks for each form step
- `src/components/styles/` – styling for the app layout and form components
- `src/img/` – plan artwork used in the selection cards

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Open the app in your browser at:

   ```text
   http://localhost:3000
   ```

## Production Build

To create a production build:

```bash
npm run build
```

This generates an optimized build folder suitable for deployment.

## Notes

This project is a front-end implementation focused on user experience and interactive form flow, making it a good example of a modern React-based onboarding experience.
