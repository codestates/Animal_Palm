'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const post_hashtags = await queryInterface.bulkInsert(
      "postHashtags",
      [
        {
          
          hashtagId: 1,
          postId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtagId: 2,
          postId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtagId: 3,
          postId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtagId: 4,
          postId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtagId: 5,
          postId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtagId: 6,
          postId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtagId: 7,
          postId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtagId: 8,
          postId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtagId: 9,
          postId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtagId: 10,
          postId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtagId: 11,
          postId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtagId: 12,
          postId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtagId: 13,
          postId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtagId: 14,
          postId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtagId: 15,
          postId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          hashtagId: 16,
          postId: 1,
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
