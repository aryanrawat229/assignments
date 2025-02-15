const marks = parseInt(prompt("enter the marks"));
let grade;
switch(true){
        case marks>=41 && marks<=50:
        grade="A";
        break;

        case marks>=40 && marks<=31:
            grade="B";
            break;
            
        case marks>=30 && marks<=21:
        grade="C";
        break;

        case marks>=20 && marks<=11:
            grade="D";
            break;

        case marks>=0 && marks<=10:
            grade="E";
            break;

        default:
            grade="Invalid Marks"

}

console.log(grade);