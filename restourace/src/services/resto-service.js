class RestService { 
    _apiBase = "https://my-json-server.typicode.com/daswer123/Level-2.5-React-basics" 

    getData = async () =>{
        const request = await fetch(this._apiBase+"/menu");

        if (!request.ok){
            console.log(request)
            throw new Error("Couldn't Fetch"+request.status);
        }
        return await request.json();
    }

    getAllMenu = async () =>{
        return await this.getData()
    }

    getOneItem = async (id) =>{
        const allMenu = await this.getData();
        const result = allMenu.find(item => {
            if (item.id === +id){
                return item
            }
        })
        return result
        
    }

    PostData = async (data) => {
        let request = await fetch(this._apiBase+"/orders",{
            method : "POST",
            headers : {
                'Content-Type': 'application/json'
            },
            body : data,
        })
        console.log(data)
        return await request.json();
    }


}
export default RestService;