class RestService { 
    getAllMenu = async () =>{
        const request = await fetch("http://localhost:3001/menu");

        if (!request.ok){
            throw new Error("Couldn't Fetch"+request.status);
        }

        return await request.json();
    }
}
export default RestService;