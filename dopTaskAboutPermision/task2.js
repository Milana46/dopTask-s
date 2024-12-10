
const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

function fetchWithTimeout(url, timeout = 5000) {
    return Promise.race([
        fetch(url).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Request timed out')), timeout)
        )
    ]);
}

Promise.all([
    fetchWithTimeout(usersUrl),
    fetchWithTimeout(postsUrl),
    fetchWithTimeout(commentsUrl)
])
    .then(([users, posts, comments]) => {
        console.log('Users:', users);
        console.log('Posts:', posts);
        console.log('Comments:', comments);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });