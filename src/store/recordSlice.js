import { createSlice } from "@reduxjs/toolkit";

const demoRecords = [
  {
    id: 1,
    name: "Nadim Mahmud",
    email: "nadimlancer0@gmail.com",
    phone: "01310546150",
    position: "Software Engineer",
  },
  {
    id: 1,
    name: "Nadim Mahmud",
    email: "nadimlancer0@gmail.com",
    phone: "01310546150",
    position: "Software Engineer",
  },
  {
    id: 2,
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "01310546150",
    position: "Ai Researcher",
  },
  {
    id: 3,
    name: "Emily Fowler",
    email: "emily2020@gmail.com",
    phone: "018374334",
    position: "Manager",
  },
  {
    id: 4,
    name: "Alice Williams",
    email: "alice@gmail.com",
    phone: "038383744",
    position: "Designer",
  },
];

// load records from local storage or use demo data

const loadRecordsFormStorage = () => {
  try {
    const savedRecord = localStorage.getItem("employeeRecords");

    return savedRecord ? JSON.parse(savedRecord) : demoRecords;
  } catch (error) {
    console.log(error);
  }
};

// calculate next Id based on Existing records

const calculateNextId = (records) => {
  if (!records || records.length === 0) return 1;
  return Math.max(...records.map((r) => r.id)) + 1;
};

const recordSlice = createSlice({
  name: "records",
  initialState: {
    items: demoRecords,
    searchTerm: "",
    nextId: calculateNextId(loadRecordsFormStorage()),
  },
  reducers: {
    // Add the new record
    addRecord: (state, action) => {
      const nextRecord = {
        id: state.nextId,
        ...action.payload,
      };
      state.items.push(nextRecord);

      localStorage.setItem("employeeRecords", JSON.stringify(state.items));
      state.nextId = calculateNextId(state.items);
    },

    // update record

    updateRecord: (state, action) => {
      const { id, data } = action.payload;

      const index = state.items.findIndex((r) => r.id === id);
      if (index !== -1) {
        state.items[index] = {
          ...state.items[index],
          ...data,
        };

        localStorage.setItem("employeeRecords", JSON.stringify(state.items));
      }
    },

    // delete records

    deleteRecord: (state, action) => {
      state.items = state.items.filter((r) => r.id !== action.payload);
      localStorage.setItem("employeeRecords", JSON.stringify(state.items));
      state.nextId = calculateNextId(state.items);
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    resetAllRecords: (state) => {
      state.items = demoRecords;
      state.nextId = calculateNextId(demoRecords);
      localStorage.setItem("employeeRecords", JSON.stringify(demoRecords));
    },
  },
});

// selector

export const selectAllRecords = (state) => state.records.items;

export const selectSearchTerm = (state) => state.records.searchTerm;

export const {
  addRecord,
  updateRecord,
  deleteRecord,
  setSearchTerm,
  resetAllRecords,
} = recordSlice.actions;

export default recordSlice.reducer;
