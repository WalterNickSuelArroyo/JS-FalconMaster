const fetchPost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['Post 1', 'Post 2', 'Post 3'];
            const error = true;

            if (error) {
                reject('Hubo un error al intentar obtener los posts');
            } else {
                resolve(posts);
            }
        }, 2000);
    });
};

fetchPost()
    .then((posts) => {
        console.log(posts);
    })
    .catch((error) => {
        console.log(error);
    });