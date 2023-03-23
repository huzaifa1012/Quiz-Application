let data = [
    {
        q: 'What kind of language is HTML ?',
        opt1: "Programming",
        opt2: "Styling",
        opt3: "Markup",
        opt4: "Testing",
        a: "Markup"
    },
    {
        q: 'Do we face Tags in HTML ?',
        opt1: "No",
        opt2: "Yes",
        opt3: "Sometimes",
        opt4: "Not Now",
        a: "Yes"
    },
    {
        q: 'When did HTML 5 come out  ?',
        opt1: "1993",
        opt2: "2003",
        opt3: "2019",
        opt4: "2014",
        a: "2014"
    }
]


let index = 0;
const auto = () => {
    let question = document.getElementById('question')
    question.innerText = data[index].q
    let options = document.querySelectorAll('.options')

    options[0].nextElementSibling.innerText = data[index].opt1
    options[1].nextElementSibling.innerText = data[index].opt2
    options[2].nextElementSibling.innerText = data[index].opt3
    options[3].nextElementSibling.innerText = data[index].opt4

}
auto()


const next = () => {
    console.log(radio1.checked, radio2.checked, radio3.checked, radio4.checked);
}
