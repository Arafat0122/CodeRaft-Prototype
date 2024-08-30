// Display SweetAlert2 message when "Learn Web Development" button is clicked
document.getElementById('learn-webdev').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default action of the link

    Swal.fire({
        title: 'Coming Soon!',
        text: 'Our academy is going to open soon. Stay tuned!',
        icon: 'info',
        confirmButtonText: 'OK',
        confirmButtonColor: '#00b4d8'
    });
});

// Contact Form Submission with SweetAlert2
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Retrieve the user's name from the form input
    var userName = document.getElementById('name').value;

    // Display SweetAlert2 with the user's name
    Swal.fire({
        title: 'Thank you, ' + userName + '!',
        text: 'We appreciate you reaching out. We will get back to you shortly.',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#00b4d8'
    });

    // Add form submission logic here (e.g., send data to server)
});