import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/shadcn/ui/dialog";

import { Button } from "@/components/shadcn/ui/button";

const SellButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="inverse" size="sell">
                    Sell
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>
                        You will be redirected to Telegram.
                    </DialogTitle>
                    <DialogDescription>
                        For your safety, avoid paying before the meet-up.
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                    <Button type="submit">Continue</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default SellButton;
