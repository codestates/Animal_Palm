'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("postHashtags", "postId", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("postHashtags", {
      fields: ["postId"],
      type: "foreign key",
      name: "posts_post_hashtags_id_fk",
      references: {
        table: "posts",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
