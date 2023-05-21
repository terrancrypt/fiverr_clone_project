export const scrollHeaderForSideBar = () => {
  // Class đại diện cho item trong HTML
  const headerSideBarButton = document.querySelector(
    ".header__main-sidebarbutton"
  );

  // Thay đổi màu cho Header Sidebar Button
  headerSideBarButton.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="white"
    className="w-9 h-9"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>`;

  // Khi người dùng lăn chuột là sự kiện scroll
  // 100px thì sẽ cho hiện ảnh nền của header__main và các phần tử bên trong, ngược lại lại thêm class turn off để tắt đi
  window.addEventListener("scroll", function () {
    if (this.scrollY >= 100) {
      headerSideBarButton.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-9 h-9"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>`;
    } else {
      headerSideBarButton.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="white"
    className="w-9 h-9"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>`;
    }
  });
};
