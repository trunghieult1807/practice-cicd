import {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists,
  } from "sequelize-test-helpers";
import chai, { expect } from "chai";

import CountryModel from "../../models/country";

describe("src/models/country", () => {
    const Country = CountryModel(sequelize, dataTypes);
    const country = new Country();
  
    checkModelName(Country)("Countries");
  
    context("properties", () => {
      ["name", "capital", "population"].forEach(checkPropertyExists(country));
    });
  });
  