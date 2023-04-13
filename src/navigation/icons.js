import { AntDesign, Ionicons, MaterialCommunityIcons, Fontisto, Feather , SimpleLineIcons  } from '@expo/vector-icons';

export const Icons = {
  Feed: {
    lib: Ionicons,
    name: 'md-home-outline',
    title: 'Ínicio',
    name_outline: 'md-home',
    colorIcon: "#FFF",
  },
  Settings: {
    lib: Ionicons,
    name: 'settings-outline',
    name_outline: 'settings',
    title: 'Ajustes',
    colorIcon: "#FFF"
  },
  Search: {
    lib: AntDesign,
    title: 'Pesquisar',
    name: 'search1',
    name_outline: 'search1',
    colorIcon: "#FFF"
  },
  Save: {
    title: 'Destaques',
    lib: AntDesign,
    name: 'hearto',
    name_outline: 'heart',
    colorIcon: '#FFF',
  },
  Map: {
    title: 'Mapa',
    lib: Feather,
    name: 'map',
    name_outline: 'star',
    colorIcon: '#FFF',
  }, 
  Account: {
    title: 'Minha conta',
    lib: MaterialCommunityIcons,
    name: 'account-circle-outline',
    name_outline: 'account-circle',
    colorIcon: '#FFF',
  }
};
