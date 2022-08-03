import App from '@/app';
import {NewsRoute} from "@/routes/news.route";
import {GalleryRoute} from "./routes/gallery.route";
import {EventTypeRoute} from "@/routes/eventType.route";
import {EventRoute} from "@/routes/event.route";
import {KitchenTypeRoute} from "@/routes/kitchenType.route";
import {CornerRoute} from "@/routes/corner.route";
import {MenuCategoryRoute} from "@/routes/menuCategory.route";
import {MenuRoute} from "@/routes/menu.route";
import {AuthRoute} from "@/routes/auth.route";

const app = new App([
  new NewsRoute(),
  new GalleryRoute(),
  new EventTypeRoute(),
  new EventRoute(),
  new KitchenTypeRoute(),
  new CornerRoute(),
  new MenuCategoryRoute(),
  new MenuRoute(),
  new AuthRoute()
]);

app.listen();
