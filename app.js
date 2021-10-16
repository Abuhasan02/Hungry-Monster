const searchMeal = () => {
  const searchInput = document.getElementById("searchInput");
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayMeal(data));
};

const displayMeal = (mealData) => {
  const searchDetails = document.getElementById("search-details");
  for (let i = 0; i < mealData.meals.length; i++) {
    const meal = mealData.meals[i];
    // console.log(meal);
    const div = document.createElement("div");
    div.classList.add("col-md-3");
    div.innerHTML = `
      <div onclick="mealDetails(${meal.idMeal})" class="card text-center">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
      </div>
    </div>
    `;
    searchDetails.appendChild(div);
  }
};
const mealDetails = (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => showDetails(data.meals[0]));   
};

const showDetails = mealDetail => {
  const mealList = document.getElementById("meal-details");
  const showMealDetails = `
    <div class="card mx-auto" style="width: 18rem">
        <img src="${mealDetail.strMealThumb}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${mealDetail.strMeal}</h5>
          <p class="card-text">
            Ingredients
          </p>
          <ul id="meal-list">
              <li>${mealDetail.strIngredient1}</li>
          </ul>
        </div>
      </div>
  `;
  mealList.innerHTML = showMealDetails;
}
