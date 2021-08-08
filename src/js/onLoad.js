$(document).ready(function () {
  console.log("Loaded js");

  const path =
    window.location.hostname === "localhost"
      ? "."
      : "https://gordonchantc.github.io/polyu-mooc-edx/src";

  const getFilePath = (file) => `${path}${file}`;

  const mainDiv = $("#main");

  const contentDiv = $(".vert-mod");

  mainDiv.css({
    display: "flex",
    height: "930px",
    "overflow-y": "auto",
    "overflow-x": "hidden",
    width: "100%",
    "justify-content": "center",
    padding: "0",
    margin: "20px",
  });
  mainDiv.prepend(`<div id="sideBar">Menu Content</div>`);
  $("#sideBar").css({
    position: "sticky",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    "max-width": "260px",
    background: "#eaeaea",
  });
  contentDiv.prepend(
    `<image id="m-banner" src="${getFilePath(
      "/images/banner/Chopped/M1B.jpg"
    )}" />`
  );
  $("#m-banner").css({
    "min-width": "840px",
    "min-height": "216px",
  });
});
