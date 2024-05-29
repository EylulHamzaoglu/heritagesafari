document.addEventListener("DOMContentLoaded", function() {
    const signInButton = document.getElementById('signIn');
    const signUpButton = document.getElementById('signUp');
    const container = document.getElementById('container');

    if (signInButton) {
        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }

    if (signUpButton) {
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });
    }
});
