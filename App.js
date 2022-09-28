import React, {useEffect, useState} from 'react';
import { 
  StyleSheet, View, Text,
   FlatList, Image, ActivityIndicator, TextInput, TouchableOpacity, Modal, SafeAreaView, ImageBackground
} from 'react-native';
import Button from './components/Boton';
import Dropdown from './components/Dropdown';
import { PopUp } from './components/PopUp';


const App = () => {

  const [characters, setCharacters] = useState([])
  //const [masterData, setMasterData] = useState([])
  const [isLoading, setisLoading] = useState (false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  //Filtro
  const [searchName, setSearchName] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchSpecies, setSearchSpecies] = useState('');
  const [selectedStatus, setSelectedStatus] = useState({id:0, name:""});
  const [selectedGender, setSelectedGender] = useState({id:0, name:""});
  const [searchPageVisible, setSearchPageVisible]= useState(false);
  const status=[ //Different Status for the characters
    {id:0, name:""},
    {id:1, name:"Alive"},
    {id:2, name:"Dead"},
    {id:3, name:"Unknown"},

  ];
  const gender=[ //Different gender options
    {id:0, name:""},
    {id:1, name: 'Female'},
    {id:2, name: 'Male'},
    {id:3, name: 'Genderless'},
    {id:4, name: 'Unknown'}
  ];

var apiURL='https://rickandmortyapi.com/api/character/?page='+currentPage;
const [isModalVisible, setisModalVisible] = useState(false) //modal popup para mas informacion
const [modalData, setModalData] = useState()

  const changeModalVisibility = (bool,data) => {
    setisModalVisible(bool);
    setModalData(data);
  }

  useEffect(() => {
    getData(apiURL)
    setisLoading(true)
    return () => {

    }
  }, [currentPage])

  getData = async (URL) => {
    fetch(URL)
      .then((res) => res.json())
      .then((resJson) => {
        setCharacters(characters.concat(resJson.results));
        //setMasterData(characters.concat(resJson.results));
        setTotalPage(resJson.info.pages);
        setisLoading(false);
      })
  }

  renderItem = ({item}) => {
    if(item){ //Si matcheo resultados
    return(
      <SafeAreaView style ={styles.itemRow}>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => changeModalVisibility(true,item)}>
          <Image source={{uri:item.image }} style={styles.itemImage}/>
          </TouchableOpacity>
          <Text style={styles.itemText}>{item.name}</Text>
          <Modal transparent = {true} animationType='fade' visible={isModalVisible} nRequestClose={()=> changeModalVisibility(false)}> 
            <PopUp modalData={modalData}
              changeModalVisibility={changeModalVisibility}
            ></PopUp>
          </Modal>        
      </SafeAreaView>
    )
    }
  }

  renderFooter =() => {
    return(
      isLoading ?
      <View style= {styles.loader}>
        <ActivityIndicator size="large"/>
      </View> : null
    )
  }

  loadMore = () => {
    if(currentPage<totalPage){
    setCurrentPage(currentPage + 1)
    setisLoading(true)
    console.log(currentPage)
    }
  } 
  //Filtro button
  const filterButtonAction=()=>{
    setCharacters([]);
    setSearchPageVisible(true);
    clearModal;
    setCharacters([]);
  }
  const clearModal=()=>{
    setSearchName("");
    setSearchSpecies('');
    setSearchType('');
    setSelectedGender({id:0, name:""});
    setSelectedStatus({id:0, name:""});
    getData('https://rickandmortyapi.com/api/character/?page='+currentPage);
  }
  
  const selectStatus = (item) => {
    console.log(item.name);
    setSelectedStatus(item);

  }
  const selectGender = (item) => {
    setSelectedGender(item);
  }

  const filter=()=>{
    console.log("pasa");
    setCurrentPage(1);
    filterResults();
  }
  const clear=()=>{
    URL='https://rickandmortyapi.com/api/character/?page='+currentPage;
    getData(URL);
  }
  const filterResults=()=>{
    setSearchPageVisible(false);
    console.log(searchName);
    console.log(searchSpecies);
    console.log(searchType);
    console.log(selectedStatus.name);
    console.log(selectedGender.name);
    apiURL='https://rickandmortyapi.com/api/character/?page='+
    currentPage+'&name='+searchName+'&species='+searchSpecies+'&type='+
    searchType+'&status='+selectedStatus.name+'&gender='+selectedGender.name;
    getData(apiURL);
  }

  return (//Parent contiene todo hasta flatlist, header solo el boton de filtro
    <View style={styles.top}> 
      <View style={styles.header}>
        <Text style={styles.title}> Welcome to Rick&Morty's API</Text>
        <Text style={styles.subtitle}> By Pedro Ortiz de Guinea & Mateo Macagni Diaz</Text>
        <Button onPress={filterButtonAction}>Filters</Button>
      </View>
      <View style={styles.filtro}>
        <Modal visible={searchPageVisible} style={{backgroundColor:'black'}}>
          <View style={{flex: 1, backgroundColor: 'black', marginTop:50}}>
            <View style={styles.form}>
              <View style={styles.form}>
                <TextInput style={styles.TextInputStyle} placeholder="Name" onChangeText={(newName)=> {setSearchName(newName);}}/>
                <TextInput style={styles.TextInputStyle} placeholder="Species" onChangeText={(newName)=> {setSearchSpecies(newName);}}/>
                <TextInput style={styles.TextInputStyle} placeholder="Type" onChangeText={(newName)=> {setSearchName(newName);}}/>
              </View>
              <View style={styles.form}>
                <Text syle={{color:'black', fontSize:50}}>Status</Text>
                <Dropdown //Dropdown de Status
                value={selectedStatus}
                items={status}
                name={'Status'}
                onSelect={selectStatus}
                />
                <Text syle={{color:'black', align:'center', fontSize:30}}>Gender</Text>
                <Dropdown //Dropdown de Gender
                value={selectedGender}
                items={gender}
                name={'Gender'}
                onSelect={selectGender}
                />

              </View>
            </View>
            <View style={styles.filterButtons}>
              <Button onPress={filter}>Search</Button>
              <Button onPress={clear}>Clear Filter</Button>
            
            <Button onPress={() =>{
              setSearchPageVisible(false);
              clearModal();
              setCurrentPage(1);
              filterResults();
            }}>Go Back </Button>
            </View>
            </View>

        </Modal>
      </View>
      <View style={styles.container}>
      <Image source={require('./src/portal.png')} style={StyleSheet.absoluteFill}></Image>    
      <FlatList
        style={styles.container}
        data={characters}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
          keyExtractor={(item, index) => index.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0}
      />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  searchBar:{
  },
  itemRow: {
    height: 380 ,
    width:'80%',
    marginBottom: 10,
    borderWidth: 10,
    borderColor: '#97ce4c',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: 47,
  },
  itemImage: {
    width: '100%',
    height: 320,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 10,
    borderBottomColor: 'white',
  },
  itemText:{
    flex: 1,
    fontSize: 25,
    padding: 1,
    color: 'white',
    textAlign: 'center',
  },
  loader:{
    marginTop: 10,
    alignItems: 'center',
  },
  header:{ //Estilo del view que tiene boton de filtro
    marginTop: 50,
    marginBottom:-25,
    alignItems: 'center',

  },
  TextInputStyle:{
    height: 40,
    borderWidth: 3,
    borderColor:'black',
    align:'center',
    textAlign:'center',
  },
  top:{ //Estilo de todo el parent (boton de filtro, y modal)
    backgroundColor: 'black',
  },
  title:{
    color:'#97ce4c',
    fontSize: 30,
  },
  subtitle:{
    color:'#97ce4c',
    marginTop:10,
    marginBottom:10,
    fontsize: 20,
  },
  filtro:{
    backgroundColor: 'black',
    
  },
  form:{
    positiono: 'center',
    backgroundColor:'#97ce4c',
    flexDirection:'column',
    align:'stretch',
    textAlign:'center',
  },
  filterButtons:{
    flexDirection:'row',
    marginTop:15,
    marginLeft:15,
  },
})

export default App;