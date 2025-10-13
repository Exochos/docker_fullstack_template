# Full-Stack NodeJS Docker Template  
_A ready-to-run React + NestJS + TypeORM + Postgres development environment_

---

## Purpose

This template was built to help students, teams, and new developers skip setup hell  
and jump straight into writing full-stack code — without installing Node, Postgres,  
or global dependencies.

- Pre-configured full-stack architecture
- Hot reload support (frontend & backend)
- Database seeding with TypeORM & SQL

---

## Quick Start

```bash
git clone git@github.com:Exochos/docker_template.git
cd docker_template

# Build & launch all services
docker compose up --build
```


Access Points
Service	URL
Frontend	http://localhost:3000
Backend API	http://localhost:3001
Postgres	localhost:5432 (via psql or GUI)



Database Reset & Seeding
This project auto-seeds Postgres using db/seed.sql and TypeORM migrations.

To wipe and re-seed everything:

docker compose down -v # -v wipes the volume to 
docker compose up --build

⚠️ Warning: This permanently deletes local DB data ⚠️.
📁 Folder Structure

```
docker_template/
├── backend/    	# NestJS + TypeORM (ready API scaffold)
│   └── src/
├── frontend/   	# React 19 (Vite + Tailwind + Router v7)
├── db/         	# seed.sql for initial database population
└── docker-compose.yml
```

## Tech Stack Overview
Layer	Technology Used
Frontend	React 19, Vite, Tailwind, React Router v7
Backend	NestJS, TypeORM, REST API scaffold
Database	Postgres 15 + SQL Seeding
Orchestration	Docker Compose (Dev Mode w/ Hot Reload)

The stack supports instant updates via mounted volumes and dev commands:
Service	Dev Command
Frontend	npm run dev -- --host 0.0.0.0
Backend	npm run start:dev (with TypeORM watch mode)

All development happens locally — Docker mirrors files into containers.

MIT License — Use freely for teaching, commercial, or personal projects.

