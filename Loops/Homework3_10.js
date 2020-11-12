//Homework3_10
let input = [
'12',
'100', 
'14', 
'bad', 
'58', 
'car', 
'10'];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
  let array =Array.from(input);
 
  while(array.length!==0){
    let element=array[0]
   if (isNaN(Number(element))===false){
      print((Number(element))+Number(element));
     } else if (isNaN(Number(element))===true){
          element=String(array[0]);
          let a ='-'
              a+=element 
           
          print(a);  
      
      }

    array=array.slice(1);
  }
  