'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const posts = await queryInterface.bulkInsert(
      "posts",
      [
        {
          animalId: 1,
          userId: 1,
          title:"test1",
          content:"거북이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 1,
          userId: 1,
          title:"test1",
          content:"거북이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 1,
          userId: 1,
          title:"test1",
          content:"거북이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 2,
          userId: 2,
          title:"test2",
          content:"뱀",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 3,
          userId: 3,
          title:"test3",
          content:"코뿔소",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 4,
          userId: 4,
          title:"test4",
          content:"고양이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 5,
          userId: 5,
          title:"test5",
          content:"호랑이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 6,
          userId: 6,
          title:"test6",
          content:"올빼미",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 7,
          userId: 7,
          title:"test7",
          content:"판다",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 8,
          userId: 8,
          title:"test8",
          content:"바다표범",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 9,
          userId: 9,
          title:"test9",
          content:"늑대",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 10,
          userId: 10,
          title:"test10",
          content:"하이에나",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 11,
          userId: 11,
          title:"test11",
          content:"코끼리",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 12,
          userId: 12,
          title:"test12",
          content:"돌고래",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 13,
          userId: 13,
          title:"test13",
          content:"사자",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 14,
          userId: 14,
          title:"test14",
          content:"앵무새",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 15,
          userId: 15,
          title:"test15",
          content:"강아지",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 16,
          userId: 16,
          title:"test16",
          content:"오랑우탄",
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
