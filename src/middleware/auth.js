import router from "../router"

export function withAuth(to, from, next) {
    const auth = localStorage.getItem("auth")
    if(!auth) {
        router.push({name: "Login"})
    } else next()

    
}

export function withoutAuth(to, from, next) {
    if(localStorage.getItem("auth")) {
        router.push({name: "Blog"})
    } else next()

    
}