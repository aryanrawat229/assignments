/*
Q9. Unique Color Shirt 
Cetpa is very tasteful of clothes. He has N numbers of shirts hanging in the hanger in his wardrobe. Cetpa likes to 
wear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shirt 
of that color from his wardrobe. Now, he wants to know how many M unique color shirts are left in the wardrobe. Cetpa 
wants you to find M. 
Note: As there are many shades of a color so consider integers as a color name. i.e, color of shirt is 0,1,2, … , N. 
6 3 2 4 1 2 3 
Output 
2 
Sample test case explanation 
Input: C=3, 2, 4, 1, 2, 3 
Output: 2 
There are two 2-color shirts, and two 3-color shirts. So, after removing 2-color and 3-color shirts, the remaining shirts are one 
4-color shirt and one 1-color shirt i.e, 4, 1. 
Hence, the output will be 2. */

let arr=[1,2,3,4,1,2,5];

function uniqueShirts(arr){
    let colorCount={};

    //counting each color
    for(let color of arr){
        colorCount[color]=(colorCount[color] || 0) + 1;
    }

    //filter out repating color
    let uniqueColor=Object.keys(colorCount).filter(color => colorCount[color]===1);

    //return the count of unique colors
    return uniqueColor.length;

    }

    console.log(uniqueShirts(arr));
