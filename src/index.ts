import express, { Application, NextFunction, Request, Response } from 'express';
import { PIN_TAG, PIN_PORT, PIN_HOST } from './utils/constants';

// Setup app
const app: Application = express();

// Setup middlewares
app.use('/', express.static('public'));

// Setup routes
app.use('/api', (_req: Request, res: Response) => res.json({ message: `Hello from ${PIN_TAG}` }));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((_req: Request, res: Response, _next: NextFunction) =>
  res.status(404).send('Page not found'),
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Internal error');
});

// Start server
app.listen(PIN_PORT, () => console.log(`${PIN_TAG} - Pinned on http://${PIN_HOST}:${PIN_PORT}`));
