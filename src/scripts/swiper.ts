// Swiper with only the modules the site uses (FilmReel carousel). Imported dynamically so it loads on demand;
// static named imports here let the bundler drop the modules we don't use.
import Swiper from 'swiper';
import { A11y, Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css';

export { Swiper, A11y, Keyboard, Navigation };
