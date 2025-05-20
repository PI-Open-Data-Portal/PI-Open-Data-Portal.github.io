---
title: User Stories
---

Reunir as user stories das personas para fazer o diagrama alguns estão nos
cenarios.

Epic: DataScientist authentication

User Story 1: Create user account

As an Administrator,
I want to create accounts for users,
so that I can ensure only qualified personnel have access to the system.
Acceptance criteria:
- The administrator can access the User management section of the
dashboard.
- The administrator can fill out a form to add information about the new
user.
- The administrator can send an email through the system to the user.
- The DataScientist can activate their account.
- The Administrator can view the status of the user accounts.

Epic: User Interaction

User Story 2: Download Port data

As a Data Scientist,
i want to download Port DataSet,
so that i can use the data for a research paper
Acceptance criteria:
- The Data Scientist should be able login in the open data portal
- He should be able to navigate to the page of downloads
- He must be able to filter which part of the data set he wants to
download
- The system must be able to respond with various formats
- The system should send a success message

Epic: User Interaction

User Story 3:Analyse Port data

As a Data Scientist,
i want to see various analysis of port activity,
so that i perform a logistical evaluation of the port.
Acceptance criteria:
- The Data Scientist should be able login in the open data portal
- He should be able to navigate to the page of analytics
- He must be able to filter which part of the data set he wants to
analyze
- The system must be able to respond with graphs and tables to
expose port data.

Epic: Managerial tasks

User Story 4: Manage user accounts

As a Administrator,
i want to see user activity,
so that I ensure system security.
Acceptance criteria:
- The administrator can access the User management section of
the dashboard.
- The administrator should be able to see information about
DataScientist and Data providers.
- He must be able to select a user.
- He must be able to see the user activity.
-

Epic: Managerial tasks

User Story 5: Flag bad data

As a Administrator,
i want to be able to flag data points,
so that it is not used in the analytic and downloads.
Acceptance criteria:
- The administrator can access the Data management section of
the dashboard.
- The administrator should be able to see information about the
data set.
- He must be able to filter by outliers .
- If the data seems incorrect he must be able to flag the data point.
- The flagged data point must not be used anywhere.

Epic: Managerial tasks

User Story 6: Remove Data

As a Administrator,
i want to remove incorrect data,
so that it is not used in the analytic and downloads.
Acceptance criteria:
- The admin must be able to communicate with the data provider to
verify data.
- The administrator can access the Data management section of
the dashboard.
- The administrator should be able to see information about the
data set.
- He must be able to filter by flagged data points .
- He must be able to remove the data point.
-

Epic: Managerial tasks

User Story 7: Remove Flagged status

As a Administrator,
i want to remove the flagged status from the data point ,
so that the data can be used again in the data portal.
Acceptance criteria:
- The admin must be able to communicate with the data provider to
verify data.
- The administrator can access the Data management section of
the dashboard.
- The administrator should be able to see information about the
data set.
- He must be able to filter by flagged data points .
- He must be able to remove the flagged status from the data point.
Epic: user interaction

User Story 8: Insert new data

As a Data Provider,
i want to add new data points into the dataset ,
so that the portal has more port information.
Acceptance criteria:
- The Data Provider should be able login in the open data portal
- He should be able to navigate to the page of post data.
- He must be able to insert the new data
- The system should send a success message.
Epic: user interaction

User Story 9: Analyse metadata

As a Data Scientist,
i want to be able to distinguish real data from ML generated data ,
so that I can evaluate the quality and accuracy of the ML model.
Acceptance criteria:
- The Data Scientist should be able login in the open data portal
- He should be able to navigate to the page of Data Provenance
- He must be able to filter out ML (and description ) data origins.
- The system must be able to respond with graphs and tables to
expose port data.

Epic: user interaction

User Story 10: Analyse outlier

As a Data Scientist,
i want to be able to visualise outlier data ,
so that I can evaluate if the data is correct.
Acceptance criteria:
- The Data Scientist should be able login in the open data portal
- He should be able to navigate to the page of analytics.
- The system must be able to respond with graphs and tables to
expose port data.
- The graphs and tables must visually identify outlier data
- The user must be able to mouse over the data for more
information
Uma outra podia ser tipo data report como fizemos no beachcontrol
para avisar o manager sobre problemas
Non-functional requirements:
Performance: O sistema deve garantir tempos de resposta rápidos e uma
execução eficiente das operações, mesmo sob alta carga de utilizadores e
dados.
Security and Data Protection: O sistema deve proteger os dados contra
acessos não autorizados, garantindo confidencialidade e integridade
Availability: O sistema deve estar disponível e operacional de forma
contínua, minimizando o tempo de inatividade e garantindo alta
confiabilidade.
Usability: O sistema deve proporcionar uma experiência intuitiva e acessível
aos utilizadores, com uma interface amigável e um fluxo de interação
eficiente.
Maintainability: O sistema deve ser fácil de atualizar, corrigir e expandir,
garantindo um código modular e bem documentado.
Scalability: O sistema deve ser capaz de lidar com o crescimento da
demanda, permitindo a adição de mais recursos sem perda significativa de
desempenho.