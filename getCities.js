import {citiesCollection} from './connectDb.js'


citiesCollection.get()
.then ( snapshot => {
    snapshot.docs.forEach(doc => console.log(doc.data()))
})
.catch(err => console.error(err))