class RestService { 
    _apiBase = "http://localhost:3001/menu" 

    getData = async () =>{
        const request = await fetch(this._apiBase);

        if (!request.ok){
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


}
export default RestService;