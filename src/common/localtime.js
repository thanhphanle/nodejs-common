const moment = require('moment')

const Localtime = class {

    now() {
        return moment().utcOffset(0, true).toDate()
    }

    subHourString(hours) {
        return moment().utcOffset(0, true).subtract(hours, 'hours').format('YYYY-MM-DD HH:mm:ss')
    }

    getFullDateString() {
        return moment().utcOffset(0, true).format('YYYY-MM-DD HH:mm:ss')
    }

    getDateString() {
        return moment().utcOffset(0, true).format('YYYY-MM-DD')
    }

    getTimeString() {
        return moment().utcOffset(0, true).format('HH:mm:ss')
    }

    getDate() {
        return moment().utcOffset(0, true).format('DD')
    }

    getMonth() {
        return moment().utcOffset(0, true).format('MM')
    }

    getYear() {
        return moment().utcOffset(0, true).format('YYYY')
    }

    get24Hour() {
        return moment().utcOffset(0, true).format('HH')
    }

    getHour() {
        return moment().utcOffset(0, true).format('hh')
    }

    getMinute() {
        return moment().utcOffset(0, true).format('mm')
    }

}

module.exports = Localtime