import './sass/main.scss';


class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.refs = {
            timerBox: document.querySelector(`${selector}`),
            timerDays: document.querySelector(`${selector} span[data-value="days"]`),
            timerHours: document.querySelector(`${selector} span[data-value="hours"]`),
            timerMinutes: document.querySelector(`${selector} span[data-value="mins"]`),
            timerSeconds: document.querySelector(`${selector} span[data-value="secs"]`),
        };
    };

    start() {
        setInterval(() => {
            const cowndownTime = this.targetDate - Date.now()  
            this.updateTimerFace(this.getTimeNormilize(cowndownTime))
        }, 1000)
    };
    getTimeNormilize(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24))
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000))
        return {days, hours, mins, secs}
    };
    pad(value) {
        return String(value).padStart(2,'0')
    };
    updateTimerFace({days, hours, mins, secs}) {
        this.refs.timerDays.textContent = days
        this.refs.timerHours.textContent = hours
        this.refs.timerMinutes.textContent = mins
        this.refs.timerSeconds.textContent = secs
    }

}

const timer1 = {
    selector:'#timer-1',
    targetDate:new Date('Jul 17, 2021'),
}



const timer = new CountdownTimer(timer1)

timer.start()
