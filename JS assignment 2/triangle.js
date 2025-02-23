/*
Q5. Check whether the triangle is Acute or Obtuse 
Write a program takes takes three angles and checks whether the triangle is acute or obtuse. 
Note: You have to complete Triangle_Check. No need to take any input 
*/

function Triangle_Check(angle1, angle2, angle3) {
    // Check if the given angles form a valid triangle
    if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0 || (angle1 + angle2 + angle3) !== 180) {
        return "Invalid triangle";
    }
    // Check if the triangle is obtuse
    if (angle1 > 90 || angle2 > 90 || angle3 > 90) {
        return "Obtuse";
    } else {
        // If none of the angles are greater than 90, it's an acute triangle
        return "Acute";
    }
}

// Example
console.log(Triangle_Check(60, 60, 60)); // This will print: Acute
