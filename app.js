const searchMeal = () => {
  const searchInput = document.getElementById("searchInput");
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayMeal(data));
};

const displayMeal = mealData => {

  const searchDetails = document.getElementById("search-details");
  // mealData.forEach(searchData => {
  //   console.log(searchData);
  // })
  for(let i= 0; i<mealData.meals.length;i++){
    const meal = mealData.meals[i];
    const div = document.createElement('div');
    div.classList.add('col-md-3');
    div.innerHTML = `
      <div class="card text-center">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
      </div>
    </div>
    `;
    searchDetails.appendChild(div);
  }
 
  
}
