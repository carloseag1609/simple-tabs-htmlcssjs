let tab = 1;

document.addEventListener('DOMContentLoaded', function () {
    showTabAndSection();
    changeTabAndSection();
});

function showTabAndSection() {
    // show the first tab and section
    document.querySelector(`.section-${tab}`).classList.add('show');
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
}

function changeTabAndSection() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', e => {
            e.preventDefault();
            tab = e.target.dataset.tab;

            // Change tab
            document.querySelector('.tab.active').classList.remove('active');
            document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

            // Change section
            document.querySelector('.section.show').classList.remove('show');
            document.querySelector(`.section-${tab}`).classList.add('show');

        })
    })
}
