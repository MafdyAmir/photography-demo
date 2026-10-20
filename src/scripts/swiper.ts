// Swiper with only the modules the site uses. Imported dynamically (FilmReel, Gallery) so it loads on demand;
// static named imports here let the bundler drop the modules we don't use.
import Swiper from 'swiper';
import { A11y, Keyboard, Navigation, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/zoom';

export { Swiper, A11y, Keyboard, Navigation, Zoom };
