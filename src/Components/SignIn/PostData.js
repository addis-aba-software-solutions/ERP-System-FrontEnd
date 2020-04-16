export function PostData(userData){
    
    let BaseUrl='http://0.0.0.0:8000/api/v1/login/';
    // 0.0.0.0:8000/api/v1/login/''
    return new Promise((resolve,reject)=>{
        fetch(BaseUrl,{
            method:'POST',
            body:JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
                },
        })
        .then((response)=>response.json())
        .then((responseJson)=>{
           // alert("success")
            resolve(responseJson);
        })
        .catch((error)=> {
            reject(error);
            alert("Your Username or Password is incorrect ")
        });
    });
}


//JSON.parse(response);
//
//JSON.parse(response)