/*
1.Find Grades 
Your school has the following grading system based upon the marks (M) obtained by a student: 
 If M≤10, the grade will be E. 
 If 11≥M≤20, the grade will be D. 
 If 21≥M≤30, the grade will be C. 
 If 31≥M≤40, the grade will be B. 
 If 41≥M≤50, the grade will be A. 
Your friend will enter his marks out of 5050, and your task is to print his grades using a switch statement. 
Note: You have to complete findGrades function. No need to take any input. 
*/

function findGrades(marks) {
    let grade;

    switch (true) {
        case (marks <= 10):
            grade = 'E';
            break;
        case (marks >= 11 && marks <= 20):
            grade = 'D';
            break;
        case (marks >= 21 && marks <= 30):
            grade = 'C';
            break;
        case (marks >= 31 && marks <= 40):
            grade = 'B';
            break;
        case (marks >= 41 && marks <= 50):
            grade = 'A';
            break;
        default:
            grade = 'Invalid Marks';
    }

    console.log(`Your grade is: ${grade}`);
}

// Example
findGrades(25); // C
