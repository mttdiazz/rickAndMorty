import { createSlice } from "@reduxjs/toolkit";

/*  const [searchName, setSearchName] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchSpecies, setSearchSpecies] = useState('');
  const [selectedStatus, setSelectedStatus] = useState({id:0, name:""});
  const [selectedGender, setSelectedGender] = useState({id:0, name:""});
  const [searchPageVisible, setSearchPageVisible]= useState(false);
  */

const reducers = createSlice({
  name: "application",
  initialState: {
    isModalVisible: false,
    isLoading: false,
    characters: [],
    currentPage: 1,
    totalPage: 0,
    searchName: '',
    searchType: '',
    searchSpecies: '',
    selectedStatus: {id:0, name:""},
    selectedGender: {id:0, name:""},
    searchPageVisible: false
  },
  reducers: {
    setIsModalVisible: (state, action) => {
      state.isModalVisible = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalPage: (state, action) => {
      state.totalPage = action.payload;
    },
    setSearchName: (state, action) => {
      state.searchName = action.payload;
    },
    setSearchType: (state, action) => {
      state.searchType = action.payload;
    },
    setSearchSpecies: (state, action) => {
      state.searchSpecies = action.payload;
    },
    setSelectedStatus: (state, action) => {
      state.selectedStatus = action.payload;
    },
    setSelectedGender: (state, action) => {
      state.selectedGender = action.payload;
    },
    setSearchPageVisible: (state, action) => {
      state.searchPageVisible = action.payload;
    },
    setShowOptions: (state, action) => {
      state.showOptions = action.payload;
    },
    setModalData: (state, action) => {
      state.modalData = action.payload;
    },
  }
});


export const { setIsModalVisible , setIsLoading , setCharacters,setCurrentPage, setTotalPage, setSearchName,setSearchType, setSearchSpecies, setSelectedStatus, setSelectedGender , setSearchPageVisible, setShowOptions, setModalData} = reducers.actions;
export default reducers.reducer;