'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("postHashtags", "hashtagId", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("postHashtags", {
      fields: ["hashtagId"],
      type: "foreign key",
      name: "hashtags_post_hashtags_id_fk",
      references: {
        table: "hashtags",
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
