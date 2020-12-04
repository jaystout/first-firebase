var _db;

export function initFirebase(){
    firebase.auth().onAuthStateChanged((user) => {
        if(user){
                console.log(user);
                _db = firebase.firestore();
        }else{
            console.log("No user");
            _db = {};
        }
    });
}

export function userSignUp(uName , pWord){
    firebase
    .auth()
    .createUserWithEmailAndPassword(uName, pWord)
    .then((result) => {
        console.log(result.user.uid);
    }) 
    .catch((error) =>{
        let errorCode = error.code;
        let errorMesage = error.message;
        
        console.log(`Error Code ${errorCode} Error Message ${errorMesage}`);
        alert(`Error Code ${errorCode} Error Message ${errorMesage}`);
    })
}

export function logInUser(uName, pWord){
    firebase
    .auth()
    .signInWithEmailAndPassword(uName, pWord)
    .then((result) => {
        console.log(result.user.uid);
    }) 
    .catch((error) =>{
        let errorCode = error.code;
        let errorMesage = error.message;
        
        console.log(`Error Code ${errorCode} Error Message ${errorMesage}`);
        alert(`Error Code ${errorCode} Error Message ${errorMesage}`);
    })
}


export function logOutUser(){
    firebase
    .auth()
    .signOut()
    .then(() => {
        console.log("User Signed Out!");
    })
    .catch((error) =>{
        let errorCode = error.code;
        let errorMesage = error.message;
        
        console.log(`Error Code ${errorCode} Error Message ${errorMesage}`);
      //  alert(`Error Code ${errorCode} Error Message ${errorMesage}`);
    })

}

export function addStudent(studentData){
   _db.collection("Students")
   .add(studentData)
   .then((doc) =>{
       console.log(`is added ${doc.id}`)
   }).catch((error) =>{
    let errorCode = error.code;
    let errorMesage = error.message;
    
    console.log(`Error Code ${errorCode} Error Message ${errorMesage}`);
    //alert(`Error Code ${errorCode} Error Message ${errorMesage}`);
})

}



export function getMyName(){
    return mySecretName;
}