console.log("Welcome to My page")



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const locations = document.querySelector('#location')
const forcast = document.querySelector('#forcast')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
   const location=search.value
   locations.textContent="Loading......."
           forcast.textContent=""
           if(location){
    fetch('http://localhost:3000/weather?address='+ location).then((response) => {
        response.json().then((data)=> {

            if(data.error){
                locations.textContent="An Error has Occured"
            }else{
           locations.textContent=data.location
           forcast.textContent=data.forcast
            }
        })
    })
}
})
