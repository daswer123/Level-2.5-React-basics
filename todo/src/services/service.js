class TodoInfo{
    _api_base = "http://localhost:3001";

    getAllData = async (url) => {
        const request = await fetch(this._api_base+url);
        
        if (!request.ok){
            throw new Error(`Couldn't fetch ${request.url} because ${request.statusText}`)
        }

        return await request.json();
    }

    getAllPosts = async () => {
        return await this.getAllData("/tasks");
    }

    getAllCategories = async () => {
        return await this.getAllData("/categories")
    }

    addNewItem = async (url,data) => {
        const request = await fetch(`${this._api_base}${url}`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : data
        })

        if (!request.ok) {
            throw new Error("couldn't fetch"+url+" because" + request.status);
        }

        return request.json()
    }

    addNewTask =  async (data) => {
        return await this.addNewItem("/tasks",data)
    }

    addNewCategory =  async (data) => {
        return await this.addNewItem("/categories",data)
    }

    deleteOneItem = async (url,id) => {
        

        fetch(`${this._api_base}${url}/${id}`,{
            method : "DELETE",
            headers: {
                "Content-type" : "application/json"
            }
        });

        // if (!request.ok){
        //     throw new Error(`Couldn't fetch ${request.url} because ${request.statusText}`)
        // }

        console.log("Item-Deled")
    }

    deleteTask = async (id) => {
        return await this.deleteOneItem(`/tasks`,id);
    }

    deleteCategory = async (id) => {
        return await this.deleteOneItem(`/categories`,id);
    }

    toggleTask = async (id,data) => {
        const request = await fetch(this._api_base+"/tasks/"+id,{
            method : "PUT",
            headers: {'Content-Type': 'application/json'},
            body : data
        })
        return await request.json()
    }
}

export default TodoInfo




