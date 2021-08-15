$(".m-video-preview").click((e) => {
    if (Hls.isSupported()) {
        const video = $("#video");
        const hls = new Hls();
        hls.loadSource(
        "https://edx-video.net/" +
            $(e.currentTarget).data("video-id") +
            ".m3u8"
        );
        hls.attachMedia(video[0]);
        $("#modal").show();
    }
});

$("#m-overlay").click((e) => {
    if ($(e.target).attr("id") === "m-overlay") {
        $("#modal").hide();
    }
});