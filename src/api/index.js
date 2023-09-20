export const getMemeData = async() => {
    const response = await fetch('https://api.imgflip.com/get_memes',{
        method: 'GET',
    });
    return await response.json();
}