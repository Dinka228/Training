let mass1 = []
let mass2 = []
let mass3 = []
let mass4 = []
let body = []
let bool = true
let aNN = 1, minusANN, minusANN2,minusANN3,delta = 1
let submitButton1 = document.getElementById('submitButton1')
let submitButton2 = document.getElementById('submitButton2')
let submitButton3 = document.getElementById('submitButton3')
let submitButton4 = document.getElementById('submitButton4')
let submitButton5 = document.getElementById('submitButton5')
let slar = document.getElementById('slar')
slar.addEventListener('click',showForm1)
let visitor = document.getElementById('visitor')
visitor.addEventListener('click',showForm2)
let wrapp = document.getElementById('wrapp')
wrapp.addEventListener('click',showForm3)
let simple = document.getElementById('simple')
simple.addEventListener('click',showForm4)
submitButton5.addEventListener('click',showForm5)
let window1 = document.getElementById('window1')
let window2 = document.getElementById('window2')
let window3 = document.getElementById('window3')
let window4 = document.getElementById('window4')
let window5 = document.getElementById('window5')
let answer = document.getElementById('answer')
let form4 = document.getElementById('form4')
function showForm1(){
    window1.style.display = 'block'
    window2.style.display = 'none'
    window3.style.display = 'none'
}
function showForm2(){
    window1.style.display = 'none'
    window2.style.display = 'block'
    window3.style.display = 'none'
    window4.style.display = 'none'
}
function showForm3(){
    window1.style.display = 'none'
    window2.style.display = 'none'
    window3.style.display = 'block'
    window4.style.display = 'none'
}
function showForm4(){
    window1.style.display = 'none'
    window2.style.display = 'none'
    window3.style.display = 'none'
    window4.style.display = 'block'
}
let enter=document.getElementById('enter')
let count1 = document.getElementById('count')
let count2 = document.getElementById('count2')
function showForm5(){

    console.log(count1.value,count2.value)
    for(let i=1;i<+count2.value+2;i++){
        let div = document.createElement('div')
        div.id = `input${i}`
        window5.appendChild(div)
        let divv = document.getElementById(`input${i}`)

        for(let j=1;j<+count1.value+1;j++){
            let span = document.createElement('span')
            span.id = `span${i}${j}`
            span.innerHTML = `x${j} = `
            divv.appendChild(span)
            let input = document.createElement('input')
            input.id = `d${i}${j}`
            input.className = `input`
            divv.appendChild(input)
        }
        for(let y=1;y<+count2.value+1;y++){

            let input3 = document.createElement('input')
            input3.id = `d${i}${+count1.value+y}`
            input3.className = `input`
            input3.style.display = 'none'
            if(i===y){
                input3.value = 1
            }
            else{
                input3.value = 0
            }
            divv.appendChild(input3)
        }

        let span2 = document.createElement('span')
        span2.id = `span2${i}`
        span2.innerHTML = `B${i} = `
        divv.appendChild(span2)

        let input2 = document.createElement('input')
        input2.id = `d${i}${+count1.value + +count2.value+1}`
        input2.className = `input`
        divv.appendChild(input2)
        if(+i === +count2.value){
            let p = document.createElement('p')
            p.id = `p${i}`
            p.innerHTML = `?????????????? ??????????????`
            divv.appendChild(p)
        }
    }
    enter.style.display = 'none'
    window5.style.display = 'block'
}
submitButton1.addEventListener('click',mathSlar)
submitButton2.addEventListener('click',mathVisitor)
submitButton3.addEventListener('click',mathWrapp)
submitButton4.addEventListener('click',mathSimple)
function mathSlar(){
    let n = 5, m=6

    for(let i = 1;i<n;i++){
        mass1[i] = [];
        for(let j = 1;j<m;j++){
            let b = ""
            b=String(b)
            i = String(i)
            j = String(j)
            b=i+j
            let a = document.getElementById(`a${b}`)
            mass1[i][j] = a.value;
        }
    }
    console.log(mass1)
    for(let i = 1;i<n;i++){
        for(let j = 1;j<m-1;j++){
            if(i===j){
                if(+mass1[i][j]===0){
                    for(let j = 1;j<m;j++){
                        mass1[i][j] = +mass1[i][j] + +mass1[i+1][j]
                    }
                }
                else if(mass1[i][i]!==1){
                    aNN = mass1[i][i]
                    for(let j = 1;j<m;j++){
                        mass1[i][j] = +mass1[i][j]/aNN
                    }
                }
                for(let x = 1;x<n-i;x++){
                    minusANN = +mass1[i+x][i]
                    for(let y = 1;y<m;y++){
                        mass1[i+x][y] = +mass1[i+x][y] - +mass1[i][y]*minusANN
                    }
                }
            }
        }
    }
    for(let i = n - 1;i>0;i--){
        for(let j = m-1;j>0;j--){
            if(i===j){
                for(let x = 1;x<i;x++){
                    minusANN = +mass1[i-x][i]
                    for(let y = 1;y<m;y++){
                        let c = i - x
                        mass1[c][y] = +mass1[c][y] - +mass1[i][y]*minusANN
                    }
                }
            }
        }
    }
    console.log(mass1)
    answer.innerHTML = ""
    answer.innerHTML = `x1 = ${mass1[1][5]}
                        x2 = ${mass1[2][5]}     
                        x3 = ${mass1[3][5]}  
                        x4 = ${mass1[4][5]}  `
}
function mathVisitor(){
    delta = 1
    let n = 5, m=5

    for(let i = 1;i<n;i++){
        mass2[i] = [];
        for(let j = 1;j<m;j++){
            let b = ""
            b=String(b)
            i = String(i)
            j = String(j)
            b=i+j
            let a = document.getElementById(`b${b}`)
            mass2[i][j] = a.value;
        }
    }
    body = mass2
    console.log(mass2)
    for(let i = 1;i<n-1;i++){
        for(let j = 1;j<m-1;j++){
            if(i===j){
                if(+mass2[i][j]===0){
                    for(let j = 1;j<m;j++){
                        mass2[i][j] = +mass2[i][j] + +mass2[i+1][j]
                    }
                        if(i===1){
                            if(+mass2[i][i]!==1){
                                aNN = mass2[i][i]
                                for(let j = 1;j<m;j++){
                                    mass2[i][j] = +mass2[i][j]/aNN
                                }
                            }
                            minusANN = +mass2[i+1][i]
                            minusANN2 = +mass2[i+2][i]
                            minusANN3 = +mass2[i+3][i]
                            delta*=mass2[i][i]
                            for(let j = 1;j<m;j++){

                                mass2[i+1][j] = +mass2[i+1][j] - +mass2[i][j]*minusANN
                                mass2[i+2][j] = +mass2[i+2][j] - +mass2[i][j]*minusANN2
                                mass2[i+3][j] = +mass2[i+3][j] - +mass2[i][j]*minusANN3
                            }
                        }
                        else if(i===2){
                            if(+mass2[i][i]!==1){
                                aNN = mass2[i][i]
                                for(let j = 1;j<m;j++){
                                    mass2[i][j] = +mass2[i][j]/aNN
                                }
                            }
                            minusANN = +mass2[i+1][i]
                            minusANN2 = +mass2[i+2][i]
                            delta*=aNN
                            for(let j = 1;j<m;j++){
                                mass2[i+1][j] = +mass2[i+1][j] - +mass2[i][j]*minusANN
                                mass2[i+2][j] = +mass2[i+2][j] - +mass2[i][j]*minusANN2
                            }
                        }
                        else{
                            if(+mass2[i][i]!==1){
                                aNN = mass2[i][i]
                                for(let j = 1;j<m;j++){
                                    mass2[i][j] = +mass2[i][j]/aNN
                                }
                            }
                            minusANN = +mass2[i+1][i]
                            delta*=aNN
                            for(let j = 1;j<m;j++){
                                mass2[i+1][j] = +mass2[i+1][j] - +mass2[i][j]*minusANN
                            }
                        }

                }
                else{
                        if(i===1){
                            if(+mass2[i][i]!==1){
                                aNN = mass2[i][i]
                                for(let j = 1;j<m;j++){
                                    mass2[i][j] = +mass2[i][j]/aNN
                                }
                            }
                            minusANN = +mass2[i+1][i]
                            minusANN2 = +mass2[i+2][i]
                            minusANN3 = +mass2[i+3][i]
                            delta*=aNN
                            for(let j = 1;j<m;j++){
                                mass2[i+1][j] = +mass2[i+1][j] - +mass2[i][j]*minusANN
                                mass2[i+2][j] = +mass2[i+2][j] - +mass2[i][j]*minusANN2
                                mass2[i+3][j] = +mass2[i+3][j] - +mass2[i][j]*minusANN3
                            }

                        }
                        else if(i===2){
                            if(+mass2[i][i]!==1){
                                aNN = mass2[i][i]
                                for(let j = 1;j<m;j++){
                                    mass2[i][j] = +mass2[i][j]/aNN
                                }
                            }
                            minusANN = +mass2[i+1][i]
                            minusANN2 = +mass2[i+2][i]
                            delta*=aNN
                            for(let j = 1;j<m;j++){
                                mass2[i+1][j] = +mass2[i+1][j] - +mass2[i][j]*minusANN
                                mass2[i+2][j] = +mass2[i+2][j] - +mass2[i][j]*minusANN2
                            }

                        }
                        else{
                            if(+mass2[i][i]!==1){
                                aNN = mass2[i][i]
                                for(let j = 1;j<m;j++){
                                    mass2[i][j] = +mass2[i][j]/aNN
                                }
                            }
                            minusANN = +mass2[i+1][i]
                            delta*=aNN
                            for(let j = 1;j<m;j++){
                                mass2[i+1][j] = +mass2[i+1][j] - +mass2[i][j]*minusANN
                            }

                        }

                }

            }
        }
    }
    delta*=mass2[n-1][m-1]
    answer.innerHTML = ""
    answer.innerHTML = `?????????????????? ????????????????: ${delta}`
    delta = 1
}
function mathWrapp(){
    let n = 5, m=9

    for(let i = 1;i<n;i++){
        mass3[i] = [];
        for(let j = 1;j<m;j++){
            let b = ""
            b=String(b)
            i = String(i)
            j = String(j)
            b=i+j
            let a = document.getElementById(`c${b}`)
            mass3[i][j] = a.value;
        }
    }
    console.log(mass3)
    for(let i = 1;i<n;i++){
        for(let j = 1;j<m-1;j++){
            if(i===j){
                if(+mass3[i][j]===0){
                    // console.log(`?? ?? [${i},${i}]`)
                    for(let j = 1;j<m;j++){
                        mass3[i][j] = +mass3[i][j] + +mass3[i+1][j]
                    }
                    // console.log(mass3[2][2])
                    if(mass3[i][i]!==1 || mass3[i][i] < 0){
                        aNN = mass3[i][i]
                        for(let j = 1;j<m;j++){
                            mass3[i][j] = +mass3[i][j]/aNN
                        }
                    }
                }
                else if(mass3[i][i]!==1 || mass3[i][i] < 0){
                    aNN = mass3[i][i]
                    for(let j = 1;j<m;j++){
                        mass3[i][j] = +mass3[i][j]/aNN
                    }
                }
                for(let x = 1;x<n-i;x++){
                    minusANN = mass3[i+x][i]
                    for(let y = 1;y<m;y++){
                        mass3[i+x][y] = +mass3[i+x][y] - +mass3[i][y]*minusANN
                    }
                }
            }
        }
    }
    for(let i = n - 1;i>0;i--){
        for(let j = m-1;j>0;j--){
            if(i===j){
                for(let x = 1;x<i;x++){
                    minusANN = +mass3[i-x][i]
                    // console.log(minusANN)
                    for(let y = 1;y<m;y++){
                        let c = i - x
                        mass3[c][y] = +mass3[c][y] - +mass3[i][y]*minusANN
                        // console.log(`${mass3[c][y]} = ${+mass3[c][y]} - ${mass3[i][y]} * ${minusANN}`)
                    }
                }
            }
        }
    }
    console.log(mass3)
    answer.innerHTML = ""
    answer.appendChild(form4)
    for(let i = 1;i<5;i++){
        for(let j = 5;j<9;j++){
            let b = ""
            b=String(b)
            i = String(i)
            j = String(j)
            b=i+j
            let a = document.getElementById(`c${b}`)
            console.log(`?? ?? [${i},${j}]`)
            a.value = mass3[i][j]
        }
    }
}
function mathSimple(){
    let n = +count2.value + 2, m=+count2.value + +count1.value + 2

    for(let i = 1;i<n;i++){
        mass4[i] = [];
        for(let j = 1;j<m;j++){
            let b = ""
            b=String(b)
            i = String(i)
            j = String(j)
            b=i+j
            let a = document.getElementById(`d${b}`)
            mass4[i][j] = a.value;
        }
    }
    console.log(mass4)
    let min = 0, k = 0 , h = 0,min2 = 0,count = 1,k1 = 0,h1 = 0,k2 = 0,h2 = 0,max1 = 0,max2 = 0,h3 =0,k3=0

    for(let i = 1;i<n;i++){
        min = +mass4[n-1][1]
        for(let j = 1;j<m;j++){
            if(+mass4[n-1][j]<= +min){
                console.log(`${mass4[n-1][j]}<${min}`)
                min = mass4[n-1][j]
                h = j
                if(count===1){
                    h1 = h
                }
                else if(count === 2){
                    h2 = h
                }
                else{
                    h3 = h
                }
                console.log("??????????????",h)
            }
        }
        min2 = +mass4[i][m-1]/mass4[i][h]
        if(min2<0){
            min2 = mass4[i+1][m-1]/mass4[i+1][h]
        }
        for(let i = 1;i<n-1;i++){
            console.log(`?????????? ???${i}  ${mass4[i][m-1]}/${mass4[i][h]}`)
            if(+mass4[i][m-1]/mass4[i][h] <= +min2 && +mass4[i][m-1]/mass4[i][h] > 0){
                min2 = mass4[i][m-1]/mass4[i][h]
                k = i
                if(count===1){
                    k1 = k
                }
                else if(count===2){
                    k2 = k
                }
                else{
                    k3 = k
                }
            }
        }
        console.log(`?????????????????????? ?????????????? = ${mass4[k][h]} ???? ???????????? [${k}][${h}]`)
            if(mass4[k][h] !== 1){
                minusANN = mass4[k][h]
                for(let j = 1;j<m;j++){
                    mass4[k][j] = +mass4[k][j] / minusANN

                }
            }
        for(let x = 1;x<n;x++){
            if(x===k){
                x++
            }
            minusANN = mass4[x][h]
            for(let j = 1;j<m;j++){

                mass4[x][j] = +mass4[x][j] - +mass4[k][j]*minusANN
            }
        }

        for(let j = 1;j<m-1;j++){
            if(mass4[n-1][j] < 0){
                bool=false
                break
            }
            else{
                bool = true
            }
        }
        if(bool === true){
            break
        }
        count++
    }

        if(count<2){
            answer.innerHTML = `x1 = ${mass4[k1][m-1]} x2 = 0 Fx = ${mass4[n-1][m-1]}`
        }
        else if(count === 2){
            answer.innerHTML = `x1 = ${mass4[k1][m-1]} x2 = ${mass4[k2][m-1]} Fx = ${mass4[n-1][+m - 1]}`
        }
        else if(count<3){
            answer.innerHTML = `x1 = ${mass4[k1][m-1]} x2 = 0 x3 = 0 Fx = ${mass4[n-1][m-1]}`
        }
        else if(count === 3){
            answer.innerHTML = `x1 = ${mass4[k1][m-1]} x2 = ${mass4[k2][m-1]} x3 = ${mass4[k3][m-1]} Fx = ${mass4[n-1][m-1]}`
        }


}
