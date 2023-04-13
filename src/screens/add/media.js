
  import React, { useContext, useState, useEffect } from 'react';
  import { View,  StatusBar, Image} from 'react-native';
  import * as ImagePicker from 'expo-image-picker';
  import * as FileSystem from 'expo-file-system';
  import Axios from 'axios';
  import { Ionicons } from '@expo/vector-icons';

  import { 
    Wrapper, 
    Title, 
    Main,
    
    

    Spacing,

    Div,
    
    

    
    Step, StepLabel, StepImg,

    NextBt, NextLabel, BackBt, BackLabel,

    UploadBt, UploadLabel,
    } from './styles';

  import { ThemeContext } from 'styled-components/native';
  import { Row, Column} from '../../theme/global'
  import { API_URL } from '../../api';

  import { revalidateToken } from '../../api/request/mobile';


  export default function Media({ navigation, route, ...props }) {

    const { color } = useContext(ThemeContext)
    const a = false;

    const data = route.params?.imovel
    const [token, setToken] = useState()

    useEffect(() => {
      revalidateToken().then(
        function(response, ) {
          if(response){
            setToken(response)
          }
        }
      )

    }, [])
    

    const params = {
      name: data?.name,
      valor_mensal: data?.valor_mensal,
      valor_unico: data?.valor_unico,
      categoria: data?.categoria,
      tipo: data?.tipo,
      area: data?.area,
      qtd1: data?.qtd1,
      qtd2: data?.qtd2, 
      infra: data?.infra,
      taxas: data?.taxas,
      cep: data?.cep, 
      bairro: data?.bairro,
      rua: data?.rua,
      numero: data?.numero,
      cidade: data?.cidade,
      latitude: data?.latitude,
      longitude: data?.longitude,
      imagem1: 3229,
      imagem2: 3227,
      imagem3: 3228,
    }


    const handleBack = () => {
      navigation.goBack()
    }

    const handleNext = () => {
      navigation.navigate('Publish', {imovel: params})
    }



    const [picID1, setPicID1] = useState(1);
    const [picID2, setPicID2] = useState(2);
    const [picID3, setPicID3] = useState(3);
    const [picID4, setPicID4] = useState(4);
    const [picID5, setPicID5] = useState(5);
    const [picID6, setPicID6] = useState(6);
    const [picID7, setPicID7] = useState(7);
    const [picID8, setPicID8] = useState(8);


    const [imagem1, setImagem1] = useState(false);
    const [imagem2, setImagem2] = useState(false);
    const [imagem3, setImagem3] = useState(false);
    const [imagem4, setImagem4] = useState(false);
    const [imagem5, setImagem5] = useState();
    const [imagem6, setImagem6] =   useState();
    const [imagem7, setImagem7] = useState();
    const [imagem8, setImagem8] = useState();

    const [picture1, setPicture1] = useState();
    const [picture2, setPicture2] = useState();
    const [picture3, setPicture3] = useState();
    const [picture4, setPicture4] = useState();
    const [picture5, setPicture5] = useState();
    const [picture6, setPicture6] = useState();
    const [picture7, setPicture7] = useState();
    const [picture8, setPicture8] = useState();

    const [pictureLoad, setPictureLoad] = useState(false)

    const [image, setImage] = useState(null);



    
  const sendImage = async (imageUri) => {
    const file = await FileSystem.readAsStringAsync(imageUri, { encoding: FileSystem.EncodingType.Base64 });
    const imageFormData = new FormData();
    imageFormData.append('image', {
        name: 'mobile.png',
        type: 'image/png',
        data: file
    });

    const config = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3MyaGVudGFpcy5jb20vbm92b2ltb3ZlbCIsImlhdCI6MTY3Njg0Njg1OSwibmJmIjoxNjc2ODQ2ODU5LCJleHAiOjE2Nzc0NTE2NTksImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.Faqw3JR0uGRCfos6kQ-cbZAcVl62pM-zCJFJ6Q8vZk0',
        },
    };
    try {
      console.log(imageFormData)
      const response = await Axios.post(`${API_URL}/wp/v2/media`, imageFormData, config);
      const result = await response.json();
      console.log(result)
    } catch (e) {
        console.log(e);
    }
  };


  const pickImage = async () => {
  
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    sendImage(result.assets[0].uri).then(response => {
      console.log(response)  
    });
};








    async function uploadImage ( file, path ) {


      //const formData = new FormData();
      //const headers = {headers: {"Content-Type": "form/multipart",'Authorization': `Bearer ${token}`,}}   
  

  //  formData.append('image', {file: file.assets[0].uri,title: data.name + "image",});

      console.log(imageFormData)
      
      await Axios.post(`${API_URL}/wp/v2/media`, imageFormData, config).then(response => {
        console.log(response.data)
        if(path === 1){setPicID1(response.data.id)}
        else if(path === 2){setPicID2(response.data.id)}
        else if(path === 3){setPicID3(response.data.id)}
        else if(path === 4){setPicID4(response.data.id)}
        else if(path === 5){setPicID5(response.data.id)}
        else if(path === 6){setPicID6(response.data.id)}
        else if(path === 7){setPicID7(response.data.id)}
        else if(path === 8){setPicID8(response.data.id)}
        setPictureLoad(false)
    
    }).catch(error => {
      console.log(error)
    });
      


    }






    const pickImage2 = async ( path) => {

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {

        if(path == 1){setImagem1(result.assets[0].uri); uploadImage(result.assets[0].uri, 1)}
        else if(path == 2){setImagem2(result.assets[0].uri); uploadImage(result.assets[0].uri, 2)}
        else if(path == 3){setImagem3(result.assets[0].uri); uploadImage(result.assets[0].uri, 3)}
        else if(path == 4){setImagem4(result.assets[0].uri); uploadImage(result.assets[0].uri, 4)}
        else if(path == 5){setImagem5(result.assets[0].uri); uploadImage(result.assets[0].uri, 5)}
        else if(path == 6){setImagem6(result.assets[0].uri); uploadImage(result.assets[0].uri, 6)}
        else if(path == 7){setImagem7(result.assets[0].uri); uploadImage(result.assets[0].uri, 7)}
        else if(path == 8){setImagem8(result.assets[0].uri); uploadImage(result.assets[0].uri, 8)}
      }

    };



  return (
    <Main>
    <StatusBar translucent backgroundColor="transparent" />
    <Wrapper>
    
        <Row style={{justifyContent: 'space-between'}}>
          <Step>
            <StepLabel>4</StepLabel>
          </Step>
          <StepImg source={require('../../assets/add_step.png')}/>
        </Row>
        

        <Column>
          <Title>Mídia e Fotos</Title>
        </Column>
          
          <View style={{marginTop: 10, marginBottom: 0, paddingHorizontal: 24,}}>

            <Div/>
            <Spacing/>
            <Spacing/>

          <Row style={{justifyContent: 'space-between'}}>

          {imagem1 && <Image source={{ uri: imagem1 }} style={{ width: 200, height: 200 }} />}
    
          
          {!imagem1 && 
          <UploadBt onPress={pickImage}>
              <Column>
              <Ionicons name="cloud-upload-outline" size={32} color={color.title} />
                <UploadLabel>Selecionar</UploadLabel>
              </Column>
            </UploadBt>}
            <Spacing/>
          

          {imagem2 && <Image source={{ uri: imagem2 }} style={{ width: 200, height: 200 }} />}
          {!imagem2 &&
          <UploadBt onPress={() => pickImage(2)}>
              <Column>
              <Ionicons name="cloud-upload-outline" size={32} color={color.title} />
                <UploadLabel>Selecionar</UploadLabel>
              </Column>
            </UploadBt>}

          
          
          </Row>
          <Spacing/>
          <Spacing/>
          <Row>

          {imagem3 && <Image source={{ uri: imagem3 }} style={{ width: 200, height: 200 }} />}
          {!imagem3 &&
          <UploadBt onPress={() => pickImage(3)}>
              <Column>
              <Ionicons name="cloud-upload-outline" size={32} color={color.title} />
                <UploadLabel>Selecionar</UploadLabel>
              </Column>
            </UploadBt>}

            <Spacing/>

          {imagem4 && <Image source={{ uri: imagem4 }} style={{ width: 200, height: 200 }} />}
          {!imagem4 &&
          <UploadBt onPress={() => pickImage(4)}>
              <Column>
              <Ionicons name="cloud-upload-outline" size={32} color={color.title} />
                <UploadLabel>Selecionar</UploadLabel>
              </Column>
            </UploadBt>}


          </Row>

            <Spacing/>
            <Spacing/>
            <Div/>
            <Spacing/>

          <Row style={{justifyContent: 'space-between'}}>
            <BackBt onPress={handleBack}><BackLabel>ANTERIOR</BackLabel></BackBt>
            <Spacing/>
            <NextBt onPress={handleNext}><NextLabel>PRÓXIMO</NextLabel></NextBt>
          </Row>


          <Spacing/>
          </View>
          
    </Wrapper>
    </Main>
    )
  }