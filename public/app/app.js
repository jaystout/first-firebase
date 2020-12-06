import * as MODEL from '../model/model.js';

var userNumber = 0;

// function init(){
//     $(".get").click(() => {
//         console.log("name ", MODEL.myName);
//         console.log("secret name", MODEL.getMyName());
//     });

// this is for a user to signing up




$(document).ready(function(){
    MODEL.initFirebase();
    //init();
    initSite();
});


function initListenersNav(){
    $("#nav nav a").click(function(e){
        var btnID = this.id;
        MODEL.getView(btnID);
        console.log(btnID);
    });
    $(".navicon").click(function() {
        console.log('clicked');
        $('nav').toggleClass("navMobileView");
        $('nav .links').slideToggle(300).toggleClass('linksMobileView');
        //it works this way  $(".links").css("display", "flex");
      })

}

function initListenersApp(){

    $(document).on('click', '#SubmitBtn', function(e){
        e.preventDefault();
        let un = $("#uNameNew").val();
        let pw = $("#pWordNew").val();
    
        MODEL.userSignUp(un, pw);
        console.log('sign up');
    });
    
    
    //user logging out 
    $(document).on('click', '#logOut', function(){
        e.preventDefault();
        MODEL.logOutUser();
        console.log('log out');
    });

    
    
    $(document).on('click', '#logIn', function(e){
        e.preventDefault();
        // let un = "dsfdsfsdf@gmail.com";
        // let pw = "123456";
        let un = $("#uName").val();
        let pw = $("#pWord").val();
        console.log('log in');
    
        MODEL.logInUser(un, pw);

    });
    
    $(document).on('click', '#addData', function(){
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

function initListenersFooter(){
    $("#footer footer a").click(function(e){
        var btnID = this.id;
        MODEL.getView(btnID);
        console.log(btnID);
    });
}


function initSite() {
    $.get('views/nav.html', function(nav){
        $("#nav").html(nav);
        initListenersNav();
    });

    $.get("views/home/home.html", function (data){
        $("#app").html(data);
        initListenersApp();
    });

    $.get("views/footer.html", function (data){
        $("#footer").html(data);
        initListenersFooter();
    });
}



