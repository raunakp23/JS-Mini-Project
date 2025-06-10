function fetchProfile(){
    const username = document.querySelector('#username').value

    if(!username){
        alert("Enter a github username")
        return
    }

    fetch(`https://api.github.com/users/${username}`)
    .then(response =>{
        if(!response.ok){
            throw new Error("Network response is not ok")
        }
        return response.json();
    })
    .then(data =>{
        displayProfile(data)
    })
    .catch(err=>{
        console.error("there was a problem with the fetch operation:",err)
    })
}

function displayProfile(profileData) {
    const profileElement = document.querySelector("#profile");
    profileElement.innerHTML = `
        <h2>${profileData.login}</h2>
        <img src="${profileData.avatar_url}" style="width:100px; height:100px; border-radius:50%"/>
        <p><a href="${profileData.html_url}" target="_blank">View GitHub Profile</a></p>
        <h2>Followers: ${profileData.followers}</h2>
    `;
}