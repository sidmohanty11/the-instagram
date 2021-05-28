import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/user';
import { getUserByUserId } from '../services/firebase';

//we need to call firebase
export default function useUser() {
    const [activeUser, setActiveUser] = useState({});
    const { user } = useContext(UserContext);

    useEffect(() => {
        async function getUserObjByUserId() {
           //we need a function that we can call that gets the user data based on uid!
            const [response] = await getUserByUserId(user.uid);
            setActiveUser(response);
        }
        if (user?.uid) {
            getUserObjByUserId();
        }
    }, [user]);

    return { user: activeUser };
}