# Proyecto ERP Dashboard (React + FastAPI + MySQL)

Este proyecto permite visualizar datos de un sistema ERP usando visualizaciones interactivas en React/D3.js y una API desarrollada en FastAPI.

## 🚀 Requisitos

- Docker y Docker Compose instalados

## ▶️ Cómo usar

1. Clona o descomprime este repositorio.
2. En la raíz del proyecto, ejecuta:

```bash
docker compose up --build
```

3. Accede a:
- Frontend: [http://localhost:3000](http://localhost:3000)
- API: [http://localhost:8000/datos](http://localhost:8000/datos)
- MySQL: `localhost:3306` (usuario: `usuario`, clave: `clave`)

## 🛠 Modificaciones

- Modifica el frontend en `frontend/src/App.jsx`.
- Modifica la API en `backend/api/main.py`.
- Reinicia con: `docker compose restart`

## 📦 Estructura

```
erp_dashboard/
├── backend/
│   ├── api/
│   └── scripts/
├── frontend/
│   └── src/
├── Dockerfile.backend
├── Dockerfile.frontend
├── docker-compose.yml
└── README.md
```
