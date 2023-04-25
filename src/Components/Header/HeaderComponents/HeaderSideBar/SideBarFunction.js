export const handleShowSideBar = () => {
  let sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("show__sidebar");
};

export const handleCloseSideBar = () => {
  let sidebar = document.querySelector(".sidebar");
  sidebar.classList.remove("show__sidebar");
};
