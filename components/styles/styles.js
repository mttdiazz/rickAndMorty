import { 
    StyleSheet, View, Text,
     FlatList, Image, ActivityIndicator, TextInput, TouchableOpacity, Modal, SafeAreaView, ImageBackground} from 'react-native';

const styles = StyleSheet.create({
    //App.js stlyes
    container: {
      marginTop: 10,
    },
    searchBar:{
    },
    itemRow: {
      height: 380 ,
      width: 325,
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
      width: 306,
      height: 320,
      resizeMode: 'cover',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderWidth: 10,
      borderBottomColor: 'white',
    },
    itemText:{
      fontSize: 20,
      color: 'white',
      paddingTop: 4,
      marginLeft: 5,
      textAlign: 'left',
      flexDirection: 'row',
    },
    favIcon:{
      width: 30,
      height: 30,
      position: 'absolute',
      left: 270,
      top: -25,
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
    //Dropdon Styles
    dropdownStyle:{
        backgroundColor: '#e4a788',
        padding: 8,
        borderRadius: 5,
        minHeight: 42,
        justifyContent: 'center',
        marginBottom: 6,
    },
    //PopUpStyles
    popUp:{
        flex: 1,

    },
    modal: {
        height: '110%',
        width: '100%' ,
        paddingTop: 10,
        marginTop: -15,
        backgroundColor: '#444444',
        borderRadius: 10,
        alignItems: 'center',
    },
    charInfo:{
        backgroundColor: 'black',
        width: '100%',
        marginTop: 200,
    },
    titlePopup:{ 
        fontSize: 40,
        fontWeight: 'bold',
        color: '#97ce4c',
        textAlign: 'center',
    },
    text:{ 
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: '#97ce4c',
    },
    closeButton: {
        width: '100%',
        flexDirection: 'row'
    },
    touchableOpacityPopUp: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
    },
    volverButton:{
        color: 'black',
        fontSize: 30,
        borderWidth: 2,
        textAlign: 'center',
        backgroundColor: '#97ce4c',
        marginTop: 10,
        borderRadius: 20,
        paddingHorizontal: 10,

    },
    avatar:{
        width: 320,
        height: 320,
        resizeMode: 'cover',
        borderRadius: 20,
        borderWidth: 10,
        borderWidth: 15,
        borderColor: '#97ce4c',
        marginLeft: 40,

    },
    //Boton.js styles
    buttonStyle:{
        alignSelf: 'center',
        backgroundColor: '#97ce4c',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginHorizontal: 5,
        marginVertical: 5,
    },
    textStyle:{
        alignSelf: 'center',
        color: 'black',
        fontsize: 16,
        fontWeight: '600',
        paddingVertical: 10,
    }
    
  })

  export default styles