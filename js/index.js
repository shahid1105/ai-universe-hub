const loadAllData = () => {
    const url = ` https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
        .then(res => res.json())
        .then(data => showAllData(data.data.tools))
}

const showAllData = (data) => {
    console.log(data);
    const cardContainer = document.getElementById('card');
    // show 6 card by default
    data = data.slice(0, 6);
    data.forEach(singleData => {
        console.log(singleData);
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col',);
    cardDiv.innerHTML = `
    <div class="card h-100 p-3">
    <img style="height: 300px; width: 437;" class="img-fluid rounded-2" src="${singleData.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title mb-4 fw-bold">Features</h5>
      <p class="card-text">1. ${singleData.features[0]}</p>
      <p class="card-text">2. ${singleData.features[1]}</p>
      <p class="card-text">3. ${singleData.features[2]}</p>
      </div>
      <hr>
      <div class="d-flex flex-row justify-content-between align-items-center">
            <div>
                <h5 class="card-title mb-4 fw-bold">${singleData.name}</h5>
                <p class="card-text"><i class="fa-solid fa-calendar-days"></i> ${singleData.published_in}</p>
            </div>
            <div>
                <p><i class="fa-solid fa-arrow-right text-danger border bg-danger-subtle rounded-circle p-2"></i></p>
            </div>
      </div>
  </div>
    `
    cardContainer.appendChild(cardDiv)
    });
}

loadAllData();