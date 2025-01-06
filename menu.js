import * as data from "/recieveData.js";

//////////////////////////////////////////////

// Selecting elements
const menu = document.querySelector(".menu");
const progress = document.querySelector(".progress");

//////////////////////////////////////////////

// Create menu item
const createMenuEl = async function () {
  // recieve data
  const receiveData = await data.receiveData();

  // create html code
  receiveData.products.forEach((r) => {
    // add header
    const headCode = `<h2 class="text-3xl max-xl:text-2xl text-center uppercase mt-14 w-full text-white p-3 font-medium border-y-2">${r.category}</h2>`;
    menu.insertAdjacentHTML("beforeend", headCode);
    r.items.forEach((i) => {
      const htmlCode = `
        <div
          class="meun__item flex max-md:flex-col max-md:items-center justify-center gap-10 overflow-hidden p-9 w-full rounded-md shadow-lg"
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

// Progress bar
const processProBar = function () {
  // scroll value
  const scrollHeight = window.scrollY;

  // document height
  const documentHeight = window.document.body.offsetHeight;

  // viewport height
  const viewportHeight = window.innerHeight;

  // calc result
  const result = (scrollHeight / (documentHeight - viewportHeight)) * 100;

  // change style width progress
  progress.style.width = `${result}%`;
};

//////////////////////////////////////////////

// Intitial
const intitial = function () {
  createMenuEl();
  window.addEventListener("scroll", processProBar);
};

//////////////////////////////////////////////

// Start program
intitial();
