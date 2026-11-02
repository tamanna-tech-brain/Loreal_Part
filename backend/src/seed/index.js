import { connectDB } from '../config/db.js';
import { Assumption } from '../models/Assumption.js';
import { SopAction } from '../models/SopAction.js';
import { initialAssumptions } from './assumptions.seed.js';
import { initialSopActions } from './sopActions.seed.js';

export const seedDatabase = async () => {
  console.log('[Seed] Seeding assumptions and SOP actions...');

  for (const item of initialAssumptions) {
    await Assumption.findOneAndUpdate(
      { key: item.key },
      { $set: item },
      { upsert: true, returnDocument: 'after' }
    );
  }

  for (const item of initialSopActions) {
    await SopAction.findOneAndUpdate(
      { featurePattern: item.featurePattern },
      { $set: item },
      { upsert: true, returnDocument: 'after' }
    );
  }

  const assumptionCount = await Assumption.countDocuments();
  const sopCount = await SopAction.countDocuments();

  console.log(`[Seed] Seeded successfully: ${assumptionCount} assumptions, ${sopCount} SOP actions in database.`);
  return { assumptionCount, sopCount };
};

// If run directly: node src/seed/index.js
if (process.argv[1]?.endsWith('index.js')) {
  try {
    await connectDB();
    await seedDatabase();
    process.exit(0);
  } catch (err) {
    console.error('[Seed Error]', err);
    process.exit(1);
  }
}

