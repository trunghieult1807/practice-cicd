module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    "Countries",
    [
      {
        id: "a82501e2-fe17-4b76-93ee-549133a35e08",
        name: 'Nigeria',
        capital: 'Abuja',
        population: 195,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "a560d4fb-d75d-4c1c-a742-dda2f0b8cd89",
        name: 'Ghana',
        capital: 'Accra',
        population: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "997d2e00-98a8-4201-a8c2-9e9748f349a8",
        name: 'Canada',
        capital: 'Ottawa',
        population: 37,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: queryInterface => queryInterface.bulkDelete('Countries', null, {}),
};