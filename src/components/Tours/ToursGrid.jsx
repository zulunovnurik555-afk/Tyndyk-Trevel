import React, { useState } from 'react';
import styles from './ToursGrid.module.css';

// Обновленные данные: 7 областей + Бишкек
const regionsTours = [
    {
        id: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Jp3yjAWNkDtKxPNY0I1JJKJS3kwXvtVNUQ&s',
        badge: 'ХИТ',
        badgeType: 'hit',
        title: 'Чуйская область: Наследие Баласагуна',
        desc: 'Посещение башни Бурана и руин древнего города',
        difficulty: 'Легкий',
        duration: '1 день',
        price: '1 500 сом',
        oldPrice: '2 000 сом'
    },
    {
        id: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOu2JDAiTQVLngBCX68q2D_9GCKMaWGUA8gg&s',
        badge: 'ПОПУЛЯРНОЕ',
        badgeType: 'price',
        title: 'Иссык-Кульская область: Жемчужина Тянь-Шаня',
        desc: 'Отдых на побережье высокогорного озера',
        difficulty: 'Отдых',
        duration: '3 дня / 2 ночи',
        price: '9 000 сом',
        oldPrice: '12 000 сом'
    },
    {
        id: 3,
        image: 'https://too.kg/wp-content/uploads/image_8.jpg',
        badge: 'ЛУЧШАЯ ЦЕНА!',
        badgeType: 'price',
        title: 'Нарынская область: По следам Шелкового Пути',
        desc: 'Экскурсия в высокогорный караван-сарай Таш-Рабат',
        difficulty: 'Средний',
        duration: '2 дня / 1 ночь',
        price: '6 000 сом',
        oldPrice: '8 000 сом'
    },
    {
        id: 4,
        image: 'https://24.kg/files/media/295/295528.jpg',
        badge: 'ЭКО-ТУР',
        badgeType: 'hit',
        title: 'Джалал-Абадская область: Ореховые леса',
        desc: 'Прогулка по уникальному реликтовому лесу Арсланбоб',
        difficulty: 'Средний',
        duration: '2 дня / 1 ночь',
        price: '7 500 сом',
        oldPrice: '10 000 сом'
    },
    {
        id: 5,
        image: 'https://asiamountains.net/assets/cache_image/assets/lib/resized/370/1600x1063_0x0_d0b.jpg',
        badge: 'КУЛЬТУРА',
        badgeType: 'price',
        title: 'Ошская область: Священная гора',
        desc: 'Подъем на Сулайман-Тоо в древнем городе Ош',
        difficulty: 'Легкий',
        duration: '1 день',
        price: '2 200 сом',
        oldPrice: '3 000 сом'
    },
    {
        id: 6,
        image: 'https://kginform.com/set/3l/000995.jpg',
        badge: 'ЭКСКЛЮЗИВ',
        badgeType: 'hit',
        title: 'Баткенская область: Цветок Айгуль',
        desc: 'Сезонный тур к месту цветения уникального цветка',
        difficulty: 'Средний',
        duration: '3 дня / 2 ночи',
        price: '11 000 сом',
        oldPrice: '15 000 сом'
    },
    {
        id: 7,
        image: 'https://24.kg/files/media/36/36812.jpg',
        badge: 'ИСТОРИЯ',
        badgeType: 'price',
        title: 'Таласская область: Гумбез Манаса',
        desc: 'Посещение мавзолея Манаса и исторических памятников',
        difficulty: 'Легкий',
        duration: '1 день',
        price: '1 800 сом',
        oldPrice: '2 500 сом'
    },
    {
        id: 8,
        image: 'https://tripplanet.ru/wp-content/uploads/asia/kyrgyzstan/bishkek/dostoprimechatelnosti-bishkeka.jpg',
        badge: 'СТОЛИЦА',
        badgeType: 'hit',
        title: 'Бишкек: Сердце Кыргызстана',
        desc: 'Обзорная экскурсия по главным достопримечательностям',
        difficulty: 'Легкий',
        duration: '1 день',
        price: '1 000 сом',
        oldPrice: '1 500 сом'
    }
];

const ToursGrid = () => {
    const [category, setCategory] = useState('all');

    return (
        <section className={styles.section}>
            <h2 className={styles.mainTitle}>Все регионы Кыргызстана</h2>

            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${category === 'all' ? styles.activeTab : ''}`}
                    onClick={() => setCategory('all')}
                >
                    Все направления
                </button>
                <button
                    className={`${styles.tab} ${category === 'regions' ? styles.activeTab : ''}`}
                    onClick={() => setCategory('regions')}
                >
                    Области
                </button>
                <button
                    className={`${styles.tab} ${category === 'capital' ? styles.activeTab : ''}`}
                    onClick={() => setCategory('capital')}
                >
                    Столица
                </button>
            </div>

            <div className={styles.grid}>
                {/* Используем напрямую массив регионов (ровно 8 карточек) */}
                {regionsTours.map((tour, idx) => (
                    <div key={idx} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            {/* Рекомендуется заменить ссылки на реальные изображения */}
                            <img src={tour.image} alt={tour.title} className={styles.image} />
                            {tour.badge && (
                                <span className={`${styles.badge} ${styles[tour.badgeType]}`}>
                                    {tour.badge}
                                </span>
                            )}
                        </div>

                        <div className={styles.content}>
                            <h3 className={styles.title}>{tour.title}</h3>
                            <p className={styles.description}>{tour.desc}</p>

                            <div className={styles.info}>
                                <span><b>Сложность:</b> {tour.difficulty}</span>
                                <span><b>Длительность:</b> {tour.duration}</span>
                            </div>

                            <div className={styles.priceRow}>
                                <span className={styles.currentPrice}>{tour.price}</span>
                                <span className={styles.oldPrice}>{tour.oldPrice}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ToursGrid;