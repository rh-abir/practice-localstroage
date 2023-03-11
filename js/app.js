const getInputValue = (key, id) => {
    const input = document.getElementById(id);
    const inputValue = input.value;
    // console.log(inputValue);
    setDataLocalStorage(key, inputValue);
    input.value = '';
}

const setDataLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
}

const removeLocalStorageData = (key) =>{
    localStorage.removeItem(key);
}


const removeAllData = () => {
    localStorage.clear();
}