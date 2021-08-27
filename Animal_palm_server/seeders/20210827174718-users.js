'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const postId = await queryInterface.bulkInsert(
      "users",
      [
        {
          animal_name: "뱀",
          user_id: "test1",
          password:"test1",
          phone_number:"1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "호랑이",
          user_id: "test2",
          password:"test2",
          phone_number:"5678",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "늑대",
          user_id: "test3",
          password:"test3",
          phone_number:"9012",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: ["id"] }
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
