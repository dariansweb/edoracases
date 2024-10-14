document.addEventListener('DOMContentLoaded', () => {
    const formContainers = document.querySelectorAll('.form-container');

    formContainers.forEach(container => {
        const toggleEditButton = container.querySelector('.toggle-edit');
        const toggleReadButton = container.querySelector('.toggle-read');

        toggleEditButton.addEventListener('click', () => {
            container.classList.add('flipped');
        });

        toggleReadButton.addEventListener('click', () => {
            container.classList.remove('flipped');
        });
    });
});
