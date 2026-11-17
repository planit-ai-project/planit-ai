export function saveapi(api) {
    sessionStorage.setItem('api',api)
}
export function removeapi() {
    sessionStorage.removeItem('api')
}
export function savedemo(demo) {
    sessionStorage.setItem('demo',demo)
}
export function geteapi() {
    return sessionStorage.getItem('api')
}
export function getdemo() {
    return sessionStorage.getItem('demo') === 'true'
}
