// Get slider items | Array.from
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container  img")
);

console.table(sliderImages);

// Get number of slides | Array.from
let slidesCount = sliderImages.length;
console.log(slidesCount);

// Set current slide
let currentSlide = 1;

// Slide number element
let slideNumberElement = document.getElementById("slide-number");

// Previous and Next Buttons
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

// Handle click on Previous and Next Buttons
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

/*==================pagination==================*/
// Create main UL Element
let pagination = document.createElement("ul");

//Set ID on created element
pagination.setAttribute("id", "pagination-ul");

// Create list Items based on slides count
for (let i = 1; i <= slidesCount; i++) {
  // Create the Li
  let paginationItem = document.createElement("Li");

  //Set custom attribute
  paginationItem.setAttribute("data-index", i);

  // Set Item content
  paginationItem.appendChild(document.createTextNode(i));

  // Append Items to the main ul list
  pagination.appendChild(paginationItem);
}

// Add the created ul element to the page
document.getElementById("idicators").appendChild(pagination);

// Get the new created UL
let paginationCreatedUL = document.getElementById("pagination-ul");

// Get pagination items | Array.from
let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

// Loop through All bullets Items
for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = () => {
    currentSlide = parseInt(paginationBullets[i].getAttribute("data-index"));
    theChecker();
  };
}

// Trigger theChecker function
theChecker();

/*==================Functions==================*/
// Next Slide function
function nextSlide() {
  if (nextBtn.classList.contains("disabled")) {
    // Do nothing
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}
// Previous Slide function
function prevSlide() {
  if (prevBtn.classList.contains("disabled")) {
    // Do nothing
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

// Create the checker function
function theChecker() {
  // Set the slide number
  slideNumberElement.textContent =
    "Slide #" + currentSlide + " of " + slidesCount;

  // Remove all active classes
  removeAllActive();

  // Set active on current class
  sliderImages[currentSlide - 1].classList.add("active");

  //Set active class on current pagination item
  paginationCreatedUL.children[currentSlide - 1].classList.add("active");

  // Check if cuurent slide is the first
  if (currentSlide == 1) {
    // Add disabled class on Previous button
    prevBtn.classList.add("disabled");
  } else {
    // Remove disabled class from Previous button
    prevBtn.classList.remove("disabled");
  }

  // Check if cuurent slide is the Last
  if (currentSlide == slidesCount) {
    // Add disabled class on Previous button
    nextBtn.classList.add("disabled");
  } else {
    // Remove disabled class from Previous button
    nextBtn.classList.remove("disabled");
  }
}

// Remove all active classes from Images and pagination bullets
function removeAllActive() {
  // Loop through Images
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });

  // Loop through pagination bullets
  paginationBullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}
