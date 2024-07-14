import { useRef, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "@/components/shadcn/ui/dialog";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import { Button } from "@/components/shadcn/ui/button";
import SpinnerLoader from "@/components/common/SpinnerLoader";
import {
    logInWithEmailAndPassword,
    resetPasswordWithEmail,
    signUpWithEmailAndPassword,
} from "@/api/authApi";

const NavPreLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPin] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isLoginForm, setIsLoginForm] = useState(true);

    const formRef = useRef<HTMLFormElement>(null);

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPin(event.target.value);
    };

    const handleSubmitLogin = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        setErrorMsg("");
        setIsLoading(true);
        try {
            const { error } = await logInWithEmailAndPassword(email, password);
            setIsLoading(false);
            if (error) setErrorMsg(error.message);
        } catch (error) {
            console.error("Error in logInWithEmailAndPassword:", error);
        }
    };

    const handleSubmitSignup = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        setErrorMsg("");
        setIsLoading(true);
        try {
            const { data, error } = await signUpWithEmailAndPassword(
                email,
                password
            );
            setIsLoading(false);
            if (error) setErrorMsg(error.message);
            if (data) {
                console.log(data);
                // TODO: set message signup success, check email and
                // TODO: make api call to setup user profile , or redirect..
            }
        } catch (error) {
            console.error("Error in signUpWithEmailAndPassword:", error);
        }
    };

    const handleForgotPassword = async () => {
        //TODO: i think we should redirect if user click on this page
        // because he needs to enter email only
        try {
            const { data, error } = await resetPasswordWithEmail(email);
            if (error) setErrorMsg(error.message);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="text" size="default">
                    Login • SignUp
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <p className="text-2xl">
                        {isLoginForm ? "Log In" : "Sign Up"}
                    </p>
                    {isLoginForm ? (
                        <p className="text-md text-slate-400">
                            New here?{" "}
                            <span
                                className="text-royal hover:underline"
                                onClick={() => {
                                    setIsLoginForm(false);
                                    setErrorMsg("");
                                }}
                            >
                                SignUp
                            </span>
                        </p>
                    ) : (
                        <p className="text-md text-slate-400">
                            Have an account?{" "}
                            <span
                                className="text-royal hover:underline"
                                onClick={() => {
                                    setIsLoginForm(true);
                                    setErrorMsg("");
                                }}
                            >
                                Login
                            </span>
                        </p>
                    )}

                    <p className="text-sm text-destructive">{errorMsg}</p>
                </DialogHeader>

                {isLoading ? (
                    <SpinnerLoader />
                ) : (
                    <form
                        ref={formRef}
                        onSubmit={(e) => {
                            isLoginForm
                                ? handleSubmitLogin(e)
                                : handleSubmitSignup(e);
                        }}
                        className="flex-row items-center justify-center gap-4"
                    >
                        <div>
                            <Label htmlFor="password" className="text-right">
                                Email
                            </Label>
                            <Input
                                id="email"
                                required
                                type="email"
                                value={email}
                                onChange={handleChangeEmail}
                                className="col-span-3"
                            />
                        </div>
                        <div>
                            <Label htmlFor="password" className="text-right">
                                Password
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={handleChangePassword}
                                className="col-span-3"
                            />
                        </div>
                    </form>
                )}

                <DialogFooter>
                    {isLoginForm ? (
                        <>
                            <button
                                className="p-2 text-sm hover:underline"
                                onClick={handleForgotPassword}
                            >
                                Forgot Password
                            </button>
                            <Button
                                className="sm:w-24"
                                type="submit"
                                variant="primary"
                                onClick={() => {
                                    formRef.current &&
                                        formRef.current.requestSubmit();
                                }}
                                disabled={isLoading}
                            >
                                Log In
                            </Button>
                        </>
                    ) : (
                        <Button
                            className="sm:w-24"
                            type="submit"
                            variant="primary"
                            onClick={() => {
                                formRef.current &&
                                    formRef.current.requestSubmit();
                            }}
                            disabled={isLoading}
                        >
                            Sign Up
                        </Button>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default NavPreLogin;
