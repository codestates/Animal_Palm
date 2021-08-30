'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const comments = await queryInterface.bulkInsert(
      "comments",
      [
        {
          userId: 1,
          postId: 2,
          content:"거북이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          postId: 2,
          content:"거북이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          postId: 3,
          content:"뱀",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          postId: 4,
          content:"코뿔소",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          postId: 5,
          content:"고양이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          postId: 6,
          content:"호랑이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          postId: 7,
          content:"올빼미",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          postId: 8,
          content:"판다",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          postId: 9,
          content:"바다표범",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          postId: 10,
          content:"늑대",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          postId: 11,
          content:"하이에나",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          postId: 12,
          content:"코끼리",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          postId: 13,
          content:"돌고래",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          postId: 14,
          content:"사자",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 14,
          postId: 15,
          content:"앵무새",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 15,
          postId: 16,
          content:"강아지",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 16,
          postId: 1,
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
