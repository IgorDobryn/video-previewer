class Video {
  readonly thumbnail: string;
  readonly title: string;
  readonly description: string;

  constructor(opts: { thumbnail: string, title: string, description: string }) {
    this.thumbnail = opts.thumbnail;
    this.title = opts.title;
    this.description = opts.description;
  }
}

export default Video;
