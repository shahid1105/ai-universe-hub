const loadAllData = () =>{
    const url = ` https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
    .then(res => res.json())
    .then(data => showAllData(data.data.tools))
}

const showAllData = (data) => {
    console.log(data);
}

loadAllData();