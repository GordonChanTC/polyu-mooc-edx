$(document).ready(function () {
  console.log("Loaded js");

  const path =
    window.location.hostname === "localhost"
      ? "./"
      : "https://gordonchantc.github.io/polyu-mooc-edx/src/";

  const getFilePath = (file) => `${path}${file}`;

  const mainDiv = $("#main");

  mainDiv.css({
    display: "flex",
  });
  mainDiv.prepend(`<div id="sideBar">Menu Content</div>`);
  $("#sideBar").css({
    position: "sticky",
    top: "60px",
    left: "0px",
    margin: "8px",
    width: "120px",
    height: "200px",
    background: "#eaeaea",
    padding: "8px",
  });
});
