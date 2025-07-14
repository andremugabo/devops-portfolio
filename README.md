# devops-portfolio
Here’s your **final `README.md`** for the **Portfolio project** (frontend Dockerized, backend ready for future setup):

---

# **Portfolio Project**

This project is a **React-based Portfolio Frontend** with Docker support.
The backend is planned but **not yet implemented**.

---

## **Project Structure**

```
Portfolio/
├── frontend/           # React Frontend (Vite)
│   ├── Dockerfile       # Dockerfile for frontend build & serve
│   ├── nginx.conf       # Nginx config for React routing
│   ├── .dockerignore
│   └── src/             # React source code
├── backend/             # (Placeholder for future Node.js API)
├── docker-compose.yml   # Multi-service setup (frontend + backend)
├── .gitignore
└── README.md
```

---

## **Frontend (React + Vite)**

### **Run Locally (Dev Mode)**

In `frontend/`:

```bash
npm install
npm run dev
```

Visit:
[http://localhost:5173](http://localhost:5173)

---

## **Dockerize the Frontend**

### **1️⃣ Dockerfile**

In `frontend/Dockerfile`:

```Dockerfile
# Stage 1: Build
FROM node:20-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

### **2️⃣ nginx.conf**

In `frontend/nginx.conf` (for React Router):

```nginx
server {
    listen 80;
    server_name _;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri /index.html;
    }
}
```

---

### **3️⃣ .dockerignore**

In `frontend/.dockerignore`:

```
node_modules
dist
.dockerignore
Dockerfile
.git
.gitignore
README.md
```

---

## **Build & Run Frontend Container**

From project root or inside `frontend/`:

```bash
docker build -t portfolio-frontend .
docker run -d -p 3001:80 portfolio-frontend
```

Visit:
[http://localhost:3001](http://localhost:3001)

---

## **Using Docker Compose**

`docker-compose.yml` (root level):

```yaml
version: '3.8'

services:
  frontend:
    build:
      context: ./frontend
    container_name: portfolio-frontend
    ports:
      - "3001:80"
    restart: always
```

> 🚫 **Note:** Backend is **not yet implemented** but placeholder is ready for future integration.

---

### **Run Docker Compose**

```bash
docker-compose up -d
```

---

## **Deployment Notes**

* Use **reverse proxy (Nginx/Traefik)** for production.
* Handle **SSL (HTTPS)** via reverse proxy (e.g., Certbot, Caddy).
* Use `docker-compose` for **multi-container orchestration** (frontend + backend + DB).

---

## **Summary Checklist**

| Task                        | Status |
| --------------------------- | ------ |
| Dockerize React Frontend    | ✅      |
| Configure Nginx for routing | ✅      |
| Setup Docker Compose        | ✅      |
| Backend Service Placeholder | 🔜     |

---

## **Next Steps**

* **Add Backend** (Node.js, Express, etc.)
* **Connect Frontend ↔ Backend** via API calls
* Optional: Add **Database (PostgreSQL, MySQL, etc.)**

---

## **Author**

> **Mugabo Andre**
> Portfolio Project © 2025



