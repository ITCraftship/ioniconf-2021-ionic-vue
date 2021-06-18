import {App} from "@vue/runtime-core";
import {differenceInMilliseconds, format, parse} from "date-fns";

export const appFilters = {
    install: (app: App<any>) => {
        // filters
        app.config.globalProperties.$filters = {
            shiftIconName(shiftTime = '00:00') {
                return Number(shiftTime.split(':')[0] || 0) >= 18 ? 'moon-dark' : 'sun-light';
            },
            shiftHoursCount(jobShift: string) {
                const [start, stop] = jobShift.split(' - ').map(t => parse(t, 'kk:mm', new Date()));
                return Math.abs(differenceInMilliseconds(start, stop)) / 3600000;
            },
            shiftStartDate(shiftStartDate: string) {
                return format(parse(shiftStartDate, 'yyyy-MM-dd', new Date()), 'MMM d, yyyy');
            },
            jobTypeLabel(type: string) {
                return ({
                    PER_DIEM: 'Per Diem'
                } as {[k: string]: string})[type] || '[TYPE]'
            },
            jobFacilityLocation(job: {[k: string]: any}) {
                /* eslint-disable @typescript-eslint/camelcase */
                const {fac_street_address, fac_city, fac_state_abbreviation, fac_zip_code} = job.facility;
                return [fac_street_address, fac_city, fac_state_abbreviation, fac_zip_code].filter(Boolean).join(', ')
                /* eslint-enable @typescript-eslint/camelcase */
            },
            jobAmount(job: {[k: string]: any}) {
                return (job.billRate * this.shiftHoursCount(job.job_shift)).toFixed(2)
            },
        }
    }
}
