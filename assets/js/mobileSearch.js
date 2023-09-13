function visibleform() {
    const element = document.getElementById("mobileForm");
    if (element.className == "mobileSearchField") {
      element.className = "mobileSearchVisible";
    } else {
      element.className = "mobileSearchField";
    }
  }