//destructuring of object

const course={
    courseName: "js in hindi",
    price: "000",
    courseInstructor: "Dev"
}

course.courseInstructor         //we can access by this syntax
//or
const {courseInstructor:instructor} =course
console.log(instructor);

// in react
const navbar = ({company}) =>{

}
navbar(company ="Dev")

//API written in json
// {
//     "name":"dev",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//some times we get api in array format  array of objects
