import { useState } from "react";
import useErrorHandler from "../../hooks/useErrorHandler";
import { githubService } from "../../services/githubService";

// Form
const MyForm = (props) => {
    const handleError = useErrorHandler();
    const [username, setUsername] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = (event) => {
        setIsLoading(true);
        event.preventDefault();

        githubService.getUserByName(username).then(data => {
            stopLoading();

            props.onSubmit(data);
            setUsername("");
        }).catch(error => {
            stopLoading();

            handleError(error);
        });

    };

    const handleOnChange = (e) => {
        setUsername(e.target.value);
    }

    const stopLoading = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }

    return (
        <form onSubmit={handleClick} data-testid='my-form'>
            <div className="col-auto">
                <input type="text"
                    placeholder="GitHub username"
                    value={username}
                    onChange={handleOnChange}
                    required
                    className="form-control-plaintext"
                />
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">
                    {isLoading ?
                        <span data-testid='loading'><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>    Loading</span>
                        : 'Add Card'}
                </button>
            </div>
        </form>
    )

}

export default MyForm;