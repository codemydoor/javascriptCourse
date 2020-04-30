

let teamJohnScore = 22289 + 20 + 103;
let teamMarkScore = 116 + 94 + 123;

let teamJohnScore_Average = teamJohnScore / 2
console.log(teamJohnScore_Average);

let teamMarkScore_Average = teamMarkScore / 2
console.log(teamMarkScore_Average)

// if (teamJohnScore_Average < teamMarkScore_Average){
//     console.log("winner")
// } else if(teamJohnScore_Average > teamMarkScore_Average){
//     console.log("looser")
// }else{console.log("draw")}


teamJohnScore_Average < teamMarkScore_Average ? console.log("winner") 
: teamJohnScore_Average > teamMarkScore_Average ? console.log("loser")
: console.log('draw')


// ______________________________EXTRA _______________________________


let teamMaryScore = 97 + 134 + 105

let teamMaryScore_Average = teamMaryScore / 2

if (teamJohnScore_Average>teamMarkScore_Average && teamJohnScore_Average > teamMaryScore_Average){
    console.log("Team John has won")
} else if (teamMarkScore_Average > teamJohnScore_Average && teamMarkScore_Average > teamMaryScore_Average){
    console.log("Team Mark has won")
} else if (teamMaryScore_Average > teamJohnScore_Average && teamMaryScore_Average > teamMarkScore_Average){
    console.log("Team Mary has won")
} else {
    console.log("it is a draw")
}