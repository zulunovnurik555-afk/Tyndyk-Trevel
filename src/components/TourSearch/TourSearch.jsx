import React from 'react';
import styles from './TourSearch.module.css';

const TourSearch = () => {
    return (
        <div className={styles.searchContainer}>
            <h2 className={styles.title}>Поиск тура</h2>

            <div className={styles.filterWrapper}>
                {/* Тип тура */}
                <div className={styles.fieldGroup}>
                    <label>Тип тура</label>
                    <div className={styles.selectWrapper}>
                        <select defaultValue="any">
                            <option value="any">Любой</option>
                            <option value="active">Активный</option>
                            <option value="relax">Релакс</option>
                        </select>
                    </div>
                </div>

                {/* Продолжительность */}
                <div className={styles.fieldGroup}>
                    <label>Продолжительность</label>
                    <div className={styles.doubleFields}>
                        <div className={styles.selectWrapper}>
                            <select defaultValue="">
                                <option value="" disabled>От</option>
                                <option value="1">1 день</option>
                                <option value="3">3 дня</option>
                            </select>
                        </div>
                        <div className={styles.selectWrapper}>
                            <select defaultValue="">
                                <option value="" disabled>До</option>
                                <option value="7">7 дней</option>
                                <option value="14">14 дней</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Даты тура */}
                <div className={styles.fieldGroup}>
                    <label>Даты тура</label>
                    <div className={styles.selectWrapper}>
                        <select defaultValue="any">
                            <option value="any">Любой</option>
                            <option value="may">Май 2026</option>
                            <option value="june">Июнь 2026</option>
                        </select>
                    </div>
                </div>

                {/* Кнопка */}
                <div className={styles.buttonGroup}>
                    <button className={styles.searchBtn}>Найти</button>
                </div>
            </div>
        </div>
    );
};

export default TourSearch;