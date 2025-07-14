const baseUrl = 'http://localhost:3005/api/users';

export const getAll = async () => {
    const response = await fetch(baseUrl)
    const result = await response.json();
    
    return result.users;

};

export const getOne = async(userId) => {
    const response = await fetch(`${baseUrl}/${userId}`)
    const result = await response.json();

    return result.user;
};

export const create = async (userData) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),

    });


    if (response.ok) {
        const result = await response.json();
        return result;
    } else {
        throw new Error('Unable to create user');
    }
}