const navs = document.getElementsByClassName('nav-item');
let showContents = 'demo';
for (let i = 0; i < navs.length; i++) {
    navs[i].addEventListener('click', (e) => {
        console.log(e.currentTarget.dataset.target);
        toggleContents(e.currentTarget.dataset.target);
    });
}

function toggleContents(target) {
    if (showContents == target) {
        console.log('no');
        return false;
    }

    if (target == 'demo') {
        document.getElementById('demo').classList.add('show');
        document.getElementById('demo').classList.remove('hidden');
        document.getElementById('docs').classList.remove('show');
        document.getElementById('docs').classList.add('hidden');

        document.getElementById('nav-demo').classList.add('active');
        document.getElementById('nav-docs').classList.remove('active');
    }
    if (target == 'docs') {
        document.getElementById('docs').classList.add('show');
        document.getElementById('docs').classList.remove('hidden');
        document.getElementById('demo').classList.remove('show');
        document.getElementById('demo').classList.add('hidden');

        document.getElementById('nav-docs').classList.add('active');
        document.getElementById('nav-demo').classList.remove('active');
    }
    showContents = target;

    return false;
}