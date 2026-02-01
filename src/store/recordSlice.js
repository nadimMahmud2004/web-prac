import { createSlice } from "@reduxjs/toolkit";

const demoRecords = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "2238-384843",
    position: "Developer",
  },
  {
    id: 2,
    name: "Alice Williams",
    email: "alice344@gmail.com",
    phone: "53564-495939",
    position: "Designer",
  },
  {
    id: 3,
    name: "Bob Marley",
    email: "bobMarley@gmail.com",
    phone: "34554-266455",
    position: "Manager",
  },
  {
    id: 4,
    name: "Mark Jackson",
    email: "mark34@gmail.com",
    phone: "5594-5945944",
    position: "Full Stack",
  },
];

// load records from local storage or use demo data

const loadRecordsFromStorage = () => {
  try {
    const savedRecords = localStorage.getItem("employeeRecords");
    return savedRecords ? JSON.parse(savedRecords) : demoRecords;
  } catch (error) {
    console.error("Error Loading Records", error);
  }
};

// calculate next id based on existing records

const calculateNextId = (records) => {
  if (!records || records.length === 0) return 1;

  return Math.max(...records.map((r) => r.id)) + 1;
};

const recordsSlice = createSlice({
  name: "records",
  initialState: {
    items: loadRecordsFromStorage(),
    searchTerm: "",
    nextId: calculateNextId(loadRecordsFromStorage()),
  },
  reducers: {
    // Add the new records
    addRecord: (state, action) => {
      const nextRecord = {
        id: state.nextId,
        ...action.payload,
      };
      state.items.push(nextRecord);

      localStorage.setItem("employeeRecords", JSON.stringify(state.items));

      state.nextId = calculateNextId(state.items);
    },
    // upload records

    updateRecords: (state, action) => {
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
    // delete record

    deleteRecord: (state, action) => {
      state.items = state.items.filter((r) => r.id !== action.payload);
      localStorage.setItem("employeeRecords", JSON.stringify(state.items));
      state.nextId = calculateNextId(state.items);
    },
    // search records
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

export const selectAllRecords = (state) => state.records.items;
export const selectSearchTerm = (state) => state.records.searchTerm;
export const selectFilteredRecords = (state) => {
  const term = state.records.searchTerm.toLowerCase();
  return state.records.items.filter(
    (r) =>
      r.name.toLowerCase().includes(term) ||
      r.email.toLowerCase().includes(term) ||
      r.position.toLowerCase().includes(term) ||
      r.phone.toLowerCase().includes(term),
  );
};

export const {
  addRecord,
  updateRecords,
  deleteRecord,
  setSearchTerm,
  resetAllRecords,
} = recordsSlice.actions;

export default recordsSlice.reducer;
