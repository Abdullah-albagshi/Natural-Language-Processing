let apiKey = '';
let resultText = document.getElementById('results');
let loader = document.getElementById('loader');


function handleForm(event) {
    event.preventDefault();
    let formURL = document.getElementById('URL').value;
    if (Client.validURL(formURL)) {
        loader.classList.add('loader');
        removeOldText();
        const res = fetchFromApi(formURL).then((data) => {
            updateUI(data);
        });
    } else {
        alert('the URL is Invalid')
    }
}

const fetchFromApi = async(url = '') => {
    try {
        let serverRes = await (
            await fetch(
                `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=en&url=${url}`
            )
        ).json();
        return serverRes;
    } catch (error) {
        console.log(error);
    }
};

window.addEventListener('load', async() => {
    apiKey = await Client.key();
});

function updateUI(data) {
    loader.classList.remove('loader');
    const {
        model,
        score_tag,
        agreement,
        subjectivity,
        confidence,
        irony,
    } = data;
    let h3 = document.createElement('h3');
    h3.className = 'results__text';
    h3.innerHTML = `model : ${model} <br> score tag : ${score_tag}
    <br> agreement : ${agreement} <br> subjectivity : ${subjectivity}
    <br> confidence : ${confidence} <br> irony : ${irony} `;
    resultText.appendChild(h3);
}

function removeOldText() {
    if (resultText.childNodes.length) {
        resultText.removeChild(resultText.childNodes[0]);
    }
}
export { handleForm };