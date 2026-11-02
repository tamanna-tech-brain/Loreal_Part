import { Assumption } from '../models/Assumption.js';

export class AssumptionService {
  async getAssumptions() {
    return await Assumption.find().sort({ key: 1 });
  }

  async updateAssumption(key, updateData) {
    return await Assumption.findOneAndUpdate(
      { key },
      { $set: updateData },
      { returnDocument: 'after', runValidators: true }
    );
  }

  async getAssumptionValueMap() {
    const list = await Assumption.find();
    return list.reduce((map, item) => {
      map[item.key] = item.value;
      return map;
    }, {});
  }
}

export const assumptionService = new AssumptionService();

