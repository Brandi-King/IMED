function runProgram() {

    
    let firstName = "Brandi";
    let lastName = "King";

    
    let fullName = firstName + " " + lastName;

    
    let upperName = fullName.toUpperCase();

    
    let score = 87.456;

    
    let roundedScore = score.toFixed(2);

    let message = "";

    
    if (score >= 90) {
        message = "Excellent performance!";
    } else if (score >= 70) {
        message = "Good job!";
    } else {
        message = "Needs improvement.";
    }

    
    let grade;
    let letterGrade = "B";

    switch (letterGrade) {
        case "A":
            grade = "You earned an A.";
            break;
        case "B":
            grade = "You earned a B.";
            break;
        case "C":
            grade = "You earned a C.";
            break;
        default:
            grade = "Grade not available.";
    }

    
    document.getElementById("output").innerHTML =
        "Student Name: " + upperName + "<br>" +
        "Rounded Score: " + roundedScore + "<br>" +
        message + "<br>" +
        grade;
}