const loadAllData = () => {
    const url = ` https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDefaultData(data.data.tools))
}

const showDefaultData = (data) => {
    const cardContainer = document.getElementById('card');
    cardContainer.innerHTML = '';
    // show 6 card by default
    const seeMore = document.getElementById('see-more');
    if(data.length > 6){
        data = data.slice(0, 6);
        seeMore.classList.remove('d-none');
    }
    else{
        seeMore.classList.add('d-none');
    }


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
                <button onclick="universeDetails('${singleData.id}')" class="border border-0 bg-danger-subtle rounded-circle" data-bs-toggle="modal" data-bs-target="#universeHubModal">
                <i class="fa-solid fa-arrow-right text-danger p-2"></i>
                </button>
            </div>
      </div>
  </div>
    `
    cardContainer.appendChild(cardDiv)
    });
    // stop loader spinner
    toggleLoader(false);
}

// start loader spinner
const toggleLoader = isLoader => {
    const loaderSection = document.getElementById('load-spinner');
    if(isLoader){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none');
    }
}

const universeDetails = id =>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.data))
}



// btn-see-more and load all data 

// document.getElementById('btn-see-more').addEventListener('click', function(){
//     // const url = `https://openapi.programming-hero.com/api/ai/tools`;
//     // fetch(url)
//     // .then(res => res.json())
//     // .then(allData => console.log(allData.data.tools))
//     loadAllData()
//     showDefaultData()
// })
// const showAllData = ()=> {

// }
loadAllData();
