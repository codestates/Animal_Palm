

module.exports = {
    checkAnimal: (animal_name) =>{
        const animal ={
            1:"거북이",
            2:"뱀",
            3:"코뿔소",
            4:"고양이",
            5:"호랑이",
            6:"올빼미",
            7:"판다",
            8:"바다표범",
            9:"늑대",
            10:"하이에나",
            11:"코끼리",
            12:"돌고래",
            13:"사자",
            14:"앵무새",
            15:"강아지",
            16:"오랑우탄",
        }
        return animal[animal_name]
    }
}