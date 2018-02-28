import * as express from "express";
import * as path from "path";
import VideosFetcher from "./lib/VideosFetcher";

class App {
  public express;

  constructor() {
    this.express = express();
    this.mountRoutes();
    this.express.set('view engine', 'ejs');
    this.express.set('views', path.join(__dirname, '..', '..', 'views'));
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get("/", (req, res) => {

      const attrs = { videos: [], loading: false, error: false }

      VideosFetcher.fetch((videos) => {
        res.render('videos/index', { ...attrs, videos: videos });
      });
    });
    router.get("/main.js", (req, res) => {
      var options = {
        root: __dirname,
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
      };
      res.sendFile('Main.js', options);
    });

    this.express.use("/", router);
  }
}

export default new App().express;
