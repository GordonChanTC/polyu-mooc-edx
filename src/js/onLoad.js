const path =
  window.location.hostname === "localhost"
    ? "./"
    : "https://gordonchantc.github.io/polyu-mooc-edx/src/";

const getFilePath = (file) => `${path}${file}`;

requirejs([getFilePath("js/common")], (common) => {
  const mainDiv = common.getMainDiv();
  mainDiv.css({
    display: "flex",
  });
  mainDiv.prepend(`<div id="sideBar"></div>`);
  $("#sideBar").load(getFilePath("component/sidebar.html"));
});
