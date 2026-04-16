import flags from './model/flags.js';

function carregar_bandeiras() {
    const main = document.querySelector('main')
    for (const bandeira of flags) {
        let div = `
        <div class="flag col-2 my-2 text-center">
            <img src="./imgs/flags/${bandeira.id}.png" alt="${bandeira.name}">
            <p>${bandeira.name}</p>
        </div>
        `;
    main.insertAdjacentHTML('beforeend', div);
    }
}

carregar_bandeiras();