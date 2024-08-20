/*
 * Copyright (c) 2024. Made by WWiRRu
 */
/**
 * Permet de formatter le time (secondes) en phrase "5 années 5 mois 5 jours 5 heures 5 minutes"
 * @param {number} time
 * @returns {string}
 */
function format(time) {
    const year = Math.floor(time / 31536000);
    let remaining = time - (year * 31536000);
    const month = Math.floor(remaining / 2635200);
    remaining -= (month * 2635200);
    const days = Math.floor(remaining / 86400);
    remaining -= (days * 86400);
    const hours = Math.floor(remaining / 3600);
    remaining -= (hours * 3600);
    const minutes = Math.floor(remaining / 60);
    const seconds = Math.floor(remaining - (minutes * 60));

    if (year > 0) {
        return `${year} années`;
    } else if (month > 0) {
        const value1 = `${month} mois`;
        const value2 = `${days} jours`;
        const value3 = `${hours} heures`;
        const value4 = `${minutes} minutes`;
        const value5 = `${seconds} secondes`;
        return days === 0 ? value1 : `${value1} & ${value2} & ${value3} & ${value4} & ${value5}`;
    } else if (days > 0) {
        const value1 = `${days} jours`;
        const value2 = `${hours} heures`;
        const value3 = `${minutes} minutes`;
        const value4 = `${seconds} secondes`;
        return hours === 0 ? value1 : `${value1} & ${value2} & ${value3} & ${value4}`;
    } else if (hours > 0) {
        const value1 = `${hours} heures`;
        const value2 = `${minutes} minutes`;
        const value3 = `${seconds} secondes`;
        return minutes === 0 ? value1 : `${value1} & ${value2} & ${value3}`;
    } else if (minutes > 0) {
        const value1 = `${minutes} minutes`;
        const value2 = `${seconds} secondes`;
        return seconds === 0 ? value1 : `${value1} & ${value2}`;
    }
    return `${seconds} secondes`;
}

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDay() + 10;

const dateToGet = new Date(tempYear, tempMonth, tempDay, 11, 30, 0);

function updateCountdown() {
    const today = new Date();
    let timeLeft = dateToGet.getTime() - today.getTime();
    const container = document.querySelector('.cooldown-container');
    if (timeLeft <= 0) {
        container.innerHTML = '<p>Le concours est terminé.</p>' +
            '<p>Le gagnant sera annoncé dans les prochains jours.</p>';
        return;
    }
    let text = [];
    const time = format(timeLeft / 1000).split(' & ');
    time.forEach((value, index) => {
        let category = value.split(" ");
        text.push(`
            <div class="${category[1]}">
                <p>${value}</p>
            </div>`
        );
    });
    container.innerHTML = text.join('');
}

setInterval(updateCountdown, 1000);
updateCountdown();