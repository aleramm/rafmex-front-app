export const getStorage = () => {
    const login_info = localStorage.getItem('perfil_pvd');
    if(login_info === undefined || login_info === null) {
        return {};
    }

    const login_json = JSON.parse(login_info);
    return {login : login_json.login_info};
}

export const saveItem = (key, item) => {
    localStorage.setItem(key, item);
}

export const getItem = (key, item) => {
    localStorage.setItem(key, item);
}

export const deleteStorage = () => {
    localStorage.clear();
}

export const savePlatform = (platform) => {
    localStorage.setItem('device', platform);
}

export const saveStateStorage = (state) => {
    const loginState = JSON.stringify(state);
    localStorage.setItem('perfil_pvd', loginState);
}
