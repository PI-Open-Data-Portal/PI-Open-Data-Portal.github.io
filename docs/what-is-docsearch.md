# What is the Project?

## Overview

The **Open Data Portal with Quality Control in Port Management Information Systems** is a project focused on creating an accessible platform for maritime port management. The goal of this project is to provide researchers, decision-makers, and other stakeholders with reliable, high-quality, and well-documented data that can be used for data analytics (DA) and machine learning (ML). 

Modern information systems are increasingly data-driven. The trend is to gather data from various organizations undergoing transformations and utilizing it for DA/ML. The trustworthiness of these systems depends on the quality and transparency of the data sources and their transformation processes. This project aims to ensure that the data is transparent, traceable, and of the highest quality by documenting the entire process.

## Objectives

The key tasks for achieving the goal of this project are as follows:

1. **Create a Database for the Open Data Portal:**
   - The database will store high-quality data and metadata documenting the data’s origin and transformation processes. 
   - A middleware will be developed to automatically manage data provenance.

2. **Develop a Platform for Data Access and Distribution:**
   - The platform will allow users to download data and metadata as files.
   - It will also allow users to view data in tables and graphs through an intuitive dashboard interface.

3. **Implement a Metadata Inspection Module:**
   - Users can inspect metadata by hovering over data items to get provenance information.
   - The platform will enable filtering data by source, such as organization or type of data (e.g., user-entered or ML-generated).

4. **Detect Inconsistencies in the Database:**
   - Implement methods for detecting inconsistencies, including outlier detection, with links to their respective origin in the database.

5. **(Optional) Implement Delta Lake for Data Management:**
   - To make access to distributed databases more manageable, an abstraction layer using Delta Lake will be created. This will allow for efficient management of relational and NoSQL databases.

## Case Study

The project will focus on the **Port of Sines Administration’s Port Management Information System (PMIS)**. The aim is to deliver a functional prototype and demonstrate the system with representative use cases.

## Technologies

- **Relational Database**: For storing structured data, technologies such as Microsoft SQL Server or PostgreSQL will be used.
- **Delta Lake**: A storage layer for managing data in distributed environments, including both relational and NoSQL databases.
- **Data Visualization**: The platform will present data in a user-friendly manner using tables, graphs, and dashboards.

## Contact Information

- **José Moreira**: jose.moreira@ua.pt
- **Paulo Pintor**: paulopintor@ua.pt
