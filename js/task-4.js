const form = document.querySelector('.login-form');

function formHandler(event) {

    event.preventDefault(); //сторінка не перезавантажується
    
    const data = {
        email: event.target.email.value.trim(),
        password: event.target.password.value.trim(),
    }
    console.log(data);

    if (data.email === '') {
        alert('All form fields must be filled in');
    } else if (data.password === '') {
        alert('All form fields must be filled in');
    }

    form.reset(); // очищення значення полів
}

form.addEventListener('submit', formHandler);
