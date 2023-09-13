// Get the modal
var modal = document.getElementById("myModalLarge");
var modalAll = document.getElementById("modalAllContentLarge");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");

// Grab Image
let isDown = false;
let startX;
let startY;
let scrollLeft;
let scrollTop;

function largezoom(id) {
  var img = document.getElementById(id);
  modal.style.display = "block";
  modalImg.src = img.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  var pic = document.getElementById("img01");
  pic.classList.remove("img-zoomInLarge");
    pic.style.width = "auto";
    pic.style.height = "100%";
};
function zoomInLarge() {
  var pic = document.getElementById("img01");
  pic.classList.add("img-zoomInLarge");
  var w = window.innerWidth;
  if (w >= 768) {
      pic.style.width = "100%";
      pic.style.height = "auto";
    } else {
      pic.style.width = "210%";
      pic.style.height = "auto";
    }
}
function zoomOutLarge() {
  var pic = document.getElementById("img01");
  pic.classList.remove("img-zoomInLarge");
  var w = window.innerWidth;
  if (w >= 768) {
      pic.style.width = "auto";
      pic.style.height = "100%";
    } else {
      pic.style.width = "auto";
      pic.style.height = "100%";
    }
}
modalAll.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - modalAll.offsetLeft;
  startY = e.pageY - modalAll.offsetTop;
  scrollLeft = modalAll.scrollLeft;
  scrollTop = modalAll.scrollTop;
  modalAll.style.cursor = "grabbing";
});
modalAll.addEventListener("mouseleave", () => {
  isDown = false;
  modalAll.style.cursor = "grab";
});
modalAll.addEventListener("mouseup", () => {
  isDown = false;
  modalAll.style.cursor = "grab";
});
document.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - modalAll.offsetLeft;
  const y = e.pageY - modalAll.offsetTop;
  const walkX = (x - startX) * 2;
  const walkY = (y - startY) * 2;
  modalAll.scrollLeft = scrollLeft - walkX;
  modalAll.scrollTop = scrollTop - walkY;
});
