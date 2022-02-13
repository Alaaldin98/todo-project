// console.log("My name is Alaaaldin");
// var x = 4;
// var y = " Hello";
// var z;
// z = "Hello everyone";


// var names = prompt("Please enter your Name and Surname");
//         var gender = prompt("Please enter your gender");

        
    
//         var age = prompt("Please enter your age",);

//         if (age <= 0)
//         {
//             alert("Your input is wrong " );
//         }
          
    
//         confirm("Skip The Welcoming Message");

//         if (gender == 'male')
//         {
//             alert("Welcome, MR. " + names);

//         }
//         else if (gender == 'female')
//         {
//             alert("Welcome, MS. " + names);

//         } else {
//             alert("");
//         }
        


//      console.log(x+y);
// console.log(z);
// var promptAnswer= prompt("Taype your Name");
// var promptAnswer= prompt("Enter his/her gender");
// console.log(typeof(promptAnswer));
// console.log("Hello " + promptAnswer);
// console.log(`Welcome ${promptAnswer}`);
// console.log (typeof(5));
// console.log(typeof("56"));
// var fiv =5;
// var five ="5";
// console.log(fiv===five);
// if (promptAnswer === "alaa"){
//     alert (`hello ${promptAnswer}`);
// } 
// else if (promptAnswer===mohammed) {
//     alert(`Hello ${promptAnswer}`);
// } else {
//     alert("Hello man");   
// }
// switch (promptAnswer) {
//     case ===:
        
//         break;

//     default:
//         break;
// }
// var season = prompt  ("What is the season")
// switch (season) {
//     case "Spring":
//         alert ("Flowers");
    
//     break;
//         case "Summer" :
//     alert ("Kids");
//     break;

//     default:
//         break;
// *****
// var solve1 = "yes"; 
//         function yesono(answer) {
//     var ques = [] ; 
//     ques.push("")
//     return ques;      
//         }
        // console.log (yesono());

        function question1(q1) {
            var question1 =prompt("Do you love Summer?");
            return question1;
          
        }
        
        
        function question2(q2) {
            var question2 = prompt("Do you like Butterfly?");
            return question2;
        }

        function question3(q3) {
        var question3 = prompt("Do you have a car?");
        return question3 ;
        }
//         function loop(params) {
//             for (i = 0; i < ques.length; i++) {
               
//             }
//         }
// ****
    //    var arr[];
        // function condition(params) {
        //     if 
    
        // }
        // var userAnswers = [];
        // var questions = ["Hi Alaa","Hi Ali","Hi Adel"];
        // for( var i = 0; i < questions.length; i++ ) {
              
          
        //     userAnswers[i] = prompt(questions[i]);
        //     if (userAnswers[i]=="") {
        //         userAnswers[i]= "InValid";
        // }}
        // console.log("userAnswers", userAnswers)

        var userAnswers = [];
        var questions = [question1,"Hi Ali","Hi Adel"];
        
           
            
            userAnswers[0] = question1();
            
            userAnswers[1] = question2();
            userAnswers[2] = question3();
            for( var i = 0; i < questions.length; i++ ) {
            if(userAnswers[i] == "") userAnswers[i] = "invalid "
            }
        console.log("userAnswers", userAnswers)





        // var userAnswers = [];
        // var questions = ["Hi Alaa","Hi Ali","Hi Adel"];
        // for( var i = 0; i < questions.length; i++ ) {
        //     userAnswers[i] = prompt(questions[i]);
        //     if(userAnswers[i] == "") userAnswers[i] = "invalid "
        // }
        // console.log("userAnswers", userAnswers)
        