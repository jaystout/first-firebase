import * as MODEL from '../model/model.js';

var userNumber = 0;

function init(){
    $(".get").click(() => {
        console.log("name ", MODEL.myName);
        console.log("secret name", MODEL.getMyName());
    });

// this is for a user to signing up
$("#SubmitBtn").click((e) => {
    e.preventDefault();
    let un = $("#uName").val();
    let pw = $("#pWord").val();

    MODEL.userSignUp(un, pw);

});


//user logging out 
$("#logOut").click((e) => {
    e.preventDefault();
    MODEL.logOutUser();
});


$("#logIn").click((e) => {
    e.preventDefault();

    // let un = "dsfdsfsdf@gmail.com";
    // let pw = "123456";

    let un = $("#uName").val();
    let pw = $("#pWord").val();

    MODEL.logInUser(un, pw);
});


$("#addData").click((e) => {
    e.preventDefault();

    let studentName = "Student" + userNumber;
    let studentClass = "ClassName" + userNumber;

    userNumber++;

    let stuObject ={
        studentName: studentName,
        studentClass: studentClass,
    }
    MODEL.addStudent(stuObject)


})

}
$(document).ready(function(){
    MODEL.initFirebase();
    init();
});