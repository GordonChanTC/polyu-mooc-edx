const path =
  window.location.hostname === "localhost"
    ? "./"
    : "https://gordonchantc.github.io/polyu-mooc-edx/";

const getFilePath = (file) => `${path}${file}`;

requirejs([getFilePath("src/js/common")], (common) => {
  const mainDiv = common.getMainDiv();
  mainDiv.css({
    display: "flex",
  });
  mainDiv.prepend(`<div id="sideBar"></div>`);
  $("#sideBar").load(getFilePath("src/component/sidebar.html"));
});
