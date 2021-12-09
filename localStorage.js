import {LocalStorage} from 'node-localstorage'

const localStorage = new LocalStorage('./store')

export const setStorage = (key, object) => {
  const jsonObject = JSON.stringify(object)
  localStorage.setItem(key, jsonObject)
}

export const getStorage = (storedItem) =>{
  const returnVal = localStorage.getItem(storedItem)
  if (returnVal != ""){
    return JSON.parse(returnVal)   
  }else{
    return ""
  }
}
export const deleteStorage = (storedItem) =>{
localStorage.setItem(storedItem, "");

}

