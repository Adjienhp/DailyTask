const papaCatur = () => {
    let kotak = ''
    let hitam = 8
    let putih = 8
    
    for(let i = 1; i <= hitam; i++){
        if(i % 2 === 0){
            for(let j = 1; j <= putih; j++){
                if(j % 2 === 0){
                    kotak += '#'
                } else{
                    kotak += ' '
                }
            }
        } else{
            for(let j = 1; j <= putih; j++){
                if(j % 2 === 0){
                    kotak += ' '
                } else{
                    kotak += '#'
                }
            }
        }
        kotak += '\n'
    }
    return kotak
}
console.log(papaCatur())