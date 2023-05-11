const server = process.env.SERVER;

export async function login(username,password){
    return fetch(`${server}auth/login`, {
        method: 'POST',
        headers: {  
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    }).then(res => res.json());
}

export async function logout(){
    
}