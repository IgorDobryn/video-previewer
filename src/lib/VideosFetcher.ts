import { XMLHttpRequest } from 'xmlhttprequest';
import * as fs from 'fs';

class VideosFetcher {
  static url = 'https://api.contents.watchabc.go.com/vp2/ws/s/contents/3000/videos/001/001/sf/-1/-1/-1/-1/50.json';
  static testMode = true

  static fetch(opts) {
    if (this.testMode) {
      const json = JSON.parse(fs.readFileSync('./spec/fixtures/sampleVideosResponse.json', 'utf8'));

      opts.onLoad(this.convertJSONToVideos(json));
    } else {
      var request = new XMLHttpRequest();
      request.open('GET', this.url, true);

      request.onload = () => {
        const json = JSON.parse(request.responseText);

        opts.onLoad(this.convertJSONToVideos(json));
      };
      request.onerror = opts.onError;

      request.send();
    }
  }

  private static convertJSONToVideos(json) {
    const videos = [];
    if (json && json['video'].length) {
      for (var i = 0; i < json['video'].length; i += 1) {
        let video = json['video'][i];



      }
    }

    return videos;
  }
}

export default VideosFetcher;
