// const mockData = [
//     {
//         gender: "female",
//         name: {
//             title: "Ms",
//             first: "Veera",
//             last: "Niva"
//         },
//         dob: {
//             date: "1992-10-30T16:03:45.079Z",
//             age: 28
//         },
//         id: {
//             name: "HETU",
//             value: "NaNNA524"
//         },
//     },
//     {
//         gender: "male",
//         name: {
//             title: "Mr",
//             first: "Cooper",
//             last: "Davies"
//         },
//         dob: {
//             date: "1960-04-18T15:49:33.894Z",
//             age: 60
//         },
//         id: {
//             name: "HETU",
//             value: "NaNNA525"
//         },
//     }
// ]

export  const  fetchUsersList =  () => {
    return fetch("https://randomuser.me/api/?results=10")
}

