(() => {
  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");
  // mater....
  const materialTemplate = document.querySelector("#material-template");
  const materialList = document.querySelector("#material-list");

  const infoBoxes = [
    {
      title: "Noise-cancelling microphones",
      text: "Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience.",
      image: "images/ear-piece.jpg",
    },
    {
      title: "Comfortable fit",
      text: "Three pairs of ultra comfortable silicone tips are included. The tips create an acoustic seal that blocks outside audio and secures the earbuds in place.",
      image: "images/ear-piece.jpg",
    },
    {
      title: "360 AUDIO",
      text: "360 Audio places sound all around you, while Dolby Head Tracking™ technology delivers an incredible three-dimensional listening experience.",
      image: "images/ear-piece.jpg",
    },
    {
      title: "Ultra Fast Charging",
      text: "Charge your earbuds in 30 minutes or less with our hyper charging technology.",
      image: "images/ear-piece.jpg",
    },
  ];

  // mat..
  const materialListData = [
    {
      heading: "Precision-Crafted Polymers",
      description:
        "Our earbuds are meticulously molded from high-quality plastics, ensuring a blend of elegance, comfort, and resilience that's second to none.",
      image: "images/f1.jpg",
    },
    {
      heading: "Luxurious Silicone Harmony",
      description:
        "Our uniquely engineered ear tips are cocooned in plush silicone, delivering an opulent embrace for your ears, ensuring an unrivaled fit and exquisite audio experience.",
      image: "images/f2.jpg",
    },
    {
      heading: "Rubberized Cables",
      description:
        "Experience the unparalleled freedom of movement with our flexible rubber cables that promise durability without compromise.",
      image: "images/f3.jpg",
    },
    {
      heading: "Enhanced Comfort Sensors",
      description:
        "A touch of magic in the form of built-in microphones and sensors empowers your earbuds to obey your every command, making your audio journey seamless and enchanting.",
      image: "images/f4.jpg",
    },
    {
      heading: "Artistic Mesh Guard",
      description:
        "Shielded by artful mesh screens, our speakers remain untarnished, keeping your listening experience pristine.",
      image: "images/f5.jpg",
    },
  ];

  //functions
  function modelLoaded() {
    hotspots.forEach((hotspot) => {
      hotspot.style.display = "block";
    });
  }

  function loadInfoBoxes() {
    // SIDHU MOOSA
    fetch("https://swiftpixel.com/earbud/api/infoboxes")
      .then((response) => response.json())
      .then((infoBoxes) => {
        console.log(infoBoxes);

        infoBoxes.forEach((infoBox, index) => {
          let selected = document.querySelector(`#hotspot-${index + 1}`);

          const titleElement = document.createElement("h3");
          titleElement.textContent = infoBox.heading;

          const imgElement = document.createElement("img");
          imgElement.src = `images/${infoBox.thumbnail}`;

          const textElement = document.createElement("p");
          textElement.textContent = infoBox.description;

          selected.appendChild(imgElement);
          selected.appendChild(titleElement);
          selected.appendChild(textElement);
        });
      })
      .catch((error) => console.error(error)); //catch and report any errors
  }

  loadInfoBoxes();

  // materials-sidhumoosewala
  function loadMaterialInfo() {
    materialListData.forEach((material) => {
      const clone = materialTemplate.content.cloneNode(true);

      // populating the template - HEADING
      const materialHeading = clone.querySelector(".material-heading");
      materialHeading.textContent = material.heading;

      //  Populating DESCRIPTION
      const materialDescription = clone.querySelector(".material-description");
      materialDescription.textContent = material.description;
      // Populating IMAGE
      const materialImage = clone.querySelector(".material-image");
      materialImage.src = material.image; 

      materialList.appendChild(clone);
    });
  }
  loadMaterialInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event listeners
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("spinner-container").style.display = "flex";

  setTimeout(function () {
    document.getElementById("spinner-container").style.display = "none";
  }, 30);
});
