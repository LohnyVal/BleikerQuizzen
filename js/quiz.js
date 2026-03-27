const quiz = [
  {
    
    question: "Hva betyr API?", // Informasjonsteknologi og medieproduksjon
    buttons: [
      {
        label: "Application Programming Interface",
        correct: true,
      },
      {
        label: "Advanced Program Internet",
        correct: false,
      },
      {
        label: "Automatic Program Integration",
        correct: false,
      },
      {
        label: "Applied Programming Input",
        correct: false,
      },
    ],
  },
  {
    question: "Hva er en halvleder?", // Elektro og datateknologi
    buttons: [
      {
        label: "Et materiale som alltid leder strøm",
        correct: false,
      },
      {
        label: "Et materiale som aldri leder strøm",
        correct: false,
      },
      {
        label: "Et materiale som kan lede strøm under bestemte forhold",
        correct: true,
      },
      {
        label: "Et isolerende materiale",
        correct: false,
      },
    ],
  },
  {
    question: "Hva betyr universell utforming?",
    buttons: [
      {
        label: "Design for barn",
        correct: false,
      },
      {
        label: "Design som kan brukes av flest mulig",
        correct: true,
      },
      {
        label: "Design kun for eldre",
        correct: false,
      },
      {
        label: "Design kun for sykehus",
        correct: false,
      },
    ],
  },
  {
    question: "Hva er VO₂-maks?",

    buttons: [
      {
        label: "Maks muskelstyrke",
        correct: false,
      },
      {
        label: "Maks oksygenopptak i kroppen",
        correct: true,
      },
      {
        label: "Maks puls",
        correct: false,
      },
      {
        label: "Maks fettforbrenning",
        correct: false,
      },
    ],
  },
  {
    question: "Hvilke nett er skal vi bruke på skolen?",
    videoURL: "https://drive.google.com/file/d/1-mKkSANgRtiHtxVD7wz3370bsueU5hpW/preview",
    buttons: [
      {
        label: "FRID gjestnett",
        correct: false,
      },
      {
        label: "FRID",
        correct: true,
      },
      {
        label: "FRID-iot",
        correct: false,
      },
    ],
  },
  {
    question: "Hva betyr medieetikk?",
    buttons: [
      {
        label: "Regler for datamaskiner",
        correct: false,
      },
      {
        label: "Ansvar og moral i publisering",
        correct: true,
      },
      {
        label: "Kameraoppsett",
        correct: false,
      },
      {
        label: "Filredigering",
        correct: false,
      },
    ],
  },
  {
    question: "Hva er globalisering?",
    buttons: [
      {
        label: "Lokale markeder",
        correct: false,
      },
      {
        label: "Økt samarbeid og handel mellom land",
        correct: true,
      },
      {
        label: "Mindre handel",
        correct: false,
      },
      {
        label: "Bare turisme",
        correct: false,
      },
    ],
  },
  {
    question: "Hva er CRM i salg?",
    buttons: [
      {
        label: "Customer Relationship Management",
        correct: true,
      },
      {
        label: "Computer Retail Machine",
        correct: false,
      },
      {
        label: "Customer Retail Method",
        correct: false,
      },
      {
        label: "Commerce Retail Model",
        correct: false,
      },
    ],
  },
  {
    question: "Hva er pneumatikk?",
    buttons: [
      {
        label: "Luftbasert kraftsystem",
        correct: true,
      },
      {
        label: "Elektrisk motor",
        correct: false,
      },
      {
        label: "Vannsystem",
        correct: false,
      },
      {
        label: "Sveising",
        correct: false,
      },
    ],
  },
  {
    question: "Hva er vanlig arbeidstid i Norge for en fulltidsjobb?",
    buttons: [
      {
        label: "Ca. 20 timer per uke",
        correct: false,
      },
      {
        label: "Ca. 37,5 timer per uke",
        correct: true,
      },
      {
        label: "Ca. 50 timer per uke",
        correct: false,
      },
      {
        label: "Ca. 60 timer per uke",
        correct: false,
      },
    ],
  },
  {
    question: "Hva handler psykisk helse om?",
    buttons: [
      {
        label: "Bare fysisk styrke",
        correct: false,
      },
      {
        label: "Hvordan vi har det mentalt og følelsesmessig",
        correct: true,
      },
      {
        label: "Hvor mye vi trener",
        correct: false,
      },
      {
        label: "Hva vi spiser",
        correct: false,
      },
    ],
  }
];

let correctSound = new Audio("../sound/right.mp3");
let wrongSound = new Audio("../sound/wrong.mp3");
let doneSound = new Audio("../sound/quizDone.mp3");

let isAnswered = false;
let count = 0;
let poengSum = 0;

let nextContainer = document.getElementById("next");
let h2 = document.getElementById("h2");
let buttons = document.getElementById("buttons");
let quizContainer = document.getElementById("quizContainer");
let summaryContainer = document.getElementById("summaryContainer");
let videoContainer = document.getElementById("video");
let feedback = document.getElementById("feedback");
let showCurrentQuestion = document.getElementById("showCurrentQuestion");

function startQuiz() {
  let navn = document.getElementById("navn").value;

  document.getElementById("startQuiz").style.display = "none";
  quizContainer.style.display = "flex";

  let person = {
    navn: navn,
    poeng: poengSum,
  };

  localStorage.setItem("bruker", JSON.stringify([person]));
  loadQuiz();
}

function loadQuiz() {
  isAnswered = false;

  let question = quiz[count];

  showCurrentQuestion.textContent = `Spørsmål ${count + 1} / ${quiz.length}`;
  h2.textContent = question.question;


  buttons.innerHTML = "";

  if (question.videoURL) {
    videoContainer.innerHTML = `
      <iframe 
        src="${question.videoURL}" 
        width="400" 
        height="300" 
        allow="autoplay"
        frameborder="0">
      </iframe>
    `;
    videoContainer.style.display = "block";
  } else {
    videoContainer.style.display = "none";
    videoContainer.innerHTML = "";
  }

  
  question.buttons.forEach((choice, index) => {
    buttons.innerHTML += `
      <button onclick="checkAnswer(${choice.correct}, ${index})" id="${index}">
        ${choice.label}
      </button>
    `;
  });
}

function checkAnswer(isCorrect, index) {
  if (isAnswered) return;

  isAnswered = true;

  const allButtons = buttons.querySelectorAll("button");
  allButtons.forEach((btn) => (btn.disabled = true));

  if (isCorrect) {
    document.getElementById(index).classList.add("correct");
    poengSum++;

    correctSound.currentTime = 0;
    correctSound.play();

    feedback.textContent = "Riktig ✅";
  } else {
    document.getElementById(index).classList.add("wrong");

    wrongSound.currentTime = 0;
    wrongSound.play();

    feedback.textContent = "Feil ❌";
  }

  nextContainer.innerHTML = `<button onclick="nextQuestion()">Next</button>`;

  let person = JSON.parse(localStorage.getItem("bruker"));
  person[0].poeng = poengSum;
  localStorage.setItem("bruker", JSON.stringify(person));
}

function nextQuestion() {
  count++;

  nextContainer.innerHTML = "";
  buttons.innerHTML = "";
  h2.textContent = "";
  feedback.textContent = "";

  if (count >= quiz.length) {
    let highscoreList = JSON.parse(localStorage.getItem("highscore")) || [];
    let currentUser = JSON.parse(localStorage.getItem("bruker"));

    highscoreList = [...highscoreList, ...currentUser];
    highscoreList.sort((a, b) => b.poeng - a.poeng);

    localStorage.setItem("highscore", JSON.stringify(highscoreList));

    let highscoreDOM = document.getElementById("highscore");
    highscoreDOM.innerHTML = "";

    highscoreList.forEach((player, index) => {
      highscoreDOM.innerHTML += `
        <li>
          <span>${index + 1}: ${player.navn}</span>
          <span>${player.poeng}</span>
        </li>
      `;
    });

    doneSound.currentTime = 0;
    doneSound.play();

    summaryContainer.style.display = "flex";
    quizContainer.style.display = "none";

    document.getElementById("points").textContent =
      `Du fikk totalt ${poengSum} av ${quiz.length} poeng`;
  } else {
    loadQuiz();
  }
}
