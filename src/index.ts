import express, { Application, Request, Response } from 'express';
import { PIN_TAG, PIN_PORT } from './utils/constants';

// Boot express
const app: Application = express();

// Application routing
app.use('/', (_req: Request, res: Response) => res.json({ message: `Hello from ${PIN_TAG}` }));

// Start server
app.listen(PIN_PORT, () => console.log(`${PIN_TAG} - Pinned on http://localhost:${PIN_PORT}`));
