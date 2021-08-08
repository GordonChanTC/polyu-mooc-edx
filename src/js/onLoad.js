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
  });
  mainDiv.prepend(`<div id="sideBar">Menu Content</div>`);
  $("#sideBar").css({
    position: "sticky",
    top: "0px",
    left: "0px",
    width: "260px",
    height: "930px",
    background: "#eaeaea",
  });
  contentDiv.prepend(
    `<image width="840px" height="216px" src="${getFilePath(
      "/images/banner/Chopped/M1B.jpg"
    )}" />`
  );
});
