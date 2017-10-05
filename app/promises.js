/*  Synchronous & Asynchronous Programming
 * ==========================================
 * Synchronous programs run in sequence w/out blocking
 * Asynchronous programs divert blocking to event handler
 * UI and broswers handle Asynchronously, REACT
 * Asynchromn allows use of PROMOISEs
 * Pending , Fullfilled, and Rejected
 * ==========================================
*/

let p = new Promise((resolve, reject) => {
    setTimeout(()=> resolve('resolved promoised data'), 3000)
})
    .then(response => console.log(response))
    .catch(err => console.log(err));

