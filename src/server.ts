import App from '@/app';
import {NewsRoute} from "@/routes/news.route";
import {GalleryRoute} from "./routes/gallery.route";

const app = new App([
  new NewsRoute(),
  new GalleryRoute()
]);

app.listen();
