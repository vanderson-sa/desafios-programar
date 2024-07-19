document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.experience-item');
    const contents = document.querySelectorAll('.experience-content');

    function activateContent(target) {
        items.forEach(item => item.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        const item = document.querySelector(`[data-target="${target}"]`);
        const content = document.querySelector(target);

        if (item && content) {
            item.classList.add('active');
            content.classList.add('active');
        }
    }

    items.forEach(item => {
        item.addEventListener('click', function() {
            activateContent(this.dataset.target);
        });
    });

    if (items.length > 0) {
        activateContent(items[0].dataset.target);
    }
});
