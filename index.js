
let rootId = document.getElementById('root')

let table = document.createElement('table')


let tbody = document.createElement('tbody')


let btn = document.getElementById("btn")

var count = 10




btn.addEventListener('click', (elm) => {

     rootId.innerHTML = " "
     count += 10
     fetchData()


})


async function fetchData() {

     try {

          let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=${count}`)

          let finRes = await res.json()
          console.log(finRes.data);
          finRes.data.forEach(element => {

               let tr1 = document.createElement('tr')
               tr1.innerHTML = element.id
               
               tr1.style.border = "1px solid red"
               tr1.style.padding = "10px"

               let th1 = document.createElement('td')
               th1.innerHTML = element.name
               th1.style.color = "red"
               th1.style.border = "1px solid black"
               th1.style.padding = "10px"



               let th2 = document.createElement('td')
               th2.innerHTML = element.department
               th2.style.border = "1px solid black"
               th2.style.padding = "10px"


               let th3 = document.createElement('td')
               th3.innerHTML = element.gender
               th3.style.border = "1px solid black"
               th3.style.padding = "10px"


               let th4 = document.createElement('td')
               th4.innerHTML = element.salary
               th4.style.border = "1px solid black"
               th4.style.padding = "10px"


               rootId.append(tr1, th1, th2, th3, th4)

          });

     } catch (error) {
          console.log(error);
     }

}

fetchData()