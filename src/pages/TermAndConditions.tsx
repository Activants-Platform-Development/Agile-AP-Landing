import { TextValue } from "../translations"

export const TermAndConditions = () => {

    const mainContent = (
        <div className={`w-full`}>
            <div className={`px-[5%] lg:px-[13%] text-[14px] md:text-[15px] lg:text-[15px] flex flex-col py-8 gap-y-6 leading-8`}>
                <div className="font-bold text-3xl text-theme_color">
                    {TextValue("Terms & Conditions")}
                </div>
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Included In The Rental Service")}
                    </p>
                    <ul className="list-disc ml-6"><li>{'Insurance, Covers, and Waivers'}</li></ul>
                </div>
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Collision Damage Waiver (CDW)")}
                    </p>
                    <p>{TextValue("If the car’s bodywork gets damaged, the most you'll pay towards repairs covered by the Collision Damage Waiver is the damage excess. This cover is only valid if you stick to the terms of the rental agreement. It doesn’t cover other parts of the car (e.g. glass, wheels, interior, roof or undercarriage), or charges (e.g. for towing or off-road time), or anything in the car (e.g. child seats, GPS devices or personal belongings).")}</p>
                </div>
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Third-Party Liability (TPL)")}
                    </p>
                    <p>{TextValue("This covers the driver's liability for injuries and property damage which are covered by the policy. It does not cover injuries to the driver or damage to the rental car. This cover is only valid if you stick to the terms of the rental agreement.")}</p>
                </div>
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Theft Protection (TP)")}
                    </p>
                    <p>{TextValue("If the car is stolen, the most you'll pay towards replacement costs covered by the policy is the theft excess. This cover is only valid if you stick to the terms of the rental agreement.")}</p>
                </div >
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Included at no extra cost")}
                    </p>
                    <p>{TextValue("Local Taxes")}</p>
                </div >
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Mileage / Kilometers")}
                    </p>
                    <p>{TextValue("Your rental includes unlimited free Kilometers. Changing the length of your rental can affect how many Kilometers you can drive for free. It can also affect how much you will pay for each additional kilometer.")}</p>
                </div >
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Additional Drivers")}
                    </p>
                    <p>{TextValue("One Additional Driver over 23 included.")}</p>
                </div >
                <p className="text-xl underline underline-offset-4 font-bold">NOT INCLUDED IN THE RENTAL PRICE</p>
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Deposit")}
                    </p>
                    <p>{TextValue("Deposit is to be paid directly to merchants upon car collection. The price in the application is not included the deposit.")}</p>
                </div >
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("After your rental")}
                    </p>
                    <p>{TextValue("If you've incurred any charges, such as speeding tickets or unpaid congestion charges, the car hire company will try to contact you when the authorities ask them who was driving. This could be months after your rental - and you'll have to pay the company’s administration fee as well as the original charge. Please note: to help you compare different deals, we've standardized the names of these charges. The names that your car hire company uses might be slightly different.")}</p>
                </div >
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Age-related Fees")}
                    </p>
                    <p>{TextValue("When you pick your car up, you will pay a fee for any drivers below a certain age — or above a certain age: A Young Driver Fee will apply for each driver between the ages of 21 and 23 inclusive - THB 214.00 per day, including tax.")}</p>
                </div >
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("One-Way Rentals")}
                    </p>
                    <p>{TextValue("If you arrange to pick the car up in one location and drop it off in another, the car hire company may charge a one-way fee to cover the cost of returning the car to the original location. Prior notification is required for all one-way rentals. If you drop the car off at a location other than the one originally agreed; you will incur a 'Penalty' from the car hire company. The cost of this service will be confirmed after you have made the booking and we have confirmed with the car company that this would be allowed.")}</p>
                </div >
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Other Fees")}
                    </p>
                    <p>{TextValue("If any of the following apply, the counter staff will charge you extra when you pick your car up — or when you drop it off.")}</p>
                </div >
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Valeting Fee")}
                    </p>
                    <p>{TextValue("The car hire company will charge you if the car needs more than a reasonable amount of cleaning after your rental. Unfortunately, the car hire company won't tell us how much this charge is. The counter staff will confirm whether this charge applies to you.")}</p>
                </div >
                <p className="text-xl underline underline-offset-4 font-bold">WHAT YOU NEED AT PICK-UP</p>
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Acceptable forms of payment")}
                    </p>
                    <p className={`text-black font-bold text-lg`}>
                        {TextValue("Paypal (Credit/Debit Card)")}
                    </p>
                    <p>{TextValue("The main driver must be in possession of a Credit Card in their own name when picking up the car. The Card must have enough available funds to cover the excess/deposit amount (which will be blocked on the Card for the duration of the rental). The Card will also be required to pay for local fees, extra equipment and anything purchased additionally at the car hire counter.")}</p>
                </div >

                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Accepted Credit Cards")}
                    </p>
                    <p className={``}>
                        {TextValue("American Express")}
                    </p>
                    <p className={``}>
                        {TextValue("MasterCard")}
                    </p>
                    <p className={` `}>
                        {TextValue("Visa")}
                    </p>
                </div>
                <div className={``}>
                    <p className={`text-darkOrange text-lg italic`}>
                        {TextValue("Please Note:")}
                    </p>
                    <p>{TextValue("This company will not accept prepaid, recharge or virtual credit cards — or any card on which the relevant characters are not raised (‘embossed’). Payment can be also accepted through PayPal account. Please check the PayPal website for details. Visa Dankort cards are not accepted. Not all car hire companies accept Chinese UnionPay credit cards. Please check the UnionPay website for details. Payment can also be completed through PayPal.")}</p>
                </div >
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Manual bank in")}
                    </p>
                    <p>{TextValue("We accepted manual bank in from users. Choose the option of manual bank in applicable in our application. After bank in, user has to upload the image of the bank in slip for verification before confirmation of bookings. Our available bank account are BangkoSiam Commercial Bank.")}</p>
                </div >
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("License Requirements")}
                    </p>
                    <p>{TextValue("The car hire company will charge you if the car needs more than a reasonable amount of cleaning after your rental. Unfortunately, the car hire company won't tell us how much this charge is. The counter staff will confirm whether this charge applies to you.")}</p>
                </div >
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Forms of Identification")}
                    </p>
                    <p>{TextValue("Forms of Identification.")}</p>
                </div >
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Rental Voucher / eVoucher")}
                    </p>
                    <p>{TextValue("When you pick your car up, the counter staff will need to see your voucher, which you receive when your booking is confirmed. Your voucher proves that the car is booked in the main driver’s name. At pick-up, the car hire company will require EITHER a printed copy of the customer's voucher OR an eVoucher. If this is not presented, the car hire company may not allow the car to be picked up or may charge again for the rental.")}</p>
                </div >
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Age Requirements")}
                    </p>
                    <p>{TextValue("When you pick your car up, the counter staff will need to see your voucher, which you receive when your booking is confirmed. Your voucher proves that the car is booked in the main driver’s name. At pick-up, the car hire company will require EITHER a printed copy of the customer's voucher OR an eVoucher. If this is not presented, the car hire company may not allow the car to be picked up or may charge again for the rental.")}</p>
                </div >
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Rental Voucher / eVoucher")}
                    </p>
                    <p>{TextValue("The minimum age limit for this car is 21. The car hire company’s age-related charges and restrictions will apply to all additional drivers.")}</p>
                </div >
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Arrival Details")}
                    </p>
                    <p>{TextValue("Flight Details — If you are arriving by plane, please tell us your flight number so we can pass it on to your rental company (ideally, at least 3 days before you pick your car up). You can tell us your flight number by dropping us an email or call directly to the number provided in “ Contact us”. We cannot be held responsible if a problem with your flight stops you from picking up your car. You may decide to get in touch with your airline to ask about compensation.")}</p>
                </div >
                <p className="text-xl underline underline-offset-4 font-bold">DEPOSITS, EXCESS, AND COVER</p>
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Cover Information")}
                    </p>
                    <div>
                        <p>
                            Insurance Information All rental cars must have a Collision Damage Waiver (CDW) and Theft Protection (TP).Both policies will be either
                        </p>
                        <ul className="list-disc ml-6">
                            <li>
                                included in our package, or
                            </li>
                            <li>
                                purchasable from the car hire company, or
                            </li>
                            <li>
                                provided by the customer's credit card company.
                            </li>
                        </ul>
                    </div>
                </div >
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Deposit / Excess")}
                    </p>
                    <p>{TextValue("The rental company will require a security deposit of your rental price. The deposit is paid directly to the merchants upon car collection. The deposit will be returned by the merchants to users upon car returned, according to the payment terms and conditions, as long as all conditions have been met. Due to fluctuating foreign exchange rates and other possible banking charges, the car hire company cannot be held responsible for any difference between the amount paid and the amount refunded.")}</p>
                </div >
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Optional Covers and Waivers available at counter")}
                    </p>
                    <p>{TextValue("In the event of an accident, this insurance covers medical and legal costs for injuries which are covered by the policy, including death and loss of limb(s). This cover is only valid if you stick to the terms of the rental agreement. Super Collision Damage Waiver (SCDW) reduces the driver's liability in the event that the rental car is damaged, limiting their legal obligation to pay for repairing or replacing the car, subject to the terms of the rental agreement Rather than the full cost, the dive is generally only responsible for the first portion, known as their ‘excess’ - and in many cases, this excess is set at zero, meaning the driver's liability is waived entirely. This protection applies to all authorized drivers of the rental car.")}</p>
                </div >
                <p className="text-xl underline underline-offset-4 font-bold uppercase">Cover Arrangements</p>
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Cover Arrangements")}
                    </p>
                    <p>{TextValue("When you pick your car up, the counter stat may offer to sell you additional products in relation to your excess or deposit. If you have bought Full Protection through us, you do not need to buy them. However, the rental company's products might provide additional benefits: for example, an advanced level of service. If you decide you want these benefits, you may choose to buy their product(s) as well, please make sure you read the terms and conditions of the cover you receive when signing the rental agreement at pick-up, to find out about the policy's exclusions and limits. Policies normally exclude things such as windscreens, glass, wheels, tires, undercarriage, interior, personal belongings, towing charges & off-road time - as well as any ‘extra equipment’ hired from the car hire company, such as child seats and GPS devices Note that your cover will be invalidated by negligence, refueling errors or breaking the terms of the rental agreement (for example, By driving under the influence of alcohol or drugs).")}</p>
                </div >
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Administration Charges")}
                    </p>
                    <p>{TextValue("Damage to the car will be charged for by the car hire company after it is dropped off - and will incur a Damage Administration fee on top of the amount deducted from the excess. An immobilization Charge is payable in the event of an accident. This is in addition to the amount deducted from the excess and is compulsory. This charge is calculated against the car group and the number of repair days")}</p>
                </div >
                <p className="text-xl underline underline-offset-4 font-bold">FUEL POLICY OPTIONS</p>
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Full to Full")}
                    </p>
                    <p>{TextValue("When you pick your car up, the fuel tank will be full or partly full. You will leave a deposit to cover the cost of the fuel: the counter staff will block this money on your credit card. Just before you return your car, please replace the fuel you've used.")}</p>
                </div >
                <p className="text-xl underline underline-offset-4 font-bold uppercase">Cover Arrangements</p>
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl`}>
                        {TextValue("Outside Office Hours")}
                    </p>
                    <p>{TextValue("Please contact us if you want to change your pick-up or drop-off to a time when the counter is closed (e.g. because your plans have changed or you've been delayed). You can’t do this online, because we would need to check whether the rental company can arrange for someone to be there for you. If they can, there will be a fee for this. The cost of this service will be confirmed to you before your departure date. Cross-Border and Boundary rules Please note that cross-border travel is not allowed with this car hire company. Deliveries and Collections If requested in advance, the car hire company may agree to deliver the car at the start of the rental. The cost will be paid to the car hire company on signing the rental agreement. The cost of this service will be confirmed after you have made the booking and we have confirmed with the car company that this would be allowed. Taxes & Fees Any additional services will be subject to any applicable sales taxes and location fees.")}</p>
                </div >
                <div className={``}>
                    <p className={`text-darkPink font-bold text-xl capitalize`}>
                        {TextValue("Extra Equipment (Payable At Counter)")}
                    </p>
                    <p>{TextValue("Pay local extras equipment Additional extras should be requested at the time of booking and paid for (directly to the car hire company) at the time of pick-up. Please note that we cannot guarantee their availability - and that prices are controlled by the car hire company and may be subject to change. Extra Equipment Conditions Additional extras will be subject to any applicable sales taxes and location taxes. Customers requiring extra equipment may have to leave a deposit at the car hire counter. Additional Drivers The cost to add an additional driver is THB 200.00 excluding tax, per day. The car hire company's age-related charges and restrictions will apply to all additional drivers.")}</p>
                </div >
                <p className="text-xl underline underline-offset-4 font-bold uppercase">IMPORTANT INFORMATION</p>
                <p>{TextValue("To make sure you understand the rules and laws about driving hire cars at home and abroad, it’s essential you read the Terms & Conditions in full before you leave to pick your car up. In particular, please make sure you know what documents and other paperwork you must take with you (e.g. driving license, forms of identification, and payment cards) and what you'll need to pay for at the car hire counter. If you don’t have everything you need, the car hire company may not let you pick the car up. By making this booking, you are confirming that you have read and accept our Terms & Conditions. When you pick your car up, the car hire company will need you to sign a rental agreement. Please make sure you read it carefully — and if anything, is not clear, discuss it with the car hire company before you sign. If you are dissatisfied with any aspect of your rental, it’s very important you discuss this at the time with the car hire company. If you are not satisfied with their response, please visit our Contact Us page and tell us about it. If you have any questions, please don’t hesitate to contact us. You'll find our opening hours and contact information on the Contact Us page of our website. If you are having any problems with your hire car, please call the car hire company. If you need any other support during your rental, please contact us. Both phone numbers can be found on the Booking Confirmation page in your application. Information Regarding Exchange Rates and Fees Please note that we cannot be held responsible for any fluctuations in exchange rates or any fee your bank or credit card issuer may charge. So, the amount that appears on your credit card statement may differ from the amount you saw when you made your booking. Equally, should we credit your account with any money, we will refund the exact amount initially charged, Our full Terms & Conditions can be viewed by clicking the Terms & Conditions link at the bottom of the page.")}</p>
                <p className="text-xl underline underline-offset-4 font-bold uppercase">Car Hire Company Important information</p>
                <p>{`Accident or Breakdown - In the event of a breakdown, accident of Mechanical difficulties, you must call the ear hire company immediately. They must give authority for repairs or replacement cars. Please keep copies of all documentation you are asked to complete. This may be needed if you wish to make a claim. For accidents, a police report and An incident report from the car hire counter will be required. Roadside Assistance - Most car hire companies will provide some kind of emergency roadside assistance service for which you may have to pay extra. When you pick your car up, please make sure you find out where the paperwork is kept In most cases, it'll be in the glove box or attached to the sun visor. Lost Keys - If you lose your key(s), you will be charged the cost of the replacement Seat belt - Whatever country you're diving in, driver and passengers must wear seat belts if fitted, wherever they're sitting in the car. Please be aware that all cars have a non-smoking policy. Fines will apply if this policy s not adhered to. Price Calculation - Prices are based on the pick-up and drop-off times and dates that you agree before your rental starts. If you pick the car up any later or bring it back any earlier, you will not receive a refund for unused time. Fight Details - If you are arriving by plane, please tell us your flight number so we can pass it on to your rental company (ideal, at least 3 days before you pick your car up). You can tell us your flight number by dropping us an email or call directly to the number provided in” Contact us” We cannot be held responsible if a problem with your fight stops you from picking up your car. You may decide to get in touch with your airline to ask about compensation. At pick-up, the customer may choose to take a different car, rather than the one reserved for them. If they do, they may be charged an additional premium, even if the new car is smaller than their original choice. If you are involved in an accident; and the car "Rolls Over" onto the roof; you may be asked to pay an additional fee on top of the excess amount.`}</p>
            </div>
        </div >
    )

    return (
        mainContent
    )
}