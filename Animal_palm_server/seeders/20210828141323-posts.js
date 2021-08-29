'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const posts = await queryInterface.bulkInsert(
      "posts",
      [
        {
          animal_id: 1,
          user_id: 1,
          title:"test1",
          content:"거북이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_id: 1,
          user_id: 1,
          title:"test1",
          content:"거북이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_id: 1,
          user_id: 1,
          title:"test1",
          content:"거북이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_id: 2,
          user_id: 2,
          title:"test2",
          content:"뱀",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_id: 3,
          user_id: 3,
          title:"test3",
          content:"코뿔소",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_id: 4,
          user_id: 4,
          title:"test4",
          content:"고양이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_id: 5,
          user_id: 5,
          title:"test5",
          content:"호랑이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_id: 6,
          user_id: 6,
          title:"test6",
          content:"올빼미",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_id: 7,
          user_id: 7,
          title:"test7",
          content:"판다",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_id: 8,
          user_id: 8,
          title:"test8",
          content:"바다표범",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_id: 9,
          user_id: 9,
          title:"test9",
          content:"늑대",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_id: 10,
          user_id: 10,
          title:"test10",
          content:"하이에나",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_id: 11,
          user_id: 11,
          title:"test11",
          content:"코끼리",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_id: 12,
          user_id: 12,
          title:"test12",
          content:"돌고래",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_id: 13,
          user_id: 13,
          title:"test13",
          content:"사자",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_id: 14,
          user_id: 14,
          title:"test14",
          content:"앵무새",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_id: 15,
          user_id: 15,
          title:"test15",
          content:"강아지",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_id: 16,
          user_id: 16,
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
