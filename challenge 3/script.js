var billList = [124, 44 , 268]
var tips = [20, 15 , 10 ]

function CalculateTips ( bills){
    if (bills < 50){
        console.log(bills*tips[0]/100)
    } else if (bills >= (50) && bills <= (200)){
        console.log(bills*tips[1]/100)
    } else {
        console.log(bills*tips[2]/100)
    }
}

CalculateTips(500)