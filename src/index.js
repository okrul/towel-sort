
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let arr = [];

  
  if (Array.isArray(matrix) == false || matrix.length == 0)
  {
    return arr;
  }
  let back = false;
  matrix.forEach(element => {
    if (back)
    {
       for (i =  element.length; i > 0; i--)
       {
         arr.push(element[i-1]);
       }
       back = false;
    }
    else
    {
       for (i = 0; i <  element.length; i++)
       {
        arr.push(element[i]);
       }
       back = true;
    }
  });
  return arr;
}
