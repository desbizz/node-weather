const express = require('express')
const path = require('path')
const hbs = require('hbs')
const getCode = require('./utils/getcode') 
const forecast = require('./utils/forecast') 

const app = express()

// Define path for Express config

const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')


//Setup Handle View location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)


//setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req,res)=> {
    res.render('index',{
        title: "Weather",
        name: "Adewuyi Mayowa"
    })
})
app.get('/about', (req,res)=> {
    res.render('about',{
        title: "About Me",
        name: "Adewuyi Mayowa"
    })
})
app.get('/help', (req,res)=> {
    res.render('help',{
        title: "Help",
        name: "Adewuyi Mayowa"
    })
})

app.get('/weather', (req,res)=> {

      if(!req.query.address){
        return res.send("adderes is neccesary") 
      }

    
        getCode(req.query.address, (error,data)=>{
            if(error)
            return res.send(error)  
           
         
            if(data){
         forecast(data.latitude,data.Longtitude, (error,forcastdata)=>{
            if(error)
           return res.send(error)
         
            
            res.send({
                location: data.location,
                forcast: forcastdata
            })
        
         })
        }
         })
        
    


  
})




app.get('/help/*', (req,res)=> {
    res.send({name:'Mayowa',
    age:32})
})
app.get('/*', (req,res)=> {
    res.send({name:'Mayowa',
    age:32})
})




app.listen(3000, ()=>{
    console.log('Server is Up and Running on port 30000.')
})