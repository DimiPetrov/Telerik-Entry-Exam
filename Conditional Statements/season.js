function solve(arg1, arg2) {
    let month = arg1;
    let day = Number(arg2);

    switch(month) {
        case 'January': console.log(`Winter`); break;
        case 'February': console.log(`Winter`); break;
        case 'March': if(day <= 19) {
                        console.log(`Winter`); break; 
                    } else {
                        console.log(`Spring`); break;
                    }
        case 'April': console.log(`Spring`); break;
        case 'May': console.log(`Spring`); break;
        case 'June': if(day <= 20) {
                        console.log(`Spring`); break; 
                    } else {
                        console.log(`Summer`); break;
        }
        case 'July': console.log(`Summer`); break;
        case 'August': console.log(`Summer`); break;
        case 'September': if(day <= 21) {
                            console.log(`Summer`); break; 
                        } else {
                            console.log(`Autumn`); break;
        }       
        case 'October': console.log(`Autumn`); break;
        case 'November': console.log(`Autumn`); break;
        case 'December': if(day <= 20) {
            console.log(`Autumn`); break; 
        } else {
            console.log(`Winter`); break;
        }   
    }
}

solve('June', '24')