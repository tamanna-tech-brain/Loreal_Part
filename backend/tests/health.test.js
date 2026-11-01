import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app.js';

describe('Backend Foundation Endpoints', () => {
  it('GET / should return competition info', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body.name).toBe('ScrapClock Quality Drift Early-Warning API');
  });

  it('GET /api/health should respond with database and AI status structure', async () => {
    const res = await request(app).get('/api/health');
    expect([200, 207]).toContain(res.status);
    expect(res.body).toHaveProperty('service', 'ScrapClock API Backend');
    expect(res.body).toHaveProperty('database');
    expect(res.body).toHaveProperty('aiService');
  });

  it('POST /api/runs should return 501 stub in Phase 1', async () => {
    const res = await request(app)
      .post('/api/runs')
      .send({ scenario: 'baseline', seed: 42 });
    expect(res.status).toBe(501);
    expect(res.body.statusCode).toBe(501);
  });

  it('PATCH /api/alerts/:id should return 501 stub in Phase 1', async () => {
    const res = await request(app)
      .patch('/api/alerts/mock-id-123')
      .send({ outcome: 'fixed' });
    expect(res.status).toBe(501);
  });
});

