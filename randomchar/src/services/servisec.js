export default class GetInfo{
    constructor(){
        this._gtApi = "https://anapioficeandfire.com/api";
    };

    getAllData = async (dataType,page = 1, pageSize = 5) => { 
        let result = await fetch(`${this._gtApi}/${dataType}?page=${page}&pageSize=${pageSize}`);

        if (!result.ok){
            throw new Error(result.status);
        }

        return await result.json();
        
    }

     getSingleData = async(dataType,id = 1) => {
        let result = await fetch(`${this._gtApi}/${dataType}/${id}`);

        if (!result.ok){
           throw new Error(result.status);
        }

        return await result.json();
        
    }

    fillEmptyData(data){
        for(let value in data){
            if (data[value] === ""){
                data[value] = "Sorry, no data :("
            } 
        }
         return data;
     }

    getAllHouses = (page = 3, pageSize = 5) => {
        return this.getAllData("houses",page,pageSize);
    }

    getOneHouse = async (id) =>{
        const house = await this.getSingleData("houses",id);
        return this.fillEmptyData(this._transformHouse(house));
    }
    getAllBooks = (page = 3, pageSize = 5) =>{
        return this.getAllData("books",page,pageSize);
    }

    getOneBook = async (id) => {
        const book = await this.getSingleData("books",id);
        return this.fillEmptyData(this._transformBook(book));
    }
    getAllcharacter = (page = 3, pageSize = 5) =>{
        return this.getAllData("characters",page,pageSize);
    }

    getOneCharacter = async (id) => {
       const char = await this.getSingleData("characters",id);
       return this.fillEmptyData(this._transformChar(char));
    }


    _transformChar(char){
       return{
        name : char.name,
        gender : char.gender,
        born : char.born,
        died: char.died,
        culture: char.culture
       }
    }

    _transformHouse(house){
        return{
         name : house.name,
         region : house.region,
         words : house.words,
         title: house.titles,
         overlord: house.overlord,
         ancestralWeapons: house.ancestralWeapons
        }
     }

     _transformBook(book){
        return{
         name : book.name,
         numberOfPages : book.numberOfPages,
         publisher : book.publisher,
         released: book.released
        }
     }
}

