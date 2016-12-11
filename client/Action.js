import fetch from 'isomorphic-fetch';
export const LOAD_PINTEREST_IMAGES= "LOAD_PINTEREST_IMAGES";
export const LOADED_PINTEREST_IMAGES= "LOADED_PINTEREST_IMAGES";
const url="https://api.pinterest.com/v1/boards/98375641799422315/pins/?access_token=AT4cUb5FiOe8de3XeD1fsj8qP1KfFI8ndiBwp0dDnzUANWA1AQAAAAA&fields=image"
 function loadImagesRequest(){
  return {type:LOAD_PINTEREST_IMAGES}
}
function loadImagesResponse(results){
  return {type:LOADED_PINTEREST_IMAGES, results:results}
}

export function getAllImages(){
  return dispatch => {
        dispatch(loadImagesRequest())

        return fetch(url, {
            method: 'GET',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(json => {
                console.log(json.data);
                dispatch(loadImagesResponse(json.data))
            })
    }
}
