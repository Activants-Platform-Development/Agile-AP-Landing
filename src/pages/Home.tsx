import Footer from '../components/Footer';
import { DashboardLogo, EmptyWallet, DocumentText, TickCircle, CrossCircle, Cards, Content, Mark1, Mark2 } from "../assets/svg";
import { useEffect, useState } from 'react';
import ToogleTab from '../components/ToogleTab';


export default function Home() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const tabHeaders = ['With AgileAp', 'Without AgileAp']
    const emailAddress = 'contact@agileap.com';
    const subject = 'Inquiry About AgileAP';
    const body = 'Hello,\n\nI am reaching out to inquire about your accounts payable services. Our company, [Your Company Name], is interested in streamlining our accounts payable processes and improving efficiency in managing financial transactions.\n\nWe have reviewed your website and are impressed by the range of services you offer in this area. We are particularly interested in learning more about:\n\n- Invoice processing and automation\n- Vendor management and communication\n- Integration with accounting software\n- Security measures to protect sensitive financial data\n\nCould you please provide more details about your service packages, pricing, and any customization options available? Additionally, we would appreciate any case studies or success stories showcasing the results your clients have achieved by using your accounts payable solutions.\n\nPlease reach out to us at your earliest convenience to discuss how your services align with our needs. You can reply directly to this email or contact us at [Your Phone Number].\n\nThank you for your time, and we look forward to the opportunity to explore a potential collaboration.\n\nBest regards,\n[Your Name]\n[Your Title]\n[Your Company Name]\n[Your Contact Information]';

    const handleClick = () => {
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className='flex flex-col w-full items-center '>
            <section className='flex flex-col w-full py-12 w-lgMain lg:pt-28 sm:pt-12 space-y-12 items-center' id="home">
                <Mark1 className="absolute w-44 lg:w-1/5 top-20 right-0" />
                <div className='flex flex-col w-lgMain text-center gap-6 w-lgMain z-10'>
                    <label className='block text-center font-black leading-tight text-4xl lg:text-7xl'>Elevate Your Business Efficiency</label>
                    <label className='text-md  font-normal text-grayLight '>Achieve Accounts Payable Excellence with Optimize Invoice Processing</label>
                    <div>
                        <button onClick={() => { handleClick(); }} type="button" className="font-medium text-white bg-primary rounded-lg focus:ring-0 focus:outline-none hover:bg-opacity-70 active:bg-opacity-50 font-medium rounded-xl text-sm px-4 py-2 text-center mr-3 md:mr-0 ">Request For Demo</button>
                    </div>
                </div>
                <DashboardLogo className="w-lgMain h-fit  max-w-lgMain z-10" />
                <Mark2 className="w-32 lg:top-[22rem] top-[19rem] lg:bottom-0 lg:w-1/5 absolute left-0" />
            </section>
            <section className='flex flex-col w-full py-12 w-lgMain lg:pt-28 pt-24 space-y-12 items-center' id="ourwork">
                <div className='flex flex-col lg:w-1/2 text-center space-y-6'>
                    <label className='font-black text-3xl md:text-4xl text-xl '>
                        Easy, Simple, Affordable
                    </label>
                    <p className='font-normal text-md lg:text-lg text-grayLight'>
                        Our platform helps your business in managing expenses.These are some of the reasons why you should use our platform in managing business finances.
                    </p>
                </div>
                <div className='flex lg:flex-row xs:flex-col md:flex-col flex-col items-center gap-y-8 lg:items-start w-full gap-x-32 '>
                    <div className='flex flex-col lg:w-2/5 w-4/5 space-y-8'>
                        <div className='flex gap-4'>
                            <div>
                                <div className='bg-primary p-2 rounded-lg'>
                                    <EmptyWallet width={20} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <label className='font-semibold text-lg lg:text-xl '>
                                    Automatic Invoice Receipt
                                </label>
                                <label className='text-sm font-normal text-secondary'>
                                    Automatic payments help you to arrange payments on a certain date without doing it manually again.
                                </label>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div>
                                <div className='bg-primary p-2 rounded-lg'>
                                    <DocumentText width={20} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <label className='font-semibold text-lg lg:text-xl '>
                                    Clear payment history
                                </label>
                                <label className='text-sm font-normal text-secondary'>
                                    Clear payment history helps you to track your business expenses on specific dates.
                                </label>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div>
                                <div className='bg-primary p-2 rounded-lg'>
                                    <Cards width={20} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <label className='font-semibold text-lg lg:text-xl '>
                                    Streamline AP workflows
                                </label>
                                <label className='text-sm font-normal text-secondary'>
                                    AgileAP solution drastically cuts time and cost from the AP approval cycle and accelerates issue resolution.
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:w-3/5 w-4/5 flex-col space-y-8'>
                        <div className='flex gap-4'>
                            <div>
                                <div className='bg-primary p-2 rounded-lg'>
                                    <EmptyWallet width={20} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <label className='font-semibold text-lg lg:text-xl'>
                                    Measure and assess productivity, optimize cash management, enhance vendor interactions and enforce compliance.
                                </label>
                                <label className='text-sm font-normal text-secondary'>
                                    Automatic payments help you to arrange payments on a certain date without doing it manually again.
                                </label>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div>
                                <div className='bg-primary p-2 rounded-lg'>
                                    <DocumentText width={20} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <label className='font-semibold text-lg lg:text-xl'>
                                    Leverage Analytics for Insights
                                </label>
                                <label className='text-sm font-normal text-secondary'>
                                    Measure and assess productivity, optimize cash management, enhance vendor interactions and enforce compliance.
                                </label>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div>
                                <div className='bg-primary p-2 rounded-lg'>
                                    <Cards width={20} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <label className='font-semibold text-lg lg:text-xl'>
                                    Enhance interactions with Self-services
                                </label>
                                <label className='text-sm font-normal text-secondary'>
                                    Vendors eliminate the costs, labor and delays associated with invoice printing and mailing. Vendors also eliminate the risk of payment delays due to lags in invoice receipt.
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex lg:flex-row flex-col w-full justify-center py-12 w-lgMain space-y-12 gap-x-32 items-center'>
                {
                    currentIndex === 0 ?
                        <div className='flex w-8/12 lg:w-2/5 h-auto flex-col gap-y-8 items-center'>
                            <div className='flex w-full justify-between'>
                                <div className='flex flex-col w-32 gap-y-2'>
                                    <label className='font-black text-4xl lg:text-5xl'>80%</label>
                                    <label className='font-normal text-sm text-secondary'>Reduced Invoice Processing Cost</label>
                                </div>
                                <div className='flex flex-col w-32 gap-y-2'>
                                    <label className='font-black text-4xl lg:text-5xl'>100%</label>
                                    <label className='font-normal text-sm text-secondary'>Gain Insight Into Outgoing Payments</label>
                                </div>
                            </div>
                            <div className='flex w-full justify-between'>
                                <div className='flex flex-col w-32 gap-y-2'>
                                    <label className='font-black text-4xl lg:text-5xl'>70%</label>
                                    <label className='font-normal text-sm text-secondary'>Shorten Invoice Processing Time</label>
                                </div>
                                <div className='flex flex-col w-32 gap-y-2'>
                                    <label className='font-black text-4xl lg:text-5xl'>80%</label>
                                    <label className='font-normal text-sm text-secondary'>Adherence To Compliance And Better Governance</label>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='flex w-8/12 lg:w-2/5 flex-col gap-y-8 items-center'>
                            <div className='flex w-full justify-between'>
                                <div className='flex flex-col w-32 gap-y-2'>
                                    <label className='font-black text-4xl lg:text-5xl'>19%</label>
                                    <label className='font-normal text-sm text-secondary'>Reduced Invoice Processing Cost</label>
                                </div>
                                <div className='flex flex-col w-32 gap-y-2'>
                                    <label className='font-black text-4xl lg:text-5xl'>20%</label>
                                    <label className='font-normal text-sm text-secondary'>Gain Insight Into Outgoing Payments</label>
                                </div>
                            </div>
                            <div className='flex w-full justify-between'>
                                <div className='flex flex-col w-32 gap-y-2'>
                                    <label className='font-black text-4xl lg:text-5xl'>70%</label>
                                    <label className='font-normal text-sm text-secondary'>Shorten Invoice Processing Time</label>
                                </div>
                                <div className='flex flex-col w-32 gap-y-2'>
                                    <label className='font-black text-4xl lg:text-5xl'>26%</label>
                                    <label className='font-normal text-sm text-secondary'>Adherence To Compliance And Better Governance</label>
                                </div>
                            </div>
                        </div>
                }

                <div className='flex flex-col lg:w-3/5 gap-y-8'>
                    <div className='flex lg:w-4/5 test-start justify-center lg:justify-start lg:text-start '>
                        <label className='text-3xl lg:text-4xl font-black text-center lg:text-start'>Reduce Time In Doing Manual Work</label>
                    </div>
                    <ToogleTab
                        tabHeaders={tabHeaders}
                        currentIndex={currentIndex}
                        setCurrentIndex={setCurrentIndex}
                    />
                    {
                        currentIndex === 0 ?
                            <>
                                <label className='block font-semibold text-lg lg:text-xl'>Activants Accounts Payable Automation Enables</label>
                                <div className='flex flex-col gap-y-3'>
                                    <div className='flex space-x-2'>
                                        <div className='flex items-start'>
                                            <TickCircle className={"w-6"} />
                                        </div>
                                        <label className='font-medium text-md lg:text-lg leading-1'>Analyze your business cost easily with group transaction thorugh tagging feature.</label>
                                    </div>
                                    <div className='flex space-x-2'>
                                        <div className='flex items-start'>
                                            <TickCircle className={"w-6"} />
                                        </div>
                                        <label className='font-medium text-md lg:text-lg leading-1'>Seemless integration with Active Directory, SharePoint and other third party systems.</label>
                                    </div>
                                    <div className='flex space-x-2'>
                                        <div className='flex items-start'>
                                            <TickCircle className={"w-6"} />
                                        </div>
                                        <label className='font-medium text-md lg:text-lg leading-1'>Easy to use and accessible though mobile devices.</label>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <label className='block font-semibold text-lg lg:text-xl'>Taking too long to tidy up administrative files makes it unproductive</label>
                                <div className='flex flex-col gap-y-3'>
                                    <div className='flex space-x-2'>
                                        <div className='flex items-start'>
                                            <CrossCircle className={"w-6"} />
                                        </div>
                                        <label className='font-medium text-md lg:text-lg leading-5'>Complex recording process due to every administrative file in a different place.</label>
                                    </div>
                                    <div className='flex space-x-2'>
                                        <div className='flex items-start'>
                                            <CrossCircle className={"w-6"} />
                                        </div>
                                        <label className='font-medium text-md lg:text-lg'>Need more effort to pay manually one by one invoice because there is no payment accommodation..</label>
                                    </div>
                                    <div className='flex space-x-2'>
                                        <div className='flex items-start'>
                                            <CrossCircle className={"w-6"} />
                                        </div>
                                        <label className='font-medium text-md lg:text-lg'>Manual data arranging needs a long time because the different months/years are not in the same place.</label>
                                    </div>
                                </div></>
                    }
                </div>
            </section>
            <section className='flex flex-col w-full py-12 w-lgMain lg:pt-28 pt-24 space-y-12 items-center' id="pricing">
                <div className='flex flex-col gap-y-2 text-center'>
                    <label className='font-black text-3xl lg:text-4xl'>Your Favourite Tools</label>
                    <label className='text-secondary text-md lg:text-lg'>Complete Accounts Payable Solution And Payment Automation</label>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-2 md:grid-cols-3 w-full px-12 gap-8 justify-items-center'>
                    <div className='flex flex-col lg:w-48 min-w-min items-center text-center gap-y-2'>
                        <div className='flex w-10 bg-primary p-2 rounded-lg'>
                            <EmptyWallet width={20} />
                        </div>
                        <label className='font-semibold text-lg lg:text-xl'>Buyer's Purchase Order Application</label>
                    </div>
                    <div className='flex flex-col lg:w-48 min-w-min items-center text-center gap-y-2'>
                        <div className='flex w-10 bg-primary p-2 rounded-lg'>
                            <EmptyWallet width={20} />
                        </div>
                        <label className='font-semibold text-lg lg:text-xl'>Straight-though Processing</label>
                    </div>
                    <div className='flex flex-col lg:w-48 min-w-min items-center text-center gap-y-2'>
                        <div className='flex w-10 bg-primary p-2 rounded-lg'>
                            <EmptyWallet width={20} />
                        </div>
                        <label className='font-semibold text-lg lg:text-xl'>ERP Integrations</label>
                    </div>

                    <div className='flex flex-col lg:w-48 min-w-min items-center text-center gap-y-2'>
                        <div className='flex w-10 bg-primary p-2 rounded-lg'>
                            <EmptyWallet width={20} />
                        </div>
                        <label className='font-semibold text-lg lg:text-xl'>Supplier Fulfill Order</label>
                    </div>
                    <div className='flex flex-col lg:w-48 min-w-min items-center text-center gap-y-2'>
                        <div className='flex w-10 bg-primary p-2 rounded-lg'>
                            <EmptyWallet width={20} />
                        </div>
                        <label className='font-semibold text-lg lg:text-xl'>Invoice Matching</label>
                    </div>
                    <div className='flex flex-col lg:w-48 min-w-min items-center text-center gap-y-2'>
                        <div className='flex w-10 bg-primary p-2 rounded-lg'>
                            <EmptyWallet width={20} />
                        </div>
                        <label className='font-semibold text-lg lg:text-xl'>Payment Services</label>
                    </div>
                    <div className='flex flex-col lg:w-48 min-w-min items-center text-center gap-y-2'>
                        <div className='flex w-10 bg-primary p-2 rounded-lg'>
                            <EmptyWallet width={20} />
                        </div>
                        <label className='font-semibold text-lg lg:text-xl'>Vendor Portal</label>
                    </div>
                    <div className='flex flex-col lg:w-48 min-w-min items-center text-center gap-y-2'>
                        <div className='flex w-10 bg-primary p-2 rounded-lg'>
                            <EmptyWallet width={20} />
                        </div>
                        <label className='font-semibold text-lg lg:text-xl'>Approval Workflow</label>
                    </div>
                    <div className='flex flex-col lg:w-48 min-w-min items-center text-center gap-y-2'>
                        <div className='flex w-10 bg-primary p-2 rounded-lg'>
                            <EmptyWallet width={20} />
                        </div>
                        <label className='font-semibold text-lg lg:text-xl'>Data Analytics</label>
                    </div>
                    <div className='flex flex-col lg:w-48 min-w-min items-center text-center gap-y-2 col-start-2'>
                        <div className='flex w-10 bg-primary p-2 rounded-lg'>
                            <EmptyWallet width={20} />
                        </div>
                        <label className='font-semibold text-lg lg:text-xl'>e-Invoicing</label>
                    </div>
                </div>
            </section>
            <section className='lg:grid lg:grid-cols-2 text-white bg-darkBlue w-full justify-center pt-12 lg:pl-24 pl-12 md:pl-16 space-y-12 gap-x-32 items-center'>
                <div className='flex md:w-3/4 gap-y-4 flex-col'>
                    <label className='font-black text-3xl lg:text-4xl block w-9/12'>Start your journey with us now</label>
                    <label className='font-normal text-sm text-secondary'>Are you ready to make your business more organized?</label>
                    <div>
                        <button onClick={() => { handleClick(); }} type="button" className="font-medium text-white bg-primary rounded-lg hover:ring-0 hover:outline-none hover:bg-opacity-90 active:bg-opacity-70 font-medium rounded-xl text-sm px-4 py-2 text-center mr-3 md:mr-0 ">Get a Free Demo</button>
                    </div>
                </div>
                <div className=' flex pl-28 mb-0 md:sticky md:right-0 md:min-w-lg'>
                    <Content className=" mb-0 h-fit max-h-fit min-w-[100%]" />
                </div>
            </section>
            <Footer />
        </div>
    )
}


