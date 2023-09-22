function studentGradeGenerator(marks) {
    //grading system
    // A - 80 to 100
    //B - 60 to 79
    //C - 49 to 59
    //D - 40 to 48
    //E - 0 to 39 
    if (marks>79 && marks <= 100) {
        console.log('A');
    }else if (marks<=79 && marks >=60) {
        console.log('B');
    }else if (marks<60 && marks >= 49) {
        console.log('C');
    }else if (marks<49 && marks >= 40) {
        console.log('D');
    }else if (marks < 40 && marks >= 0) {
        console.log('E');
    }else {
        console.log('Student marks should be a number between 0 to 100!')
    }
}
//studentGradeGenerator(50);