# QuestBoard

QuestBoard is an ADHD-friendly task and reward application built with React Native, Expo, and TypeScript.

The application is designed to reduce task paralysis and decision fatigue by helping users:

* Capture tasks quickly
* Break large tasks into manageable steps
* Assign custom point values
* Filter tasks by energy and available time
* Earn points for completed work
* Create and redeem personal rewards
* Focus on one useful next action
* Review progress without punitive streak mechanics

## Product Principles

QuestBoard follows several core principles:

1. **Reduce visual overload**
   The interface should prioritize the most relevant tasks rather than displaying the entire backlog at once.

2. **Make starting easier**
   Tasks can include small first steps, short time estimates, and low-energy labels.

3. **Reward progress, not perfection**
   Users earn points for completing meaningful actions. Missed days do not erase prior progress.

4. **Keep the system flexible**
   Users control task values, rewards, categories, energy levels, and planning style.

5. **Use supportive language**
   The application should encourage users without shame, punishment, or manipulative streak mechanics.

## Planned Core Features

### Authentication

* Email registration
* Email login
* Persistent sessions
* Profile management
* Account deletion

### Tasks

* Create, edit, and delete tasks
* To Do, In Progress, and Completed statuses
* Custom task point values
* Energy-level labels
* Time estimates
* Optional due dates
* Categories
* Subtasks
* Today, This Week, and Later planning groups

### Points

* Points awarded when tasks are completed
* Points reversed when tasks are reopened
* Immutable point transaction history
* Current spendable balance
* Lifetime points earned

### Rewards

* User-created rewards
* Custom point costs
* Reward redemption
* Redemption history
* Progress toward a selected reward

### ADHD-Friendly Tools

* Quick task capture
* Low-energy task filter
* Short-task filter
* “Just Start” focus timer
* Suggested next task
* Task breakdown
* Reduced-motion setting
* Optional celebration feedback
* Non-punitive progress summaries

## Technology Stack

The initial technology plan includes:

* React Native
* Expo
* Expo Router
* TypeScript
* Firebase Authentication
* Firebase Firestore
* Redux Toolkit
* React Redux
* AsyncStorage
* Jest
* React Native Testing Library
* EAS Build

The architecture may evolve as the product requirements become clearer.

## Development Approach

QuestBoard will be developed incrementally:

1. Establish the project foundation and design system
2. Build reusable interface components
3. Add navigation and placeholder screens
4. Configure Firebase Authentication
5. Implement task CRUD and real-time synchronization
6. Add the point transaction system
7. Add custom rewards and redemption
8. Add ADHD-friendly planning tools
9. Add accessibility and customization settings
10. Add tests, privacy controls, and deployment configuration

Each feature should remain modular and independently testable.

## Planned Project Structure

```text
QuestBoard/
├── app/
├── components/
├── constants/
├── contexts/
├── features/
├── hooks/
├── services/
├── store/
├── types/
├── utils/
├── __tests__/
├── assets/
├── app.json
├── package.json
└── README.md
```

## Current Status

The project has been initialized as a clean Expo and TypeScript application.

The next development stage will establish:

* Project folders
* Color and spacing constants
* Typography
* Reusable buttons
* Reusable form controls
* Initial navigation
* Placeholder screens for Today, Board, Rewards, and Profile

## Running the Project

Install dependencies:

```bash
npm install
```

Start Expo:

```bash
npm start
```

Start with a cleared cache:

```bash
npx expo start --clear
```

Run type checking:

```bash
npx tsc --noEmit
```

Run linting:

```bash
npm run lint
```

## Development Status

QuestBoard is currently under active development and is not yet ready for production use.
