# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Foodiary is a React Native food diary app built with Expo. It uses expo-router for navigation with route groups for authentication (public/private routes), React Hook Form for form handling, Zod for validation, and NativeWind (Tailwind CSS) for styling.

## Key Technologies

- **Framework**: React Native with Expo (~53.0.20)
- **Navigation**: expo-router with protected routes using Stack.Protected
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Forms**: React Hook Form with Zod validation (@hookform/resolvers)
- **Fonts**: Host Grotesk font family with multiple weights
- **Icons**: Lucide React Native
- **Media**: expo-camera and expo-audio for meal capture

## Development Commands

```bash
# Start development server
npm start

# Run on specific platforms
npm run android
npm run ios  
npm run web
```

## Architecture

### Authentication Flow
- Routes are protected using expo-router's `Stack.Protected` component
- `AuthContext` provides authentication state (currently hardcoded to logged out)
- Private routes in `src/app/(private)/` require authentication
- Public routes in `src/app/(public)/` for signin/signup

### File Structure
- `src/app/` - Expo router pages with route groups
- `src/components/` - Reusable UI components
- `src/contexts/` - React contexts (AuthContext)
- `src/hooks/` - Custom hooks (useAuth)
- `src/styles/` - Global styles and color definitions
- `src/utils/` - Utility functions (cn for class merging)

### Key Components
- **SignUpSteps/**: Multi-step signup flow with form validation
- **AuthLayout**: Layout wrapper for authentication screens
- **Modal components**: AudioModal, CameraModal for media capture
- **Meal components**: MealCard, MealsList, CreateMealBottomBar

### Form Handling
Forms use React Hook Form with Zod schemas for validation. The signup flow demonstrates this pattern with `signUpSchema.ts` defining form structure.

### Styling System
- Uses NativeWind with custom Tailwind config
- Custom font families defined in tailwind.config.js
- Color system in `src/styles/colors.ts`
- Utility function `cn()` for conditional class merging

## Configuration Notes

- TypeScript with strict mode enabled
- Expo new architecture enabled
- No current test setup (no test scripts in package.json)
- No linting configuration in project root