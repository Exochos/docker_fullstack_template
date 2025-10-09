# Quick Start

```# Clone repo
git clone git@github.com:Exochos/docker_template.git
cd docker_template
```

Build & run all services
```

docker compose up --build
```


Resetting the Database

The database seeds on first run from db/seed.sql.
To reset and re-seed:
```
docker compose down -v
docker compose up --build
```
Warning: this erases all local DB data.

## Folder structure:
``
docker_template/
├── backend/      # NestJS app (Default app with the addition of one get and post route
├── frontend/     # React (Vite + Tailwind + Router v7)
├── db/           # Postgres DB seeded with a seed.sql file via docker compose
└── docker-compose.yml
``
