const userform = document.getElementById('userForm');
userform.addEventListener('submit',function(e){
  e.preventDefault();
  const userName = document.getElementById('username');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');

  localStorage.setItem('Username',userName.value);
  localStorage.setItem('Email',email.value);
  localStorage.setItem('Phone',phone.value);
  
})
