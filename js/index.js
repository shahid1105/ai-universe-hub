const loadAllData = (dataLimit) => {
    const url = ` https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDefaultData(data.data.tools, dataLimit))
}

const showDefaultData = (data, dataLimit) => {
    const cardContainer = document.getElementById('card');
    cardContainer.innerHTML = '';
    // show 6 card by default
    const seeMore = document.getElementById('see-more');
    if (data.length > 6 && dataLimit) {
        data = data.slice(0, 6);
        seeMore.classList.remove('d-none');
    }
    else {
        seeMore.classList.add('d-none');
    }


    data.forEach(singleData => {
        console.log(singleData);
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
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
    if (isLoader) {
        loaderSection.classList.remove('d-none');
    }
    else {
        loaderSection.classList.add('d-none');
    }
}

const universeDetails = id => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayUniverseDetails(data.data))
}
const displayUniverseDetails = (universeDetails) => {
    console.log(universeDetails);
    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = '';
    const modalDiv = document.createElement('div');
    modalDiv.classList.add('modal-content');
    modalDiv.innerHTML = `
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex flex-column flex-md-row flex-lg-row justify-content-md-evenly justify-content-lg-evenly mb-5">
        <section>
        <div class="card mb-2 mb-md-0 mb-lg-0" style="width: 25rem;">
            <div class="card-body bg-danger-subtle">
            <h5 class="card-title mb-4 fw-bold mb-5">${universeDetails.description}</h5>

            <div class="container mb-5">
                <div class="row gap-3">
                <div style="width: 110px; height: 100px;" class="col-1 bg-white rounded-4 py-3 px-2">
                   <p class="text-warning fw-semibold">${universeDetails.pricing? universeDetails?.pricing[0].price: 'No data found'} ${universeDetails.pricing? universeDetails.pricing[0].plan: 'No data found'}</p>
                </div>
                <div style="width:  110px; height: 100px;" class="col-1 bg-white rounded-4 py-3 px-2">
                    <p class="text-warning fw-semibold">${universeDetails.pricing? universeDetails?.pricing[1].price: 'No data found'} ${universeDetails.pricing? universeDetails.pricing[1].plan: 'No data found'}</p>
                </div>
                <div style="width:  110px; height: 100px;" class="col-1 bg-white rounded-4 py-3 px-2">
                    <p class="text-danger fw-semibold">${universeDetails.pricing? universeDetails?.pricing[2].price: 'No data found'} ${universeDetails.pricing? universeDetails.pricing[2].plan: 'No data found'}</p> 
                </div>
                </div>
            </div>

            <div class="container">
            <div class="row">
              <div class="col-6">
              <h5 class="card-title mb-4 fw-bold">Features</h5>
                <ul class="text-light-emphasis">
                    <li>${universeDetails.use_cases? universeDetails.use_cases[0].name : 'No data found'}</li>
                    <li>${universeDetails.use_cases? universeDetails.use_cases[1].name : 'No data found'}</li>
                    <li>${universeDetails.use_cases? universeDetails.use_cases[0].name : 'No data found'}</li>
                </ul>
              </div>
              <div class="col-6">
              <h5 class="card-title mb-4 fw-bold">Integrations</h5>
                <ul class="text-light-emphasis">
                    <li>${universeDetails.integrations? universeDetails.integrations[0] : 'No data found'}</li>
                    <li>${universeDetails.integrations? universeDetails.integrations[1] : 'No data found' }</li>
                    <li>${universeDetails.integrations? universeDetails.integrations[2] : 'No data found'}</li>
                </ul>
              </div>
            </div>
          </div>
            
            </div>
            
            </div>
    </section>
    <section>
        <div class="card" style="width: 18rem;">
            <img src="${universeDetails?.image_link[0]}" class="card-img-top p-3" alt="...">
            <div class="card-body">
              <h5 class="card-title mb-4 fw-bold">${universeDetails.input_output_examples? universeDetails.input_output_examples[0].input : 'No data found'}</h5>
              <p class="card-text">${universeDetails.input_output_examples? universeDetails.input_output_examples[0].output : 'No data found'}</p>
            </div>
          </div>
    </section>
        </div>
    `;

    modalContainer.appendChild(modalDiv);
}


// btn-see-more and load all data 

document.getElementById('btn-see-more').addEventListener('click', function(){
    loadAllData();
})

loadAllData()

