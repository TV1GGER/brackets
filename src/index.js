module.exports = function check(str, bracketsConfig) {

  if((str.length===1) || (str.length%2===1) || (str.length===undefined)) {
     return  false;
   };
   let count = 2;
   let resultStack = [];
   let arrRev = [];
   let firstArr = [];
   let endArr = [];
   let topElement = resultStack[resultStack.length-1];
   for (let p=0; p<bracketsConfig.length; p++){
     firstArr.push(bracketsConfig[p][0]);
     endArr.push(bracketsConfig[p][1]);
   };
  for (let z=0; z<bracketsConfig.length; z++){
   arrRev.push(bracketsConfig[z].reverse());
  };
  let map1 = new Map(arrRev);
   for (let x = 0; x < str.length; x++) {
     let currentStr = str[x];
        if(firstArr.includes(currentStr)){
         resultStack.push(currentStr);        
         }
         if((endArr.includes(currentStr)) && (map1.get(currentStr) !== resultStack.pop())){
           return false;
           }
          if((firstArr.includes(currentStr)) && (endArr.includes(currentStr)) && (count%2===0)){
            resultStack.push(currentStr); 
     count++;
             }
          if((firstArr.includes(currentStr)) && (endArr.includes(currentStr)) && (count%2===1)){
     resultStack.pop()
     count++;
     }
         }
       return resultStack.length === 0;
       }
 