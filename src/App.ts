import * as express from "express";
import * as path from "path";

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
      res.render('videos/index', { title: 'Video Previewer' });
    });
    this.express.use("/", router);
  }
}

export default new App().express;
