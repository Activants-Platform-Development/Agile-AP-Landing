import Footer from "../components/Footer";
import { HomeLayout } from "../layouts/HomeLayout";
import { TextValue } from "../translations";

export const TermAndConditions = () => {
	const mainContent = (
		<div className={`w-full justify-center flex `}>
			<div className={` w-lgMain text-[14px] md:text-[15px] lg:text-[15px] flex flex-col py-8 gap-y-6 leading-8`}>
				<div className="font-bold text-3xl text-primary">{TextValue("Terms & Conditions")}</div>
				<div className={``}>
					<p className={`text-darkBlue font-bold text-xl`}>{TextValue("ACCEPTANCE OF TERMS")}</p>
					<p className="">
						{TextValue(
							'By accessing or using the AgileAP Account Payable System web application, you agree to comply with and be bound by these terms and conditions ("Terms"). If you do not agree to these Terms, please do not use the Application.'
						)}
					</p>
				</div>
				<div className={``}>
					<p className={`text-darkBlue font-bold text-xl`}>{TextValue("USE OF THE APPLICATION")}</p>
					<p>
						<span className="font-semibold">{TextValue("Eligibility : ")}</span>
						{TextValue(
							"You must be at least 18 years old and capable of forming a legally binding contract to use the Application. If you are using the Application on behalf of a business, you represent that you have the authority to bind that business to these Terms."
						)}
					</p>
					<p>
						<span className="font-semibold">{TextValue("User Account : ")}</span>
						{TextValue(
							"You may be required to create an account to use certain features of the Application. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."
						)}
					</p>
					<p>
						<span className="font-semibold">{TextValue("Acceptable Use : ")}</span>
						{TextValue(
							"You agree to use the Application for lawful purposes only and in a manner consistent with all applicable laws and regulations. You will not engage in any activity that may disrupt or interfere with the proper functioning of the Application."
						)}
					</p>
				</div>
				<div className={``}>
					<p className={`text-darkBlue font-bold text-xl`}>{TextValue(" PAYMENT AND SUBSCRIPTION")}</p>
					<p>
						<span className="font-semibold">{TextValue("Subscription : ")}</span>
						{TextValue(
							"Some features and services provided by the Application may require payment and a subscription. By subscribing to the Application, you agree to pay the applicable fees."
						)}
					</p>
					<p>
						<span className="font-semibold">{TextValue("Billing : ")}</span>
						{TextValue(
							"The fees for the Application will be billed on a recurring basis, and you authorize us to charge your designated payment method."
						)}
					</p>
					<p>
						<span className="font-semibold">{TextValue("Cancellation : ")}</span>
						{TextValue(
							"You may cancel your subscription at any time, but no refunds will be provided for any unused portion of the subscription."
						)}
					</p>
				</div>
				<div className={``}>
					<p className={`text-darkBlue font-bold text-xl`}>{TextValue("PRIVACY")}</p>
					<p>
						{TextValue(
							"Your use of the Application is subject to our Privacy Policy, which can be found on the Application's website. By using the Application, you consent to the collection and use of your information as described in the Privacy Policy."
						)}
					</p>
				</div>
				<div className={``}>
					<p className={`text-darkBlue font-bold text-xl`}>{TextValue("INTELLECTUAL PROPERTY")}</p>
					<p>
						<span className="font-semibold">{TextValue("Ownership : ")}</span>
						{TextValue(
							"The Application and its content are owned by AgileAP or its licensors and are protected by copyright and other intellectual property laws."
						)}
					</p>
					<p>
						<span className="font-semibold">{TextValue("Eligibility : ")}</span>
						{TextValue(
							"License: AgileAP grants you a limited, non-exclusive, non-transferable license to use the Application for your personal or business use in accordance with these Terms."
						)}
					</p>
				</div>
				<div className={``}>
					<p className={`text-darkBlue font-bold text-xl`}>{TextValue("DISCLAIMERS")}</p>
					<p>
						{TextValue(
							'The Application is provided " as is" and " as available" without warranties of any kind, either express or implied. AgileAP does not warrant that the Application will be error-free, uninterrupted, or secure.'
						)}
					</p>
				</div>
				<div className={``}>
					<p className={`text-darkBlue font-bold text-xl`}>{TextValue("LIMITATION OF LIABILITY")}</p>
					<p>
						{TextValue(
							"In no event shall AgileAP be liable for any indirect, consequential, special, incidental, or punitive damages, or for any loss of profits or revenue."
						)}
					</p>
				</div>
				<div className={``}>
					<p className={`text-darkBlue font-bold text-xl`}>{TextValue("TERMINATION")}</p>
					<p>
						{TextValue(
							"AgileAP may terminate or suspend your access to the Application at its sole discretion, without notice, for any reason, including if you violate these Terms."
						)}
					</p>
				</div>
				<div className={``}>
					<p className={`text-darkBlue font-bold text-xl`}>{TextValue("MODIFICATIONS")}</p>
					<p>
						{TextValue(
							"AgileAP reserves the right to modify or update these Terms at any time. It is your responsibility to review these Terms regularly. Your continued use of the Application following any changes constitutes your acceptance of those changes."
						)}
					</p>
				</div>
				<div className={``}>
					<p className={`text-darkBlue font-bold text-xl`}>{TextValue("GOVERNING LAW")}</p>
					<p>
						{TextValue(
							"These Terms are governed by the laws of Singapore, without regard to its conflict of law principles."
						)}
					</p>
				</div>
				<div className={``}>
					<p className={`text-darkBlue font-bold text-xl`}>{TextValue("CONTACT INFORMATION")}</p>
					<p>
						{TextValue("If you have any questions or concerns about these Terms, please contact us at")}
						<span className="text-lightBlue font-semibold"> {TextValue("customer.service@agileap.com")}</span>
					</p>
				</div>
				<p className="text-lightBlue italic font-bold">
					{TextValue(
						"By using the AgileAP Account Payable System web application, you agree to these Terms and Conditions."
					)}
				</p>
			</div>
		</div>
	);

	return (
		<HomeLayout showHeader={true} showFooter={true} mainContent={mainContent} currentPage="Terms and conditions" />
	);
};
