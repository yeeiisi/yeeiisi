const aliases = ['yeeiisi', 'Y3i$i'];
const aliasElement = document.getElementById('alias');
let currentAliasIndex = 0;

function changeAlias() {
    aliasElement.classList.add('hidden'); // Oculta el alias actual

    setTimeout(() => {
        currentAliasIndex = (currentAliasIndex + 1) % aliases.length;
        aliasElement.textContent = aliases[currentAliasIndex];

        aliasElement.className = 'alias'; // Reinicia la clase
        aliasElement.classList.add(currentAliasIndex === 0 ? 'alias-yeeiisi' : 'alias-y3iisi');

        aliasElement.classList.remove('hidden'); // Muestra el nuevo alias
    }, 500); // Tiempo para que se oculte
}

// Cambia el alias cada 2 segundos
setInterval(changeAlias, 2000);
