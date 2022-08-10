import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  globalmargin: {
    marginHorizontal: 20,
  },
  pokebolaBG: {
    width: 300,
    height: 300,
    position: 'absolute',
    top: -100,
    right: -100,
    opacity: 0.3,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
  },
  CardPokemon: {
    marginHorizontal: 10,
    height: 130,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  NamePokemonCard: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    top: 10,
    left: 10,
  },
  pokebola: {
    width: 80,
    height: 80,
    position: 'absolute',
    bottom: -20,
    right: -20,
    opacity: 0.3,
  },
  PokemonImage: {
    width: 100,
    height: 100,
    left: 9,
    bottom: -5,
    top: -10,
  },
  ContainerPokemon:{
    height:370, 
    zIndex:999,
    alignItems:'center',
    borderBottomLeftRadius:1000,
    borderBottomRightRadius:1000,

  },
  pokeName:{
    color:'white',
    fontSize:35,
  },
  pokeballScrenn:{
    width: 250,
    height: 250,
    opacity: 0.7 ,
    bottom: -30
  },
  pokemonImageScrren:{
    width: 220,
    height: 220,
   bottom: -10,
   position: 'absolute',
  },
  textBusqueda:{
    // backgroundColor:'#f3f1f3',
    backgroundColor:'black',
    borderRadius:20,
    height: 42,
    paddingHorizontal:20,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  }
  
});
