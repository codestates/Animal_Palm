'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const post_hashtags = await queryInterface.bulkInsert(
      "post_hashtags",
      [
        {
          
          hashtag_id: 1,
          post_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtag_id: 2,
          post_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtag_id: 3,
          post_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtag_id: 4,
          post_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtag_id: 5,
          post_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtag_id: 6,
          post_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtag_id: 7,
          post_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtag_id: 8,
          post_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtag_id: 9,
          post_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtag_id: 10,
          post_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtag_id: 11,
          post_id: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtag_id: 12,
          post_id: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtag_id: 13,
          post_id: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtag_id: 14,
          post_id: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtag_id: 15,
          post_id: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtag_id: 16,
          post_id: 1,
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
