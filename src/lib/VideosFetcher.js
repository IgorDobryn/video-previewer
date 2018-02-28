import { XMLHttpRequest } from 'xmlhttprequest';
class VideosFetcher {
    static fetch(opts) {
        console.log('fetch:1');
        var request = new XMLHttpRequest();
        request.open('GET', this.url, true);
        request.onload = opts.onLoad;
        request.onerror = opts.onError;
        request.send();
    }
}
VideosFetcher.url = 'https://api.contents.watchabc.go.com/vp2/ws/s/contents/3000/videos/001/001/sf/-1/-1/-1/-1/50.json';
export default VideosFetcher;
//# sourceMappingURL=VideosFetcher.js.map