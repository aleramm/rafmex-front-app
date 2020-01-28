export const getStorage = () => {
    const login_info = localStorage.getItem('login_info');
    if(login_info === undefined || login_info === null){
        return {};
    }

    const login_json = JSON.parse(login_info);
    return {login : { login_info : login_json.login_info, validAccess : true , errorAccess : false}};
}

export const saveStorage = (key, item) => {
    localStorage.setItem(key, item);
}

export const deleteStorage = () => {
    localStorage.clear();
}

export const savePlatform = (platform) => {
    localStorage.setItem('device', platform);
}