const inputNumber = document.getElementById("inputNumber");
const container = document.querySelector(".container");


const generateWord = (n) => {
    let word = "";
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i=0; i<n; ++i){
        const random = (Math.random()*25).toFixed(0);
        word += alpha[random]
    }
    return word;
};

let wrd = generateWord();


const generatePara  = () => {
    const numOfWord = Number(inputNumber.value);
    const para = document.createElement("p");
    let sentence = "";

    for(let i=0; i<numOfWord; ++i){
        const randomNumber = (Math.random()*15).toFixed(0);
        sentence += generateWord(randomNumber);
        sentence += " ";
    }

    console.log(sentence)

    para.innerText = sentence;
    para.setAttribute("class", "generatedPara");
    container.append(para)
};