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
export function savePlan(plan) {
    localStorage.setItem('plan', JSON.stringify(plan));
}

export function getPlan() {
    return JSON.parse(localStorage.getItem('plan'));
}