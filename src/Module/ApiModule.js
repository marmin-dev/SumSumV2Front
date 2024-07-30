import axios from "axios"

const apiUrl = process.env.REACT_APP_API_URL

export const ChatToHer = async (message) => {
    response = axios.post(
        `${apiUrl}/message`, {"message":message}
    )
}