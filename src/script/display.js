const dispplayAdopt = (data) => {
  const dataLength = data.length;
  if (dataLength === 0) {
    noDataFound.classList.remove("hidden");
  }
  sppiner.classList.add("hidden");
  data.forEach((element) => {
    // console.log(element);
    const div = document.createElement("div");
    div.classList.add(
      "lg:col-span-4",
      "sm:col-span-6",
      "gap-4",
      "max-sm:col-span-12"
    );
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
    } = element;
    div.innerHTML = `
       <div class="mt-4 mb-4">
        <div class="card bg-base-100 w-[280px] shadow-xl">
  <figure>
    <img class="w-[100%] rounded"
      src=${image}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      ${pet_name}
    </h2>
    <div>
        <div class="flex items-center gap-2"><i class="fa-solid fa-bread-slice"></i> <p>breed: ${
          breed ? breed : "No data Found"
        }</P></div>
        <div class="flex items-center gap-2"><i class="fa-solid fa-calendar-days"></i><p>date of birth: ${
          date_of_birth
            ? new Date(date_of_birth).getFullYear()
            : "No data given yet"
        }</P></div>
        <div class="flex items-center gap-2"><i class="fa-solid fa-venus"></i> <p>gender: ${
          gender ? gender : "No data Found"
        }</P></div>
        <div class="flex items-center gap-2"><i class="fa-solid fa-tag"></i> <p>price: ${
          price ? price : "No price found"
        }</P></div>
    </div>
    <div class="card-actions justify-end">
      <div>
        <button onclick='like("${image}")' class="btn btn-outline btn-success focus:outline-none focus:text-white focus:bg-green-900"><i class="fa-solid fa-thumbs-up"></i></button>
        <button onclick="startCountdown(this)" class="btn btn-outline btn-success">Adopt</button>
        <button onclick='deatelsBtn("${petId}")' class="btn btn-outline btn-success">Details</button>
      </div>
    </div>
  </div>
</div>       
</div>
        
        `;
    adpotConatiner.appendChild(div);
  });
};