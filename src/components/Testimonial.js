import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

function Testimonial() {
    const testimonialData = [
        {id: 0,value:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"},
        {id: 1,value:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"},
        {id: 2,value:"https://img.freepik.com/free-photo/portrait-handsome-brunet-unshaven-adult-man-looks-with-calm-confident-expression-has-serious-look-wears-casual-jumper-poses-making-photo-against-white-background-being-hard-impress_273609-57668.jpg?w=2000"},
        {id: 3,value:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"},
        {id: 4,value:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"},
        {id: 5,value:"https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"},
    ]

    return (
        <div className="testimonial-container">
            <div className="textimonial-heading-contianer">
                <img src="https://user-images.githubusercontent.com/99132893/232486732-e87e551d-1bd4-4c34-b00a-052f94ef8d75.png" alt="" />
                <div className="testimonial-heading">
                    <FontAwesomeIcon icon={faStar} />
                    <h3>User Testimonial</h3>
                    <FontAwesomeIcon icon={faStar} />
                </div>
            </div>
            <div className="carousel-container">
                <Swiper 
                    effect='coverflow'
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        "rotate": 0,
                        "stretch": 0,
                        "depth": 100,
                        "modifier": 2.5,
                        "slideShadows": false
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        "clickable": true
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper-container"
                >
                    {
                        testimonialData.map((testimonialData) =>
                            <SwiperSlide>
                                <img src={testimonialData.value} alt="" className='testimonial-image'/>
                            </SwiperSlide>
                        )
                    }
                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow"></div>
                        <div className="swiper-button-next slider-arrow"></div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
            <div className="offer-contianer"></div>
            <div className="preview-page-dots">
                <div className="dot active"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
}

export default Testimonial;