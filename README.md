# 📚 Book Management App

A simple **full-stack CRUD application** for managing books, built with:

- **Backend**: Django + Django REST Framework (API)
- **Frontend**: React + TailwindCSS (UI)

---

## 🚀 Features
- Add, edit, view, and delete books
- REST API built with Django REST Framework
- Responsive React frontend with dark theme
- CORS enabled for smooth frontend-backend communication

---

## 🛠️ Setup Instructions

### 1. Backend (Django + DRF)

#### Prerequisites
- Python 3.9+
- pip / venv

#### Installation
```bash
# Clone repo if needed
git clone https://github.com/your-username/library-management.git
cd library-management/backend

# Create virtual environment
python -m venv venv
source venv/bin/activate   # On Linux/Mac
venv\Scripts\activate      # On Windows

# Install dependencies
pip install django djangorestframework django-cors-headers

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Start development server
python manage.py runserver

2. Frontend (React + Vite + TailwindCSS)
Prerequisites

Node.js 16+

npm or yarn

Installation
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

The app will run at http://localhost:5173
