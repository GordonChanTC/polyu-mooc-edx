const course = "/courses/course-v1:HKPolyUx+HKPolyU-SD01x+3T2021/";

const getURL = (courseId) => {
  const path = "jump_to_id/";

  return course + path + courseId;
};

const getHomeURL = () => {
  return course + 'home';
}

const initSideBar = (data, subModuleID) => {
  const mainDiv = $("#main");

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
                <a href="${getURL(c.courseId)}"> ${c.title} </a>
            </div>`
          )
          .join("")}
        <div class="m-sidebar-course-menu">
            <a href="${getHomeURL('home')}"> Course Menu </a>
        </div>
    </div>
  `);
};
