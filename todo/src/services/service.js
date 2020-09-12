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

    deleteOneItem = async (url,id) => {
        const request = fetch(`${this._api_base}${url}/${id}`,{
            method : "DELETE"
        });

        if (!request.ok){
            throw new Error(`Couldn't fetch ${request.url} because ${request.statusText}`)
        }

        return "Item Deleted"
    }

    deleteTask = async (id) => {
        return await this.deleteOneItem(`/tasks/${id}`);
    }

    deleteCategory = async (id) => {
        return await this.deleteOneItem(`/categories/${id}`);
    }
}

export default TodoInfo