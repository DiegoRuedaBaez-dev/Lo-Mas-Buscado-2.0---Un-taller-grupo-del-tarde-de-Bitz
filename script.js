const data = [
    {
        name: "Agente 47",
        img: "img/47.webp",
        desc: "Asesino profesional con habilidades de infiltración avanzada.",
        reward: "$100M USD",
        tags: ["SIGILO", "MILITAR", "ALTA PRIORIDAD"]
    },
    {
        name: "John Wick",
        img: "img/babayaga.webp",
        desc: "El Boogeyman del submundo criminal.",
        reward: "$50M USD",
        tags: ["VENGANZA", "COMBATE", "LEYENDA"]
    },
    {
        name: "Kefka Palazzo",
        img: "img/kefka.webp",
        desc: "Entidad destructiva responsable de caos global.",
        reward: "999M GIL",
        tags: ["MAGIA", "DESTRUCCIÓN", "APOCALIPSIS"]
    },
    {
        name: "Juez Holden",
        img: "img/holden.webp",
        desc: "Figura enigmática de extrema violencia y manipulación.",
        reward: "$75M USD",
        tags: ["TERROR", "INTELIGENCIA", "PELIGRO EXTREMO"]
    },
    {
        name: "Trevor Phillips",
        img: "img/trevor.webp",
        desc: "Criminal impredecible y altamente violento.",
        reward: "$25M USD",
        tags: ["CAOS", "EXPLOSIVOS", "CRIMINAL"]
    }
];

let index = 0;

const img = document.getElementById("img");
const name = document.getElementById("name");
const desc = document.getElementById("desc");
const reward = document.getElementById("reward");
const tags = document.getElementById("tags");
const counter = document.getElementById("counter");

function render(){
    const item = data[index];

    img.src = item.img;
    name.textContent = item.name;
    desc.textContent = item.desc;
    reward.textContent = "Recompensa: " + item.reward;

    tags.innerHTML = "";
    item.tags.forEach(t => {
        tags.innerHTML += `<span class="tag">${t}</span>`;
    });

    counter.textContent = `${index + 1} / ${data.length}`;
}

document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % data.length;
    render();
});

document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + data.length) % data.length;
    render();
});

render();