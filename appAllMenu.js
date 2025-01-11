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

// Navbar
let stateOpen = 0;
const createNavBar = function () {
  const htmlCode = `
    <div
      class="nav-menu fixed bottom-0 right-0 bg-zinc-900 py-6 h-screen flex items-center w-0 justify-center transition-all z-40"
    >
      <div
        class="btn-open-nav absolute left-0 top-2/4 p-2 text-2xl bg-white cursor-pointer text-zinc-900 font-medium h-screen flex justify-items-center items-center border-r-2 border-zinc-900 z-50"
      >
        <
      </div>
      <ul class="flex flex-col items-center gap-4 w-full z-50 border-none">
        <li class="w-full">
          <a
            href="#Coffee"
            class="uppercase bg-transparent text-white p-2 font-medium inline-block w-full text-center transition-all hover:bg-zinc-800"
            >Coffee</a
          >
        </li>
        <li class="w-full">
          <a
            href="#Tea"
            class="uppercase bg-transparent text-white p-2 font-medium inline-block w-full text-center transition-all hover:bg-zinc-800"
            >Tea</a
          >
        </li>
        <li class="w-full">
          <a
            href="#Desserts"
            class="uppercase bg-transparent text-white p-2 font-medium inline-block w-full text-center transition-all hover:bg-zinc-800"
            >Dessert</a
          >
        </li>
      </ul>
    </div>

    <div
      class="btn-up fixed bottom-16 right-16 text-4xl rounded-full bg-white text-zinc-900 px-6 py-3 cursor-pointer shadow-md transition-all translate-y-2 opacity-0 z-50"
    >
      &uarr;
    </div>`;

  // insert code
  document.body.insertAdjacentHTML("afterbegin", htmlCode);
};

const openNav = function (parent) {
  // calc width screen
  const widthScreen =
    window.innerWidth - document.body.offsetWidth + document.body.offsetWidth;

  // check if screen <= 600
  if (widthScreen <= 600) {
    parent.classList.add("w-40");
    parent.classList.remove("w-0");
    return;
  }

  // process class
  parent.classList.add("w-60");
  parent.classList.remove("w-0");
};

const hiddenNav = function (parent) {
  // process class
  parent.classList.add("w-0");
  parent.classList.remove("w-60");
  parent.classList.remove("w-40");
};

const processNav = function (e) {
  // find parent node
  const parent = e.target.parentNode;

  // check if state open
  if (stateOpen === 1) {
    hiddenNav(parent);
    stateOpen = 0;
    return;
  }

  // add class to open nave
  openNav(parent);

  // change state
  stateOpen = 1;
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
const processBtnup = function () {
  // scroll value
  const scrollHeight = window.scrollY;

  // document height
  const documentHeight = document.body.offsetHeight;

  // viewport height
  const viewportHeight = window.innerHeight;

  // calc result
  const result = (scrollHeight / (documentHeight - viewportHeight)) * 100;

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
  createNavBar();
  document.querySelector(".btn-open-nav").addEventListener("click", processNav);
  window.addEventListener("scroll", processBtnup);
  btnUp.addEventListener("click", scrollToUp);
};

//////////////////////////////////////////////

// Start program
intitial();
