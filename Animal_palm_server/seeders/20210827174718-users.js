'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.bulkInsert(
      "users",
      [
        {
          animal_name: "거북이",
          user_id: "test1",
          password:"test1",
          phone_number:"1234",
          email:"test@거북이.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "뱀",
          user_id: "test2",
          password:"test2",
          phone_number:"5678",
          email:"test@뱀.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "코뿔소",
          user_id: "test3",
          password:"test3",
          phone_number:"9012",
          email:"test@코뿔소.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "고양이",
          user_id: "test4",
          password:"test4",
          phone_number:"2345",
          email:"test@고양이.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "호랑이",
          user_id: "test5",
          password:"test5",
          phone_number:"6789",
          email:"test@호랑이.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "올빼미",
          user_id: "test6",
          password:"test6",
          phone_number:"0123",
          email:"test@올빼미.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "판다",
          user_id: "test7",
          password:"test7",
          phone_number:"4567",
          email:"test@판다.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "바다표범",
          user_id: "test8",
          password:"test8",
          phone_number:"8901",
          email:"test@바다표범.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "늑대",
          user_id: "test9",
          password:"test9",
          phone_number:"2345",
          email:"test@늑대.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "하이에나",
          user_id: "test10",
          password:"test10",
          phone_number:"6789",
          email:"test@하이에나.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "코끼리",
          user_id: "test11",
          password:"test11",
          phone_number:"0123",
          email:"test@코끼리.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "돌고래",
          user_id: "test12",
          password:"test12",
          phone_number:"4567",
          email:"test@돌고래.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "사자",
          user_id: "test13",
          password:"test13",
          phone_number:"8901",
          email:"test@사자.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "앵무새",
          user_id: "test14",
          password:"test14",
          phone_number:"2345",
          email:"test@앵무새.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "강아지",
          user_id: "test15",
          password:"test15",
          phone_number:"6789",
          email:"test@강아지.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_name: "오랑우탄",
          user_id: "test16",
          password:"test16",
          phone_number:"0123",
          email:"test@오랑우탄.com",
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
