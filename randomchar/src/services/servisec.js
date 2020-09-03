export default class GetInfo{
    constructor(){
        this._gtApi = "https://anapioficeandfire.com/api";
    };

    async getAllData(dataType,page = 1, pageSize = 5){
        let result = await fetch(`${this._gtApi}/${dataType}?page=${page}&pageSize=${pageSize}`);

        if (!result.ok){
            throw new Error(result.status);
        }

        return await result.json();
        
    }

    async getSingleData(dataType,id = 1){
        let result = await fetch(`${this._gtApi}/${dataType}/${id}`);

        if (!result.ok){
            throw new Error(result.status);
        }

        return await result.json();
        
    }

    getAllHouses(){
        return this.getAllData("houses");
    }

    getOneHouse(id){
        return this.getSingleData("houses",id);
    }
    getAllBooks(){
        return this.getAllData("books");
    }

    getOneBook(id){
        return this.getSingleData("books",id);
    }
    getAllcharacter(){
        return this.getAllData("characters");
    }

    getOneCharacter(id){
        return this.getSingleData("characters",id);
    }

}
