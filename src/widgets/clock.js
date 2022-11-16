export { setDate, updateClock }

// get date
let setDate = () => {
    let currentDate = new Date()
    let currentDay = currentDate.getDate()
    let currentMonth = currentDate.getMonth() + 1
    let currentYear = currentDate.getFullYear()

    let currentDateFormatted = `${currentYear}-${currentMonth}-${currentDay}`
    //
    // set the date and time inside the date & time widget
    const dateDisplay = document.getElementById('dateDisplay')
    dateDisplay.innerHTML = currentDateFormatted
}

// updating and set the current time in the time display div
let updateClock = () => {
    let currentDate = new Date();
    let currentTime = currentDate.toLocaleTimeString()
    const timeDisplay = document.getElementById('timeDisplay')
    timeDisplay.innerHTML = currentTime

    setTimeout(updateClock, 1000)
}

