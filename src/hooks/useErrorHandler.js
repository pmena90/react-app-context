import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useErrorHandler = () => {
    const [error, setError] = useState(null);

    useEffect(() => {
        if (error) {
            toast.error(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 5000, // 5 seconds
                hideProgressBar: true,
                closeOnClick: true,
            });
            setError(null);
        }
    }, [error]);

    const handleError = (errorMessage) => {
        setError(errorMessage);
    };

    return handleError;
};

export default useErrorHandler;