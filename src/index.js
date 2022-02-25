import 'Styles/pages/index.scss';
import Carousel from 'Components/carousel/carousel.js';
import FormValidator from 'Lib/formValidator/formValidator.js';

const elemCarouselServices = document.querySelector('#carousel-services');
const elemCarouselBenefits = document.querySelector('#carousel-benefits');
const elemCarouselReviews = document.querySelector('#carousel-reviews');
const CarouselServices = new Carousel(elemCarouselServices);
const CarouselBenefits = new Carousel(elemCarouselBenefits);
const CarouselReviews = new Carousel(elemCarouselReviews);

CarouselServices.init();
CarouselBenefits.init();
CarouselReviews.init();

const form = document.querySelector('#form-signup');
const validatorSignupForm = new FormValidator(form);

validatorSignupForm.init();

if (module.hot) {
  module.hot.accept();
}
