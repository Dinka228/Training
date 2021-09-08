let mass = []
let body = []
let aNN = 1, minusANN, minusANN2,minusANN3,delta = 1
let submitButton = document.getElementById('submitButton')
submitButton.addEventListener('click',math)
function mathRow(mass,i,m,aNN){
    for(let j = 1;j<m;j++){
        mass[i][j] = mass[i][j]/aNN
    }

}
function math(){
    let n = 5, m=5

    for(let i = 1;i<n;i++){
        mass[i] = [];
        for(let j = 1;j<m;j++){
            let b = ""
            b=String(b)
            i = String(i)
            j = String(j)
            b=i+j
            let a = document.getElementById(`a${b}`)
            mass[i][j] = a.value;
        }
    }
    body = mass
    console.log(mass)
    for(let i = 1;i<n-1;i++){
        for(let j = 1;j<m-1;j++){
            if(i===j){
                if(+mass[i][j]===0){
                    for(let j = 1;j<m;j++){
                        mass[i][j] = +mass[i][j] + +mass[i+1][j]
                    }
                        if(i===1){
                            if(+mass[i][i]!==1){
                                aNN = mass[i][i]
                                for(let j = 1;j<m;j++){
                                    mass[i][j] = +mass[i][j]/aNN
                                }
                            }
                            minusANN = +mass[i+1][i]
                            minusANN2 = +mass[i+2][i]
                            minusANN3 = +mass[i+3][i]
                            delta*=aNN
                            for(let j = 1;j<m;j++){

                                mass[i+1][j] = +mass[i+1][j] - +mass[i][j]*minusANN
                                mass[i+2][j] = +mass[i+2][j] - +mass[i][j]*minusANN2
                                mass[i+3][j] = +mass[i+3][j] - +mass[i][j]*minusANN3
                            }
                        }
                        else if(i===2){
                            if(+mass[i][i]!==1){
                                aNN = mass[i][i]
                                for(let j = 1;j<m;j++){
                                    mass[i][j] = +mass[i][j]/aNN
                                }
                            }
                            minusANN = +mass[i+1][i]
                            minusANN2 = +mass[i+2][i]
                            delta*=aNN
                            for(let j = 1;j<m;j++){
                                mass[i+1][j] = +mass[i+1][j] - +mass[i][j]*minusANN
                                mass[i+2][j] = +mass[i+2][j] - +mass[i][j]*minusANN2
                            }
                        }
                        else{
                            if(+mass[i][i]!==1){
                                aNN = mass[i][i]
                                for(let j = 1;j<m;j++){
                                    mass[i][j] = +mass[i][j]/aNN
                                }
                            }
                            minusANN = +mass[i+1][i]
                            delta*=aNN
                            for(let j = 1;j<m;j++){
                                mass[i+1][j] = +mass[i+1][j] - +mass[i][j]*minusANN
                            }
                        }

                }
                else{
                        if(i===1){
                            if(+mass[i][i]!==1){
                                aNN = mass[i][i]
                                for(let j = 1;j<m;j++){
                                    mass[i][j] = +mass[i][j]/aNN
                                }
                            }
                            minusANN = +mass[i+1][i]
                            minusANN2 = +mass[i+2][i]
                            minusANN3 = +mass[i+3][i]
                            delta*=aNN
                            for(let j = 1;j<m;j++){
                                mass[i+1][j] = +mass[i+1][j] - +mass[i][j]*minusANN
                                mass[i+2][j] = +mass[i+2][j] - +mass[i][j]*minusANN2
                                mass[i+3][j] = +mass[i+3][j] - +mass[i][j]*minusANN3
                            }

                        }
                        else if(i===2){
                            if(+mass[i][i]!==1){
                                aNN = mass[i][i]
                                for(let j = 1;j<m;j++){
                                    mass[i][j] = +mass[i][j]/aNN
                                }
                            }
                            minusANN = +mass[i+1][i]
                            minusANN2 = +mass[i+2][i]
                            delta*=aNN
                            for(let j = 1;j<m;j++){
                                mass[i+1][j] = +mass[i+1][j] - +mass[i][j]*minusANN
                                mass[i+2][j] = +mass[i+2][j] - +mass[i][j]*minusANN2
                            }

                        }
                        else{
                            if(+mass[i][i]!==1){
                                aNN = mass[i][i]
                                for(let j = 1;j<m;j++){
                                    mass[i][j] = +mass[i][j]/aNN
                                }
                            }
                            minusANN = +mass[i+1][i]
                            delta*=aNN
                            for(let j = 1;j<m;j++){
                                mass[i+1][j] = +mass[i+1][j] - +mass[i][j]*minusANN
                            }

                        }

                }
                // if(+mass[i][j]===0){
                //
                //     console.log(`${i} поменял 0`)
                //     mass[i][j] += +mass[i+1][j]
                //
                // }
                // aNN = mass[i][i]
                // mathRow(mass,i,m,aNN)
                // if(i===1){
                //     minusANN = mass[i+1][i]
                //     minusANN2 = mass[i+2][i]
                //     minusANN3 = mass[i+3][i]
                //     for(let j = 1;j<m;j++){
                //         console.log(`${i} первый столбец в 0`)
                //         mass[i+1][j] = mass[i+1][j] - mass[i][j]*minusANN
                //         mass[i+2][j] = mass[i+2][j] - mass[i][j]*minusANN2
                //         mass[i+3][j] = mass[i+3][j] - mass[i][j]*minusANN3
                //     }
                // }
                // else if(i===2){
                //     console.log(`${i} второй столбец в 0`)
                //     minusANN = mass[i+1][i]
                //     minusANN2 = mass[i+2][i]
                //     for(let j = 1;j<m;j++){
                //         mass[i+1][j] = mass[i+1][j] - mass[i][j]*minusANN
                //         mass[i+2][j] = mass[i+2][j] - mass[i][j]*minusANN2
                //     }
                // }
                // else{
                //     console.log(`${i} третий столбец в 0`)
                //     minusANN = mass[i+1][i]
                //     for(let j = 1;j<m;j++){
                //         mass[i+1][j] = mass[i+1][j] - mass[i][j]*minusANN
                //     }
                // }
            }
        }
    }
    delta*=mass[n-1][m-1]
    console.log('ДЕКРИМЕНТ ДОРІВНЮЄ: ', delta)
    // if(+mass[1][1]===0){
    //     mass[1][1] = +mass[1][1] + +mass[2][1]
    //     mass[1][2] = +mass[1][2] + +mass[2][2]
    //     mass[1][3] = +mass[1][3] + +mass[2][3]
    //     mass[1][4] = +mass[1][4] + +mass[2][4]
    //     console.log(mass)
    //     delta*=mass[1][1]
    // }
    // aNN = mass[2][1]
    // mass[2][1] -= mass[1][1]*aNN
    // mass[2][2] -= mass[1][2]*aNN
    // mass[2][3] -= mass[1][3]*aNN
    // mass[2][4] -= mass[1][4]*aNN
    // delta*=mass[2][2]
    //
    // if(mass[2][2]!==1){
    //     aNN = mass[2][2]
    //     mass[2][1] = mass[2][1]/aNN
    //     mass[2][2] = mass[2][2]/aNN
    //     mass[2][3] = mass[2][3]/aNN
    //     mass[2][4] = mass[2][4]/aNN
    // }
    //
    // minusANN = mass[3][1]
    // mass[3][1] = +mass[3][1] - +mass[1][1]*minusANN
    // mass[3][2] = +mass[3][2] - +mass[1][2]*minusANN
    // mass[3][3] = +mass[3][3] - +mass[1][3]*minusANN
    // mass[3][4] = +mass[3][4] - +mass[1][4]*minusANN
    // delta*=mass[3][3]
    //
    // if(mass[3][3]!==1){
    //     aNN = mass[3][3]
    //     mass[3][1] = mass[3][1]/aNN
    //     mass[3][2] = mass[3][2]/aNN
    //     mass[3][3] = mass[3][3]/aNN
    //     mass[3][4] = mass[3][4]/aNN
    // }
    //
    // minusANN2 = mass[4][1]
    // mass[4][1] = +mass[4][1] - +mass[1][1]*minusANN2
    // mass[4][2] = +mass[4][2] - +mass[1][2]*minusANN2
    // mass[4][3] = +mass[4][3] - +mass[1][3]*minusANN2
    // mass[4][4] = +mass[4][4] - +mass[1][4]*minusANN2
    //
    // mass[4][1] += +mass[3][1]
    // mass[4][2] += +mass[3][2]
    // mass[4][3] += +mass[3][3]
    // mass[4][4] += +mass[3][4]
    // delta*=mass[4][4]
    // console.log(`ДЕКРИМЕНТ ДОРІВНЮЄ: ${delta}`)
}

// function minusRow(n,m){
//
//     for(let i = 1;i<n-1;i++){
//         for(let j = 1;j<m-1;j++){
//             if(i===j&&+mass[i][j]!==1){
//                 if(+mass[i][j]===0){
//
//                         console.log('поменял 0')
//                         mass[i][j] = +mass[i][j] + +mass[i+1][j]
//
//                 }
//                 aNN = mass[i][i]
//                 mathRow(mass,i,m,aNN)
//                 if(i===1){
//                         minusANN = mass[i+1][i]
//                         minusANN2 = mass[i+2][i]
//                         minusANN3 = mass[i+3][i]
//                         for(let j = 1;j<m;j++){
//                             console.log('первый столбец в 0')
//                             mass[i+1][j] = mass[i+1][j] - mass[i][j]*minusANN
//                             mass[i+2][j] = mass[i+2][j] - mass[i][j]*minusANN2
//                             mass[i+3][j] = mass[i+3][j] - mass[i][j]*minusANN3
//                         }
//                 }
//                 else if(i===2){
//                         console.log('второй столбец в 0')
//                         minusANN = mass[i+1][i]
//                         minusANN2 = mass[i+2][i]
//                         for(let j = 1;j<m;j++){
//                             mass[i+1][j] = mass[i+1][j] - mass[i][j]*minusANN
//                             mass[i+2][j] = mass[i+2][j] - mass[i][j]*minusANN2
//                         }
//                     }
//                 else{
//                         console.log('третий столбец в 0')
//                         minusANN = mass[i+1][i]
//                         for(let j = 1;j<m;j++){
//                             mass[i+1][j] = mass[i+1][j] - mass[i][j]*minusANN
//                         }
//                     }
//             }
//         }
//     }
//     console.log(mass)
// }