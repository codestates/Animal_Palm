'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const comments = await queryInterface.bulkInsert(
      "comments",
      [
        {
          user_id: 1,
          post_id: 2,
          content:"거북이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          post_id: 2,
          content:"거북이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          post_id: 3,
          content:"뱀",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          post_id: 4,
          content:"코뿔소",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          post_id: 5,
          content:"고양이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          post_id: 6,
          content:"호랑이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 6,
          post_id: 7,
          content:"올빼미",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 7,
          post_id: 8,
          content:"판다",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 8,
          post_id: 9,
          content:"바다표범",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 9,
          post_id: 10,
          content:"늑대",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 10,
          post_id: 11,
          content:"하이에나",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 11,
          post_id: 12,
          content:"코끼리",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 12,
          post_id: 13,
          content:"돌고래",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 13,
          post_id: 14,
          content:"사자",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 14,
          post_id: 15,
          content:"앵무새",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 15,
          post_id: 16,
          content:"강아지",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 16,
          post_id: 1,
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
