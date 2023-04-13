import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from "../index";

 const headers = {
      'Accept': "application/json"
    }
 
export async function requestFeed( ){
  try {
    const jsonValue = await AsyncStorage.getItem('@preferences')
    if(jsonValue != null) {
      const value = JSON.parse(jsonValue)
      if(value.alugar){
        return await Axios.get(`${API_URL}/feed/alugar?${value.item1}valor_max=${value.valor_max}&bedroom=${value.bedroom}&bathroom=${value.bathroom}`, {
           headers: headers
       }).then(function (response) {
           return response.data
       }).catch(error => {
           console.log(error)
       })}
       if(value.comprar){
         return await Axios.get(`${API_URL}/feed/comprar?${value.item1}valor_max=${value.valor_max}&bedroom=${value.bedroom}&bathroom=${value.bathroom}`, {
           headers: headers
       }).then(function (response) {
          return response.data
       }).catch(error => { 
           console.log(error)
       })
       }
    }
  } catch(e) {
    console.log(e)
  } 
}

export async function requestSearch( codigo, rent, item1, value_max, bedroom, bathroom, bairro ){
  
    //&codigo=${codigo}&bairro=${bairro}
      if(rent === "alugar"){
        return await Axios.get(`${API_URL}/search/alugar?item1=${item1}&valor_max=${value_max}&bedroom=${bedroom}&bathroom=${bathroom}`, {
           headers: headers
       }).then(function (response) {
           return response.data
       }).catch(error => {
           console.log(error)
       })}
       if(rent === "comprar"){
         return await Axios.get(`${API_URL}/feed/comprar?${value.item1}valor_max=${value.valor_max}&bedroom=${value.bedroom}&bathroom=${value.bathroom}`, {
           headers: headers
       }).then(function (response) {
          return response.data
       }).catch(error => { 
           console.log(error)
       })
       }
 
}


export async function requestID( identification ){

  const id = Number(identification)
  try {
    const response = await Axios.get(`${API_URL}/search/imovel?id=${id}`, {
      headers: headers
    });
    await Axios.post(`${API_URL}/views/post/${id}`, {
      headers: headers
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function requestLike( identification ){
  const id = Number(identification)
  try {
    const response = await Axios.post(`${API_URL}/like/post/${id}`, {
      headers: headers
    });

    return response.data
  } catch (error) {
    console.log(error);
  }
}








export async function requestImobil( identification ){

  const id = Number(identification)
  const item = 'id=' + id

  try {
  const response = await Axios.get(`${API_URL}/autor/all?${item}`, {
    headers: headers
  });
  return response.data[0];
} catch (error) {
  console.log(error);
}
}



 export async function requestPreferences(){
    try {
      const jsonValue = await AsyncStorage.getItem('@preferences')
      if(jsonValue != null) {
        const valor = JSON.parse(jsonValue)
        return valor
      }
    } catch(e) {
      console.log(e)
    }
  }


  export async function requestUser(){
    try {
      const jsonValue = await AsyncStorage.getItem('@user')
      if(jsonValue != null) {
        const valor = JSON.parse(jsonValue)
        return valor
      }
    } catch(e) {
      console.log(e)
    }
  }


  export async function removeUser(){
    try {
      await AsyncStorage.removeItem('@user')
      const response = true
      return response;
     
    } catch(e) {
      console.log(e)
    }
  }





  export function requestCEP( value ){
    if(value){
    const val = String(value)
    const cep = val.replace('-', "")
  
    return Axios.get(`https://viacep.com.br/ws/${cep}/json/`, {
        headers: headers
    }).then(response =>  {
        return response.data
    }).catch(error => {console.log(error)})
    }
    else{
      return
    }
  }

  
  export async function requestAll(valor){
    
    const max = 'valor_max=' + valor.valor_max
    
    if(valor.alugar){
     return await Axios.get(`${API_URL}/tudo/alugar?${max}`, {
        headers: headers
    }).then(function (response) {
        return response.data
    }).catch(error => {
        console.log(error)
    })}
    if(valor.comprar){
      return await Axios.get(`${API_URL}/tudo/comprar?${max}`, {
        headers: headers
    }).then(function (response) {
        return response.data 
      }).catch(error => { 
        console.log(error)
    })
    }
  }


  



export async function requestUserImoveis( user ){
  console.log(user)
    return Axios.get(`${API_URL}/user/imoveis?id=${user}`,  
    ).then(response => {
      return response.data
    }).catch(error => {
      console.log(error)
      const response = "" 
      return response
    });
}



export async function requestAuthorImoveisByCategories(id, category ){
    return Axios.get(`${API_URL}/user/categories?author=${id}&category=${category.value}`,  
    ).then(response => {
      console.log(response)
      return response.data
    }).catch(error => {
      console.log(error)
      return error
    });
}



export async function requestNotifications(){
    return await Axios.get(`${API_URL}/notifications/all`, {
        headers: headers
    }).then(function (response) {
      return response.data
    }).catch(error => {
        console.log(error)
    })
  }
  
 export async function requestPrice(valor){
    const max = 'valor_max=' + valor.valor_max
    
    if(valor.alugar){
      return await Axios.get(`${API_URL}/price/alugar?${valor.item1}${max}`, {
        headers: headers
    }).then(function (response) {
      return response.data    
    }).catch(error => {
        console.log(error)
    })}
    if(valor.comprar){
      return await Axios.get(`${API_URL}/price/comprar?${valor.item1}${max}`, {
        headers: headers
    }).then(function (response) {
        return response.data
    }).catch(error => { 
        console.log(error)
    })
    }
  }

export async function requestAuthor(value){
  const autor_id = Number(value)
  return await Axios.get(`${API_URL}/autor/all?id=${autor_id}`, {
      headers: headers
  }).then(function (response) {
    return response.data    
  }).catch(error => {
      console.log(error)
  })
}

export async function requestAuthorData(value){
  const autor_id = Number(value)
  return await Axios.get(`${API_URL}/author/posts?id=${autor_id}`, {
      headers: headers
  }).then(function (response) {
    return response.data    
  }).catch(error => {
      console.log(error)
  })
}



export async function requestItemID(value){
  const id = Number(value)
  return await Axios.get(`${API_URL}/search/item?id=${id}`, {
      headers: headers
  }).then(function (response) {
    return response.data[0]   
  }).catch(error => {
      console.log(error)
  })
  }
  


export async function requestLogin( value, value2 ){
  
  const email = value
  const password = value2

  return Axios.post(`https://s2hentais.com/novoimovel/wp-json/jwt-auth/v1/token`,  
    {
      email: email, 
      password: password
    }
  ).then(response => {
    return response.data
  }).catch(error => {
    console.log(error.response.data)
    const response = "" 
    return response
  });

    }



    export async function revalidateToken(){
      try {
        const jsonValue = await AsyncStorage.getItem('@user')
        if(jsonValue != null) {
          const valor = JSON.parse(jsonValue)
          console.log(valor)
          return Axios.post(`https://s2hentais.com/novoimovel/wp-json/jwt-auth/v1/token`,  
            {
              email: valor.email, 
              password: valor.password
            }
          ).then(async response => {
            const user = response.data
            const userValue = {email: user.email, password: valor.password, token: user.token, id: user.id, name: user.name}
            const jsonValue = JSON.stringify(userValue)
            await AsyncStorage.setItem('@user', jsonValue)  
            return response.data.token;

          }).catch(error => {
            console.log(error.response.data)
            const response = "" 
            return response
          });

        }
      } catch(e) {
        console.log(e)
      }
    }


    

  export async function requestRegister( fullname, username, email, password  ){
    
    return Axios.post(`${API_URL}/jwt-auth/v1/register/person`,  
    {
      username: username,
      email: email, 
      password: password,
      name: fullname
    }
  ).then(response => {
    return response.data
  }).catch(error => { 
    return error.response.data.message
  });

  }




  

  export async function requestNewImovel( params ){
  
    const data = params
    console.log(params)
    const newID = Number(Math.floor(Math.random() * (9999 - 1) + 9999))
   
    const jsonValue = await AsyncStorage.getItem('@user')
    const user = JSON.parse(jsonValue)
    const userID = user.id;
    const userToken = user.token
    
    const sendRequest = 
      {
        "ID": newID,
        "title": data?.name,
        "author": userID,
        "token": userToken,
        
        "acf": {
          "codigo": newID,
          "nome": data?.name,
          "descricao": data?.descricao,
          "area": data?.area,
  
          "tipo": data?.tipo,
          "valor_mensal": Number(data?.valor_mensal),
          "valor_unico": Number(data?.valor_unico),
          "cidade": data?.cidade,
          "bairro": data?.bairro,
          "rua": data?.rua,
          "numero": data?.numero,
          
          "item1": "Quarto",
          "qtd1": data?.qtd1,
          "item2": "Banheiro",
          "qtd2": data?.qtd2,

          "imagem1": data?.imagem1,
          "imagem2": data?.imagem2,
          "imagem3": data?.imagem3,
  
          "latitude":  data?.latitude,
          "longitude":  data?.longitude,
          "taxas":  data?.taxas,
          "categoria":  data?.categoria,
          "infraestrutura":  data?.infraestrutura,
          },
  
          //obrigatorio tratar no back-end
          
          "content": "api_imovel",
          "categories": [2],
          "status": "publish",
          "type": "post",
          "ping_status": "closed",
          "comment_status": "closed",
          "sticky": false,
          "template": "",
          "password": "",
          "slug": "",
          "format": "standard"
      }

      console.log(sendRequest)
    
    
    const headers = {headers: {'Content-Type': 'application/json','Authorization': 'Bearer' + userToken,}}

  return Axios.post(`${API_URL}/wp/v2/posts`, sendRequest, headers
  ).then(response => {
    const finish = {"status": 200}
    return finish
  }).catch(error => {
   
    if (error.response){
      console.log(error.response)
    }else if(error.request){
      console.log(error.request)
    }else if(error.message){
      console.log(error.message)
    }

    const response = "" 
    return response
  });

  }


  export async function requestSaveIDs(){
    try {
      const value = await AsyncStorage.getItem('@SAVE__IDS')
      if(value !== null) {
        const result = JSON.parse(value)
        
        return result
      }
    } catch(e) {
      console.log(e)
    }
  }




  export async function requestBairroImoveis( bairro, tipo ){

    return Axios.get(`${API_URL}/${tipo}/bairro?bairro=${bairro}`,  
    ).then(response => {
      return response.data
    }).catch(error => {
      console.log(error)
      const response = "" 
      return response
    });
}




export async function requestUserEndpoint( params ){

  const ID = params

  return Axios.get(`${API_URL}/user/data?ID=${ID}`).then(response => {
    return response.data[0]
  }).catch(error => {
    console.log('erro')
    console.log(error)
    return error
  });

  }

  

export async function requestUserEdit( params ){

  const {id, first_name, last_name, avatar, cep, token, telefone, whatsapp, email_comercial, facebook, instagram} = params
  const headers = {
    'Content-Type': 'form/multipart',
    'Authorization': 'Bearer' + token,
  }
  return Axios.put(`${API_URL}/user/edit?id=${id}&first_name=${first_name}&last_name=${last_name}&cep=${cep}&avatar=${avatar}&telefone=${telefone}&whatsapp=${whatsapp}&email_comercial=${email_comercial}&instagram=${instagram}&facebook=${facebook}`,  
{headers: headers}
  ).then(response => {
    return response.data
  }).catch(error => {
    console.log('erro')
    console.log(error)
    return error
  });
  }


  export async function requestUserEditPreferences( params ){

    const {ID, tipo, categoria, value_max, bedroom, bathroom, token} = params
  
    const headers = {
      'Content-Type': 'form/multipart',
      'Authorization': 'Bearer' + token,
    }
    return Axios.post(`${API_URL}/wp/v2/users/${ID}`,  
      {
        acf: {           
          Tipo: tipo,
          categoria: categoria, 
          value_max: value_max,
          ativo: "true",
        }
      }, {headers: headers}
    ).then(response => {
      return response.data
    }).catch(error => {
      console.log('erro')
      console.log(error)
      return error
    });
  
    }

