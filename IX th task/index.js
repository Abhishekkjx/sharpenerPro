function handleFormSubmit(event){
    event.preventDefault();
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
  
    const userDetails = {
      'username':username.value,
      'email':email.value,
      'phone':phone.value
    };
    localStorage.setItem('UserDetails', JSON.stringify(userDetails));
    
  }