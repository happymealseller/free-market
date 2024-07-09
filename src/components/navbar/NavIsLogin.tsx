import { Button } from "@/components/ui/button"
import { LogoutIcon, ProfileIcon } from '@/components/common/Icons';
import { logOut } from "@/api/authApi";

const NavIsLogin = () => {
    const handleProfile = () => {
        //TODO:
    }

    const handleLogout = async () => {
        await logOut
    }

    return (
        <>
            <Button variant="inverse" size="icon" onClick={handleProfile}>
                <img className="h-6 w-6" src="/profile-icon.svg" alt="profile-icon" />
            </Button>

            <Button variant="inverse" size="icon" onClick={handleLogout}>
                <img className="h-6 w-6" src="/exit-icon.svg" alt="exit-icon" />
            </Button>
        </>
    )
}

export default NavIsLogin