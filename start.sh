#!/bin/bash
# Inicia el backend
cd backend
source venv/bin/activate  # En Windows usa `venv\Scripts\activate`
flask run &

# Inicia el frontend
cd ../frontend
npm start
