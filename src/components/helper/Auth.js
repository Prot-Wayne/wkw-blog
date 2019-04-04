
const authUser = () =>  {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    if(userData){
        return true
    }else {
        return false
    }
}
export default authUser






