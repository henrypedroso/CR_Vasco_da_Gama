// GESTÃO DE DADOS - ARRAYS DE OBJETOS
const conquistas = [
    { titulo: "Libertadores 1998", desc: "O topo da América no centenário." },
    { titulo: "Copa Mercosul 2000", desc: "A virada histórica no Palestra Itália." },
    { titulo: "Brasileirão (4x)", desc: "1974, 1989, 1997, 2000 - Hegemonia nacional." },
    { titulo: "Sul-Americano 1948", desc: "O primeiro campeão continental do mundo." }
];

const planos = [
    { nome: "Plano Camisas Negras", preco: "R$ 29,90/mês", benef: "Desconto em ingressos e rede parceira." },
    { nome: "Plano Almirante", preco: "R$ 99,90/mês", benef: "Prioridade máxima e camisa oficial anual." },
    { nome: "Plano Dinamite", preco: "R$ 199,90/mês", benef: "Acesso ao lounge VIP e experiências exclusivas." }
];

// RENDERIZAÇÃO DINÂMICA
function initDynamicContent() {
    const carousel = document.getElementById('carousel-container');
    const accordion = document.getElementById('plans-accordion');

    // Render Carousel
    conquistas.forEach(item => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `<h3>${item.titulo}</h3><p>${item.desc}</p>`;
        carousel.appendChild(div);
    });

    // Render Accordion
    planos.forEach((plano, index) => {
        const item = document.createElement('div');
        item.className = 'accordion-item';
        item.innerHTML = `
            <div class="accordion-header" onclick="toggleAccordion(${index})">${plano.nome}</div>
            <div class="accordion-content">
                <p><strong>Preço:</strong> ${plano.preco}</p>
                <p>${plano.benef}</p>
                <button class="cta-button mini" style="margin-top:1rem">Assinar</button>
            </div>
        `;
        accordion.appendChild(item);
    });
}

// LÓGICA DO ACORDEÃO
function toggleAccordion(index) {
    const items = document.querySelectorAll('.accordion-item');
    items[index].classList.toggle('active');
}

// ACESSIBILIDADE - FONTE
let currentFontSize = 16;
function changeFontSize(delta) {
    const newSize = currentFontSize + delta;
    if (newSize >= 12 && newSize <= 24) {
        currentFontSize = newSize;
        document.documentElement.style.fontSize = `${currentFontSize}px`;
    }
}

// ALTO CONTRASTE
const contrastBtn = document.getElementById('contrast-toggle');
contrastBtn.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// INICIALIZAÇÃO
window.onload = initDynamicContent;

// ANIMAÇÃO DE SCROLL SIMPLES
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
});