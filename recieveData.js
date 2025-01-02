//////////////////////////////////////////////

// Fecth data
export const receiveData = async function () {
  try {
    // fetch data from json
    const response = await fetch("/data.json");
    const data = await response.json();
    return data;
  } catch (err) {
    alert(err.message);
  }
};

//////////////////////////////////////////////
