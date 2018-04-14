//SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
})

//SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
})
//SORT_BY_DATE
export const sortByDate = () => ({
  type: "SORT_BY_DATE"
})

//START_DATE
export const setStartDate = (startDate = "today") => ({
  type: "START_DATE",
  startDate
})
//END_DATE
export const setEndDate = (endDate = "tomorrow") => ({
  type: "END_DATE",
  endDate
})