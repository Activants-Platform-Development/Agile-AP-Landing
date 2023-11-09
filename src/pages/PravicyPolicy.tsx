import Footer from "../components/Footer";
import { HomeLayout } from "../layouts/HomeLayout";
import { TextValue } from "../translations";

export const PrivacyPolicy = () => {
	const mainContent = (
		<div className={`w-full justify-center flex`}>
			<div className={` w-lgMain text-[14px] md:text-[15px] lg:text-[15px] flex flex-col py-8 gap-y-6 leading-8`}>
				<div className="font-bold text-3xl text-primary">{TextValue("Privacy Notice")}</div>
				<div className={``}>
					<p className={`text-darkBlue font-bold text-xl`}>{TextValue("INTRODUCTION")}</p>
					<p>
						{TextValue(
							"AgileAP is committed to safeguarding the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use the AgileAP Account Payable System web application."
						)}
					</p>
				</div>
				<div className={``}>
					<p className={`text-darkBlue font-bold text-xl`}>{TextValue("INFORMATION WE COLLECT")}</p>
					<p>
						<span className="font-semibold">{TextValue("Information You Provide : ")}</span>
						{TextValue(
							"We may collect personal and business information that you voluntarily provide when using the Application, including but not limited to your name, email address, business name, and other contact details."
						)}
					</p>
					<p>
						<span className="font-semibold">{TextValue("Usage Information : ")}</span>
						{TextValue(
							"We may collect information about your use of the Application, including your IP address, browser type, device information, and the pages you visit."
						)}
					</p>
				</div>

				<div className={``}>
					<p className={`text-darkBlue font-bold text-xl`}>{TextValue("HOW WE USE YOUR INFORMATION")}</p>
					<p>{TextValue("We use the information we collect for the following purposes:")}</p>
					<p>
						<span className="font-semibold">{TextValue("To Provide Services : ")}</span>
						{TextValue("We use your information to provide the services and features of the Application.")}
					</p>
					<p>
						<span className="font-semibold">{TextValue("To Communicate : ")}</span>
						{TextValue(
							"We may use your contact information to communicate with you about the Application, including updates and customer support."
						)}
					</p>
					<p>
						<span className="font-semibold">{TextValue("To Improve the Application : ")}</span>
						{TextValue(" We use data to analyze and improve the functionality and performance of the Application.")}
					</p>
				</div>

				<div className={``}>
					<p className={`text-darkBlue font-bold text-xl`}>{TextValue("SHARING OF INFORMATION")}</p>
					<p>
						{TextValue(
							"We do not sell, trade, or rent your personal information to third parties. However, we may share your information with third-party service providers who assist us in delivering our services, and in the following circumstances:"
						)}
					</p>
					<p>
						<span className="font-semibold">{TextValue("Legal Requirements : ")}</span>
						{TextValue("We may disclose your information if required by law or in response to legal requests.")}
					</p>
					<p>
						<span className="font-semibold">{TextValue("Business Transfers : ")}</span>
						{TextValue(
							"In the event of a merger, acquisition, or sale of all or part of our assets, your information may be transferred as part of that transaction."
						)}
					</p>
				</div>
				<div className={``}>
					<p className={`text-darkBlue font-bold text-xl`}>{TextValue("DATA SECURITY")}</p>
					<p>
						{TextValue(
							"We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security."
						)}
					</p>
				</div>
				<div className={``}>
					<p className={`text-darkBlue font-bold text-xl`}>{TextValue("YOUR CHOICES")}</p>
					<p>{TextValue("You have the following rights regarding your personal information:")}</p>
					<p>
						<span className="font-semibold">{TextValue("Access and Correction : ")}</span>
						{TextValue(" You can access and update your personal information through your account settings.")}
					</p>
					<p>
						<span className="font-semibold">{TextValue("Opt-Out : ")}</span>
						{TextValue(
							" You may opt-out of receiving promotional emails from us by following the instructions in those emails."
						)}
					</p>
				</div>
				<div className={``}>
					<p className={`text-darkBlue font-bold text-xl`}>{TextValue("CHILDREN'S PRIVACY")}</p>
					<p>
						{
							"The Application is not intended for children under 18. We do not knowingly collect personal information from children under 18."
						}
					</p>
				</div>

				<div className={``}>
					<p className={`text-darkBlue font-bold text-xl`}>{TextValue(" CHANGES TO THIS PRIVACY POLICY")}</p>
					<p>
						{
							"We may update this Privacy Policy to reflect changes in our data practices. We will notify you of any significant changes via the Application or other means."
						}
					</p>
				</div>
				<div className={``}>
					<p className={`text-darkBlue font-bold text-xl`}>{TextValue("CONTACT INFORMATION")}</p>
					<p>
						{TextValue(
							"If you have questions about our handling of personal information or questions regarding the privacy policy, you may write to us at "
						)}
						<span className="text-lightBlue font-semibold">{TextValue("customer.service@agileap.com")}</span>
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
