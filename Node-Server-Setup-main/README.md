# Node Server Setup Template

A robust, ready-to-fork **Node.js** server setup with **TypeScript, Express**, and essential libraries for building scalable services. This template provides a solid foundation for new projects and microservices, featuring best practices for logging, error handling, security, database access, and graceful shutdown.

---

## Features

- **TypeScript**: Strict typing and modern JavaScript features
- **Express**: Fast, minimalist web framework
- **Helmet**: Security headers for HTTP
- **CORS**: Cross-origin resource sharing configuration
- **Cookie Parser**: Cookie parsing middleware
- **Morgan + Winston**: HTTP and application logging (Morgan integrated with Winston)
- **Dotenv**: Environment variable management
- **Prisma**: ORM and generated client for database access (Neon / PostgreSQL compatible)
- **Zod**: Runtime input validation and schema parsing
- **UUID**: Request ID assignment (`uuid`)
- **AsyncLocalStorage**: Per-request context (request id, IP, user id)
- **Graceful Shutdown**: Handles SIGINT/SIGTERM, uncaught exceptions, and resource cleanup
- **Custom Error Handling**: Centralized error responses via `AppError`
- **Nodemon**: Hot-reloading for development

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/GowthamR1011/node-server-setup.git
cd node-server-setup
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

Create a `.env` file in the root directory:

```env
PORT=4000
```

If you plan to use Prisma/Database, add a `DATABASE_URL` to your `.env` (Postgres/Neon example):

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/DATABASE
```

### 4. Run in Development

```bash
npm run dev
```

### 5. Build and Start Production

```bash
npm start
```

---

## Project Structure

```
├── src/
│   ├── index.ts              # Main server entry point
│   ├── config/
│   │   ├── index.ts          # Loads environment config
│   │   └── logger.ts         # Winston logger setup
│   ├── types/
│   │   └── AppError.ts       # Custom error class
│   └── utils/
│       └── shutdown.ts       # Graceful shutdown logic
├── logs/
│   ├── combined.log          # All logs
│   └── error.log             # Error logs
├── package.json
├── tsconfig.json
├── nodemon.json
└── README.md
```

Additional files you may see in this template when using DB features:

```
├── prisma/
│   └── schema.prisma         # Prisma schema (models, datasource)
├── src/prisma.ts             # Prisma client wrapper (exports `prisma`)
```

---

## API Endpoints

- `GET /` — A welcome endpoint returns a welcome message
- `GET /health` — An Endpoint that is used to check the health of the service

You can add routes under `src/` and wire them into the Express app in `src/index.ts`.

---

## Logging

- **Winston** logs to console and files (`logs/application.log`)
- **Morgan** HTTP request logging integrated with Winston

---

## Graceful Shutdown

Handles process signals and errors to ensure clean server exit and resource cleanup.

## Prisma / Database Notes

- Install Prisma and generate the client after installing dependencies:

```bash
npm install prisma --save-dev
npm install @prisma/client
npx prisma generate
```

- To apply schema changes to a database you can use:

```bash
# push schema (no migrations):
npx prisma db push

# or create a migration and apply (for development):
npx prisma migrate dev --name init
```

## Customization

- Add routes/services in `src/`
- Extend error handling in `src/types/AppError.ts`
- Configure logger in `src/config/logger.ts`
- Add environment variables in `.env`

---

## Customization

- Add routes/services in `src/`
- Extend error handling in `src/types/AppError.ts`
- Configure logger in `src/config/logger.ts`
- Add environment variables in `.env`

---

## License

This project is [ISC Licensed](LICENSE).

---

## Contributing

Fork, create a feature branch, and submit a pull request! Issues and suggestions welcome.

---

## Author

Created by [Gowtham Ravichander](https://github.com/GowthamR1011)

---

## Acknowledgements

- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Winston](https://github.com/winstonjs/winston)
- [Morgan](https://github.com/expressjs/morgan)
- [Helmet](https://helmetjs.github.io/)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Nodemon](https://nodemon.io/)
