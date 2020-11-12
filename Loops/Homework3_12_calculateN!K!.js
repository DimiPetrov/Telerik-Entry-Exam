//Homework3_12 calculate n!/k!



let input = [
    '5',
    '2'

  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

  let n=+gets();
  let k=+gets();
  
  
  
  function nFact (n) 
 { let factorial=1;
   for (let i=1; i<=n; i++){
    factorial*=i
  }return factorial;
}

  function nkDivide(n, k){
   let divide=nFact(n)/nFact(k);
   return divide;
  } 
  
  print(nkDivide(n, k))

  

  
    
 
  
  


