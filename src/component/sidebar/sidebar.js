const getURL = (courseId) => {
  const url = 'https://learning.edx.org/course/course-v1:HKPolyUx+HKPolyU-SD01x+3T2021/block-v1:HKPolyUx+HKPolyU-SD01x+3T2021+type@sequential+block@9dada50365364201a9c76ee01917618d/block-v1:HKPolyUx+HKPolyU-SD01x+3T2021+type@vertical+block@;

  return url + courseId;
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
            <span> Course Menu </span>
        </div>
    </div>
  `);
};