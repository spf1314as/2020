const p = Promise.resolve(); 
(async () => {await p; console.log("eng")})()
 p.then(_ => console.log(1)).then(_ => console.log(2))
