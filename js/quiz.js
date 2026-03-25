const quiz = [
    {
        question: "Hva betyr API?", // Informasjonsteknologi og medieproduksjon
        buttons: [
            {   
                label: "Application Programming Interface", 
                correct: true 
            },
            { 
                label: "Advanced Program Internet", 
                correct: false 
            },
            { 
                label: "Automatic Program Integration", 
                correct: false 
            },
            { 
                label: "Applied Programming Input", 
                correct: false 
            }
        ],
    },
    {
        question: "Hva er en halvleder?", // Elektro og datateknologi
        videoURL: "../video/andreas_klipping.mp4",
        buttons: [
            { 
                label: "Et materiale som alltid leder strøm", 
                correct: false 
            },
            { 
                label: "Et materiale som aldri leder strøm", 
                correct: false 
            },
            { 
                label: "Et materiale som kan lede strøm under bestemte forhold", 
                correct: true 
            },
            { 
                label: "Et isolerende materiale", 
                correct: false 
            }
        ]
    },
    {
        question: "Hva betyr universell utforming?",
        buttons: [
            { 
                label: "Design for barn",
                correct: false 
            },
            { 
                label: "Design som kan brukes av flest mulig", 
                correct: true 
            },
            { 
                label: 
                "Design kun for eldre", 
                correct: false 
            },
            { 
                label: "Design kun for sykehus", 
                correct: false 
            }
        ]
    },
    {
        question: "Hva er VO₂-maks?",
        videoURL: "../video/main.mp4",
        buttons: [
            { 
                label: "Maks muskelstyrke", correct: 
                false 
            },
            { 
                label: "Maks oksygenopptak i kroppen", 
                correct: true 
            },
            { 
                label: "Maks puls", 
                correct: false 
            },
            { 
                label: "Maks fettforbrenning", 
                correct: false 
            }
        ]
    },
    {
        question: "Hva betyr medieetikk?",
        buttons: [
            { 
                label: "Regler for datamaskiner", 
                correct: false 
            },
            { 
                label: "Ansvar og moral i publisering", 
                correct: true 
            },
            { 
                label: "Kameraoppsett", 
                correct: false 
            },
            { 
                label: "Filredigering", 
                correct: false }
        ]
    },
    {
        question: "Hva er globalisering?",
        buttons: [
            { 
                label: "Lokale markeder", 
                correct: false 
            },
            { 
                label: "Økt samarbeid og handel mellom land", 
                correct: true 
            },
            { 
                label: "Mindre handel", 
                correct: false 
            },
            { 
                label: "Bare turisme", 
                correct: false 
            }
        ]
    },
    {
        question: "Hva er CRM i salg?",
        buttons: [
            { 
                label: "Customer Relationship Management", 
                correct: true 
            },
            { 
                label: "Computer Retail Machine", 
                correct: false 
            },
            { 
                label: "Customer Retail Method", 
                correct: false 
            },
            { 
                label: "Commerce Retail Model", 
                correct: false 
            }
        ]
    },
    {
        question: "Hva er pneumatikk?",
        buttons: [
            { 
                label: "Luftbasert kraftsystem", 
                correct: true 
            },
            {
                 label: "Elektrisk motor", 
                 correct: false 
                },
            { 
                label: "Vannsystem", 
                correct: false 
            },
            { 
                label: "Sveising", 
                correct: false 
            }
        ]
    },
    {
        question: "Hva er vanlig arbeidstid i Norge for en fulltidsjobb?",
        buttons: [
            { 
                label: "Ca. 20 timer per uke", 
                correct: false 
            },
            { 
                label: "Ca. 37,5 timer per uke", 
                correct: true 
            },
            { 
                label: "Ca. 50 timer per uke", 
                correct: false 
            },
            {
                 label: "Ca. 60 timer per uke",
                 correct: false 
                }
        ]
    },
    {
        question: "Hva handler psykisk helse om?",
        buttons: [
            { 
                label: "Bare fysisk styrke", 
                correct: false 
            },
            { 
                label: "Hvordan vi har det mentalt og følelsesmessig", 
                correct: true 
            },
            { 
                label: "Hvor mye vi trener", 
                correct: false },
            { 
                label: "Hva vi spiser", 
                correct: false 
            }
        ]
    }
];


function startQuiz() {
    let navn = document.getElementById("navn").value;
    document.getElementById("startQuiz").style.display = "none";
    document.getElementById("quizContainer").style.display = "flex";
    loadQuiz();
}

let count = 0;
function loadQuiz() {
    let question = quiz[count];
    let h2 = document.getElementById("h2");
    let  buttons = document.getElementById("buttons");

    h2.textContent = question.question;

    let choices = question.buttons;

    for (let index = 0; index < choices.length; index++) {
        const choice = choices[index];
         buttons.innerHTML += `<button id="${index}" onclick="checkAnswer(${choice.correct}, ${index})">${choice.label}</button>`
        
    }

    // choices.forEach(choice => {

    //     buttons.innerHTML += `<button class="heroButton" onclick="checkAnswer()">${choice.label}</button>`
    // });


    
    

    
}


function checkAnswer(isCorrect, index) {
    count++;

    let button;

    let next;


    if(isCorrect) {
        document.getElementById(index).classList.add("correct")
        
        
    } else {
        document.getElementById(index).classList.add("wrong")
        
    }

    
    

}