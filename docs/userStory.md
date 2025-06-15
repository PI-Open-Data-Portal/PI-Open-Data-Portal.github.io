---
title: User Stories and Requirements
---

## 🧩 Epic: Data Scientist Authentication

### ✅ User Story 1: Create User Account

**As an** Administrator,  
**I want to** create accounts for users,  
**so that** I can ensure only qualified personnel have access to the system.

**Acceptance criteria:**

- The administrator can access the User Management section of the dashboard.  
- The administrator can fill out a form to add information about the new user.  
- The administrator can send an email through the system to the user.  
- The Data Scientist can activate their account.  
- The Administrator can view the status of the user accounts.

---

## 🧭 Epic: User Interaction

### ✅ User Story 2: Download Port Data

**As a** Data Scientist,  
**I want to** download Port DataSet,  
**so that** I can use the data for a research paper.

**Acceptance criteria:**

- The Data Scientist should be able to log in to the open data portal.  
- They should be able to navigate to the downloads page.  
- They must be able to filter which part of the dataset they want to download.  
- The system must be able to respond with various formats.  
- The system should send a success message.

---

### ✅ User Story 3: Analyze Port Data

**As a** Data Scientist,  
**I want to** see various analyses of port activity,  
**so that** I can perform a logistical evaluation of the port.

**Acceptance criteria:**

- The Data Scientist should be able to log in to the open data portal.  
- They should be able to navigate to the analytics page.  
- They must be able to filter which part of the dataset they want to analyze.  
- The system must respond with graphs and tables to present port data.

---

## ⚙️ Epic: Managerial Tasks

### ✅ User Story 4: Manage User Accounts

**As an** Administrator,  
**I want to** see user activity,  
**so that** I can ensure system security.

**Acceptance criteria:**

- The administrator can access the User Management section of the dashboard.  
- The administrator should be able to see information about Data Scientists and Data Providers.  
- They must be able to select a user.  
- They must be able to see the user's activity.

---

### ✅ User Story 5: Flag Bad Data

**As an** Administrator,  
**I want to** be able to flag data points,  
**so that** they are not used in analytics and downloads.

**Acceptance criteria:**

- The administrator can access the Data Management section of the dashboard.  
- The administrator should be able to see information about the dataset.  
- They must be able to filter by outliers.  
- If the data seems incorrect, they must be able to flag the data point.  
- The flagged data point must not be used anywhere.

---

### ✅ User Story 6: Remove Data

**As an** Administrator,  
**I want to** remove incorrect data,  
**so that** it is not used in analytics and downloads.

**Acceptance criteria:**

- The admin must be able to communicate with the Data Provider to verify data.  
- The administrator can access the Data Management section of the dashboard.  
- The administrator should be able to see information about the dataset.  
- They must be able to filter by flagged data points.  
- They must be able to remove the data point.

---

### ✅ User Story 7: Remove Flagged Status

**As an** Administrator,  
**I want to** remove the flagged status from a data point,  
**so that** the data can be used again in the data portal.

**Acceptance criteria:**

- The admin must be able to communicate with the Data Provider to verify data.  
- The administrator can access the Data Management section of the dashboard.  
- The administrator should be able to see information about the dataset.  
- They must be able to filter by flagged data points.  
- They must be able to remove the flagged status from the data point.

---

## 🔄 Epic: User Interaction

### ✅ User Story 8: Insert New Data

**As a** Data Provider,  
**I want to** add new data points into the dataset,  
**so that** the portal has more port information.

**Acceptance criteria:**

- The Data Provider should be able to log in to the open data portal.  
- They should be able to navigate to the data submission page.  
- They must be able to insert the new data.  
- The system should send a success message.

---

### ✅ User Story 9: Analyze Metadata

**As a** Data Scientist,  
**I want to** distinguish real data from machine learning (ML) generated data,  
**so that** I can evaluate the quality and accuracy of the ML model.

**Acceptance criteria:**

- The Data Scientist should be able to log in to the open data portal.  
- They should be able to navigate to the Data Provenance page.  
- They must be able to filter out ML-generated data (and descriptions).  
- The system must respond with graphs and tables to present port data.

---

### ✅ User Story 10: Analyze Outliers

**As a** Data Scientist,  
**I want to** visualize outlier data,  
**so that** I can evaluate if the data is correct.

**Acceptance criteria:**

- The Data Scientist should be able to log in to the open data portal.  
- They should be able to navigate to the analytics page.  
- The system must respond with graphs and tables to present port data.  
- The graphs and tables must visually identify outlier data.  
- The user must be able to mouse over data points for more information.

---

## 📋 Functional Requirements

👤 **User** should be able to:
- Register / log in
- View data and analytics
- Filter and interact with evaluation metrics
- Export / download data
- Use ML algorithms to complete missing fields
- Extract data from textual descriptions
- Attach data provenance
- Upload data to the system

---

## 📋 Non-Functional Requirements

- **⚡ Performance:**  
  The system must guarantee fast response times and efficient operation, even under high user and data load.  

- **🔐 Security and Data Protection:**  
  The system must protect data against unauthorized access, ensuring confidentiality and integrity.  

- **🟢 Availability:**  
  The system must be continuously available and operational, minimizing downtime and ensuring high reliability.  

- **👌 Usability:**  
  The system must provide an intuitive and accessible user experience, with a user-friendly interface and efficient interaction flow.  

- **🛠️ Maintainability:**  
  The system must be easy to update, fix, and extend, ensuring modular and well-documented code.  

- **📈 Scalability:**  
  The system must be able to handle increasing demand by allowing resource addition without significant performance loss.
