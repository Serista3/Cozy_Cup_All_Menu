//////////////////////////////////////////////

// Fecth data
const fetchData = async function () {
  try {
    // fetch data from json
    const response = await fetch("dataMenu.json");
    const data = await response.json();
    return data;
  } catch (err) {
    alert(err.message);
  }
};

//////////////////////////////////////////////

// Selecting elements
const menu = document.querySelector(".menu");
const progress = document.querySelector(".progress");
const btnUp = document.querySelector(".btn-up");

//////////////////////////////////////////////

// Create menu item
const createMenuEl = async function () {
  // recieve data
  const receiveData = await fetchData();

  // create html code
  receiveData.products.forEach((r) => {
    // add header
    const headCode = `<h2 class="text-3xl max-xl:text-2xl text-center uppercase mt-14 w-full text-white p-3 font-medium heading-secondary" id="${r.category}">${r.category}</h2>`;
    menu.insertAdjacentHTML("beforeend", headCode);
    r.items.forEach((i) => {
      const htmlCode = `
        <div
          class="meun__item flex max-md:flex-col max-md:items-center justify-center gap-10 overflow-hidden py-9 w-full rounded-md"
        >
          <div class="menu__box-img w-1/2 h-48 rounded-lg shadow overflow-hidden max-md:w-8/12">
            <img
              src=${i.img}
              alt="meun-item"
              class="menu__img w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
          <div class="menu__detail text-white flex flex-col gap-8 relative w-full max-md:w-8/12 max-md:text-center">
            <h3 class="menu__heading text-3xl font-medium max-xl:text-2xl max-lg:text-xl">${i.name}</h3>
            <p class="menu__description font-light leading-relaxed">
              ${i.description}
            </p>
            <div
              class="menu__price absolute max-md:relative max-md:mx-auto top-0 right-0 bg-emerald-600 rounded-xl px-4 py-2 text-white max-xl:text-sm max-lg:text-xs font-semibold"
            >
              ${i.price} BAHT
            </div>
            <div
              class="menu__type absolute max-md:hidden top-0 right-28 max-xl:right-24 bg-white rounded-xl px-4 py-2 text-zinc-900 uppercase backdrop-blur-sm max-xl:text-sm max-lg:text-xs font-semibold"
            >
              ${r.category}
            </div>
          </div>
        </div>`;
      menu.insertAdjacentHTML("beforeend", htmlCode);
    });
  });
};

//////////////////////////////////////////////

// Handle click btn-up
const removeClassBtnUp = function () {
  btnUp.classList.remove("invisible");
  btnUp.classList.remove("opacity-0");
  btnUp.classList.remove("translate-y-6");
};

const addClassBtnUp = function () {
  btnUp.classList.add("invisible");
  btnUp.classList.add("opacity-0");
  btnUp.classList.add("translate-y-6");
};

const scrollToUp = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

//////////////////////////////////////////////

// Progress bar
const processProBar = function () {
  // scroll value
  const scrollHeight = window.scrollY;

  // document height
  const documentHeight = document.body.offsetHeight;

  // viewport height
  const viewportHeight = window.innerHeight;

  // calc result
  const result = (scrollHeight / (documentHeight - viewportHeight)) * 100;

  // change style width progress
  progress.style.width = `${result}%`;

  // show btn up
  if (result > 40) {
    removeClassBtnUp();
  } else {
    addClassBtnUp();
  }
};

//////////////////////////////////////////////

// Intitial
const intitial = function () {
  createMenuEl();
  window.addEventListener("scroll", processProBar);
  btnUp.addEventListener("click", scrollToUp);
};

//////////////////////////////////////////////

// Start program
intitial();
