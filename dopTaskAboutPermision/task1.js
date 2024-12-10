
const usersUrl = 'https://jsonplaceholder.typicode.com/users'; 
const postsUrl = 'https://jsonplaceholder.typicode.com/posts'; 
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';


function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
}

Promise.all([fetchData(usersUrl), fetchData(postsUrl), fetchData(commentsUrl)])
    .then(([users, posts, comments]) => {
        console.log('Users:', users);
        console.log('Posts:', posts);
        console.log('Comments:', comments);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });