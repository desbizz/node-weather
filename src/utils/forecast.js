const request = require('request')

const forcast = (longtitude,latitude,callback)=>{
    const curl='https://api.darksky.net/forecast/66cf7ff48ad7dec8d653664d220c5b62/'+longtitude+','+ latitude

    request({ url: curl, json: true }, (error, {body})=> {
            if (error){
                callback('Error: ', 'Unable to connect to Weather Service')
            }
            else if(body.error){
                callback('Error: ', 'Cant find Location')
        
            }
            else{
           callback(undefined, body.daily.data[0].summary + '. It is currently '+ body.currently.temperature + ' degree temperature ' + body.currently.precipProbability + '% chances of raining')
            }
           // console.log(curl)
        })

}

module.exports=forcast