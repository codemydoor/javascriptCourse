// let markMass = 20 
// let markHeight = 5.11
// let johnMass = 40 
// let johnHeight = 6 

// let markBmi = markMass /(markHeight * markHeight)
// console.log(markBmi);

// let johnBmi = johnMass /(johnHeight * johnHeight)
// console.log(johnBmi)

// let rating = markBmi > johnBmi
// console.log('Mark\'s BMI is greater than John\'s, ' + rating)

//___________________________CONDITIONALS______________________________//
//TENARY

// let name = "John";
// let age = 18

// age <= 20 ? console.log("you are still young") : console.log('you are old now')


// let drink = age <=18 ? "juice" : "beer"
// console.log(drink)

// let name ="John"
// if(name){
//     console.log("name is " + name)
// }else{console.log('name is undefined')}


let teamJohnScore = 89 + 20 + 103;
let teamMarkScore = 116 + 94 + 123;

let teamJohnScore_Average = teamJohnScore / 2
console.log(teamJohnScore_Average);

let teamMarkScore_Average = teamMarkScore / 2
console.log(teamMarkScore_Average)

// if (teamJohnScore_Average < teamMarkScore_Average){
//     console.log("winner")
// } else{
//     console.log("loser")
// }

teamJohnScore_Average < teamMarkScore_Average ? console.log("winner") : console.log("loser")