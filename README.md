# Contact Book Web Application

A full-stack **Contact Management System** built using **HTML, Bootstrap, JavaScript, Node.js, Express, and MongoDB**.

This project allows users to **register, login, and manage personal contacts** with features like add, search, and delete — all stored securely per user.

Tech Stack: HTML,CSS,JavaScript,Node.js,Express.js,MongoDB (Mongoose)


---


##  Project Structure

```
contact-book-pro/
│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Contact.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── contact.js
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── dashboard.html
│   └── app.js
│
├── package.json
└── README.md
```

---

##  Installation & Setup

### 1️ Clone Repository

```
git clone https://github.com/your-username/contact-book-pro.git
cd contact-book-pro
```

###  Install Dependencies

```
npm install
```

###  Start MongoDB

Make sure MongoDB is running locally:

```
mongod
```

###  Run Backend Server

```
node backend/server.js
```

Server runs at:

```
http://localhost:5000
```



---

##  API Endpoints

### Auth

* `POST /api/auth/register` → Register user
* `POST /api/auth/login` → Login user

### Contacts

* `POST /api/contacts` → Add contact
* `GET /api/contacts/:userId` → Get user contacts
* `DELETE /api/contacts/:id` → Delete contact
* `GET /api/contacts/search/:userId/:key` → Search contacts

---
## view project

Explore:
https://contactbook-hybp.onrender.com

---

