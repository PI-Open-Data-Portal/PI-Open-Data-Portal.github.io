# Milestone 4

## 1. Context

The Open Data Portal for Port Management was developed to address the lack of transparency and metadata in maritime datasets. The project solves issues related to data provenance, completeness, and user accessibility.

## 2. Identified Problems

- Missing or unclear metadata
- Lack of data provenance tracking
- Difficulty identifying data origin, transformation history, and reliability
- Presence of inaccurate or missing data affecting analysis

## 3. Proposed Solutions

- Use of ML models to detect and complete missing data
- Annotation of data provenance (origin, transformation, metadata)
- Export capabilities for structured datasets
- Interactive interface with filtering and analytics
- Outlier detection and correction tools

## 4. Requirements

### Functional

- User login/registration
- View and filter data/analytics
- Report data issues
- Export data
- View data provenance

### Admin Capabilities

- User management
- Quality control
- Report moderation
- Interaction monitoring

### Non-Functional

- High performance
- Usability and maintainability
- Data governance and protection

## 5. System Architecture

The system follows a modular architecture integrating:

- Maritime data ingestion
- Machine learning modules
- Provenance tracing
- Export functionalities
- Admin control panels

## 6. Main Features Implemented

- Central data table with filters
- Detail view per entry
- Reporting tool for users
- Graphs and chart visualizations
- Outlier detection with feedback loop
- Full admin dashboard (users, reports, corrections)
- W3C compatibility layer

## 7. Testing and Code Quality

- **Usability tests**: verified key user journeys (e.g., reporting, outlier review, filtering graphs)
- **Performance tests**: using k6 to stress-test the system
- **Code quality**: monitored using SonarQube

## 8. Future Work

- Final report and documentation
- Update micro-site with final features
