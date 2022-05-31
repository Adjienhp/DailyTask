let dataArr = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1998", "Membaca"] 

const dataHandling2 = arr => {
    // Splice
    arr.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung'), arr.splice(4, 1, 'Pria', 'SMA Internasional Metro')
    console.log(arr)
    
    // Split
    let date = arr[3].split('/')
    let month = date[1]
    switch(month){
        case '01' :
        console.log('Januari');
        break;
        case '02' :
        console.log('Februari');
        break;
        case '03' :
        console.log('Maret');
        break;
        case '04' :
        console.log('April');
        break;
        case '05' :
        console.log('Mei');
        break;
        case '06' :
        console.log('Juni');
        break;
        case '07' :
        console.log('Juli');
        break;
        case '08' :
        console.log('Agustus');
        break;
        case '09' :
        console.log('September');
        break;
        case '10' :
        console.log('Oktober');
        break;
        case '11' :
        console.log('November');
        break;
        case '12' :
        console.log('Desember');
        break;
        default :
        console.log('Anda memasukan input yang salah');
        break;
    }
    
    // Join
    let forDate = date.join('-')
    console.log(forDate)
    
    // sort
    let sortArr = date.sort().reverse()
    let x = 0, y = 1
    sortArr[x] = sortArr.splice(y, 1, sortArr[x])[0]
    console.log(sortArr)
    
    // Batas nama
    let name = arr[1].slice(0, 15)
    console.log(name)
}
dataHandling2(dataArr)