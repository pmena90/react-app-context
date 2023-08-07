
function handleHttpError(error) {
    console.log(error);
    if (error.response) {
        return Promise.reject(error.response.data.message);
    } else if (error.request) {
        const ret_error = error.request.hasOwnProperty("data")
            ? error.request.data.message
            : error;
        return Promise.reject(ret_error);
    } else {
        return Promise.reject(error.message);
    }
}

export default handleHttpError;