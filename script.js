let users = [];

// render user table
function renderUserTable() {
    const tableBody = document.getElementById('user-table-body');
    tableBody.innerHTML = '';
    users.forEach((user) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button class="delete-btn" data-id="${user.id}">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// add user
function addUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name && email) {
        const user = { id: users.length + 1, name, email };
        users.push(user);
        renderUserTable();
        document.getElementById('add-user-form').reset();
    }
}

// delete user
function deleteUser(id) {
    users = users.filter((user) => user.id!== id);
    renderUserTable();
}

// add event listeners
document.addEventListener('DOMContentLoaded', renderUserTable);
document.getElementById('add-btn').addEventListener('click', (e) => {
    e.preventDefault();
    addUser();
});
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        deleteUser(e.target.dataset.id);
    }
});
