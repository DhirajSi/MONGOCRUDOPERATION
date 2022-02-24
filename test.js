const axios=require('axios').default

/*
//const { default: axios } = require('axios')

axios.get('https://api.github.com/users/hadley/orgs',)
.then((respose)=>{
  for (let todo of respose.data) {
    console.log(todo  )

  }

  // console.log(respose.data.map(d=>{
  //   return {
  //     id:d.id
  //   }
  // }))
}).catch(console.error)

*/
  

axios.post('http://localhost:9000/addemployee',{"name":"test",
"tech":"java"}).then((response)=>{
  console.log(response.data)
}).catch((err)=>{
  console.log(err)
})
  

