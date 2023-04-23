export const handleShowSideBar = () => {
  let sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("show__sidebar");
};

export const handleCloseSideBar = () => {
  let sidebar = document.querySelector(".sidebar");
  sidebar.classList.remove("show__sidebar");
};

export const handleMenuCategories = (className) => {
  let sidebar = document.querySelector(`${className}`);
  let check = sidebar.classList.contains("hidden");
  if (check) {
    sidebar.classList.replace("hidden", "block");
  } else {
    sidebar.classList.replace("block", "hidden");
  }
};

export const handleCategoriesItem = (index) => {
  let div = document.querySelectorAll(".sidebar__menu-categories--item");
  let check = div[index].classList.contains("hidden");
  if (check) {
    div[index].classList.replace("hidden", "block");
  } else {
    div[index].classList.replace("block", "hidden");
  }
};
