const eventDate = "2024-03-30"

function remainingEventDays(eventDate) {
    const currentDate = new Date();
    // console.log(`current date : ${currentDate}`);
    const eventDateTime = new Date(eventDate);
    // console.log(`Eventdatetime ${eventDateTime}`);
    const Timedifference = eventDateTime - currentDate;
    const differenceInDays = parseInt(Timedifference/ (1000 * 60 * 60 * 24));

    return differenceInDays;
}
console.log(`Event remaining days : ${remainingEventDays(eventDate)}`);;