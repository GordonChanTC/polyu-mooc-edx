$(document).ready(function () {
  $(".m-video-preview").click((e) => {
    if (Hls.isSupported()) {
      const video = $("#video")[0];
      const hls = new Hls();
      hls.loadSource(
        "https://edx-video.net/" + $(e.currentTarget).data("video-id") + ".m3u8"
      );
      hls.attachMedia(video);
      $("#modal").show();
      video.autoplay = true;
    }
  });

  $(".m-video-only-preview").click((e) => {
    if (Hls.isSupported()) {
      const video = $("#video")[0];
      const hls = new Hls();
      hls.loadSource(
        "https://edx-video.net/" + $(e.currentTarget).data("video-id") + ".m3u8"
      );
      hls.attachMedia(video);
      $("#modal").show();
      video.autoplay = true;
    }
  });

  $("#m-overlay").click((e) => {
    if ($(e.target).attr("id") === "m-overlay") {
      const video = $("#video")[0];
      video.pause();
      video.currentTime = 0;
      $("#modal").hide();
    }
  });

  $(".m-video-preview-en").click((e) => {
        if(Hls.isSupported()) {
            const video = $("#video")[0];
            const hls = new Hls();
            hls.loadSource(
                "https://edx-video.net/" +
                $(e.currentTarget).data("video-id") +
                ".m3u8"
            );
            hls.attachMedia(video);
            $("#modal").show();
            video.autoplay = true;
        }
    })

    $(".m-video-preview-cn").click((e) => {
        if(Hls.isSupported()) {
            const video = $("#video")[0];
            const hls = new Hls();
            hls.loadSource(
                "https://edx-video.net/" +
                $(e.currentTarget).data("video-id") +
                ".m3u8"
            );
            hls.attachMedia(video);
            $("#modal").show();
            video.autoplay = true;
        }
    })
});
