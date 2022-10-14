# Helm Chart Repository
This project will be an enterprise ready helm chart repository application


# The backend

## Running
When running natively you can put your environment variables in .env and they will be picked up automatically

### Natively
Go to ./backend and run:
```bash
npm install
npm run dev:start
```
### With Docker
Go to ./backend and run:
```bash
docker build . -t helm-chart-repository
docker run -dit --env-file .env --name hcr -p8080:8080 helm-chart-repository
```

## Working


### Helm operation endpoints
At the top of the repository there is a file called [helm-operations.md](./helm-operations.md).
This file has all the helm operations we need to research, we need to extract
all the API endpoints used by the helm cli tool and document them in the [api spec](./api-spec.yaml) file.

Concurrently as API endpoints are documented, we can develop them by writing the route code at the [operations api route file](./backend/src/routes/operations.ts)

### Authentication and Authorization
To be discussed

### Frontend
To be discussed