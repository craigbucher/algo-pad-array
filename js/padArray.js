// REMEMBER TO PSEUDOCODE
const pad = (array, minSize, value=null) => {
        // if (value === null){	
        //   value = 'None';	
        // }	
        if (array.length < minSize){	
          let delta = (minSize - array.length);	
          while (delta > 0){	
            array.push(value);	
            delta --;	
          }	
        }	
        return array;	
}
console.log(pad([1,2,3], 5))