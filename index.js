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
    let opt1 = document.getElementById('opt1')
    let opt2 = document.getElementById('opt2')
    let opt3 = document.getElementById('opt3')
    let opt4 = document.getElementById('opt4')

    let radio = document.getElementById('radio')
    opt1.innerText = data[index].opt1
    opt2.innerText = data[index].opt2
    opt3.innerText = data[index].opt3
    opt4.innerText = data[index].opt4

}
auto()


const next = () => {
    ;
}
