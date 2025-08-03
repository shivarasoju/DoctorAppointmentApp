# 🩺 Doctor Appointment Booking System

A full-stack web application that allows users to browse doctors, view their profiles, check availability, and book appointments. Built using the MERN stack with SQLite as the backend database for simplicity.

---

## 🚀 Tech Stack / Tools Used

### 🔧 Frontend:
- **React.js**
- **React Router**
- **Tailwind CSS**
- **Axios**

### 🛠️ Backend:
- **Node.js**
- **Express.js**
- **SQLite** (using `sqlite3` and `sqlite`)
- **UUID** (for generating unique doctor IDs)

---

## 📌 Features

- View a list of available doctors with profile information
- Filter doctors by specialization, rating, and location
- View detailed doctor information
- Book appointments based on available days/times
- REST API to fetch individual doctor data
- Clean and modular backend architecture

---

## 🧠 Challenges Faced & Solutions

### 🔹 1. Managing Doctor Availability Per Day
**Challenge:** Structuring and displaying dynamic availability per day for each doctor.

**Solution:** Used a JSON-based structure in the database to define available time slots per day. Parsed and rendered it on the frontend for dynamic appointment booking.

---

### 🔹 2. SQLite with Async/Await in Node.js
**Challenge:** SQLite's native package (`sqlite3`) doesn't support Promises or `async/await`.

**Solution:** Integrated the `sqlite` wrapper over `sqlite3` to enable clean Promise-based database queries.

---

### 🔹 3. Doctor Data Structure Design
**Challenge:** Each doctor required rich details (name, specialization, availability, experience, rating, etc.)

**Solution:** Designed a consistent and detailed schema for doctor records to ensure scalable and maintainable data retrieval.

---

### 🔹 4. Single `useState` for Both All and Filtered Doctor Data (Frontend)
**Challenge:** Needed to manage both the full list of doctors and filtered results without duplicating state or causing unnecessary re-renders.

**Solution:** Used a single `useState` object like:
```js
const [doctorData, setDoctorData] = useState({ all: [], filtered: [] })
