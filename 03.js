const students = [
    {name : 'Mithun', marks : 95},
    {name : 'prabir', marks : 75},
    {name : 'alka', marks : 92},
    {name : 'shivam', marks : 70},
    {name : 'farman', marks : 99},
]

const checkresults = function (name) {
    let student = students.find( student => student.name.toLowerCase() === name.toLowerCase())
        if (student) {
            if (student.marks > 90) {
                return console.log(`Congratulations ${student.name}! you have cleared the exam`);
            } else {
                return console.log(`Sorry ${student.name}, you haven't cleared the exam`);
            }
        } else {
            return console.log(`Invalid User!`);
        }
}

checkresults('Mithun');
checkresults('Prabir');
checkresults('Mithun S');