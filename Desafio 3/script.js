//Mostrar campo de busca ao clicar no icone de lupa
document.getElementById('searchIcon').addEventListener('click', function () {
    const searchBox = document.getElementById('searchBox');
    searchBox.style.display = searchBox.style.display === 'block' ? 'none' : 'block';
});

// Simulação de API - Array com dados para os cards
const articles = [
    {
        img: './image/image-4.png',
        title: '15 comandos no GIT que os desenvolvedores precisam saber',
        text: 'Dominar os comandos GIT é uma habilidade que se conquista com...'
    },
    {
        img: './image/image-5.png',
        title: 'GIT e GitHub: o que são e quais as diferenças entre eles?',
        text: 'Git e GitHub são dois softwares de controle de versão essenciais para...'
    },
    {
        img: './image/image-6.png',
        title: 'GitHub Copilot ganha integração com GPT-4 e interface conversacional',
        text: 'O GitHub Copilot, ferramenta de desenvolvimento baseada em IA...'
    },
    {
        img: './image/image-6.png',
        title: 'GitHub Copilot ganha integração com GPT-4 e interface conversacional',
        text: 'Teste...'
    }
];

// Criação de função para criação de novos cards
function addCards() {
    const cardContainer = document.getElementById('cardContainer');
    // Uso do forEach para correr os array e criar a estrutura no HTML 
    articles.forEach(article => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'col-lg-4 col-md-6 mb-4';

        const cardHTML = `
            <div class="card card-custom">
                <img src="${article.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.text}</p>
                </div>
            </div>
        `;

        cardDiv.innerHTML = cardHTML;
        cardContainer.appendChild(cardDiv);
    });
}

// Acionar a criacao de novas divs
document.getElementById('loadMore').addEventListener('click', addCards);

document.addEventListener("DOMContentLoaded", function() {
    const searchBox = document.getElementById("searchBox");
    const articles = document.querySelectorAll(".article");

    searchBox.addEventListener("input", function() {
        const searchTerm = searchBox.value.toLowerCase();
        articles.forEach(article => {
            const title = article.dataset.title.toLowerCase();
            if (title.includes(searchTerm)) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        });
    });
});

