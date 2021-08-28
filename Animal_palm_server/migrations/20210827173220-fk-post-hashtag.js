'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("post_hashtags", "post_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("post_hashtags", {
      fields: ["post_id"],
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
