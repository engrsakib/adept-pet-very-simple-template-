// deatels section
const modal = document.getElementById("detailsContainer");
const deatelsBtn = async (id) => {
  const response = await fetch(
    ` https://openapi.programming-hero.com/api/peddy/pet/${id}`
  );
  const data = await response.json();
  allDataShown(data.petData);
};

const allDataShown = (data) => {
  const detailsContainer = document.getElementById("detailsContainer");
  const div = document.createElement("div");
  div.innerHTML = " ";
  const {
    breed,
    category,
    date_of_birth,
    gender,
    image,
    petId,
    pet_details,
    pet_name,
    price,
    vaccinated_status,
  } = data;
  modal.classList.remove("hidden");
  div.innerHTML = `
    <div id="simple_modal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
        <div class="bg-white rounded-lg shadow-lg w-[80%] sm:w-4/5 md:w-2/3 lg:w-1/3 p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
          <img class="w-full sm:w-[70%] mx-auto mb-4" src=${image} alt="Pet">
      
          <div>
            <h1 class="text-[20px] sm:text-[24px] font-bold text-black">${
              pet_name ? pet_name : "No pet name found"
            }</h1>
      
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-y-4 gap-x-7 mt-2">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-bread-slice"></i>
                <p class="text-gray-600 font-[400]">Breed: ${
                  breed ? breed : "No data found"
                } </p>
              </div>
      
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-calendar-days"></i>
                <p class="text-gray-600 font-[400]">Birth: ${
                  date_of_birth
                    ? new Date(date_of_birth).getFullYear()
                    : "No data given yet"
                }</p>
              </div>
            </div>
      
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-y-4 gap-x-7 mt-2">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-neuter"></i>
                <p class="text-gray-600 font-[400]">Gender: ${
                  gender ? gender : "No Gender Found"
                }</p>
              </div>
      
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-tag"></i>
                <p class="text-gray-600 font-[400]">Price: ${
                  price ? price : "No price select yeat"
                }</p>
              </div>
            </div>
      
            <div class="flex items-center gap-x-7 mt-2">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-shield-virus"></i>
                <p class="text-gray-600 font-[400]">Vaccinated status: ${
                  vaccinated_status ? vaccinated_status : "No data here"
                }</p>
              </div>
            </div>
      
            <h1 class="text-[20px] sm:text-[24px] font-bold text-black mt-4">Details Information</h1>
            <p class="text-[14px] text-gray-500 overflow-y-auto">
              ${pet_details ? pet_details : "No details found"}
            </p>
          </div>
      
          <div class="flex justify-end mt-4">
            <button onclick="hideModal(this)" class="btn bg-gray-500 w-full text-white px-4 py-2 rounded">Close</button>
          </div>
        </div>
      </div>
  `;

  detailsContainer.append(div);
};