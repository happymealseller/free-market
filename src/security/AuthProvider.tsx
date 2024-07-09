import { useState, useEffect, createContext, ReactNode, FC } from 'react';
import supabase from '@/api/setupSupabase';

interface IUser {
    //TODO: 
}

interface AuthContextType {
    user: UserState;
}

interface AuthProviderProps {
    children: ReactNode;
}

type UserState = IUser | undefined | null;
type AuthContextState = AuthContextType | null

export const AuthContext = createContext<AuthContextState>(null);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<UserState>(null);

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'INITIAL_SESSION') {
                // handle initial session
            } else if (event === 'SIGNED_IN') {
                setUser(session?.user);
            } else if (event === 'SIGNED_OUT') {
                setUser(null);
            } else if (event === 'PASSWORD_RECOVERY') {
                // const newPassword = prompt("What would you like your new password to be?");
                // const { data, error } = await supabase.auth
                //     .updateUser({ password: newPassword })

                // if (data) alert("Password updated successfully!")
                // if (error) alert("There was an error updating your password.")
            } else if (event === 'TOKEN_REFRESHED') {
                // handle token refreshed event
            }
        });

        return () => {
            authListener?.subscription.unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
