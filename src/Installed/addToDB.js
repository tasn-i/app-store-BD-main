const getStoredApp = () =>{
    
    const storedAppSTR = localStorage.getItem("installation");

    if(storedAppSTR){
        const storedAppData = JSON.parse(storedAppSTR);
        return storedAppData;

    }
    else{
        return [];
    }
}

const addToStoredDB =(id) =>{

    const storedAppData = getStoredApp();
    if(storedAppData.includes(id)){

        alert("app allready exist")

    }
    else{
        storedAppData.push(id);
        console.log(storedAppData)
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("installation", data);
    }




};


// Uninstall

const removeFromDB = (id) => {
    const stored =JSON.parse(localStorage.getItem("installation")) || [];
    const updated = stored.filter(item => item !== id);
    localStorage.setItem("installation", JSON.stringify(updated));
};

export {addToStoredDB, getStoredApp, removeFromDB};