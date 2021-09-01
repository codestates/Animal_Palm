

module.exports = {
    checkAnimal: (animal_name) =>{
        const animal ={
            1:"여우",
            2:"곰",
            3:"코뿔소",
            4:"고양이",
            5:"호랑이",
            6:"독수리",
            7:"해파리",
            8:"돼지",
            9:"말",
            10:"기린",
            11:"코끼리",
            12:"고래",
            13:"사자",
            14:"달팽이",
            15:"강아지",
            16:"캥거루",
        }
        return animal[animal_name]
    }
}