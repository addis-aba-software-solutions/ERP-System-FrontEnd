export function PostData(type,userData){
    let BaseUrl='http://0.0.0.0:8000/api/v1/';
    // 0.0.0.0:8000/api/v1/login/''
    return new Promise((resolve,reject)=>{
        fetch(BaseUrl+type,{
            method:'POST',
            body:JSON.stringify(userData)
        })
        .then((response)=>JSON.parse(response))
        .then((responseJson)=>{
            resolve(responseJson);
        })
        .catch((error)=> {
            reject(error);
        });
    });
}

// JSON.parse(response);
// response.json()