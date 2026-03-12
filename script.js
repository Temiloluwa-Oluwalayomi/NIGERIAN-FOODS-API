let allFoods = [];




const foodAPI = async () => {
  document.getElementById("spinner").style.display = 'block'
  document.getElementById("error-message").style.display = 'none'

  // Try and catch method

  try {
    const endpoint = 'https://mongotest2026.vercel.app/api/foods/'
    const result = fetch(endpoint)
    const awaitedResult = await result
    const convertedResult = await awaitedResult.json()
    allFoods = convertedResult.data;
    foodCards(allFoods);
    document.getElementById("spinner").style.display = 'none'
    console.log(allFoods);


  } catch (error) {
    document.getElementById("spinner").style.display = 'none'
    document.getElementById("error-message").style.display = 'block'
  }
}
const retryBtn = () => {
  foodAPI()
}

foodAPI()

const foodCards = (foodArray) => {

  const show = document.getElementById('show')
  show.innerHTML = ''
  for (let index = 0; index < foodArray.length; index++) {
    const foodData = foodArray[index];
    let images = "FoodImages/" + foodData.name.toLowerCase().replaceAll(" ", "-") + ".jpeg"
    show.innerHTML += `
          <div class="bg-white dark:bg-gray-800 rounded-2xl cursor-pointer overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 pb-5" title="Click for more information" onclick="foodID(${foodData.id})">
          
          <img src= ${images} alt="Web Development" class="w-full h-60 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">${foodData.id}. ${foodData.name}</h3>
            <p class="text-gray-600 dark:text-gray-300">${foodData.description}</p>
            <div>
              <ul class="mt-3 flex flex-col space-y-2">
                <li class="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" class="mr-2 h-auto w-6 text-white sm:w-7"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="green" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 4a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1"/></g></svg>
                  <p class="text-base text-white sm:text-md">${foodData.preparationTime}</p>
                </li>
                <li class="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" aria-hidden="true" class="mr-2 h-auto w-6 text-white sm:w-7"><path fill="green" d="M24 32c13.3 0 24 10.7 24 24v352c0 13.3 10.7 24 24 24h416c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-39.8 0-72-32.2-72-72V56c0-13.3 10.7-24 24-24m104 104c0-13.3 10.7-24 24-24h208c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24m24 72h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24m0 96h272c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24"/></svg>
                <p class="text-base text-white sm:text-md">Difficulty: ${foodData.difficulty}</p>
                </li>
                  <li class="flex"><svg xmlns="http://www.w3.org/2000/svg" width="2048" height="2048" viewBox="0 0 2048 2048" aria-hidden="true" class="mr-2 h-auto w-6 text-white sm:w-7"><path fill="green" d="M1280 64q0 179 66 330t190 278t190 278t66 330q0 106-27 204t-78 183t-120 156t-155 120t-184 77t-204 28t-204-27t-183-78t-156-120t-120-155t-77-184t-28-204q0-84 18-165t52-155t84-141t113-121q7 38 19 78t28 80t38 76t46 67q20 25 52 25q27 0 45-19t19-46q0-11-3-20t-10-18q-28-41-49-81t-37-82t-23-87t-8-95q0-119 45-224t124-183T992 46t224-46h64zm-256 1856q133 0 249-50t204-137t137-203t50-250q0-151-56-281t-162-236q-130-131-204-289t-88-342q-83 11-153 50t-123 99t-81 135t-29 160q0 78 23 141t68 126q19 26 29 54t11 62q0 40-15 75t-42 61t-61 42t-75 15q-46 0-81-17t-62-46t-48-65t-40-72q-46 73-68 157t-23 171q0 133 50 249t137 204t203 137t250 50"/></svg>
                  <p class="text-base text-white sm:text-md">${foodData.calories} calories</p>
                  </li>
                <li class="flex"><svg xmlns="http://www.w3.org/2000/svg" width="640" height="512" viewBox="0 0 640 512" aria-hidden="true" class="mr-2 h-auto w-6 text-white sm:w-7"><path fill="green" d="M621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34c-30.89 0-61.76-3.92-92.65-13.72c-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35c30.89 0 61.76 3.92 92.65 13.72c3.47 1.1 6.95 1.62 10.35 1.62c17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47M48 132.22c20.12 5.04 41.12 7.57 62.72 8.93C104.84 170.54 79 192.69 48 192.69zm0 285v-47.78c34.37 0 62.18 27.27 63.71 61.4c-22.53-1.81-43.59-6.31-63.71-13.62M320 352c-44.19 0-80-42.99-80-96c0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96m272 27.78c-17.52-4.39-35.71-6.85-54.32-8.44c5.87-26.08 27.5-45.88 54.32-49.28zm0-236.11c-30.89-3.91-54.86-29.7-55.81-61.55c19.54 2.17 38.09 6.23 55.81 12.66z"/></svg>
          
                <p class="text-base flex items-center text-white sm:text-md"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="white" d="M4 9h2V3h2l3.42 6H16V3h2v6h2v2h-2v2h2v2h-2v6h-2l-3.43-6H8v6H6v-6H4v-2h2v-2H4zm4 0h1.13L8 7.03zm0 2v2h3.42l-1.14-2zm8 6v-2h-1.15zm-3.44-6l1.15 2H16v-2z"/></svg> ${foodData.price} naira</p>
                </div>
                </li>
              </ul>
            </div>

            <div class="flex gap-1">
              <div class="shrink-0 rounded-full bg-gray-500 px-2 py-2 font-mono text-sm font-medium tracking-tight text-white">${foodData.region}</div>


              
              ${foodData.isSpicy === true ? `<div class="shrink-0 rounded-full bg-red-500 px-2 py-2 font-mono text-sm font-medium tracking-tight text-white">Spicy</div> ` : ''}
              ${foodData.isVegetarian === true ? `<div class="shrink-0 rounded-full bg-emerald-500 px-2 py-2 font-mono text-sm font-medium tracking-tight text-white">Vegetarian</div> ` : ''}
            </div>
            </div>
        </div>
        `
  }
}

const foodID = async (id) => {
  // alert(id)
  document.getElementById("spinner").style.display = 'block'
  try {
    const endpoint = ('https://mongotest2026.vercel.app/api/foods/' + id)
    const result = fetch(endpoint)
    const awaitedResult = await result
    const convertedResult = await awaitedResult.json()
    document.getElementById("spinner").style.display = 'none'
    let food = convertedResult.data;
    // console.log(food);
    modalFunction(food);
  } catch (error) {
    document.getElementById("spinner").style.display = "none";
    document.getElementById("error-message").style.display = "block";
  }
}


const modalFunction = (food) => {

  let images = "FoodImages/" + food.name.toLowerCase().replaceAll(" ", "-") + ".jpeg"
  const ingredientsList = food.ingredients.map(function (ingredient) {
    return "<li>" + ingredient + "</li>";
  }).join("")
  // console.log(ingredientsList);
  // return;

  document.getElementById('modalDetails').innerHTML = `
    <div
              class="bg-gray-50 dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden max-w-4xl w-full grid md:grid-cols-2">

              <div class="h-64 md:h-auto">
                <img
                  src="${images}"
                  alt="Food Image" class="w-full h-full object-cover">
              </div>

              <!-- Recipe Content -->
              <div class="p-6 flex flex-col justify-between">
                <div>
                  <h2 class="text-3xl font-bold font-serif text-gray-800 dark:text-white mb-2">${food.name}</h2>
                  <h4 class="text-md font-bold font-serif text-gray-800 dark:text-white mb-2"> ~ ${food.category} ~ ${food.region}</h4>
                  <p class="text-gray-600 dark:text-gray-300 mb-4">${food.description}</p>


    <div class="flex-1 m-6">
        <hr class="my-2">
        <div class="flex flex-wrap justify-center">

        ${food.isSpicy === true ? `<button class="shrink-0 bg-red-500 rounded-lg text-white text-xs text-center self-center px-2 py-2 my-2 mx-2 font-medium tracking-tight"><i class="fab fa-github mr-1"></i> Spicy</button>` : ''}
            
        ${food.isVegetarian === true ? `<button class="shrink-0 bg-emerald-500 rounded-lg text-white text-xs text-center self-center px-2 py-2 my-2 mx-2 font-medium tracking-tight"><i class="fab fa-github mr-1"></i> Vegetarian</button>` : ''}
            <button class="bg-red-700 rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2"><i class="fab fa-youtube mr-1"></i> ${food.preparationTime}</button>
            <button class="bg-red-500 rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2"><i class="fab fa-laravel mr-1"></i> ${food.calories} calories</button>
        </div>
    </div>
</section>




    <div class="flex flex-col gap-4 p-6 text-lg font-serif">
    <a href="#"
      class="bg-gray-100 text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full">
      Difficulty

      <div class="text-gray-500 font-thin text-sm pt-1">
        <span>${food.description}</span>
      </div>
    </a>
    <a class="bg-gray-100 text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full"
      href="#">
      Price
      <div class="text-gray-500 font-thin text-sm">
        <span>${food.price}</span>
      </div>
    </a>
    <a class="bg-gray-100 text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full"
      href="#">
      Serving Size
      <div class="text-gray-500 font-thin text-sm">
        <span>${food.servingSize}</span>
      </div>
    </a>
    <a class="bg-gray-100 text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full"
      href="#">
      Category
      <div class="text-gray-500 font-thin text-sm">
        <span>${food.category}</span>
      </div>
    </a>
  </div>



                  <!-- Ingredients -->
                  <div class="mb-4">
                    <h3 class="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">Ingredients (${food.ingredients.length})
                    </h3>
                    <ul class="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-200 text-sm">
                      ${ingredientsList}
                    </ul>
                  </div>
                </div>


              </div>
            </div>
  `
  document.getElementById('modal').style.display = 'block'
}

const clearModal = () => {
  document.getElementById('modal').style.display = 'none'
}


const categoryCheck = async (category) => {
  // console.log(category);

  if (category === '') {
    foodCards(allFoods)
  }
  document.getElementById("spinner").style.display = 'block'

  try {
    const endpoint = ('https://mongotest2026.vercel.app/api/foods/category/' + category)
    const result = fetch(endpoint)
    const awaitedResult = await result
    const convertedResult = await awaitedResult.json()
    document.getElementById("spinner").style.display = 'none'
    let categories = convertedResult.data;
    console.log(categories);
    foodCards(categories);
  } catch (error) {
    document.getElementById("spinner").style.display = "none";
    document.getElementById("error-message").style.display = "block";
  }
}



const regionCheck = async (region) => {
  // console.log(category);

  if (region === '') {
    foodCards(allFoods)
    return;
  }
  document.getElementById("spinner").style.display = 'block'

  try {
    const endpoint = ('https://mongotest2026.vercel.app/api/foods/region/' + region)
    const result = fetch(endpoint)
    const awaitedResult = await result
    const convertedResult = await awaitedResult.json()
    document.getElementById("spinner").style.display = 'none'
    let regions = convertedResult.data;
    console.log(regions);
    foodCards(regions);
  } catch (error) {
    document.getElementById("spinner").style.display = "none";
    document.getElementById("error-message").style.display = "block";
  }
}