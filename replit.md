# Habitat DAO - Blockchain-Based Housing Solution

## Overview

Habitat DAO is a professional Web3 application designed to solve homelessness through revolutionary blockchain technology. The platform combines universal design housing, community governance, and a dual-token crypto economy to create accessible, inclusive communities. Built as a single-page application with modern React architecture, the project features a professional DAO interface with comprehensive sections covering the problem, solution, tokenomics, roadmap, and impact metrics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design system implementing professional Web3 aesthetics
- **UI Components**: Radix UI primitives with shadcn/ui for accessible, professional components
- **Animations**: Framer Motion for smooth, professional animations and transitions
- **State Management**: TanStack React Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development**: TSX for TypeScript execution during development
- **Database Integration**: Configured for PostgreSQL with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL store support

### Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless deployment
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Centralized schema definitions with Zod validation
- **Migrations**: Drizzle Kit for database schema migrations
- **Current Storage**: Memory-based storage implementation for development

### Authentication and Authorization
- **User Model**: Basic user entity with username/password fields
- **Session Management**: Express sessions configured for user authentication
- **Security**: Prepared for production-grade authentication implementation

### Design System
- **Color Palette**: Professional light/dark mode with institutional trust colors
- **Typography**: Inter font family for institutional clarity
- **Component Library**: Custom components following Web3 design patterns
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Accessibility**: WCAG-compliant components with semantic markup

### Frontend Components
- **Modular Architecture**: Reusable components for sections, cards, and UI elements
- **Landing Page**: Comprehensive sections including hero, problem, solution, tokens, and roadmap
- **Interactive Elements**: Professional navigation, voting interfaces, and governance tools
- **Data Visualization**: Statistical cards and progress indicators for impact metrics

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form with resolvers
- **Routing**: Wouter for lightweight routing
- **Build Tools**: Vite with React plugin and development plugins

### UI and Styling
- **Radix UI**: Comprehensive primitive components for accessibility
- **Tailwind CSS**: Utility-first CSS framework with PostCSS
- **Framer Motion**: Animation library for smooth interactions
- **Lucide React**: Professional icon library
- **Class Variance Authority**: Component variant management

### Database and Backend
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: Type-safe database operations
- **Express.js**: Web application framework
- **Connect PG Simple**: PostgreSQL session store

### Development Tools
- **TypeScript**: Type safety across the entire stack
- **ESBuild**: Fast bundling for production
- **Date-fns**: Date manipulation utilities
- **Nanoid**: Unique ID generation

### Query and State Management
- **TanStack React Query**: Server state management and caching
- **Zod**: Schema validation and type inference

### Additional Utilities
- **CLSX/Tailwind Merge**: Conditional CSS class management
- **CMDK**: Command palette functionality
- **Embla Carousel**: Carousel component implementation