const slidesData = [
  {
    id: 1,
    title: "Misty Woodlands",
    desc: "Deep within the ancient canopy, morning mist weaves through towering trees, breathing life into a quiet ecosystem untouched by time.",
    image:
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 2,
    title: "Alpine Horizons",
    desc: "Scale the breathtaking heights where jagged stone peaks meet wandering cloud blankets, revealing the raw power of earth's topography.",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 3,
    title: "Sunken Sunbeams",
    desc: "Golden rays break gracefully through summer leaves, illuminating forest trails and bathing the wild floor in warmth.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 4,
    title: "Coastal Serenity",
    desc: "Where soft tides kiss golden shores under an endless pastel sky, providing a peaceful escape tuned to the rhythm of waves.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 5,
    title: "Canyon Valleys",
    desc: "Carved over millions of years, spectacular rocky valleys and rushing rivers showcase the artistic persistence of flowing water.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
  },
];

const container = document.getElementById("container");
const titleEle = document.getElementById("slide-title");
const descEle = document.getElementById("slide-desc");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let index = 0;

function updateSlide() {
  container.innerHTML = "";

  const img = document.createElement("img");
  img.src = slidesData[index].image;
  img.alt = slidesData[index].title;

  container.appendChild(img);

  titleEle.innerHTML = slidesData[index].title;
  descEle.innerHTML = slidesData[index].desc;
}
nextBtn.addEventListener("click", function () {
  index = (index + 1) % slidesData.length;
  updateSlide();
});

prevBtn.addEventListener("click", function () {
  index = (index - 1 + slidesData.length) % slidesData.length;
  updateSlide();
});

updateSlide();
