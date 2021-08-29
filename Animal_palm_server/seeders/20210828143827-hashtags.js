'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashtags = await queryInterface.bulkInsert(
      "hashtags",
      [
        {
          hashtag:"거북이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hashtag:"뱀",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hashtag:"코뿔소",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hashtag:"고양이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hashtag:"호랑이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hashtag:"올빼미",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hashtag:"판다",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hashtag:"바다표범",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hashtag:"늑대",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hashtag:"하이에나",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hashtag:"코끼리",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hashtag:"돌고래",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hashtag:"사자",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hashtag:"앵무새",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hashtag:"강아지",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hashtag:"오랑우탄",
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
