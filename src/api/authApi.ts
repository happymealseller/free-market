import supabase from "@/api/setupSupabase";

export const logInWithEmailAndPassword = async (
    email: string,
    password: string
) => {
    const reponse = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    return reponse;
};

export const logOut = async () => {
    const reponse = await supabase.auth.signOut();
    return reponse;
};

export const signUpWithEmailAndPassword = async (
    email: string,
    password: string
) => {
    const reponse = await supabase.auth.signUp({
        email,
        password,
    });
    return reponse;
};

export const resetPasswordWithEmail = async (email: string) => {
    const reponse = await supabase.auth.resetPasswordForEmail(email);
    return reponse;
};
