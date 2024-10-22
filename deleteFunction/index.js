function handleFormSubmit(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const newUser = {
        username: username,
        email: email,
        phone: phone
    };

    const users = JSON.parse(localStorage.getItem('UserDetails')) || [];
    users.push(newUser);

    localStorage.setItem('UserDetails', JSON.stringify(users));

    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';

    showUsers();
}

function showUsers() {
    const listItem = document.getElementById('listItem');
    listItem.innerHTML = '';

    const users = JSON.parse(localStorage.getItem('UserDetails')) || [];

    for (let i = 0; i < users.length; i++) {
        const li = document.createElement('li');
        li.textContent = 'Username: ' + users[i].username + ', Email: ' + users[i].email + ', Phone: ' + users[i].phone;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.setAttribute('data-index', i);

        deleteButton.onclick = function() {
            deleteUser(i);
        };

        li.appendChild(deleteButton);
        listItem.appendChild(li);
    }
}

function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem('UserDetails')) || [];

    users.splice(index, 1);

    localStorage.setItem('UserDetails', JSON.stringify(users));

    showUsers();
}