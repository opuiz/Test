function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    //checkForName(formText)

    /*console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })*/

    if (Client.testicURL(formText)) {

        postData('/api', { url: formText })

            .then((res) => {
                // Polarity values come a little encrypted from the api, the following function shall make it more user friendly
                const polarityResolution = (score_tag) => {
                    let value;
                    if (score_tag.includes('P+')) {
                        value = 'strong positive polarity'
                    } else if (score_tag.includes('P')) {
                        value = 'positive polarity'
                    } else if (score_tag.includes('NEU')) {
                        value = 'neutral polarity'
                    } else if (score_tag.includes('N')) {
                        value = 'negative polarity'
                    } else if (score_tag.includes('N*')) {
                        value = 'strong negative polarity'
                    } else {
                        value = 'without polarity'
                    }
                    return value;
                    console.log(value);

                }                 
                // adding the data to html
                document.getElementById('polarity').innerHTML = `Polarity: ${res.score_tag}  (${polarityResolution(res.score_tag)}) `;
                document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
                document.getElementById('snippet').innerHTML = `Text Snippet: ${res.sentence_list[0].text}`;
            })
    }
}

// script from weather journal
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const userData = await response.json();
        console.log('Data received:', userData)
        return userData;
        console.log(userData);
    } catch (error) {
        console.log('Hier');
        console.log('error', error);
    }
};

export { handleSubmit }
