export default function getFeeds(pageCount) {
    //const hitsPerPage=10;
    return fetch('http://hn.algolia.com/api/v1/search?query=bar&restrictSearchableAttributes=url&page='+pageCount/*+'&hitsPerPage='+hitsPerPage*/)
    .then(res => res.json());
}