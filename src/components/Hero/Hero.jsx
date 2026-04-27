import styles from './Hero.module.css';
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


// Твои данные из mockApi
const sideCardsData = [
    {
        image: 'https://too.kg/wp-content/uploads/image_8.jpg',
        title: 'Караван-сарай Таш-Рабат',
        description: 'Древний ключевой пункт Великого Шелкового Пути недалеко от границы с Китаем.'
    },
    {
        image: 'https://open.kg/uploads/posts/2017-09/1505750299_g4.webp',
        title: 'Башня Бурана',
        description: 'Минарет 11-го века, хранящий тайны древнего города Баласагун.'
    }
];

// Твои ссылки для слайдера
const sliderImages = [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/e3/37/06/das-sind-die-jeti-oguz.jpg?w=900&h=500&s=1',
    'https://dwc.kg/wp-content/uploads/2023/05/1647363922_10-vsegda-pomnim-com-p-ozero-chatir-kul-foto-11.jpg',
    'https://mineconom.gov.kg/storage/posts/11244/176034895268eccb18c8921_medium.JPG'
];

const Hero = () => {
    return (
        <section className={styles.hero}>
            {/* Основной слайдер (слева) с твоими фото */}
            <div className={styles.sliderContainer}>
                <Swiper
                    navigation={true}
                    pagination={{ clickable: true }}
                    loop={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className={styles.mySwiper}
                >
                    {sliderImages.map((imageUrl, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className={styles.slide}
                                // Добавляем градиент поверх ТВОЕГО фото для читаемости текста
                                style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%), url(${imageUrl})` }}
                            >
                                <div className={styles.slideContent}>
                                    {/* Заголовок и кнопка как в примере */}
                                    <h1>Путешествия по Кыргызстану в 2024 году</h1>
                                    <p>Успей забронировать уникальные туры, количество мест ограничено.</p>
                                    <button className={styles.moreBtn}>Подробнее</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Боковые карточки (справа) с фото из mockApi */}
            <div className={styles.sideCards}>
                {sideCardsData.map((item, idx) => (
                    <div
                        key={idx}
                        className={styles.newsCard}
                        // Добавляем градиент поверх ТВОЕГО фото
                        style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%), url(${item.image})` }}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hero;