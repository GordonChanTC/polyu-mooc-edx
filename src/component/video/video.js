$(".m-video-preview").click((e) => {
    if (Hls.isSupported()) {
        const video = $("#video")[0];
        const hls = new Hls();
        hls.loadSource(
        "https://edx-video.net/" +
            $(e.currentTarget).data("video-id") +
            ".m3u8"
        );
        hls.attachMedia(video);
        $("#modal")[0].show();
    }
});

$("#m-overlay").click((e) => {
    if ($(e.target).attr("id") === "m-overlay") {
        const video = $("#video")[0];
        video.pause();
        video.currentTime = 0;
        $("#modal")[0].hide();
    }
});