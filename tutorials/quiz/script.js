//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues=0;
var lang;
var score=0;

var JSquestions=[

    {
        question: "How can you write a function in JavaScript?",
        choices: ["function(){}","let function = () => {}","All of the above", "None of the above"],
        answer: 3
    
    }, 
    {
        question: "In what ways can you store data with JavaScript locally?",
        choices: ["Variables","JSON","Objects","All of the above"],
        answer: 4
    
    },
    {
        question: "What are examples of loops AND timers in JavaScript?",
        choices: ["For loop","While loop & Do while loop", "setInterval", "All of the above"],
        answer: 4
    
    }, 
    {
        question: "Which of these types of variables is considered outdated in JavaScript?",
        choices: ["var","let","const","All of the above"],
        answer: 1
    
    },
    {
        question: "What is the difference between JSON and arrays?",
        choices: ["JSON uses key-value pairs to organize data","JSON data can be parsed to a JavaScript object", "Arrays are just a different form of JSON", "No. 1 and 2."],
        answer: 4
    
    },
    {
        question: "What is TRUE about destructuring in JavaScript",
        choices: ["It can extract the values from data such as arrays, objects, and JSON","It is uncommon in data-oriented JavaScript", "It allows programmers to assign specific data to an alias", "No. 1 and 3."],
        answer: 4
    
    }, 
    {
        question: "What kind of typing (e.g, static/dynamic typing) does JavaScript use?",
        choices: ["Static AND dynamic typing","Static typing","Dynamic typing","None of the above"],
        answer: 3
    
    },
    {
        question: "What is TypeScript?",
        choices: ["A popular superset of JavaScript with type safety features","A clone of JavaScript that is simply named differently","A version of JavaScript that has shorter lines of code so programmers can type it faster","None of the above"],
        answer: 1
    
    }, 
    {
        question: "Is JavaScript an object-oriented programming language?",
        choices: ["False","True","It is, but to a limited extent","None of the above"],
        answer: 2
    
    },
    {
        question: "What is another name for JavaScript?",
        choices: ["LimeScript","OpenJS Foundation","Both of the above","ECMAScript"],
        answer: 4
    
    },
    
    // part 2

    {
        question: "Which of the below will work in JavaScript?",
        choices: ['return 1 + "hello" + 2','let array = [1, "hi", "there", 2]', 'let array = [1, hi, there, %]', "No. 1 and 2."],
        answer: 4
    
    }, 
    {
        question: "How can you enforce type-safe equations in JavaScript?",
        choices: ["Double equal to","Triple equal to", "Single equal to", "All of the above"],
        answer: 2
    
    },
    {
        question: "What is FALSE about JavaScript?",
        choices: ["It is type-safe & statically typed", "None of the above", "All of the above", "It is type-unsafe and dynamically typed",],
        answer: 1
    
    }, 
    {
        question: "What are some frameworks that use JavaScript",
        choices: ["React","Node","Next","All of the above"],
        answer: 4
    
    },
    {
        question: "What are three different types of for loops in JavaScript?",
        choices: ["For loop","For each loop","For in & For of","All of the above"],
        answer: 4
    
    },
    {
        question: "How many threads can JavaScript handle by default?",
        choices: ["One","Two","As many as the system can handle","All of the above"],
        answer: 1
    
    }, 
    {
    question: "What is the difference between a do while loop and a regular while loop in JavaScript?",
        choices: ["A while loop checks the condition after executing the code","A do while loop executes code line by line and for every line checks if the condition is true","A do while loop does the action first, then check if it matches the condition","A do while loop is a different name for a regular while loop"],
        answer: 3
    
    },
    {
        question: "What is a class in JavaScript?",
        choices: ["A function that runs and can return an object with properties.", "A special function that defines default values for data.","A function designed for classroom use", "A function that serves as a blueprint to create objects"],
        answer: 4
    }, 
    {
        question: "What is an instance of a class in JavaScript?",
        choices: ["An object that represents the final output of the class","An object created from the class with its own properties and methods.","An object based on the class but not directly","A special object that serves as a copy of the class"],
        answer: 2
    
    },
    {
        question: "What is the this object in JavaScript?",
        choices: ["A special JavaScript object used to refer to any global value, for instance 'this.name' if the variable 'name' is assigned globally","A JavaScript object that refers to the primary value in a function","An object that refers to the object or instance that executed the code","A context-based object that refers to the most prominent value at the time"],
        answer: 3
    
    }             
];
/*var PYquestions=[

    {
        question: "What is the output of the following program : print(Hello World'[::-1])",
        choices: ["dlroW olleH","Hello Worl","d","Error"],
        answer: 1
    
    }, 
    {
        question: "Given a function that does not return any value, what value is shown when executed at the shell?",
        choices: ["int","bool","void","None"],
        answer: 4
    
    },
    {
        question: "Which module in Python supports regular expressions?",
        choices: ["re","regex","pyregex","None of the above"],
        answer: 1
    
    }, 
    {
        question: "What is the output of the following program : (tricky ques.)  print (0.1 + 0.2 == 0.3) ",
        choices: ["True","False","Machine Dependent","Error"],
        answer: 2
    
    },
    {
        question: "Which of the following is not a complex number?",
        choices: ["k = 2 + 3j","k = complex(2, 3)","k = 2 + 3l","k = 2 + 3J"],
        answer: 3
    
    },
    {
        question: "What does ~~~~~~5 evaluate to?",
        choices: ["+5","-11","+11","-5"],
        answer: 1
    
    }, 
    {
        question: "Given a string s = “Welcome”, which of the following code is incorrect?",
        choices: ["print s[0]","print s.lower()","s[1] = ‘r’","print s.strip()"],
        answer: 3
    
    },
    {
        question: "________ is a simple but incomplete version of a function.",
        choices: ["Stub","Function","A function developed using bottom-up approach","A function developed using top-down approach"],
        answer: 1
    
    }, 
    {
        question: "To start Python from the command prompt, use the command ______",
        choices: ["execute python","go python","python","run python"],
        answer: 3
    
    },
    {
        question: "Which of the following is correct about Python?",
        choices: ["It supports automatic garbage collection.","It can be easily integrated with C, C++, COM, ActiveX, CORBA, and Java","Both of the above","None of the above"],
        answer: 3
    
    }
                
];*/






//alert(questions.length);
document.getElementById("score").textContent="Score : "+0;
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".final-result").style.display="none";








document.querySelector(".choose-lang").addEventListener("click",function(){

    lang=document.getElementById("language").value+"questions";
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;

//    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display="block";
    
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
     for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/
    
//    window.location.href="#score";

});





document.querySelector(".submit-answer").addEventListener("click",function(){
//     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
//     alert(document.querySelector('input[name="options"]:checked').value);

    if(document.querySelector('input[name="options"]:checked').value===window[lang][countQues].choices[window[lang][countQues].answer-1]){
           
        score+=10;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle correct'>"+(countQues+1)+"</div>";
           
    }else{
    
        score-=5;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle incorrect'>"+(countQues+1)+"</div>";
    };
    
    if (countQues<window[lang].length-1){
        countQues++;
    }else{
        document.querySelector(".submit-answer").style.display="none";
        document.querySelector(".view-results").style.display="unset";

    }
    
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
    for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/

});

document.querySelector(".view-results").addEventListener("click",function(){
    
    document.querySelector(".final-result").style.display="block";
    
    document.querySelector(".solved-ques-no").innerHTML="You solved "+(countQues+1)+" questions of "+document.getElementById("language").value;
    
    var correct= document.getElementById("ques-view").getElementsByClassName("correct").length;
    
    document.querySelector(".right-wrong").innerHTML=correct+" were right and "+((countQues+1)-correct)+" were wrong";
    
    document.getElementById("display-final-score").innerHTML="Your final score is: "+score;
    
    if (correct/(countQues+1)>0.8){
        document.querySelector(".remark").innerHTML="Remark: Outstanding ! :)";
    }else if(correct/(countQues+1)>0.6){
        document.querySelector(".remark").innerHTML="Remark: Good, keep improving.";
    
    }else if(correct/(countQues+1)){
        document.querySelector(".remark").innerHTML="Remark: Better than the worst, learn more.";
    }else{
        document.querySelector(".remark").innerHTML="Remark: You might want to learn from the tutorials and the internet.";
    }
    
//    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click",function(){
    location.reload();

});

document.getElementById("about").addEventListener("click",function(){
    alert("Quiz Website Project Created By Digvijay Singh - Modified and used here (with credit) by Anirudh Sevugan");

});


/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});



/*Smooth Scroll End*/