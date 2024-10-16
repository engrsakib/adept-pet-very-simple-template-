// data theme
document.getElementsByTagName("html")[0].setAttribute("data-theme", "cupcake");

// data added
const adpotConatiner = document.getElementById("adpotConatiner");
const sppiner = document.getElementById("sppiner");
sppiner.classList.add("hidden");
const noDataFound = document.getElementById("nodata");
const likeImg1 = document.getElementById("likeImga");
const sortButton = document.getElementById('sortButton');

// catagory Section start
const catagoryButton = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/peddy/categories"
  );
  const data = await response.json();
  displayCatagory(data.categories);
}

const displayCatagory = (data) => {
  const ctgBtn = document.getElementById("ctgBtn");
  data.forEach((element) => {
    const div = document.createElement("div");
    // console.log(element);
    const { category, category_icon } = element;
    div.innerHTML = `
         <button onclick='ctgSection("${category}")' class="btn btn-outline btn-info w-[150px] hover:bg-gray-200 hover:text-orange-600 transition-all border-2 focus:border-transparent border-green-500 focus:outline-none focus:text-white focus:bg-green-900">
         <img class="w-[30px]" src=${category_icon} alt="">
         ${category}
         </button>
        `;
    ctgBtn.appendChild(div);
    // console.log(category);
  });
};

let ctg = 'pets';
const ctgSection = async (category) => {
  console.log(category.length);
  const response = await fetch(
    `https://openapi.programming-hero.com/api/peddy/category/${category}`
  );
  const data = await response.json();
  CtgWise(data.data);
};
const CtgWise = (data) => {
  sppiner.classList.remove("hidden");
  adpotConatiner.innerHTML = " ";
  noDataFound.classList.add("hidden");
  setTimeout(() => {
    dispplayAdopt(data);
  }, 3000);
};


const like = (img) => {
  const div = document.createElement("div");
  div.innerHTML = `<img class="w-[75px]" src=${img?img:"img not found"} alt="img not found">
            `;
  likeImg1.appendChild(div);
};

// adept
const addeptAll = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/peddy/pets"
  );
  const data = await response.json();
  sppiner.classList.remove("hidden");
  setTimeout(() => {
    dispplayAdopt(data.pets);
  }, 3000);
};


function hideModal() {
  modal.classList.add("hidden");
}




// function call
catagoryButton();
addeptAll();

