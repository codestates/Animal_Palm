'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const comments = await queryInterface.bulkInsert(
      "comments",
      [
        {
          user_id: 1,
          post_id: 2,
          context:"거북이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          post_id: 3,
          context:"뱀",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          post_id: 4,
          context:"코뿔소",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          post_id: 5,
          context:"고양이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          post_id: 6,
          context:"호랑이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 6,
          post_id: 7,
          context:"올빼미",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 7,
          post_id: 8,
          context:"판다",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 8,
          post_id: 9,
          context:"바다표범",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 9,
          post_id: 10,
          context:"늑대",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 10,
          post_id: 11,
          context:"하이에나",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 11,
          post_id: 12,
          context:"코끼리",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 12,
          post_id: 13,
          context:"돌고래",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 13,
          post_id: 14,
          context:"사자",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 14,
          post_id: 15,
          context:"앵무새",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 15,
          post_id: 16,
          context:"강아지",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 16,
          post_id: 1,
          context:"오랑우탄",
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
