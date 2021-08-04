const initSideBar = (chapter, subModuleID) => {
  const path =
    window.location.hostname === "localhost"
      ? "./"
      : "https://gordonchantc.github.io/polyu-mooc-edx/src/";

  $.getJSON(path + `component/sidebar/chapters/ch${chapter}.json`, (data) => {
    const mainDiv = $("#main");
    console.log(data);

    mainDiv.prepend(`
    <div class="m-sidebar">
        <div>
            <div class="m-sidebar-logo">
                <img
                    src="https://gordonchantc.github.io/polyu-mooc-edx/src/images/logo/PolyUlogo.png"
                    alt="PolyU Design"
                />
            </div>
            <div class="m-sidebar-subtitle">
                <span> Design Thinking: </span>
                <span> Theories and Application </span>
            </div>
            <div class="m-sidebar-title">
                <span> ${data.title} </span>
            </div>
        </div>
        ${data.course
          .map(
            (c) =>
              `<div class="m-sidebar-sub-module-title ${
                c.id == subModuleID ? "active" : ""
              }">
                <a href="${c.link}"> ${c.title} </a>
            </div>`
          )
          .join("")}
        <div class="m-sidebar-course-menu">
            <span> Course Menu </span>
        </div>
    </div>
  `);
  });
};