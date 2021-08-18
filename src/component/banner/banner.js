const initBanner = (moduleId) => {
  const contentDiv = $(".vert-mod");

  contentDiv.prepend(
    `
    <div class="vert">
    <image class="m-banner" src="https://gordonchantc.github.io/polyu-mooc-edx/src/images/banner/M${moduleId}.jpg" />
    </div>
    `
  );
};
