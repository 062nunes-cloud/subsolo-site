const WHATSAPP = "5500000000000"; // TROQUE PELO SEU NÚMERO

const products = [
  {id:1,name:"Camiseta Subsolo",category:"camisetas",price:89.90,type:"Oversized"},
  {id:2,name:"Moletom Subsolo",category:"moletons",price:169.90,type:"Premium"},
  {id:3,name:"Boné Subsolo",category:"bones",price:69.90,type:"Aba curva"}
];

const grid = document.getElementById("productGrid");
const count = document.getElementById("count");
const toast = document.getElementById("toast");

function money(value){
  return value.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
}

function render(filter="todos"){
  const list = filter==="todos" ? products : products.filter(p=>p.category===filter);
  count.textContent = `${list.length} ${list.length===1 ? "PEÇA" : "PEÇAS"}`;

  grid.innerHTML = list.map(p=>`
    <article class="product-card">
      <div class="product-image">
        <span>SUBSOLO</span>
        <small>${String(p.id).padStart(2,"0")}</small>
      </div>
      <div class="product-info">
        <div>
          <h3>${p.name}</h3>
          <p>Streetwear • ${p.type}</p>
        </div>
        <strong>${money(p.price)}</strong>
      </div>
      <a class="buy" href="${whatsappLink(p)}" target="_blank">COMPRAR</a>
    </article>
  `).join("");
}

function whatsappLink(product){
  const text = `Olá! Quero comprar o ${product.name} por ${money(product.price)}.`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

document.querySelectorAll(".filter").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    render(btn.dataset.filter);
  });
});

document.getElementById("contactBtn").href =
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá! Vim pelo site da SUBSOLO.")}`;

document.getElementById("menuBtn").addEventListener("click",()=>{
  document.getElementById("nav").classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link=>{
  link.addEventListener("click",()=>document.getElementById("nav").classList.remove("open"));
});

render();
