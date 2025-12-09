const titelsFims = ['Inception', 'Avatar', 'Dune', 'Titanic', 'Frozen', 'Doctor Strange'];


type numberT = '0' | '1' | '2';

//! read interface and type difference

interface moviesT {
    _id : number,
    title : string,
    time : string
}


interface cinemaT {
    _id : number,
    hallNumber : number,
    seats : number,
    movies : moviesT[]
}


const cinema : cinemaT[] = [
    {
        _id: 101,
        hallNumber: 1,
        seats: 100,
        movies: [
            { _id: 201, title: "Inception", time: "18:00" },
            { _id: 202, title: "Avatar", time: "21:00" }
        ]
    },
    {
        _id: 102,
        hallNumber: 2,
        seats: 80,
        movies: [
            { _id: 203, title: "The Matrix", time: "17:30" },
            { _id: 204, title: "The Dark Knight", time: "20:30" }
        ]
    },
    {
        _id: 103,
        hallNumber: 3,
        seats: 120,
        movies: [
            { _id: 205, title: "Interstellar", time: "19:00" },
            { _id: 206, title: "Dune", time: "22:00" }
        ]
    },
    {
        _id: 104,
        hallNumber: 4,
        seats: 60,
        movies: [
            { _id: 207, title: "Titanic", time: "16:00" },
            { _id: 208, title: "Joker", time: "20:00" }
        ]
    },
    {
        _id: 105,
        hallNumber: 5,
        seats: 90,
        movies: [
            { _id: 209, title: "Frozen", time: "15:30" },
            { _id: 210, title: "Moana", time: "18:30" }
        ]
    },
    {
        _id: 106,
        hallNumber: 6,
        seats: 150,
        movies: [
            { _id: 211, title: "Spider-Man: No Way Home", time: "19:30" },
            { _id: 212, title: "Doctor Strange", time: "22:15" }
        ]
    }
];


const sentence = 'lorem ipsum user test to fo some' 
// sentence.length
// l = 0, o = 1, r = 2


const getAllVariantFilms = (arr) : moviesT[] => {
    const newMovie : moviesT[] = []
    for (const film of arr) {
        for (let index = 0; index < film.movies.length; index++) {
            const movie : moviesT = film.movies[index]
            newMovie.push(movie)           
        }
    }
    return newMovie
}


const allFilms = getAllVariantFilms(cinema)

console.log(allFilms)

const getSentence = (start = 0, end = sentence.length) => {
    let result = ''
    let i = start;
    while (i < end) {
        const element = sentence[i]
        result += element;
        i++ 
    }
    return result
}

// const getSentence = (start = 0, end = sentence.length) => {
//     let result = '';
//     for (let index = start; index < end; index++) {
//         const element = sentence[index];
//         result += element
//     }
//     return result
// };


// const test = () =>{
//     let i = 1;
//     while(i < 5) {
//         i++
//     }
// }

// const getSentence = (start, end) => {
//     const arrResult = []
//     for (let index = start; index < end; index++) {
//         const element = sentence[index];
//         arrResult.push(element)     
//     }
//     return arrResult.join('')
// }

const textResult = getSentence()  // rem ipsum user test to fo some
// const textResult = getSentence(2)  // rem ipsum user test to fo some
//const textResult2 = getSentence(2, 9)  // rem ips

// console.log(textResult) 


// const getFilmByMovieId = (_id) => {
//     for (let index = 0; index < cinema.length; index++) {
//         const film = cinema[index]
//         for (let index = 0; index < film.movies.length; index++) {
//             const movie = film.movies[index]
//             if (movie._id === _id) return movie                           
//         }      
//     }
//     return {text: "Not found"} 
// }
// const movieObj = getFilmByMovieId(212);

// console.log(movieObj, '----------')


// const getFilmById = (_id) => {
//     for (let index = 0; index < cinema.length; index++) {
//         const element = cinema[index]
//         if (element._id === _id) return element       
//     }
// }
// const film = getFilmById(103);

type categoryUserT = 'admin' | 'user' | 'moderator' | 'editor' | 'guest';



interface userT {
    id : number,
    name : string,
    age : number,
    city : string,
    category : categoryUserT
}

 
const fun1 = (user : userT) => {
}

const users : userT[] = [
    { id: 1, name: "Alex", age: 25, city: "New York", category: "admin" },
    { id: 2, name: "Maria", age: 30, city: "Los Angeles", category: "user" },
    { id: 3, name: "John", age: 22, city: "Chicago", category: "user" },
    { id: 4, name: "Sophie", age: 28, city: "Houston", category: "moderator" },
    { id: 5, name: "Max", age: 35, city: "San Francisco", category: "admin" },
    { id: 6, name: "Olivia", age: 26, city: "Seattle", category: "user" },
    { id: 7, name: "Liam", age: 31, city: "Boston", category: "editor" },
    { id: 8, name: "Emma", age: 24, city: "Denver", category: "guest" },
    { id: 9, name: "Noah", age: 29, city: "Miami", category: "user" },
    { id: 10, name: "Ava", age: 27, city: "Atlanta", category: "admin" },
    { id: 11, name: "Ethan", age: 33, city: "Dallas", category: "moderator" },
    { id: 12, name: "Isabella", age: 21, city: "Portland", category: "user" },
    { id: 13, name: "James", age: 34, city: "San Diego", category: "editor" },
    { id: 14, name: "Charlotte", age: 23, city: "Austin", category: "guest" },
    { id: 15, name: "Lucas", age: 32, city: "Phoenix", category: "user" },
    { id: 16, name: "Mia", age: 25, city: "Orlando", category: "user" },
    { id: 17, name: "Benjamin", age: 30, city: "Nashville", category: "admin" },
    { id: 18, name: "Amelia", age: 27, city: "Detroit", category: "guest" },
    { id: 19, name: "Henry", age: 28, city: "Las Vegas", category: "moderator" },
    { id: 20, name: "Ella", age: 22, city: "Philadelphia", category: "user" }
  ];

const getCategoriesUsers = (category : categoryUserT) : userT[] => {
    const newUsersArr : userT[] = []
    for (const user of users) {
        if (user.category === category) {newUsersArr.push(user)}
    }
    return newUsersArr
}

const res = getCategoriesUsers('user'); // []
// console.log(res)



const _id = 105;

const findMovie = cinema.findIndex((elem) => elem._id === 105)
// console.log(findMovie)

const newCinema2 = cinema.map((elem) => {
    const filteredMovies = elem.movies.filter((mov) => {

        const movTime = mov.time.split(":")
        const movNewTime = +movTime.join("")
        // const movNewTime = +mov.time.replace(':', '') ---> TOP decision!;
        if (movNewTime <= 1900) return movNewTime
    })
    // const filteredMovies = elem.movies.filter((mov) => titelsFims.includes(mov.title))
    return {
        _id: elem._id,
        hallNumber: elem.hallNumber,
        movies: filteredMovies
    }}
)
// console.log(JSON.stringify(newCinema2))


// const cinema_id = 103; // seats = 100

// const callbackFind = (elem) => {
//     return elem._id = 103
// }
// const changeSeats = cinema.find(callbackFind)

// const changeSeats = cinema.find((elem)=>{
//     return elem._id = 103
// })

// const changeSeats = cinema.find(function(elem){
//     return elem._id = 103
// })

// const changeSeats = cinema.find(elem => elem._id === 103)
// changeSeats.seats = 100
// console.log(cinema)  


//const newCinema = cinema.filter(elem => elem.seats >= 100)
//console.log(newCinema)

const newCinema1 = cinema.map((elem) => {

    // if (elem.movies) // 
    const newElem = {
        _id: elem._id,
        movies: elem.movies // filter 
    }
    return newElem
})
//console.log(newCinema1)

// map filter find
// push pop shift unshift
// indexOf includes
// findIndexOf
// split slice
// join
// reduce flat


const s = '19:00'

const w = +s.replace(':', '');


const [a,t,d,f,g] = s;
const e = +(a + t + f + g)

// replace




type rolesUserProfileT = "user" | "moderator"

interface paymentMethodsUserProfileI {
    type: string, 
    last4?: string, 
    expires?: string,
    email?: string
}

interface userProfileI {
    id : number,
    name : string,
    age : number,
    email : string,
    phone : string,
    address : {
        street : string,
        city : string
    },
    preferences : {
        theme : string,
        notifications : {
            email : boolean,
            sms : boolean,
            push : boolean
        }
    },
    roles : rolesUserProfileT[],
    stats : {
        posts : number,
        lastLogin : string
    },
    isActive : boolean,
    paymentMethods : paymentMethodsUserProfileI[]
}


const userProfile : userProfileI = {
    id: 1,
    name: "Alex Johnson",
    age: 29,
    email: "alex.johnson@example.com",
    phone: "+1 555-123-4567",
    address: {
      street: "221B Baker Street",
      city: "London",
    },
    preferences: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
        push: true
      }
    },
    roles: ["user", "moderator"],
    stats: {
      posts: 34,
      lastLogin: "2025-10-04T12:30:00Z"
    },
    isActive: true,
    paymentMethods: [
      { type: "credit_card", last4: "1234", expires: "12/27" },
      { type: "paypal", email: "alex.paypal@example.com" }
    ],
  };
  
  type start1T =  {name : string, age : number}

  const start1 = (data : start1T) => {

  }

type vegetationAnimalT = "acacia" | "grass" | "bushes"

interface animalI {
    id: number,
    name: string,
    habitat: {
      enclosure: string,
      sizeSqM: number,
      temperatureC: number,
      vegetation: vegetationAnimalT[]
    }
}

interface animalFishI extends animalI {
    isOcean : boolean
}

const animalLeo : animalI = {
    id: 1,
    name: "Leo",
    habitat: {
      enclosure: "Savannah Zone",
      sizeSqM: 800,
      temperatureC: 28,
      vegetation: ["acacia", "grass", "bushes"]
    }
};


const animalFish : animalFishI = {
    id: 1,
    name: "Leo",
    isOcean : true,
    habitat: {
      enclosure: "Savannah Zone",
      sizeSqM: 800,
      temperatureC: 28,
      vegetation: ["acacia", "grass", "bushes"]
    }
};
  