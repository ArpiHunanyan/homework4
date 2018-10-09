//2.triangleStars 
const triangleStars = function(height) {
    const gen = function(symbol, total) {
          let str = '';
          while(total>0) {
            str = str + symbol;
            total=total-1;
          }
          return str;
        }
      let h = height;
      while (h > 0) { 
        const base = h * 2 - 1;
        const stB = gen('*', base);
        const spC= gen(' ', height - h);
  
        
        console.log(spC + stB);
        h =  h - 1;
    
      };
      
    };
    
    triangleStars(4);
        





//3.multiToSingle
const array = function (arr1,arr2) {
    let multiToSingle = arr1;
    let i = 0;
    while (i < arr2.length) {
      multiToSingle[multiToSingle.length] = arr2[i];
      i = i + 1;
    };
    return multiToSingle
  
  };
  
  const array1 = [11,12,13,14];
  const array2 = [21,22,23,24];
  
  console.log(array(array1,array2));


  //4. findMinMax

  const findMinMax = function (arr,vol) {
  let i = 1;
  if (vol) {
    
    let max = arr[0];
    while (i < arr.length) {
      if (max < arr[i]) {
        max = arr[i];
        
      }
      i = i + 1;
    }  
    console.log(max);

  }
  else { 
    
   let  min =  arr[0];
   while (i < arr.length) {
     if(min > arr[i]) {
       min = arr[i];
     }
     i = i + 1
   }
   console.log(min);

  }
};


findMinMax ([1,-3,45,6,7],false);

  


  // 5 forEach
  
  
 const forEach = function (arr,fa) {

    let i = 0 ;
  while (i<arr.length) {
      fa(arr[i]);
      i = i + 1;
  
    };
  };
  const ar1 = [1,2,3,4];
  const fa1 = function (a) {
    console.log(a);
    };
  forEach(ar1, fa1);

  // 6. sum
  const funSum = function (arr){
  let i = 0;
  let sum = 0;
  while(i<arr.length) {
    sum = arr[i] + sum;
    i = i +1;

  } 
  return sum ;
};


console.log(funSum([2,5,8]));

  




  // 7 . reverse


  const reverse= function (str) {
  let i = str.length-1;
  let strFun = "";
  while (i >= 0) {
    strFun = strFun + str[i];
    i = i - 1;
  }
  return strFun;
};


console.log(reverse("barev"));

//8 

const checkerboard = function (n) {
  let m = 0;
  while(m < n)  {
    if (m%2===1) {
      let st = " ";
      let k = n 
      while (k > 0) {
        st = st + "*";
        k = k - 1;
      }
      m = m + 1;
      console.log(st);      
    } 
    else {

    let st = "";
    let k = n 
    while (k > 0) {
      st = st + "*";
      k = k - 1;
    }
      m = m + 1;
      console.log(st);      
  }

  }
};

checkerboard (5);
  