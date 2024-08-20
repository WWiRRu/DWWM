const sidebar = document.querySelector('.sidebar');
const onBtn = document.querySelector('.sidebar-toggle');
const offBtn = document.querySelector('.close-btn');

onBtn.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar');
});

offBtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar');
});
