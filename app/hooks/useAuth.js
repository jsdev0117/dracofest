import { useContext } from 'react';
import FirebaseContext from '../context/firebaseContext';

// auth provider


// ==============================|| AUTH HOOKS ||============================== //

const useAuth = () => {
    const context = useContext(FirebaseContext);

    if (!context) throw new Error('context must be use inside provider');

    return context;
};

export default useAuth;
