import React, {useEffect, useState} from 'react';
import { 
  StyleSheet, View, Text,
   FlatList, Image, ActivityIndicator, TextInput, TouchableOpacity, Modal,Animated
} from 'react-native';
import Button from './Boton';
import Dropdown from './Dropdown';
import styles from './styles/styles.js';
import CharList from './CharlList';
import { setIsLoading, setIsModalVisible, setCharacters, setCurrentPage, setTotalPage, setSearchName, setSearchType, setSearchSpecies,setSelectedStatus, setSelectedGender,setSearchPageVisible, setModalData } from '../redux/reducers.js';
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {
  //redux states
  const {isModalVisible, isLoading, characters, currentPage, totalPage, searchName, searchType, searchSpecies, selectedStatus, selectedGender, searchPageVisible, modalData}  = useSelector(state => state.application);
  const dispatch = useDispatch();

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
//For Animation:
const AVATAR_SIZE = 380;
const scrollY = React.useRef(new Animated.Value(0)).current;
const ITEM_SIZE= AVATAR_SIZE + (10);

  const changeModalVisibility = (bool,data) => {
    {dispatch(setIsModalVisible(bool))};
    {dispatch(setModalData(data))};
  }

  useEffect(() => {
    getData(apiURL)
    {dispatch(setIsLoading(true))}
    return () => {

    }
  }, [currentPage])

  getData = (URL) => {
    fetch(URL)
      .then((res) => res.json())
      .then((resJson) => {
        {dispatch(setCharacters(characters.concat(resJson.results)))};
        //setMasterData(characters.concat(resJson.results));
        {dispatch(setTotalPage(resJson.info.pages))};
        {dispatch(setIsLoading(false))};
      })
  }
  

  const renderItem = ({item,index}) => {
    if(item){ //Si matcheo resultados
     const inputRange = [
        -1,
        0,
        ITEM_SIZE * index,
        ITEM_SIZE * (index + 2)
      ]
      const scale = scrollY.interpolate({
        inputRange,
        outputRange: [1,1,1,0]
      })
      
    return(
    <Animated.View style={{transform:[{scale}]}}>
      <CharList item={item} changeModalVisibility={changeModalVisibility} modalData={modalData} isModalVisible={isModalVisible}></CharList>
     </Animated.View>
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
    if(currentPage < totalPage){
    {dispatch(setCurrentPage(currentPage + 1))}
    {dispatch(setIsLoading(true))}
    console.log(currentPage)
    }
  } 
  //Filtro button
  const filterButtonAction=()=>{
    {dispatch(setCharacters([]))};
    {dispatch(setSearchPageVisible(true))};
    clearModal;
    {dispatch(setCharacters([]))};
  }
  const clearModal=()=>{
    {dispatch(setSearchName(""))};
    {dispatch(setSearchSpecies(''))};
    {dispatch(setSearchType(''))};
    {dispatch(setSelectedGender({id:0, name:""}))};
    {dispatch(setSelectedStatus({id:0, name:""}))};
    getData('https://rickandmortyapi.com/api/character/?page='+currentPage);
  }
  
  const selectStatus = (item) => {
    console.log(item.name);
    {dispatch(setSelectedStatus(item))};

  }
  
  const selectGenderHandler = (item) => {
    {dispatch(setSelectedGender(item))};
  }

  const filter=()=>{
    console.log("pasa");
    {dispatch(setCurrentPage(1))};
    filterResults();
  }
  const clear=()=>{
    URL='https://rickandmortyapi.com/api/character/?page='+currentPage;
    getData(URL);
  }
  const filterResults=()=>{
    {dispatch(setSearchPageVisible(false))};
    apiURL='https://rickandmortyapi.com/api/character/?page='+
    currentPage+'&name='+searchName+'&species='+searchSpecies+'&type='+
    searchType+'&status='+selectedStatus.name+'&gender='+selectedGender.name;
    getData(apiURL);
  }


  return (//Parent contiene todo hasta flatlist, header solo el boton de filtro
    <View style={styles.top}> 
      <View style={styles.header}>
      <Text style={styles.subtitle}> By Pedro Ortiz de Guinea & Mateo Macagni Diaz</Text>
        <Button style= {styles.filterButton} onPress={filterButtonAction}>Filters</Button>
      </View>
      <View style={styles.filtro}>
        <Modal visible={searchPageVisible} style={{backgroundColor:'black'}}>
          <View style={{flex: 1, backgroundColor: 'black', marginTop:50}}>
            <View style={styles.form}>
              <View style={styles.form}>
                <TextInput style={styles.TextInputStyle} placeholder="Name" onChangeText={(newName)=> {{dispatch(setSearchSpecies(newName))};}}/>
                <TextInput style={styles.TextInputStyle} placeholder="Species" onChangeText={(newName)=> {{dispatch(setSearchSpecies(newName))};}}/>
                <TextInput style={styles.TextInputStyle} placeholder="Type" onChangeText={(newName)=> {{dispatch(setSearchName(newName))};}}/>
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
                onSelect={selectGenderHandler}
                />

              </View>
            </View>
            <View style={styles.filterButtons}>
              <Button onPress={filter}>Search</Button>
              <Button onPress={clear}>Clear Filter</Button>
            
            <Button onPress={() =>{
              setSearchPageVisible(false);
              {dispatch(setCurrentPage(1))};
              filterResults();
              clearModal();
            }}>Go Back </Button>
            </View>
            </View>

        </Modal>
      </View>
      <View style={styles.container}>
        <Image source={require('../src/portal.png') } style={StyleSheet.absoluteFill}></Image>    
        <Animated.FlatList
          style={styles.container}
          data={characters}
         onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true}
          )}
          
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          ListFooterComponent={renderFooter}
          onEndReached={loadMore}
          onEndReachedThreshold={0.2}
        />
      </View>
    </View>
  );
}
export default Home;