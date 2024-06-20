document.getElementById('myForm').addEventListener('submit', function(event) {
    let messages = [];
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (name === '' || name == null) {
        messages.push('Name is required');
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        messages.push('Email is not valid');
    }

    if (messages.length > 0) {
        event.preventDefault();
        document.getElementById('errorMessages').innerText = messages.join(', ');
    }
});

document.querySelectorAll('.dropdown').forEach(function(dropdown) {
    dropdown.addEventListener('mouseenter', function() {
        this.querySelector('.dropdown-content').style.display = 'block';
    });
    dropdown.addEventListener('mouseleave', function() {
        this.querySelector('.dropdown-content').style.display = 'none';
    });
});

document.getElementById('updateButton').addEventListener('click', function() {
    document.getElementById('content').innerText = 'This is the updated content.';
});

