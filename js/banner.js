if (document.body.classList.contains('page-offering')) {
  localStorage.setItem('wasoffering', 'true');
} else {
  if (localStorage.getItem('wasoffering') == 'true') {
    document.querySelector('#regulation-banner .is-offering').style.display = 'none';
    document.querySelector('#regulation-banner .was-offering').style.display = 'block';
    document.querySelector('#regulation-banner').style.display = 'block';
    document.body.classList.add('is-static');
  }

  localStorage.removeItem('wasoffering', 'false');
}

document.querySelector('#regulation-banner .close-button').addEventListener('click', function () {
  document.querySelector('#regulation-banner').style.display = 'none';
  document.body.classList.remove('is-static');
});


// Banner message
localStorage.setItem('closed-banner-message', 'true');
if (localStorage.getItem('closed-banner-message') != 'true') {
  document.querySelector('.banner-message').style.display = 'block';
}

document.querySelector('.banner-message .close-button').addEventListener('click', function () {
  document.querySelector('.banner-message').style.display = 'none';
  localStorage.setItem('closed-banner-message', 'true');
});
