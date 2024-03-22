# Weclome to API Gateway for Airline Management System

## Project Description

- Utilized RabbitMQ for request management between services, ensuring scalability. Included Authentication, Flight Search, Booking, Emailing, and Reminder services.
- Employed MVC for code organization and separation of concerns, enhancing maintainability.
- Built a RESTful API for CRUD operations, facilitating seamless frontend-backend interaction.

## Project Setup

- clone the project on your local 
- Execute `npm i` in the root directory.
- Create `.env` file in the root directory and add the following environment 
    - `PORT = 3004`
- Finally, Run the `npm start` in the root directory to run the Server.
## Following MicroService are connected to this gateway

### Auth Service -> https://github.com/sahib139/Auth_Service
### FlightAndSearch Service -> https://github.com/sahib139/FlightandSearch
### Booking Service -> https://github.com/sahib139/BookingService
### Reminder Service -> https://github.com/sahib139/ReminderService
