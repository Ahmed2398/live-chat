import { ref } from "vue";
import { projectAuth } from "@/firebase/config";

const error = ref(null)

const logout = async () => {
    error.value = null
    try {
        const res = await projectAuth.signOut()
        error.value = null
        return res
    } catch (err) {
        console.log(err.message)
        error.value = err.message
    }
}

const useLogout = () => {
    return {logout, error}
}

export default useLogout