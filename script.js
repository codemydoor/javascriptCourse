let markMass = 20 
let markHeight = 5.11
let johnMass = 40 
let johnHeight = 6 

let markBmi = markMass /(markHeight * markHeight)
console.log(markBmi);

let johnBmi = johnMass /(johnHeight * johnHeight)
console.log(johnBmi)

let rating = markBmi > johnBmi
console.log('Mark\'s BMI is greater than John\'s, ' + rating)