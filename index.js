
class gitHubWidget {
    constructor(inputID,buttonID,listID){
        this.UserNameInput = document.getElementById(inputID)
        this.button = document.getElementById(buttonID)
        this.list = document.getElementById(listID)
        this.button.addEventListener("click",this.getRepositoriesData.bind(this))
        
    }
    
    async getRepositoriesData(){
        let response= await fetch(`https://api.github.com/users/${this.UserNameInput.value}/repos`)
       
        let myJson =await response.json();
       this.repoData= myJson
       
       this.repoData.forEach(element => {
           
        list.insertAdjacentHTML("beforeend",`
        <div class="content">
           
            <a href=${element.html_url}><h5>${element.name}</h5></a>
            <span>${element.description ? element.description :  "No Description "}</span><span class="date">${element.created_at.slice(8,10)}.${element.created_at.slice(5,7)}.${element.created_at.slice(0,4)}</span>
        </div>
        `)
        
        
        })
        
       
       
    }
    
    
    
}
 new gitHubWidget("UserNameInput","button-addon2","list")

 

