# Employee Management & Attendance Dashboard

This application is a **comprehensive Employee Management Dashboard** that allows organizations to track attendance, manage tasks, monitor expenses, and visualize important company data through interactive graphs and charts. The system is **fully responsive**, ensuring a seamless experience across desktops and mobile devices.

## Key Features

### 🔹 1. Authentication & Security
- **Google Firebase Authentication** for secure login.
- **Google Sign-in** feature.
- Unauthorized users cannot access the dashboard.

### 🔹 2. Sidebar Navigation
A **collapsible sidebar** that includes key sections:
- Dashboard
- Attendance
- Leaves
- Organization
- Task Management
- Beat Tracking
- Targets
- Forms
- Orders
- Expenses
- Clients & Sites
- Reports

On clicking **"Dashboard"**, the user is taken to the main **Overview Page**, displaying key metrics.

### 🔹 3. Tabs for Dashboard Navigation
A **horizontal tab menu** with the following sections:
- **Overview (Default Tab)**
- Live Location
- Timeline
- CardView
- Compliance Status
- Site Attendance

Users can **switch between tabs**, and each tab displays its respective content.

### 🔹 4. Dashboard Analytics (Graphical Representation)
Six **responsive grid charts** displaying key insights, including:
- **Bar Chart** (Daily Average Working Hours vs Date)
- **Task Status Overview (Pie Chart)**
- **Expense Summary (Pie Chart - Total, Approved, Pending, Rejected, Paid Out)**
- **Employee Attendance Status (Pie Chart: Punched In / Punched Out)**
- **Strength Overview** (Total number of employees working)
- **Teamwise Attendance (List View)**

### 🔹 5. Employee Attendance & Off-Duty Employee Table
A **searchable & filterable table** with columns:
- Employee Name
- Attendance Status
- Last Location
- Toggle filter between **"All"** and **"New"** employees.

### 🔹 6. Task Management & Status
**Task Overview Pie Chart** displaying:
- Not Started (0%)
- Delayed (0%)
- In Progress (0%)
- Completed (100%)

### 🔹 7. Financial & Expense Tracking
**Expense Summary Pie Chart**, showing:
- Total Expense
- Approved Expenses
- Pending Expenses
- Rejected Expenses
- Paid Out Expenses

**Month-wise filter** for better tracking.

### 🔹 8. Responsive Card Layout (2x2 Grid)
Displays key statistics:
- **Forms Filled:** 0%
- **Photos Uploaded:** 5%
- **New Clients Added:** 0%
- **Orders Submitted:** 0%

Each card **shows progress percentage and yesterday’s data**.

### 🔹 9. Navbar with Notifications & Logout
Includes:
- **Message Icon**
- **Notification Icon**
- **User Profile (Email & Icon)**
- **On clicking the profile icon**, a drawer opens with a **Logout option**.

### 🔹 10. Not Found Page
A **custom "404 Not Found" page** with a button to navigate back to the **Home Page**.

## Technology Stack

### 🎨 Frontend:
✅ **React.js (Vite)** – Fast and modern UI development  
✅ **Tailwind CSS (v3.4.17)** – Utility-first styling for responsiveness  
✅ **Recharts** – Data visualization (Graphs, Pie Charts, Bar Charts)  
✅ **React Icons** – Sidebar & Navbar icons  

### 🔥 Backend & Authentication:
✅ **Firebase Authentication** – Google Login  
✅ **Firebase Firestore** – Database for storing user data  

## Installation & Setup

1. Clone the repository:
```bash
  git clone https://github.com/your-repo-name.git
```

2. Navigate to the project folder:
```bash
  cd employee-dashboard
```

3. Install dependencies:
```bash
  npm install
```

4. Start the development server:
```bash
  npm run dev
```

## Deployment
To deploy this project, consider using **Vercel**, **Netlify**, or **Firebase Hosting**.

## License
This project is licensed under the MIT License.

---
### 🚀 A complete **Employee Management Solution** for tracking attendance, tasks, and expenses efficiently!


https://github.com/user-attachments/assets/c8d6e149-26c7-4882-add0-fce07f5eb3bd


