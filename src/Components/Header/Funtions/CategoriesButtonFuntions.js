export const handleButtonRight = () => {
  // DOM lấy thẻ div bọc ngoài header categories và thẻ div chứa list categories
  let headerCategoriesList = document.getElementById("headerCategoriesList");
  let headerCategoriesWrapper = document.getElementById(
    "categoriesListWrapper"
  );
  let categorisListButtonRight = document.querySelector(
    ".header__categories .categories__button-right"
  );
  let categorisListButtonLeft = document.querySelector(
    ".header__categories .categories__button-left"
  );

  // Sau khi DOM lấy thì lần lượt lấy chiều ngang scrollWidth của thẻ div cha và clientWidth thẻ div con chứa list categories
  let widthList = headerCategoriesList.scrollWidth;
  let widthHeader = headerCategoriesWrapper.clientWidth;

  // Sau khi có chiều ngang của 2 thẻ thì lúc này chắc chắc thẻ div list dài hơn thẻ div cha mới hiện nút button ấn sang phải, nên ta lấy chiều dài của thẻ div list trừ đi chiều dài của thẻ div cha sẽ biết được cần phải di chuyển thẻ div list bao nhiêu px
  let widthChange = widthList - widthHeader;

  // Có được chiều dài cần thay đổi thì chuyển nó thành số âm để nó di chuyển sang trái và căn chỉnh thêm pixel để giao diện đẹp hơn
  let widthChangedown = widthChange * -1 - 30;

  // Cuối cùng thay đổi lên giao diện và xóa button right và chuyển nó thành button left
  headerCategoriesList.style.transform = `translate(${widthChangedown}px)`;
  categorisListButtonRight.classList.replace("block", "hidden");
  categorisListButtonLeft.classList.replace("hidden", "block");
};

export const handleButtonLeft = () => {
  // DOM lấy thẻ div chứa list categories
  let headerCategoriesList = document.getElementById("headerCategoriesList");

  let categorisListButtonRight = document.querySelector(
    ".header__categories .categories__button-right"
  );
  let categorisListButtonLeft = document.querySelector(
    ".header__categories .categories__button-left"
  );

  // Vì là set thay đổi lại giao diện như cũ nên bớt rườm rà hơn, chỉ cần cho giao diện quay lại như ban đầu là được
  headerCategoriesList.style.transform = `translate(0px)`;
  categorisListButtonRight.classList.replace("hidden", "block");
  categorisListButtonLeft.classList.replace("block", "hidden");
};
