let data = [
    {
        q: 'What kind of language is HTML ?',
        opt1: "Programming",
        opt2: "Styling",
        opt3: "Markup",
        opt4: "Testing",
        a: "opt3"
    },
    {
        q: 'Do we face Tags in HTML ?',
        opt1: "No",
        opt2: "Yes",
        opt3: "Sometimes",
        opt4: "Not Now",
        a: "opt2"
    },
    {
        q: 'When did HTML 5 come out  ?',
        opt1: "1993",
        opt2: "2003",
        opt3: "2019",
        opt4: "2014",
        a: "opt4"
    }
]


let index = 0;
const question = document.getElementById('question')
const options = document.querySelectorAll('.options')
const total = options.length
let right = 0
let wrong = 0

const auto = () => {
    question.innerText = data[index].q
    options[0].nextElementSibling.innerText = data[index].opt1
    options[1].nextElementSibling.innerText = data[index].opt2
    options[2].nextElementSibling.innerText = data[index].opt3
    options[3].nextElementSibling.innerText = data[index].opt4
}

const submitQuiz = () => {
    let answers = next()
    if (answers === data[index].a) {
        right++
        console.log("right", right)
    }
    else {
        wrong++
        console.log("worng", wrong)
    }
    index++
    auto()

}


// const next = () => {
//     let selectedOption;
//     options.forEach((input) => {
//       if (input.checked) {
//         selectedOption = input.value;
//       }
//     });
//     return selectedOption || 'No answer selected';
//   }


const next = () => {
    let selectedOption
    options.forEach(
        (input) => {
            if (input.checked) {
                selectedOption = input.value
            }

        })
    return selectedOption
}






auto()