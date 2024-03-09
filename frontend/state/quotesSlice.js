// ✨ create your `quotesSlice` in this module
import { createSlice } from "@reduxjs/toolkit"
let id = 1
const getNextId = () => id++
const quoteSlice = createSlice({
  name: 'quoteReducer',
  initialState: {
    displayAllQuotes: true,
    highlightedQuote: null,
    quotes: [
      {
        id: getNextId(),
        quoteText: "Don't cry because it's over, smile because it happened.",
        authorName: "Dr. Seuss",
        apocryphal: false,
      },
      {
        id: getNextId(),
        quoteText: "So many books, so little time.",
        authorName: "Frank Zappa",
        apocryphal: false,
      },
      {
        id: getNextId(),
        quoteText: "Be yourself; everyone else is already taken.",
        authorName: "Oscar Wilde",
        apocryphal: false,
      },
    ],
  },
  reducers: {
    highlightQuote: (state, action) => {
      state.highlightedQuote = state.quotes.find(quo => quo.id == action.payload).id
    },
    showAllQuotes: state => {
      state.displayAllQuotes = !state.displayAllQuotes
    },
    fakeQuote: (state, action) => {
      const quo = state.quotes.find(quo => quo.id == action.payload)
      quo.apocryphal = !quo.apocryphal
    },
    deleteQuote: (state, action) => {
      state.quotes = state.quotes.filter(quo => quo.id != action.payload)
    },
    createQuote: (state, action) => {
      const quo = action.payload
      quo.apocryphal = false
      quo.id = getNextId()
      state.quotes.push(quo)
    }
  }
})
export const {highlightQuote, showAllQuotes, fakeQuote, deleteQuote, createQuote} = quoteSlice.actions
export default quoteSlice.reducer