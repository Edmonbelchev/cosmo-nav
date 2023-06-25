export function formatDate(date: Date = new Date(), decrementDay = 0) {
    date = new Date(date)

    date.setDate(date.getDate() - decrementDay)
    
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
};