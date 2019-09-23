
const request = require ('request')


const getCode = (address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoiZGVzYml6eiIsImEiOiJjazBsOXIzd2QwdHp0M2dxZDh6eThta2c0In0.ipZNDE8wYWK9nv6SOhJZvA&limit=1'

    //define the fuction You want to perform
    request({ url: url, json: true }, (error, response)=> {
        console.log(response.body)
    if(error){
        callback('Unable to connect to Weather Service', undefined)
   
    }
    else if(!response.body.features){
        callback('Unable to find Location', undefined)

    } 
    else{
        const Longtitude=response.body.features[0].geometry.coordinates[0]
        const latitude=response.body.features[0].geometry.coordinates[1]
        callback(undefined,{
           Longtitude,
           latitude,
          location: response.body.features[0].place_name

        } )
       
       
    }
})

}

module.exports=getCode