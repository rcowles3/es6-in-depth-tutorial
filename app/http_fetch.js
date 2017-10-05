/**
 * HTTP & FETCH
 * ==========================================
 * GET - only retrieves data, has no secondary effect
 * POST - sends data to a server to add/update resources
 * HEAD, DELETE, PATCH
 * ==========================================
 */

const root = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';

fetch(root, {
    method: 'GET'
})
    .then(response => response.json())
    .then(json => console.log(json));