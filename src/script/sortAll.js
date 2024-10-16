// sort button section
const sortSectin = () => {
  const div = document.createElement("div");
  div.classList.add(
    "w-10/12",
    "mx-auto",
    "flex",
    "items-center",
    "justify-between"
  );
  div.innerHTML = `
   <div>
          <h2 class="text-black lg:text-[25px] text-[20px] text-left font-[900]">
            Best Deal For you
          </h2>
        </div>
        <div>
          <button onclick="sortAll()" class="btn btn-active btn-accent">
            Sort by Price
          </button>
        </div>

  `;

  sortButton.append(div);
};

// sort section
const sortAll = async (category, order = "desc") => {
  console.log(category);
  const response = await fetch(
    "https://openapi.programming-hero.com/api/peddy/pets"
  );
  const data = await response.json();

  data.pets.sort((a, b) => {
    const priceA = a.price ? parseFloat(a.price) : 0;
    const priceB = b.price ? parseFloat(b.price) : 0;

    return priceB - priceA;
  });

  sppiner.classList.remove("hidden");
  adpotConatiner.innerHTML = " ";
  setTimeout(() => {
    dispplayAdopt(data.pets);
  }, 3000);
};

sortSectin();
