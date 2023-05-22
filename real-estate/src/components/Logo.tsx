type Props = {
	logo: string;
	altText: string;
};

const Logo = ({ logo, altText }: Props) => {
	return <img src={logo} alt={altText} />;
};

export default Logo;
