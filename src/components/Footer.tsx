import { useNavigate } from "react-router-dom";
import { AgileAppLogo } from "../assets/svg";

export default function Footer() {
    const emailAddress = 'contact@agileap.com';
    const subject = 'Inquiry About AgileAP';
    const body = 'Hello,\n\nI am reaching out to inquire about your accounts payable services. Our company, [Your Company Name], is interested in streamlining our accounts payable processes and improving efficiency in managing financial transactions.\n\nWe have reviewed your website and are impressed by the range of services you offer in this area. We are particularly interested in learning more about:\n\n- Invoice processing and automation\n- Vendor management and communication\n- Integration with accounting software\n- Security measures to protect sensitive financial data\n\nCould you please provide more details about your service packages, pricing, and any customization options available? Additionally, we would appreciate any case studies or success stories showcasing the results your clients have achieved by using your accounts payable solutions.\n\nPlease reach out to us at your earliest convenience to discuss how your services align with our needs. You can reply directly to this email or contact us at [Your Phone Number].\n\nThank you for your time, and we look forward to the opportunity to explore a potential collaboration.\n\nBest regards,\n[Your Name]\n[Your Title]\n[Your Company Name]\n[Your Contact Information';
    const navigate = useNavigate();
    const handleClick = () => {
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    return (
        <section id="aboutus" className='flex flex-col w-full justify-center py-10 sm:py-12 w-lgMain space-y-12 gap-x-32 items-center'>
            <div className='flex w-full justify-between'>
                <div className='flex flex-col gap-y-2'>
                    <AgileAppLogo />
                    <label className='font-semibold text-sm text-secondary '>24 Sin Ming Lane#08-105 Midview CitySingapore 573970</label>
                    <label className='font-semibold text-sm text-secondary '>info@activants.com</label>
                </div>
                <div className="flex flex-col w-fit align-middle justify-center min-w-fit">
                    <button onClick={() => { handleClick(); }} type="button" className="flex font-normal text-white bg-primary rounded-lg hover:ring-0 hover:outline-none hover:bg-opacity-70 active:bg-opacity-50 font-medium rounded-xl lg:text-xl text-md lg:px-8 px-3 py-2 text-center ">Contact Us</button>
                </div>
            </div>
            <hr className='w-full bg-secondary text-secondary text-sm' />
            <div className='flex flex-row   w-full justify-between text-xs text-secondary font-semibold'>
                <div className="flex">
                    <label>© 2023 Activants PTE LTD. - All Rights Reserved</label>
                </div>
                <div className='flex lg:space-x-8 md:space-x-4 space-x-2 justify-between'>
                    <label className='cursor-pointer hover:font-bold hover:text-black active:font-bold active:text-black' onClick={() => navigate("/terms-conditions")}>Terms of use</label>
                    <label className='cursor-pointer hover:font-bold hover:text-black active:font-bold active:text-black' onClick={() => navigate("/privacy-policy")}>Privacy policy</label>
                </div>
            </div>
        </section>
    )
}
