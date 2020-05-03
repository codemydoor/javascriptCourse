
let john = {
    fullName : "John",
    mass : 700,
    height : 6,
    johnBmi : function (){
    this.bmi = this.mass /(this.height **2)
    return(this.bmi)
}
}

let mark = {
    fullName : "Mark",
    mass : 700,
    height : 6,
    markBmi : function (){
    this.bmi =  this.mass /(this.height**2)
     return(this.bmi)
    }
    
}
john.johnBmi()
mark.markBmi()

if(mark.bmi < john.bmi){
    console.log('john has a greater BMI of ' + john.bmi)
} else if (mark.bmi > john.bmi) {
    console.log('mark has a greater BMI of ' + mark.bmi)
} else{
    console.log('both have BMI of ' + john.bmi || mark.bmi )
}






