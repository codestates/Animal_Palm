'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const posts = await queryInterface.bulkInsert(
      "posts",
      [
        {
          animal_name: "거북이",
          user_id: 1,
          title:"test1",
          context:"거북이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "뱀",
          user_id: 2,
          title:"test2",
          context:"뱀",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "코뿔소",
          user_id: 3,
          title:"test3",
          context:"코뿔소",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "고양이",
          user_id: 4,
          title:"test4",
          context:"고양이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "호랑이",
          user_id: 5,
          title:"test5",
          context:"호랑이",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "올빼미",
          user_id: 6,
          title:"test6",
          context:"올빼미",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "판다",
          user_id: 7,
          title:"test7",
          context:"판다",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "바다표범",
          user_id: 8,
          title:"test8",
          context:"바다표범",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "늑대",
          user_id: 9,
          title:"test9",
          context:"늑대",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "하이에나",
          user_id: 10,
          title:"test10",
          context:"하이에나",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "코끼리",
          user_id: 11,
          title:"test11",
          context:"코끼리",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "돌고래",
          user_id: 12,
          title:"test12",
          context:"돌고래",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "사자",
          user_id: 13,
          title:"test13",
          context:"사자",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "앵무새",
          user_id: 14,
          title:"test14",
          context:"앵무새",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "강아지",
          user_id: 15,
          title:"test15",
          context:"강아지",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "오랑우탄",
          user_id: 16,
          title:"test16",
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
