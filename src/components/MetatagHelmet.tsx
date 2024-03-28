import React from "react";
import { Helmet } from "react-helmet-async";
import logo from "../assets/AgileAp-Logo-Standard.png";

interface metatag {
    title: string;
    description: string;
    url: string;
  }

const MetatagHelmet = ({ title, description, url, ...props }: metatag) => {
	return (
		<Helmet>
			{title && <title>{`${title}`}</title>}
			{title && (
				<meta name="title" content={`${title}`} />
			)}
			{description && (
				<meta name="description" content={description} />
			)}
			<meta
				property="image"
				content={logo}
			/>
			{/* facebook */}
			<meta property="og:type" content="website" />
			{url && <meta property="og:url" content={url} />}
			{title && (
				<meta property="og:title" content={`${title}`} />
			)}
			{description && (
				<meta property="og:description" content={description} />
			)}
			<meta
				property="og:image"
				content={logo}
			/>
			{/* twitter */}
				<meta property="twitter:card" content={logo} />
			{url && <meta property="twitter:url" content={url} />}
			{title && (
				<meta property="twitter:title" content={`${title}`} />
			)}
			{description && (
				<meta property="twitter:description" content={description} />
			)}
			<meta
				property="twitter:image"
				content={logo}
			/>
		</Helmet>
	);
};

export default MetatagHelmet;
