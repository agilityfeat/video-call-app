# Video Call App API Server

## Frameworks, Libraries, and Languages

Typescript, Express, Node Server

### Prisma ORM

https://www.prisma.io/docs/getting-started/quickstart

#### Create New Migration

```shell
npx prisma migrate dev --name <migration_name>
```

Replace `migration_name` with a suitable name for the migration.

#### Prisma Database GUI Tool

```shell
npx prisma studio 
```

## Running

### Docker Compose (local development)

```shell
cd docker
docker compose -p video-call-app up -d
```
