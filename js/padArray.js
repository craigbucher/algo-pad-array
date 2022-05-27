// REMEMBER TO PSEUDOCODE
const pad = (array, minSize, value=null) => {
    //function pad(array, size, padding){	
        if (value === null){	
          value = 'None';	
        }	
        if (array.length < minSize){	
          let delta = (minSize - array.length);	
          while (delta > 0){	
            array.push(value);	
            delta --;	
          }	
        }	
        return array;	
}
console.log(pad([1,2,3], 3))