function updatedStudents(students) {
    return students.map(student => {
        return {...student, role: 'student'};
    });
}
function highScores(students) {
    return students.filter(student => student.score >= 80);
}
function specificId(specificId){
    return students.find(student => student.id === specificId);
}
function averageScore(students){
    let totalScore = students.reduce((total, student) => total + student.score, 0);
    return totalScore / students.length;
}
function favoriteSubjects(students){
    return students.reduce((subjects, student) => {
        if (subjects[student.favoriteSubject]) {
            subjects[student.favoriteSubject]++;
        } else {
            subjects[student.favoriteSubject] = 1;
        }
        return subjects;
    }, {});
}
console.log(highScores(students));
