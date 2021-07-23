import db from "../models";

export default class Country {

    static async addCountry(newCountry) {
        try {
          return await db.Countries.create(newCountry);
        } catch (err) {
          throw err;
        }
      }

      static async checkCountry(countryName) {
        try {
          return await db.Countries.findOne({ where: { name: countryName } });
        } catch (err) {
          throw err;
        }
      }
}