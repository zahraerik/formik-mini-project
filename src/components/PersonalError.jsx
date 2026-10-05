
const PersonalError = ({children}) => {
    return (
        <small className="d-block text-center text-red-700">
            {children}
        </small>
    );
};

export default PersonalError;
