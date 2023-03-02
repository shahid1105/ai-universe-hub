const loadAllData = () => {
    const url = ` https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
        .then(res => res.json())
        .then(data => showAllData(data.data.tools))
}

const showAllData = (data) => {
    console.log(data);
    const cardContainer = document.getElementById('card');
    
    data.forEach(singleData => {
        const cardDiv = document.createElement('div');
    cardDiv.classList.add('col');
    cardDiv.innerHTML = `
    <div class="card h-100">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
    `
    cardContainer.appendChild(cardDiv)
    });
}

loadAllData();