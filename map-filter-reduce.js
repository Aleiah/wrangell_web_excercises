const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];





const result = users.filter( user => user.languages.length >= 3);
console.log(result);




let usersEmail = users.map(user => user.email);
console.log(usersEmail);



let sum = users.reduce((accumulator, user) => {return accumulator + user.yearsOfExperience;},0);

console.log(sum);
console.log(users.length);
console.log(sum/users.length);


const longestEmail = users.reduce((accumulator, user) => {return accumulator + user.email;}, 0);
console.log(longestEmail);



const namesList = users.reduce((acc, user) => `${acc}${user.name}\n`, ' ');
console.log(namesList);