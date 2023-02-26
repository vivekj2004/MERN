const fs = require('fs')
const path = require('path')

const birdFile = './birds.json'


async function readFile(path) {
    return new Promise( (resolve, reject) => {
      fs.readFile( path, 'utf8', (err, data) => {
        err? reject(err) : resolve(JSON.parse(data))
      })
    } )
 }



// (readFile(birdFile).then(function(response) { console.log( response.filter(bO=>bO.name=='Secretary')[0] ) } ) )

 //readFile(birdFile).then(v => console.log( v[0] ) ) 

 //console.log((birdFile).filter()
 function findBird(birds, bird) { 
    let arrayObject = birds.filter( birdObject=>birdObject.name == bird )    
    return arrayObject[0]
    }

    console.log(path)
 
//  function retrieve(input) {
//     //return new Promise( (res,rej)=>{
//       if (findBird(path, input) !== null )
//         res(findBird(path, input) )
//         else (rej('Bird do not exist'))

//  }
      function retrieve(input) {
      const birdsJSONData = JSON.parse(fs.readFileSync('./birds.json'))
      const typesJSONData = JSON.parse(fs.readFileSync('./birdTypes.json'))
        return new Promise((resolve, reject)=>{
          let matchingBirdAarray = birdsJSONData.filter(birdObject=>birdObject.name == input)
          let matchingId = matchingBirdAarray[0].id
          let matchingBirdDetails = typesJSONData.filter(typeObject=>typeObject.birdId == matchingId)
          if(matchingBirdDetails.length > 0)
            resolve(
              {
                birdName: input,
                type: matchingBirdDetails[0].type,
                details: matchingBirdDetails[0].details
              }
            )
          else
            reject('Bird do not exist')
        })
      }

console.log(retrieve('Secretary'))
//console.log( findBird(birdFile, 'Secretary')  )



 //console.log(readFile(birdFile).then( birdFile.filter(birdObj=> birdObj.name == 'Secretary') ))

//  let birds = readFile(birdFile)

//  function findBird(birds, bird) { 
//        return birds.then(function(data){
//         return data[0]
//        })
//       }

//       console.log(findBird(birds, 'Secretary'))

