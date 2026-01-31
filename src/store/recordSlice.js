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
    id: 1,
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
    id: 1,
    name: "Mark Jackson",
    email: "mark34@gmail.com",
    phone: "5594-5945944",
    position: "Full Stack",
  },
];

// calculate next id based on existing records

const calculateNextId = (records) => {
  if (!records || records.length === 0) return 1;

  return Math.max(...records.map((r) => r.id)) + 1;
};

const recordsSlice = createSlice({
  name: "records",
  initialState: {
    items: demoRecords,
    searchTerm: "",
    nextId: calculateNextId(demoRecords),
  },
  reducers: {},
});

export default recordsSlice.reducer;
