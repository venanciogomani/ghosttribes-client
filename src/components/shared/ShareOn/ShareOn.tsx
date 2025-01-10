import { Facebook, Instagram, MailOutline, Twitter } from "@mui/icons-material";

export default function ShareOn() {
    function handleShareTo(link: string) {
        const url = `https://www.${link}.com/share?url=${window.location.href}`;
        window.open(url, "_blank");
    }

    function handleShareByMail() {
        const url = `mailto:?subject=Check out this product&body=${window.location.href}`;
        window.open(url, "_blank");
    }
    
    return (
        <div className="flex items-center justify-start mt-2">
            <div 
                className="p-1 mr-1 cursor-pointer text-slate-900 hover:text-pink-600 transition duration-300 ease-in-out"
                title="Share on Facebook"
                onClick={() => handleShareTo("facebook")}
            >
                <Facebook fontSize="small" />
            </div>
            <div 
                className="p-1 mx-1 cursor-pointer text-slate-900 hover:text-pink-600 transition duration-300 ease-in-out"
                title="Share on X"
                onClick={() => handleShareTo("twitter")}
            >
                <Twitter fontSize="small" />
            </div>
            <div 
                className="p-1 mx-1 cursor-pointer text-slate-900 hover:text-pink-600 transition duration-300 ease-in-out"
                title="Share on Instagram"
                onClick={() => handleShareTo("instagram")}
            >
                <Instagram fontSize="small" />
            </div>
            <div 
                className="p-1 mx-1 cursor-pointer text-slate-900 hover:text-pink-600 transition duration-300 ease-in-out"
                title="Share by email"
                onClick={handleShareByMail}
            >
                <MailOutline fontSize="small" />
            </div>
        </div>
    )
}