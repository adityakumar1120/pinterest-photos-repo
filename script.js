const arr =[
    {name:'shivam', image:'./img/shivam.jpg'},
    {name:'yashshree', image:'./img/yashshree.jpg'},
    {name:'patals of flower', image:'./img/yashshree2.jpg'}, 
    {name:'2', image:'./img/yashshree3.jpg'},
    {name:'2', image:'./img/yashshree4.jpg'},
    {name:'patals of flower', image:'https://images.unsplash.com/photo-1643754005104-c607eb6978dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdXR1cmV8ZW58MHx8MHx8fDA%3D'},
    {name:'patals of flower', image:'https://images.unsplash.com/photo-1656512893645-225dffaf283f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdXR1cmV8ZW58MHx8MHx8fDA%3D'},
    {name:'patals of flower', image:'https://images.unsplash.com/photo-1541250562733-2eddcc44e39d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGV0YWxzJTIwb2YlMjByb3NlfGVufDB8fDB8fHww'},
    {name:'patals of flower', image:'https://plus.unsplash.com/premium_photo-1708110921398-1fc68e98eacc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWxzfGVufDB8fDB8fHww'},
    {name:'patals of flower', image:'https://images.unsplash.com/photo-1647696087996-544fbe6ead43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF1dHVyZXxlbnwwfHwwfHx8MA%3D%3D'}, 
    {name:'patals of flower', image:'https://images.unsplash.com/photo-1724733613256-a1ed7936bb70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdXR1cmV8ZW58MHx8MHx8fDA%3D'},
    {name:'patals of flower', image:'https://images.unsplash.com/photo-1565356631598-f3eb1a1dad4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF1dHVyZXxlbnwwfHwwfHx8MA%3D%3D'},
    {name:'patals of flower', image:'https://images.unsplash.com/photo-1643754005104-c607eb6978dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdXR1cmV8ZW58MHx8MHx8fDA%3D'},
    {name:'patals of flower', image:'https://images.unsplash.com/photo-1656512893645-225dffaf283f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdXR1cmV8ZW58MHx8MHx8fDA%3D'},
    // {name:'patals of flower', image:''},
]


function showCards(){
    var clutter = ""
    arr.forEach(function(obj){
        clutter+= `<div class="box">
        <img src="${obj.image}" alt="">
        <div class="caption">${obj.name}</div>
        </div>`
    })
    document.querySelector('.container').innerHTML = clutter
}

function handleSearchFunc(){

    const input = document.querySelector('#search-input')
   input.addEventListener('focus', function(){
    document.querySelector('.overlay').style.display = 'block'
   })
   input.addEventListener('blur', function(){
    document.querySelector('.overlay').style.display = 'none'
    document.querySelector('.searchdata').style.display = 'none'
   })
   input.addEventListener('input',function(val){
    if(input.value == ''){

    }
    else{
        let search = ''
    let filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value))
    console.log(filteredArray);
    filteredArray.forEach(function(val){
        search+=`<div class="res">
                            <i class='bx bx-search flex'></i>
                            <h3>${val.name}</h3>
                        </div>`
    })

    let searchdata = document.querySelector('.searchdata')
    searchdata.style.display = 'block'
    searchdata.innerHTML = search
    console.log(search);
    }
   })
}

handleSearchFunc()
showCards()