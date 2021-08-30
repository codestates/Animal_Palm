'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.bulkInsert(
      "users",
      [
        {
          animalId: 1,
          userId: "test1",
          password:"test1",
          phoneNumber:"1234",
          email:"test@거북이.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 2,
          userId: "test2",
          password:"test2",
          phoneNumber:"5678",
          email:"test@뱀.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 3,
          userId: "test3",
          password:"test3",
          phoneNumber:"9012",
          email:"test@코뿔소.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 4,
          userId: "test4",
          password:"test4",
          phoneNumber:"2345",
          email:"test@고양이.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 5,
          userId: "test5",
          password:"test5",
          phoneNumber:"6789",
          email:"test@호랑이.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 6,
          userId: "test6",
          password:"test6",
          phoneNumber:"0123",
          email:"test@올빼미.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 7,
          userId: "test7",
          password:"test7",
          phoneNumber:"4567",
          email:"test@판다.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 8,
          userId: "test8",
          password:"test8",
          phoneNumber:"8901",
          email:"test@바다표범.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 9,
          userId: "test9",
          password:"test9",
          phoneNumber:"2345",
          email:"test@늑대.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 10,
          userId: "test10",
          password:"test10",
          phoneNumber:"6789",
          email:"test@하이에나.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 11,
          userId: "test11",
          password:"test11",
          phoneNumber:"0123",
          email:"test@코끼리.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 12,
          userId: "test12",
          password:"test12",
          phoneNumber:"4567",
          email:"test@돌고래.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 13,
          userId: "test13",
          password:"test13",
          phoneNumber:"8901",
          email:"test@사자.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 14,
          userId: "test14",
          password:"test14",
          phoneNumber:"2345",
          email:"test@앵무새.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 15,
          userId: "test15",
          password:"test15",
          phoneNumber:"6789",
          email:"test@강아지.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 16,
          userId: "test16",
          password:"test16",
          phoneNumber:"0123",
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
