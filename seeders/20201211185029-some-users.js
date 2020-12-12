"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        email: "westra.guido@gmail.com",
        password: "password",
        name: "Guido Westra",
        phone: 123,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "simple.bob@bob.com",
        password: "bobisbob",
        name: "john",
        phone: 123,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
