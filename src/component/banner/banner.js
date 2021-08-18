$(document).ready(function () {
  const path =
    window.location.hostname === "localhost"
      ? "."
      : "https://gordonchantc.github.io/polyu-mooc-edx/src";

  const getFilePath = (file) => `${path}${file}`;

  const contentDiv = $(".vert-mod");
  contentDiv.prepend(
    `<image class="m-banner" src="${getFilePath(
      "/images/banner/Chopped/M1B.jpg"
    )}" />`
  );
});
