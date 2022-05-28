export default async (req, res) => {
    const id = req.url.split('/')[3];
    const region = req.url.split('/')[4];
    let datas = []
    await fetch(`https://linesticker-scrap.herokuapp.com/${id}/${region}`)
    .then(response => response.json())
    .then(data => {
        datas = data
    })
    .catch((error) => {
            console.error('Error:', error);
    });
    
    return datas

}