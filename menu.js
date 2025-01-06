import * as data from "/recieveData.js";

//////////////////////////////////////////////

// Selecting elements
const menu = document.querySelector(".menu");

//////////////////////////////////////////////

// Create menu item
const createMenuEl = async function () {
  // recieve data
  const receiveData = await data.receiveData();

  // create html code
  receiveData.products.forEach((r) => {
    r.items.forEach((i) => {
      const htmlCode = `
        <div
          class="meun__item flex max-md:flex-col max-md:items-center justify-center gap-10 overflow-hidden p-9 w-full border-b-2 border-zinc-900"
        >
          <div class="menu__box-img w-1/2 h-48 rounded-lg shadow overflow-hidden max-md:w-8/12">
            <img
              src=${i.img}
              alt="meun-item"
              class="menu__img w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
          <div class="menu__detail text-zinc-900 flex flex-col gap-8 relative w-full max-md:w-8/12 max-md:text-center">
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
              class="menu__type absolute max-md:hidden top-0 right-28 max-xl:right-24 bg-zinc-900 rounded-xl px-4 py-2 text-white uppercase backdrop-blur-sm max-xl:text-sm max-lg:text-xs font-semibold"
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

// Intitial
const intitial = function () {
  createMenuEl();
};

//////////////////////////////////////////////

// Start program
intitial();
