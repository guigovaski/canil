type MenuOption = '' | 'all' | 'dog' | 'cat' | 'fish';

export const activeMenu = (opt: MenuOption) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if (opt !== '') {
        returnObject[opt] = true;
    }

    return returnObject;
}