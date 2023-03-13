
import groupData from '../api/groups.json'
const FormatDate = () => {
    groupData && groupData.map((item, index) => {
        const utcDateStart = item.work_start_time
        const utcDateEnd = item.work_end_time
        const localDateStart = new Date(utcDateStart)
        const dateStart = localDateStart.toISOString().split('T')[0]
        const localDateEnd = new Date(utcDateEnd)
        const dateEnd = localDateEnd.toISOString().split('T')[0]
        item.work_start_time = dateStart
        item.work_end_time = dateEnd
        return item
    })
    return groupData

}

export default FormatDate