let cnt = 0;
const images = [
  "images/pic-1.jpg",
  "images/pic-2.jpg",
  "images/pic-3.jpg",
  "images/pic-4.jpg",
  "images/pic-5.jpg",
  "images/pic-6.jpg",
  "images/pic-7.jpg",
  "images/pic-8.jpg",
  "images/pic-9.jpg",
];
const imgSlide = document.getElementById("img-slide");
setInterval(() => {
  let ind = cnt++ % 9;
  imgSlide.setAttribute("src", images[ind]);
  //   console.log(images[ind]);
}, 1000);
