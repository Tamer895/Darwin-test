function localizer(time) {
    const utcDate = new Date(time);
    const day = String(utcDate.getUTCDate()).padStart(2, '0');
    const month = String(utcDate.getUTCMonth() + 1).padStart(2, '0');
    const year = utcDate.getUTCFullYear();
    return `${day}.${month}.${year}`;
}

export default localizer;