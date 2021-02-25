import dayjs from 'dayjs'
// import { ref } from 'vue'

export function setPickedTime(num = 0, pickedTime: string[]) {
    let startTime: string, endTime: string
    if (!num && num !== 0) {
        startTime = ''
        endTime = ''
    } else {
        startTime = dayjs()
            .subtract(num + 1, 'day')
            .format('YYYY-MM-DD')
            .toString()
        endTime = dayjs().subtract(1, 'day')
            .format('YYYY-MM-DD')
            .toString()
    }
    pickedTime[0] = startTime
    pickedTime[1] = endTime
}

export function getPastRange(num: number) {
    let startTime: string, endTime: string
    if (!num && num !== 0) {
        startTime = ''
        endTime = ''
    } else {
        startTime = dayjs()
            .subtract(num + 1, 'day')
            .format('YYYY-MM-DD')
            .toString()
        endTime = dayjs().subtract(1, 'day')
            .format('YYYY-MM-DD')
            .toString()
    }

    return [startTime, endTime]
}
// export const usePickedTimeRef = (day = 0) => {
//     const pickedTimeRef = ref<string[]>(['', ''])

//     const setPickedTimeRef = (num = 0) => {
//         let startTime: string, endTime: string
//         if (!day && num !== 0) {
//             startTime = ''
//             endTime = ''
//         } else {
//             startTime = dayjs()
//                 .subtract(num + 1, 'day')
//                 .format('YYYY-MM-DD')
//                 .toString()
//             endTime = dayjs().subtract(1, 'day')
//                 .format('YYYY-MM-DD')
//                 .toString()
//         }
//         pickedTimeRef.value = [startTime, endTime]
//     }

//     setPickedTimeRef(day)

//     return { pickedTimeRef, setPickedTimeRef }
// }
