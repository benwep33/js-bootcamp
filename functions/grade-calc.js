//students score, total possible score
// 15/20, You got a C (75%)!
//A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalc = function(score, totalScore) {
    const percent = (score / totalScore) * 100

    let grade = ''

    if(percent >= 90) {
        grade = 'A'
    } else if(percent >= 80 && percent <= 89) {
        grade = 'B'
    } else if(percent >= 70 && percent <= 79) {
        grade = 'C'
    } else if(percent >= 60 && percent <= 69) {
        grade = 'D'
    } else {
        grade = 'F'
    }

    return `You got a ${grade} (${percent})!`
}


const result = gradeCalc(18,20)
console.log(result)

console.log(gradeCalc(59, 100))