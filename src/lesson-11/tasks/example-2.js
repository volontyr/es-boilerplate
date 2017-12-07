import fetch from 'isomorphic-fetch';

const urls = [
    'https://newsapi.org/v2/sources?country=us&apiKey=93fc45b5eee342f9bd05d81c87558c9b',
    'https://newsapi.org/v2/sources?country=fr&apiKey=93fc45b5eee342f9bd05d81c87558c9b',
    'https://newsapi.org/v2/sources?country=it&apiKey=93fc45b5eee342f9bd05d81c87558c9b'
];

const myFetch = (url) => {
    return fetch(url)
        .then((response) => {
            if (response.status >= 400) {
                throw new Error(`Bad response from server while fetching ${ response.url }`);
            }
            return response.json();
        })
        .then(({ sources }) => {
            const result = [];
            for (const {id, description} of sources) {
                result.push({id, description});
            }
            return result;
        })
        .catch((error) => {
            console.log(`Could not retrieve needed information. Cause: ${ error.message }`);
            return [];
        });
};

Promise.all(urls.map(url => myFetch(url)))
    .then((result) => {
        const data = result.reduce((arr, item) => {
            return [...arr, ...item];
        }, []);
        console.log(`Fetched data = ${ JSON.stringify(data, null, 4) }`);
    });
