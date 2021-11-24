const posts = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const err = false
            if (err)
                reject('error>>>')

            resolve({ 'title': "hello" })
        }, 2000)
    });
}


const authors = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const err = false
            if (err)
                reject('error>>>')

            resolve({ 'name': "diaa" })
        }, 2500)
    });
}


// resolve single promise
getPosts()
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })


//Resolve a set of promises, resolve only when both promises are resloved
Promise.all([posts(), authors()])
    .then((data) => {
        data.forEach((res) => {
            console.log(res)
        })
    })
    .catch((err) => {
        console.log(err)
    })