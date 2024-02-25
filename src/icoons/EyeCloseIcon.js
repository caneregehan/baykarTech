import { heightPercentageToDP } from "react-native-responsive-screen";
import Svg, { ClipPath, Defs, G, Mask, Path, Rect } from "react-native-svg";

export const EyeCloseIcon = () => {
	return (
		<Svg
			width={heightPercentageToDP(14)}
			height={heightPercentageToDP(14)}
			viewBox="0 0 25 24"
			fill="none">
			<G clip-path="url(#clip0_1918_4518)">
				<Path
					d="M15.9464 12.6461L15.1502 11.85C15.3079 10.9538 15.0691 10.19 14.4339 9.55863C13.7986 8.92723 13.0374 8.69101 12.1502 8.84998L11.3541 8.05383C11.5348 7.97178 11.7207 7.91664 11.9117 7.88843C12.1028 7.86023 12.2989 7.84613 12.5002 7.84613C13.5195 7.84613 14.3832 8.20029 15.0916 8.90863C15.7999 9.61696 16.1541 10.4807 16.1541 11.5C16.1541 11.7013 16.1432 11.8974 16.1214 12.0885C16.0996 12.2795 16.0413 12.4654 15.9464 12.6461ZM19.1079 15.7192L18.3502 15.05C18.9836 14.5666 19.5502 14.0291 20.0502 13.4375C20.5502 12.8458 20.9669 12.2 21.3002 11.5C20.4669 9.81664 19.2627 8.47914 17.6877 7.48748C16.1127 6.49581 14.3836 5.99998 12.5002 5.99998C12.0169 5.99998 11.5461 6.03331 11.0877 6.09998C10.6294 6.16664 10.1669 6.26664 9.70022 6.39998L8.91945 5.6192C9.49125 5.39997 10.0755 5.24195 10.6723 5.14515C11.2691 5.04837 11.8784 4.99998 12.5002 4.99998C14.5143 4.99998 16.3743 5.51664 18.08 6.54998C19.7858 7.58331 21.1066 8.98844 22.0425 10.7654C22.1092 10.8859 22.156 11.0041 22.1829 11.1202C22.2098 11.2362 22.2233 11.3628 22.2233 11.5C22.2233 11.6372 22.2108 11.7638 22.1858 11.8798C22.1608 11.9958 22.115 12.1141 22.0483 12.2346C21.7073 12.9231 21.2855 13.5586 20.7829 14.1413C20.2804 14.724 19.722 15.25 19.1079 15.7192ZM12.5002 18C10.5233 18 8.706 17.4791 7.0483 16.4375C5.3906 15.3958 4.06046 14.0199 3.0579 12.3096C2.97456 12.1891 2.91527 12.0593 2.88002 11.9202C2.84477 11.7811 2.82715 11.641 2.82715 11.5C2.82715 11.3589 2.84382 11.2198 2.87715 11.0827C2.91048 10.9455 2.96882 10.8147 3.05215 10.6904C3.4624 9.99805 3.91721 9.34133 4.41657 8.72018C4.91592 8.09901 5.49381 7.55125 6.15022 7.0769L3.70982 4.63075C3.61624 4.53332 3.56721 4.41761 3.56272 4.28363C3.55822 4.14966 3.60918 4.02947 3.7156 3.92305C3.82202 3.81663 3.93997 3.76343 4.06945 3.76343C4.19893 3.76343 4.31688 3.81663 4.4233 3.92305L20.5771 20.0769C20.6707 20.1705 20.7217 20.2843 20.73 20.4183C20.7384 20.5522 20.6874 20.6743 20.5771 20.7846C20.4707 20.891 20.3528 20.9442 20.2233 20.9442C20.0938 20.9442 19.9759 20.891 19.8694 20.7846L16.331 17.2577C15.7348 17.5308 15.1143 17.7227 14.4694 17.8336C13.8246 17.9445 13.1682 18 12.5002 18ZM6.8579 7.7846C6.16945 8.25639 5.55792 8.8051 5.0233 9.43075C4.48868 10.0564 4.04766 10.7461 3.70022 11.5C4.53356 13.1833 5.73772 14.5208 7.31272 15.5125C8.88772 16.5041 10.6169 17 12.5002 17C13.0259 17 13.5464 16.9631 14.0617 16.8894C14.5771 16.8157 15.0784 16.6833 15.5656 16.4923L13.9348 14.85C13.713 14.9769 13.4836 15.0593 13.2464 15.0971C13.0092 15.1349 12.7605 15.1538 12.5002 15.1538C11.481 15.1538 10.6172 14.7997 9.90887 14.0913C9.20054 13.383 8.84637 12.5192 8.84637 11.5C8.84637 11.2397 8.86849 10.991 8.91272 10.7538C8.95696 10.5166 9.03612 10.2872 9.15022 10.0654L6.8579 7.7846Z"
					fill={"black"}
				/>
			</G>
		</Svg>
	);
};

export const EyeIcon = () => {
	return (
		<Svg
			width={heightPercentageToDP(14)}
			height={heightPercentageToDP(14)}
			viewBox="0 0 20 13"
			fill="none">
			<Path
				d="M10.0045 10.1538C11.0207 10.1538 11.883 9.79817 12.5913 9.08683C13.2997 8.37547 13.6538 7.51169 13.6538 6.49548C13.6538 5.47926 13.2982 4.61698 12.5868 3.90865C11.8755 3.20032 11.0117 2.84615 9.99547 2.84615C8.97926 2.84615 8.11698 3.20182 7.40865 3.91317C6.70031 4.62452 6.34615 5.48831 6.34615 6.50453C6.34615 7.52074 6.70182 8.38302 7.41317 9.09135C8.12452 9.79968 8.98831 10.1538 10.0045 10.1538ZM10 9.2C9.25 9.2 8.6125 8.9375 8.0875 8.4125C7.5625 7.8875 7.3 7.25 7.3 6.5C7.3 5.75 7.5625 5.1125 8.0875 4.5875C8.6125 4.0625 9.25 3.8 10 3.8C10.75 3.8 11.3875 4.0625 11.9125 4.5875C12.4375 5.1125 12.7 5.75 12.7 6.5C12.7 7.25 12.4375 7.8875 11.9125 8.4125C11.3875 8.9375 10.75 9.2 10 9.2ZM10 13C8.02308 13 6.20994 12.4769 4.56057 11.4308C2.91121 10.3846 1.57883 9.01283 0.563447 7.31537C0.480114 7.17821 0.420822 7.04295 0.385572 6.9096C0.350305 6.77625 0.332672 6.63939 0.332672 6.49902C0.332672 6.35864 0.350305 6.22211 0.385572 6.08943C0.420822 5.95673 0.480114 5.82179 0.563447 5.68463C1.57883 3.98718 2.91121 2.61537 4.56057 1.56922C6.20994 0.523075 8.02308 0 10 0C11.9769 0 13.7901 0.523075 15.4394 1.56922C17.0888 2.61537 18.4212 3.98718 19.4365 5.68463C19.5199 5.82179 19.5792 5.95705 19.6144 6.0904C19.6497 6.22375 19.6673 6.36061 19.6673 6.50098C19.6673 6.64136 19.6497 6.77789 19.6144 6.91058C19.5792 7.04328 19.5199 7.17821 19.4365 7.31537C18.4212 9.01283 17.0888 10.3846 15.4394 11.4308C13.7901 12.4769 11.9769 13 10 13ZM10 12C11.8833 12 13.6125 11.5042 15.1875 10.5125C16.7625 9.52083 17.9667 8.18333 18.8 6.5C17.9667 4.81667 16.7625 3.47917 15.1875 2.4875C13.6125 1.49583 11.8833 1 10 1C8.11666 1 6.3875 1.49583 4.8125 2.4875C3.2375 3.47917 2.03333 4.81667 1.2 6.5C2.03333 8.18333 3.2375 9.52083 4.8125 10.5125C6.3875 11.5042 8.11666 12 10 12Z"
				fill={"black"}
			/>
		</Svg>
	);
};
