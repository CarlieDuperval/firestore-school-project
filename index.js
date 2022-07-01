import { citiesCollection } from './connectDb.js';

// const city = {
//     name : "Miami",
//     state: "florida",
//     population: 91730,
// };

// const city = {
//     name : " Miami Lakes",
//     state: "Florida",
//     population: "30791 ",
// };

// const city = {
//     name : " Miami Shores",
//     state: "Florida",
//     population: 10661,
// };

const city = {
    name : " Boca Raton",
    state: "Florida",
    population: 91532,
};

citiesCollection.add(city)
.then((doc) => console.log ('Created City', doc.id))
.catch((err) => console.error(err))

//city = ({name :'Miami lake', state: 'Florida', population :91800 })

