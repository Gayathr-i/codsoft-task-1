document.addEventListener('DOMContentLoaded', function() {
    const ingredients = document.querySelectorAll('.ingredient');
    ingredients.forEach((el) => {
        el.style.animationDelay = `${Math.random() * 2}s`;
    });
});
