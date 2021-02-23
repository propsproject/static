const PW = 'toto';
const session = localStorage.getItem('session');

if (!session) {
  document.body.classList.add('is-static');
  document.querySelector('#login .loader').style.display = 'none';
  document.querySelector('#login .dialog').style.display = 'flex';

  document.querySelector('#login form').addEventListener('submit', function (event) {
    event.preventDefault();

    const value = document.querySelector('#login input').value;

    if (value == PW) {
      // console.log('good login');
      document.body.classList.remove('is-static');
      document.querySelector('#login').style.display = 'none';
      localStorage.setItem('session', 'true');
    } else {
      // console.log('wrong login');
      document.querySelector('#login .error').style.display = 'block';
    }
  });
} else {
  document.querySelector('#login').style.display = 'none';
}
