import * as express from "express";
import * as path from "path";
class App {
    constructor() {
        this.express = express();
        this.mountRoutes();
        this.express.set('view engine', 'ejs');
        this.express.set('views', path.join(__dirname, '..', '..', 'views'));
    }
    mountRoutes() {
        const router = express.Router();
        router.get("/", (req, res) => {
            res.render('videos/index');
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
//# sourceMappingURL=App.js.map