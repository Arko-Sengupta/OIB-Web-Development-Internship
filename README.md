# OIB Web Development & Design Internship

## Overview

A Unified **React + Vite** Application Consolidating All Three Internship Projects For **Oasis Infobyte Private Limited** Into A Single, Professionally Structured Codebase With A Shared Navigation Shell.

---

## Table Of Contents

1. [Projects](#projects)
2. [Dependencies](#dependencies)
3. [Directory Structure](#directory-structure)
4. [Getting Started](#getting-started)
5. [Installation](#installation)
6. [Deployment](#deployment)
7. [Coding Standards](#coding-standards)

---

## Projects

### Task 1 — Tribute Vault
A Tribute Page Dedicated To **Robert Downey Jr.**, Featuring:
- Full-Viewport Hero Section With **Parallax Scroll** Effect
- Section-Based Navigation Across Early Life, Career, Filmography, Business, Music, And Awards
- Cinzel-Styled Drop-Cap Content With A Decorative Gem Divider
- Fully Responsive Layout That Degrades Parallax To Static On Touch Devices

### Task 2 — Scientific Calculator
A Dark-Themed Scientific Calculator Featuring:
- **Keyboard Support** (Digits, Operators, Enter, Escape, Backspace)
- Color-Coded Keypad — Numbers, Operators, Functions, Constants, And Equals Each Have Distinct Visual Treatments
- Space Mono LED-Style Display With Green Glow
- Supports `sin`, `cos`, `tan`, `ln`, `log`, `sqrt`, `factorial`, `π`, `e`, And Power Operations

### Task 3 — ToDo App
A Task Management App Featuring:
- Add, Complete (Toggle), And Delete Tasks
- Inline Duplicate-Task Warning With No Browser Alerts
- Live Completion Counter In The Header
- Slide-In Animation On Task Creation, CSS-Drawn Check And Delete Icons

---

## Dependencies

| Layer        | Technology                              |
|--------------|-----------------------------------------|
| Framework    | React 18                                |
| Build Tool   | Vite 5                                  |
| Styling      | Custom CSS With CSS Custom Properties   |
| Fonts        | Cinzel, Inter, Space Mono (Google Fonts)|
| Language     | JavaScript (ES2022+)                    |
| Package Mgr  | npm                                     |

---

## Directory Structure

```
src/
├── Main.jsx
├── App.jsx
├── Styles/
│   ├── Index.css
│   └── App.css
├── Data/
│   └── TributeData.js
└── Pages/
    ├── TributeVault/
    │   ├── TributeVault.jsx
    │   ├── Components/
    │   │   ├── Header.jsx
    │   │   ├── CarouselSlide.jsx
    │   │   ├── Content.jsx
    │   │   └── Footer.jsx
    │   └── Styles/
    │       ├── Header.css
    │       ├── CarouselSlide.css
    │       └── Content.css
    ├── Calculator/
    │   ├── ScientificCalculator.jsx
    │   ├── Components/
    │   │   ├── Calculator.jsx
    │   │   ├── Display.jsx
    │   │   ├── Keypad.jsx
    │   │   └── Button.jsx
    │   └── Styles/
    │       ├── Calculator.css
    │       ├── Display.css
    │       └── Keypad.css
    └── ToDo/
        ├── TodoApp.jsx
        ├── Components/
        │   ├── TodoHeader.jsx
        │   ├── AddTodoForm.jsx
        │   ├── TaskList.jsx
        │   └── TodoItem.jsx
        └── Styles/
            ├── TodoApp.css
            ├── AddTodoForm.css
            └── TodoItem.css
```

---

## Getting Started

**Prerequisites**

| Requirement | Version |
|-------------|---------|
| Node.js     | V20.x+  |
| npm         | V10.x+  |
| Git         | Latest  |

---

## Installation

1. **Clone The Repository**
   ```bash
   git clone https://github.com/Arko-Sengupta/OIB-Web-Development-Internship.git
   ```

2. **Navigate To The Project Directory**
   ```bash
   cd OIB-Web-Development-Internship
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Start The Development Server**
   ```bash
   npm run dev
   ```

5. **Build For Production**
   ```bash
   npm run build
   ```

---

## Deployment

[![Deploy With Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Arko-Sengupta/OIB-Web-Development-Internship)

### Vercel (Recommended)

1. **Import The Repository Into Vercel**
   - Visit [vercel.com/new](https://vercel.com/new) And Import The GitHub Repository.

2. **Vercel Auto-Detects The Following Settings**

   | Setting          | Value           |
   |------------------|-----------------|
   | Framework Preset | Vite            |
   | Build Command    | `npm run build` |
   | Output Directory | `dist`          |
   | Install Command  | `npm install`   |

3. **Click Deploy** — No Additional Configuration Required.

### Manual Build

Generate A Static Production Build Locally:

```bash
npm run build
```

The `dist/` Folder Contains The Deployable Output And Can Be Served By Any Static Hosting Provider.

---

## Coding Standards

| Standard            | Convention                                                                  |
|---------------------|-----------------------------------------------------------------------------|
| Comments            | None — Self-Documenting Identifiers Only                                    |
| Directory Names     | Pascal Case (`TributeVault`, `Calculator`, `ToDo`, `Components`, `Styles`)  |
| File Names          | Pascal Case (`TributeVault.jsx`, `CarouselSlide.css`, `TributeData.js`)     |
| Function Names      | Pascal Case (`UseCalculator`, `HandleAdd`, `OnScroll`, `Toggle`)            |
| Function Style      | Arrow Functions Exclusively                                                 |
| CSS / JS Separation | All Stylesheets Live In A `Styles/` Sibling To `Components/`                |

---

*Developed During The Web Development & Design Internship At **Oasis Infobyte Private Limited**.*
