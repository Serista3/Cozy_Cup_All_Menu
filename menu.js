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
          class="meun__item flex justify-center gap-10 overflow-hidden p-9 w-full border-b-2 border-zinc-900"
        >
          <div class="menu__box-img">
            <img
              src=${i.img}
              alt="meun-item"
              class="menu__img w-64 h-48 object-cover rounded-lg shadow"
            />
          </div>
          <div class="menu__detail text-zinc-900 flex flex-col gap-8 relative w-full">
            <h3 class="menu__heading text-3xl font-medium">${i.name}</h3>
            <p class="menu__description font-light leading-relaxed">
              ${i.description}
            </p>
            <div
              class="menu__price absolute top-0 right-0 bg-emerald-600 rounded-xl px-4 py-2 text-white"
            >
              ${i.price} BAHT
            </div>
            <div
              class="menu__type absolute top-0 right-28 bg-zinc-900 rounded-xl px-4 py-2 text-white uppercase backdrop-blur-sm"
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
