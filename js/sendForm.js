const sendForm = () => {
    const form = document.querySelector('.modal')

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const text = form.querySelector('input[type=text]')
        const tel = form.querySelector('input[type=tel]')
        const email = form.querySelector('input[type=email]')

        const sendObj = {
            name: text.value,
            phone: tel.value,
            email: email.value
        }

        // fetch('https://jsonplaceholder.typicode.com/posts', {
        fetch('https://jsonplaceholder.typicode.com/wrong-endpoint', {

            method: 'POST',
            body: JSON.stringify(sendObj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(async (response) => {
                if (response.ok) {
                    const json = await response.json();
                    return json;
                } else {
                    alert("Ошибка HTTP: " + response.status);
                }
            })
            .then((json) =>
                console.log(json))
            .finally(() => {
                form.reset();
                console.log('Форма очищена');
            })
    })

}

sendForm()