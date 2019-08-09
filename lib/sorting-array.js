const ascending_sorting = (data) => {
    return data.sort()
}
const descending_sorting = (data) => {
    let sorting = ascending_sorting(data)
    return sorting.reverse()
}
module.exports = {
    ascending_sorting,
    descending_sorting
}