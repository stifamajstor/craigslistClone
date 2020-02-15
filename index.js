let container = document.querySelector(".cards-container");

// console.log(apartments.map(el => el.date_id).length);
// console.log(apartments.length);
for (let i = 0; i <= apartments.length; i++) {
  if (apartments[i]) {
    container.innerHTML += `<div class="cards">

        <div>
        <p class="price">Price: ${apartments[i].price}</p>
      <p class="description">Location: ${apartments[i].location}</p>
      <p class="description">Number of rooms: ${apartments[i].bedrooms}</p>
      <p class="description">Size: ${apartments[i].size}</p>
      <p class="description">${apartments[i].description}</p>

      </div>
      </div>`;
  }
}

// let description = document.getElementById("card").createElement("p"); // Create a <button> element
// description.innerHTML = books[0].description; // Insert text
// document.body.appendChild(description);
