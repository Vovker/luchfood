import App from '@/app';
import {NewsRoute} from "@/routes/news.route";
import {GalleryRoute} from "./routes/gallery.route";
import {EventTypeRoute} from "@/routes/eventType.route";
import {EventRoute} from "@/routes/event.route";

const app = new App([
  new NewsRoute(),
  new GalleryRoute(),
  new EventTypeRoute(),
  new EventRoute()
]);

app.listen();
