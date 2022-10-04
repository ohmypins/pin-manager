import express, { Application, Request, Response } from 'express';
import { join } from 'path';
import { PIN_TAG, PIN_PORT, PIN_HOST } from './utils/constants';

// Setup app
const app: Application = express();

// Setup middlewares
app.use(express.static(join(process.cwd(), 'public')));

// Setup routes
app.use('/api', (_req: Request, res: Response) => res.json({ message: `Hello from ${PIN_TAG}` }));

// Start server
app.listen(PIN_PORT, () => console.log(`${PIN_TAG} - Pinned on http://${PIN_HOST}:${PIN_PORT}`));
