import buttonLoading from './buttonLoading';
import service from './service';

const login = event => {
    const submitButton = document.getElementById('form-submit');
    const data = new FormData(event.target);

    event.preventDefault();

    buttonLoading.setLoading(submitButton);

    service
        .login(data.get('email'), data.get('password'))
        .then(() => buttonLoading.removeLoading(submitButton), console.log('error'));

    console.log(event);
};

document.getElementById('login-form').addEventListener('submit', login);
