import React from "react";
import { Box } from "@chakra-ui/core";

const CupSvg = (props: any) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
		<path
			d="M391 497h-3.098c-3.607-22.64-23.263-40-46.902-40h-18.954c-16.125-10.419-26.346-27.239-28.228-46.138 11.366-3.377 19.682-13.914 19.682-26.362a27.4 27.4 0 00-3.744-13.863c47.53-21.079 78.744-68.428 78.744-121.137V207h2.5a7.5 7.5 0 000-15H121a7.5 7.5 0 000 15h2.5v42.5c0 52.709 31.214 100.058 78.744 121.137A27.4 27.4 0 00198.5 384.5c0 12.448 8.316 22.985 19.682 26.362-1.881 18.899-12.103 35.72-28.228 46.138H171c-23.639 0-43.295 17.36-46.902 40H121a7.5 7.5 0 000 15h270a7.5 7.5 0 000-15zM213.5 384.5c0-4.26 2.153-8.189 5.76-10.51a7.501 7.501 0 00-1.611-13.397C170.307 344.253 138.5 299.608 138.5 249.5V207h235v42.5c0 50.108-31.807 94.753-79.148 111.094a7.499 7.499 0 00-1.611 13.397c3.606 2.321 5.76 6.25 5.76 10.51 0 6.893-5.607 12.5-12.5 12.5h-60C219.107 397 213.5 391.393 213.5 384.5zm19.645 27.5h45.71c1.61 17.026 8.681 32.707 20.047 45h-85.805c11.367-12.293 18.438-27.974 20.048-45zm-93.762 85c3.396-14.315 16.278-25 31.617-25h170c15.339 0 28.221 10.685 31.617 25H139.383zM286 96h-22.5V75.5a7.5 7.5 0 00-15 0V96H226a7.5 7.5 0 000 15h22.5v58.5a7.5 7.5 0 0015 0V111H286a7.5 7.5 0 000-15z"
			fill="currentColor"
		/>
		<path
			d="M256 0c-67.547 0-122.5 54.953-122.5 122.5 0 17.428 3.59 34.274 10.672 50.068a7.499 7.499 0 009.912 3.776 7.5 7.5 0 003.775-9.912c-6.21-13.852-9.359-28.632-9.359-43.932C148.5 63.224 196.724 15 256 15s107.5 48.224 107.5 107.5c0 15.299-3.149 30.08-9.359 43.932a7.501 7.501 0 0013.687 6.136c7.082-15.794 10.672-32.64 10.672-50.068C378.5 54.953 323.547 0 256 0zM266.799 360.183h-21.598a7.5 7.5 0 000 15h21.598a7.5 7.5 0 000-15z"
			fill="currentColor"
		/>
		<circle cx="351" cy="229.5" r="7.5" fill="currentColor" />
		<circle cx="321" cy="259.5" r="7.5" fill="currentColor" />
	</svg>
);

export const CupIcon = (props: any) => <Box as={CupSvg} {...props} />;

const BibleSvg = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
		<path
			d="M20 22h7v15a1 1 0 001 1h8a1 1 0 001-1V25a1 1 0 00-2 0v9.586l-2-2V18h6.586l2 2H36a1 1 0 000 2h8a1 1 0 001-1v-8a1 1 0 00-1-1h-7V7a1 1 0 00-1-1h-8a1 1 0 00-1 1v6a1 1 0 002 0V9.414l2 2V16h-6.586l-2-2H24a1 1 0 000-2h-4a1 1 0 00-1 1v8a1 1 0 001 1zm12 12.414L33.586 36h-3.171zM41.414 17L43 15.414v3.172zM32 9.586L30.415 8h3.171zm1 1.829l2-2V13a1 1 0 001 1h5.586l-2 2H33zm-2 21.172l-2 2V21a1 1 0 00-1-1h-5.586l2-2H31zm-10-14v-3.173L22.586 17zM44.293 31.293l-5 5a1 1 0 101.414 1.414l5-5a1 1 0 00-1.414-1.414zM22.241 37.651a1 1 0 001.518-1.3l-6-7a1 1 0 00-1.518 1.3z"
			fill="currentColor"
		/>
		<path
			d="M22.553 28.105a1 1 0 00-.448 1.342l1 2a1 1 0 101.79-.894l-1-2a1 1 0 00-1.342-.448zM40 32a1 1 0 00.9-.553l1-2a1 1 0 00-1.79-.894l-1 2A1 1 0 0040 32zM31 41v2a1 1 0 002 0v-2a1 1 0 00-2 0z"
			fill="currentColor"
		/>
		<path
			d="M61.17 56.015l-2.551-.44a8.975 8.975 0 00-6.346-5.737l-13.242-3.183a5.923 5.923 0 00-.588-.1 12.175 12.175 0 0110 .909l3.307 1.86a8.152 8.152 0 006.562.628 1 1 0 00-.632-1.9 6.148 6.148 0 01-4.95-.473l-3.306-1.86a14.235 14.235 0 00-7.971-1.807 14.163 14.163 0 0110.1.984 3.241 3.241 0 004.347-1.448 1 1 0 00-1.79-.9 1.237 1.237 0 01-1.658.553A16.218 16.218 0 0032 48.236a16.214 16.214 0 00-20.447-5.131 1.236 1.236 0 01-1.653-.553 1 1 0 00-1.79.9 3.242 3.242 0 004.337 1.448 14.159 14.159 0 0110.1-.983 14.234 14.234 0 00-7.974 1.806l-3.306 1.86a6.14 6.14 0 01-4.95.473 1 1 0 00-.632 1.9 8.147 8.147 0 006.562-.628l3.307-1.86a12.167 12.167 0 0110-.909c-.2.028-.4.06-.6.106l-13.233 3.18a9.065 9.065 0 00-3.868 2.045 1 1 0 001.332 1.492 7.061 7.061 0 013-1.593l13.219-3.177a4.506 4.506 0 015.211 2.618L2.83 56.015A1 1 0 002 57v4a1 1 0 001.146.989l23.041-3.41A2.447 2.447 0 0129 61a1 1 0 001 1h4a1 1 0 001-1 2.448 2.448 0 012.44-2.45 2.12 2.12 0 01.373.029l6.269.928a1 1 0 00.293-1.979l-6.242-.923a4.047 4.047 0 00-.693-.055A4.45 4.45 0 0033.113 60h-2.226a4.447 4.447 0 00-4.993-3.4L4 59.841v-2l27.992-4.826 22.186 3.823 5.822 1v2l-11.667-1.724a1 1 0 00-.293 1.979l12.814 1.9A.889.889 0 0061 62a1 1 0 001-1v-4a1 1 0 00-.83-.985zm-9.37-4.233a7 7 0 014.467 3.388l-1.506-.26-21.4-3.689a4.553 4.553 0 015.215-2.621z"
			fill="currentColor"
		/>
	</svg>
);

export const BibleIcon = (props: any) => <Box as={BibleSvg} {...props} />;

const ImageSvg = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" {...props}>
		<path
			d="M258 80h-20.694c-.224 0-.439.031-.653.066A4.014 4.014 0 00236 80h-39.512A138.08 138.08 0 00170 76.169V56c0-11.028-8.972-20-20-20s-20 8.972-20 20v20.038A138.13 138.13 0 0099.512 80H60c-.229 0-.451.031-.67.068a3.993 3.993 0 00-.67-.068H42a4 4 0 00-4 4c0 11.028 8.972 20 20 20h2.255c2.653 6.083 6.955 12.077 13.956 15.578A4.012 4.012 0 0076 120h30v34a4 4 0 001.781 3.328L118 164.141V260a4 4 0 004 4h52a4 4 0 004-4v-21.907c5.691 3.201 9.599 5.178 10.206 5.483a3.999 3.999 0 005.794-3.575v-44a4 4 0 00-4-4h-3.342a32.31 32.31 0 01-8.658-1.185v-26.674l10.219-6.812a4 4 0 001.781-3.328v-34h30c.621 0 1.233-.145 1.789-.422 7.001-3.501 11.303-9.495 13.956-15.578H242c11.028 0 20-8.972 20-20A4 4 0 00258 80zM150 44c6.617 0 12 5.383 12 12v20h-24V56c0-6.617 5.383-12 12-12zM46.686 88h9.551c.209 2.115.602 4.9 1.349 7.983-5.035-.172-9.294-3.451-10.9-7.983zM114 151.859V116a4 4 0 00-4-4H76.994c-9.309-5.248-11.95-17.6-12.699-24h35.428c3.019 3.343 9.016 9.077 18.277 14.108v52.418zM170 256h-44v-57.248c10.928 13.4 29.864 26.217 44 34.694zm16-22.64c-5.77-3.144-15.139-8.484-24.811-14.989-19.807-13.32-31.953-25.404-35.189-34.997v-77.497a80.684 80.684 0 007.981 2.735c-.021.718-.057 1.931-.109 3.457-.721 21.093 3.97 41.894 13.565 60.151 1.55 2.95 3.133 5.745 4.704 8.309 7.356 12.003 19.977 19.244 33.858 19.467v33.364zm-27.038-57.011a137.484 137.484 0 01-4.442-7.851c-8.951-17.03-13.326-36.449-12.651-56.156l.061-1.869c5.174.954 10.815 1.522 16.961 1.522 2.299 0 4.67-.079 7.109-.244V172a4 4 0 004 4v11.356c-4.407-2.666-8.209-6.391-11.038-11.007zM219.006 112H186a4 4 0 00-4 4v35.859l-8 5.333V96a4 4 0 00-8 0v7.724c-10.498.705-37.773.517-56.948-17.588A130.142 130.142 0 01132.492 84h31.016c10.615 0 21.221 1.306 31.522 3.881.318.079.643.119.97.119h35.704c-.749 6.403-3.392 18.753-12.698 24zM242 96h-3.589a58.584 58.584 0 001.353-8h13.551c-1.651 4.656-6.1 8-11.315 8z"
			fill="currentColor"
		/>
	</svg>
);

export const ImageIcon = (props: any) => <Box as={ImageSvg} {...props} />;

const ChurchSvg = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
		<path
			d="M256 215.773c-25.265 0-45.819 20.555-45.819 45.82s20.554 45.818 45.819 45.818c25.265 0 45.819-20.554 45.819-45.819 0-25.265-20.554-45.819-45.819-45.819zm0 71.56c-14.193 0-25.741-11.547-25.741-25.741 0-14.194 11.547-25.742 25.741-25.742 14.193 0 25.741 11.547 25.741 25.742 0 14.194-11.548 25.741-25.741 25.741z"
			fill="currentColor"
		/>
		<path
			d="M488.323 361.404L350.63 297.027v-96.926a10.04 10.04 0 00-2.745-6.898l-81.846-86.537V51.381h14.185c5.544 0 10.039-4.496 10.039-10.039s-4.496-10.039-10.039-10.039h-14.185V10.039C266.039 4.496 261.544 0 256 0c-5.545 0-10.039 4.496-10.039 10.039v21.263h-14.185c-5.545 0-10.039 4.496-10.039 10.039s4.495 10.039 10.039 10.039h14.185v55.287l-81.845 86.536a10.037 10.037 0 00-2.746 6.898v96.926L23.677 361.403c-5.023 2.348-7.191 8.323-4.843 13.346 2.349 5.024 8.323 7.19 13.346 4.842l19.25-9v131.37c0 5.544 4.495 10.039 10.039 10.039H450.53c5.544 0 10.039-4.496 10.039-10.039V370.592l19.25 9c5.026 2.349 10.999.18 13.346-4.842 2.349-5.023.181-10.998-4.842-13.346zM161.371 491.922h-35.078v-63.528c0-5.544-4.495-10.039-10.039-10.039-5.545 0-10.039 4.496-10.039 10.039v63.528H71.509V361.204l89.862-42.013v172.731zm120.37 0H230.27v-86.096c0-14.194 11.543-25.742 25.731-25.742 6.882 0 13.343 2.676 18.2 7.541 4.863 4.862 7.54 11.325 7.54 18.2v86.097zm48.81-188.506v188.505h-28.732v-86.096c0-12.237-4.767-23.743-13.415-32.393-8.646-8.658-20.153-13.426-32.404-13.426-25.26 0-45.809 20.555-45.809 45.82v86.095h-28.742V204.097h.001L256 125.272l74.551 78.825v99.319zm109.94 188.506h-34.705v-42.496c0-5.544-4.496-10.039-10.039-10.039-5.544 0-10.039 4.496-10.039 10.039v42.496h-35.077v-172.73l89.86 42.013v130.717z"
			fill="currentColor"
		/>
		<path
			d="M395.749 412.612c-12.919 0-12.941 20.078 0 20.078 12.919 0 12.94-20.078 0-20.078z"
			fill="currentColor"
		/>
	</svg>
);

export const ChurchIcon = (props: any) => <Box as={ChurchSvg} {...props} />;

const LocationSvg = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480.1 480.1" {...props}>
		<path
			d="M240.135.05C144.085.036 57.277 57.289 19.472 145.586l-2.992.992 1.16 3.48c-49.776 122.766 9.393 262.639 132.159 312.415a239.87 239.87 0 0090.265 17.577c132.548.02 240.016-107.416 240.036-239.964S372.684.069 240.135.05zm188.253 361.004l-12.324-12.316V320.05a7.99 7.99 0 00-.8-3.576l-31.2-62.312V224.05a8 8 0 00-3.56-6.656l-24-16a8.002 8.002 0 00-6.4-1.104l-29.392 7.344-49.368-21.184-6.792-47.584 18.824-18.816h40.408l13.6 20.44a8 8 0 005.344 3.448l48 8a7.933 7.933 0 003.84-.304l44.208-14.736c37.079 71.155 33.113 156.736-10.388 224.156zM395.392 78.882l-13.008 8.672-36.264-7.256-23.528-7.832a7.856 7.856 0 00-4.464-.176l-29.744 7.432-13.04-4.344 9.664-19.328h27.056a7.997 7.997 0 003.576-.84l27.68-13.84a224.823 224.823 0 0152.072 37.512zM152.44 33.914l19.2 12.8a7.99 7.99 0 003.128 1.232l38.768 6.464-3.784 11.32-20.2 6.744a8 8 0 00-4.328 3.464l-22.976 38.288-36.904 22.144-54.4 7.768a8 8 0 00-6.88 7.912v24a8 8 0 002.344 5.656l13.656 13.656v13.744l-33.28-22.192-12.072-36.216A225.289 225.289 0 01152.44 33.914zM129.664 296.21l-36.16-7.24-13.44-26.808v-18.8l29.808-29.808 11.032 22.072a8.001 8.001 0 007.16 4.424h51.472l21.672 36.12a8 8 0 006.856 3.88h22.24l-5.6 28.056-30.288 30.288a8.003 8.003 0 00-2.352 5.656v20l-28.8 21.6a8.002 8.002 0 00-3.2 6.4v28.896l-9.952-3.296-14.048-35.136V304.05a8 8 0 00-6.4-7.84zm-24.048 122.981C30.187 362.602-1.712 264.826 25.832 174.642l6.648 19.936a7.995 7.995 0 003.144 4.128l39.88 26.584-9.096 9.104a8 8 0 00-2.344 5.656v24a7.997 7.997 0 00.84 3.576l16 32a8.003 8.003 0 005.6 4.264l33.6 6.712v73.448a8.003 8.003 0 00.568 2.968l16 40a8.001 8.001 0 004.904 4.616l24 8a7.86 7.86 0 002.488.416 8 8 0 008-8v-36l28.8-21.6a8.002 8.002 0 003.2-6.4v-20.688l29.656-29.656a8.006 8.006 0 002.184-4.088l8-40a8 8 0 00-7.84-9.568h-27.472l-21.672-36.12a8 8 0 00-6.856-3.88h-51.056l-13.744-27.576a7.999 7.999 0 00-5.88-4.32 7.84 7.84 0 00-6.936 2.24l-10.384 10.344V192.05a8 8 0 00-2.344-5.656l-13.656-13.656v-13.752l49.136-7.016a8.037 8.037 0 002.984-1.064l40-24a7.996 7.996 0 002.736-2.736l22.48-37.464 21.192-7.072a7.918 7.918 0 005.056-5.056l8-24a8 8 0 00-6.272-10.4l-46.304-7.72-8.136-5.424a223.384 223.384 0 01153.856 5.72l-14.616 7.296h-30.112a8 8 0 00-7.2 4.424l-16 32a8 8 0 004.632 11.16l24 8c1.44.489 2.99.551 4.464.176l29.744-7.432 21.792 7.256c.312.112.633.198.96.256l40 8a7.943 7.943 0 006.008-1.184l18.208-12.144a225.69 225.69 0 0124.064 32.152l-39.36 13.12-42.616-7.104-14.08-21.12a8 8 0 00-6.616-3.56h-48a8 8 0 00-5.656 2.344l-24 24a8 8 0 00-2.264 6.792l8 56a8 8 0 004.8 6.216l56 24a7.907 7.907 0 005.088.408l28.568-7.144 17.464 11.664v27.72a7.99 7.99 0 00.8 3.576l31.2 62.312v30.112a8 8 0 002.344 5.656l16.736 16.744c-74.223 98.933-214.595 118.965-313.528 44.741z"
			fill="currentColor"
		/>
	</svg>
);

export const LocationIcon = (props: any) => <Box as={LocationSvg} {...props} />;

const InceptionSvg = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
		<path d="M391.404 69.116a7.5 7.5 0 00-12.143 8.807c18.908 26.069 28.902 56.929 28.902 89.241 0 31.007-9.17 61.45-26.519 88.04-25.651 39.314-42.762 68.221-46.723 110.146-.471 4.986-3.909 8.968-8.466 10.251a7.336 7.336 0 00-.892.214c-.74.146-1.504.223-2.287.223H188.722c-.782 0-1.547-.077-2.287-.223a7.527 7.527 0 00-.892-.214c-4.556-1.283-7.995-5.265-8.466-10.251-3.961-41.924-21.071-70.831-46.723-110.146-17.349-26.589-26.519-57.033-26.519-88.04C103.836 83.26 172.097 15 256 15c38.721 0 75.614 14.554 103.886 40.979a7.501 7.501 0 0010.243-10.958C339.069 15.989 298.538 0 256 0 163.825 0 88.836 74.989 88.836 167.164c0 33.925 10.013 67.203 28.956 96.236 24.43 37.442 40.715 64.865 44.352 103.361.901 9.537 6.607 17.458 14.598 21.461v70.392c0 9.321 5.876 17.295 14.118 20.413.734 18.307 15.855 32.973 34.338 32.973h61.604c18.483 0 33.604-14.666 34.339-32.972 8.242-3.118 14.118-11.092 14.118-20.413v-70.392c7.991-4.004 13.697-11.924 14.598-21.461 3.637-38.497 19.922-65.919 44.352-103.361 18.943-29.033 28.956-62.311 28.956-96.236-.001-35.498-10.983-69.402-31.761-98.049zM238.736 420.174h81.522v13.686H191.741v-13.686h16.997c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-16.997v-14.136h128.518v14.136h-81.522c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.499 7.5zm75.068 45.246l-.135-.002h-.096a6.54 6.54 0 00-.314.011H198.742a6.295 6.295 0 00-.554-.01c-3.587-.192-6.448-3.171-6.448-6.805v-9.755h128.518v9.755c.001 3.637-2.863 6.618-6.454 6.806zM286.802 497h-61.604c-9.729 0-17.806-7.212-19.166-16.57h99.935c-1.359 9.358-9.436 16.57-19.165 16.57z" />
		<path d="M338.34 210.314c.263-.922 1.146-1.566 2.146-1.566h6.074c9.515 0 17.255-7.741 17.255-17.255v-11.117c0-9.514-7.74-17.255-17.255-17.255h-6.496c-.983 0-1.861-.628-2.134-1.527a86.012 86.012 0 00-6.821-16.268c-.466-.852-.301-1.937.399-2.638l4.659-4.658a17.142 17.142 0 005.054-12.201c0-4.609-1.795-8.942-5.054-12.201l-7.861-7.861a17.145 17.145 0 00-12.201-5.054 17.146 17.146 0 00-12.202 5.054l-4.657 4.658c-.7.701-1.784.867-2.637.401a86.1 86.1 0 00-16.268-6.823c-.9-.272-1.528-1.15-1.528-2.133v-6.496c0-9.515-7.74-17.255-17.255-17.255h-11.117c-9.515 0-17.255 7.741-17.255 17.255v6.074c0 1.001-.645 1.884-1.566 2.146a85.997 85.997 0 00-16.781 6.753c-.832.442-1.896.266-2.589-.427l-4.153-4.154a17.146 17.146 0 00-12.202-5.054 17.145 17.145 0 00-12.201 5.054l-7.861 7.861a17.142 17.142 0 00-5.054 12.201c0 4.609 1.795 8.942 5.055 12.202l3.729 3.729c.711.71.875 1.796.398 2.643a86.088 86.088 0 00-7.332 17.178c-.274.907-1.174 1.541-2.187 1.541h-5.002c-9.515 0-17.255 7.741-17.255 17.255v11.117c0 9.514 7.74 17.255 17.255 17.255h4.612c1.012 0 1.898.636 2.157 1.547a86.025 86.025 0 007.262 17.737c.452.825.276 1.893-.427 2.595l-3.212 3.212a17.142 17.142 0 00-5.054 12.201c0 4.609 1.795 8.942 5.055 12.201l7.86 7.86a17.14 17.14 0 0012.201 5.055 17.14 17.14 0 0012.201-5.054l3.213-3.212c.701-.703 1.77-.877 2.594-.426a85.99 85.99 0 0017.738 7.262c.91.258 1.546 1.146 1.546 2.157v4.612c0 9.515 7.74 17.255 17.255 17.255h11.117c9.515 0 17.255-7.741 17.255-17.255v-5.001c0-1.013.634-1.912 1.541-2.188a85.992 85.992 0 0017.178-7.333c.847-.474 1.933-.31 2.643.4l3.729 3.729a17.146 17.146 0 0012.202 5.054c4.608 0 8.941-1.795 12.2-5.054l7.862-7.861a17.142 17.142 0 005.054-12.201c0-4.609-1.795-8.942-5.054-12.201l-4.154-4.155c-.692-.693-.868-1.758-.427-2.59a85.95 85.95 0 006.753-16.78zm-14.428-4.102a70.95 70.95 0 01-5.573 13.849c-3.561 6.706-2.326 14.835 3.068 20.229l4.153 4.154c.88.879.88 2.31.001 3.188l-7.862 7.861a2.258 2.258 0 01-3.188 0l-3.729-3.729c-5.447-5.446-13.919-6.627-20.602-2.868a71.044 71.044 0 01-14.178 6.053c-7.177 2.176-12.189 8.978-12.189 16.542v5.001a2.257 2.257 0 01-2.255 2.255h-11.117a2.258 2.258 0 01-2.255-2.255v-4.612c0-7.685-5.119-14.506-12.449-16.587a71 71 0 01-14.639-5.993 16.965 16.965 0 00-8.15-2.07c-4.481 0-8.935 1.738-12.246 5.05l-3.213 3.212a2.212 2.212 0 01-1.595.66 2.212 2.212 0 01-1.595-.661l-7.86-7.861a2.256 2.256 0 010-3.189l3.211-3.211c5.381-5.38 6.607-13.768 2.981-20.398a71.02 71.02 0 01-5.993-14.639c-2.082-7.33-8.902-12.449-16.587-12.449h-4.612a2.258 2.258 0 01-2.255-2.255v-11.117a2.258 2.258 0 012.255-2.255h5.002c7.563 0 14.366-5.012 16.542-12.189a70.998 70.998 0 016.052-14.178c3.759-6.683 2.58-15.155-2.867-20.602l-3.729-3.729a2.256 2.256 0 010-3.189l7.861-7.861a2.258 2.258 0 013.188 0l4.154 4.154c5.396 5.395 13.523 6.63 20.23 3.068a71.016 71.016 0 0113.848-5.573c7.339-2.086 12.465-8.902 12.465-16.575v-6.074a2.257 2.257 0 012.255-2.255h11.117a2.258 2.258 0 012.255 2.255v6.496c0 7.656 4.895 14.282 12.179 16.489a71.085 71.085 0 0113.428 5.631c6.654 3.635 15.058 2.417 20.434-2.959l4.657-4.658a2.258 2.258 0 013.188 0l7.861 7.861c.88.879.88 2.31.001 3.188l-4.659 4.659c-5.375 5.376-6.592 13.778-2.958 20.433a71.042 71.042 0 015.631 13.428c2.208 7.284 8.834 12.178 16.489 12.178h6.496a2.258 2.258 0 012.255 2.255v11.117a2.258 2.258 0 01-2.255 2.255h-6.074c-7.672.006-14.487 5.131-16.573 12.47z" />
		<path d="M256 131.229c-30.164 0-54.704 24.541-54.704 54.705s24.54 54.705 54.704 54.705 54.704-24.541 54.704-54.705-24.54-54.705-54.704-54.705zm0 94.41c-21.893 0-39.704-17.812-39.704-39.705s17.812-39.705 39.704-39.705 39.704 17.812 39.704 39.705-17.811 39.705-39.704 39.705z" />
	</svg>
);

export const InceptionIcon = (props: any) => (
	<Box as={InceptionSvg} {...props} />
);

const OutreachSvg = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="512"
		viewBox="0 0 64 64"
		{...props}
	>
		<path
			d="M21 2a1 1 0 00-1-1h-4a1 1 0 00-1 1v1.475A14.08 14.08 0 017 6H3c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h.279l1.772 5.316A1 1 0 006 20h4a1 1 0 00.949-1.316l-1.485-4.455A14.096 14.096 0 0115 16.525V18a1 1 0 001 1h4a1 1 0 001-1zM3 8h4c.67 0 1.337-.056 2-.141v4.281c-.663-.084-1.33-.14-2-.14H3zm5.613 10H6.721l-1.333-4H7c.095 0 .189.01.283.012zM11 12.52V7.48a16.15 16.15 0 004-1.641v8.322a16.15 16.15 0 00-4-1.641zM19 17h-2V3h2zM39.293 40.293l-2 2A.996.996 0 0037 43v2a1 1 0 001 1h3.586l1.707 1.707A.997.997 0 0044 48h3c.265 0 .52-.105.707-.293l3-3A.996.996 0 0051 44v-3a.996.996 0 00-.293-.707l-2-2A.997.997 0 0048 38h-3a.997.997 0 00-.707.293L42.586 40H40a.997.997 0 00-.707.293zM43 42c.265 0 .52-.105.707-.293L45.414 40h2.172L49 41.414v2.172L46.586 46h-2.172l-1.707-1.707A.997.997 0 0042 44h-3v-.586L40.414 42z"
			fill="currentColor"
		/>
		<path
			d="M42 21c-11.58 0-21 9.421-21 21s9.42 21 21 21 21-9.421 21-21-9.42-21-21-21zm19 21c0 1.023-.104 2.02-.261 3H60a.997.997 0 00-.707.293L57.586 47H55a.997.997 0 00-.707.293l-3 3A.996.996 0 0051 51v3h-2a.997.997 0 00-.707.293L46.586 56H44a.997.997 0 00-.707.293l-2 2A.996.996 0 0041 59v1.949a18.84 18.84 0 01-7-1.74v-3.795l2.707-2.707A.996.996 0 0037 52v-3a.996.996 0 00-.293-.707l-3-3A.997.997 0 0033 45h-2.586l-2.707-2.707A.997.997 0 0027 42h-4c0-1.121.117-2.214.304-3.282l.989.989A.997.997 0 0025 40h4c.265 0 .52-.105.707-.293L32.414 37H36c.265 0 .52-.105.707-.293l3-3A.996.996 0 0040 33v-3a.996.996 0 00-.293-.707L37 26.586V23.69a18.886 18.886 0 015-.69c10.477 0 19 8.523 19 19zM35 24.353V27c0 .266.105.52.293.707L38 30.414v2.172L35.586 35H32a.997.997 0 00-.707.293L28.586 38h-3.172l-1.576-1.576C25.535 30.91 29.682 26.47 35 24.353zM23.107 44h3.478l2.707 2.707c.188.188.443.293.708.293h2.586L35 49.414v2.172l-2.707 2.707A.996.996 0 0032 55v3.125c-4.857-3.023-8.265-8.159-8.893-14.125zM43 60.949v-1.535L44.414 58H47c.265 0 .52-.105.707-.293L49.414 56H52a1 1 0 001-1v-3.586L55.414 49H58c.265 0 .52-.105.707-.293l1.567-1.567C58.112 54.814 51.25 60.517 43 60.949zM18 46h1v2h-1zM10.8 46h1.8v2h-1.8zM14.4 46h1.8v2h-1.8zM7 47a1 1 0 001 1h1v-2H7zM7 41.818h2v2.091H7zM7 37.637h2v2.091H7zM7 25.091h2v2.091H7zM7 29.272h2v2.091H7zM7 33.455h2v2.091H7zM7 22h2v1H7zM23 8h1v2h-1zM37.364 8h1.909v2h-1.909zM41.182 8h1.909v2h-1.909zM25.909 8h1.909v2h-1.909zM33.545 8h1.909v2h-1.909zM29.728 8h1.909v2h-1.909zM47 9a1 1 0 00-1-1h-1v2h2zM45 11.6h2v1.6h-2zM45 14.8h2v1.6h-2zM45 18h2v1h-2z"
			fill="currentColor"
		/>
	</svg>
);

export const OutreachIcon = (props: any) => <Box as={OutreachSvg} {...props} />;

const StandSvg = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
		<path
			d="M256 50c5.522 0 10-4.477 10-10V10c0-5.523-4.478-10-10-10s-10 4.477-10 10v30c0 5.523 4.478 10 10 10zM466 266h36c5.522 0 10-4.477 10-10s-4.478-10-10-10h-36c-5.522 0-10 4.477-10 10s4.478 10 10 10zM10 266h36c5.522 0 10-4.477 10-10s-4.478-10-10-10H10c-5.522 0-10 4.477-10 10s4.478 10 10 10zM411.562 108.581l21.22-21.22c3.905-3.905 3.905-10.237 0-14.143-3.906-3.905-10.236-3.905-14.143 0l-21.22 21.22c-3.905 3.905-3.905 10.237 0 14.143 3.906 3.905 10.236 3.905 14.143 0zM100.438 108.581c3.906 3.905 10.236 3.905 14.143 0 3.905-3.905 3.905-10.237 0-14.143l-21.22-21.22c-3.906-3.905-10.236-3.905-14.143 0-3.905 3.905-3.905 10.237 0 14.143z"
			fill="currentColor"
		/>
		<circle cx="256" cy="502" r="10" fill="currentColor" />
		<path
			d="M111 241v75c0 54.813 44.113 86.291 60 95.848V502c0 5.523 4.478 10 10 10h30c5.522 0 10-4.477 10-10s-4.478-10-10-10h-20v-86a10.03 10.03 0 00-5.51-8.935C184.945 396.79 131 368.927 131 316v-75c0-11.028 8.972-20 20-20.01h108.995C255.35 243.794 235.146 261 211 261h-30c-5.522 0-10 4.477-10 10s4.478 10 10 10c44.112 0 80 35.888 80 80 0 5.523 4.478 10 10 10s10-4.477 10-10c0-27.57 22.43-50 50-50 5.522 0 10-4.477 10-10s-4.478-10-10-10c-24.105 0-45.402 12.248-57.998 30.846-7.927-18.555-21.298-34.25-38.105-45.047 17.398-6.339 31.589-19.399 39.436-36.018 7.083 6.349 16.43 10.179 26.668 10.179 2.563 0 5.184.04 7.595.04 4.716 0 9.264-.112 13.451-.947C326.16 267.761 342.058 281 361 281a39.741 39.741 0 0020-5.381V316c0 52.927-53.945 80.79-54.472 81.056A10 10 0 00321 406v86h-20c-5.522 0-10 4.477-10 10s4.478 10 10 10h30c5.522 0 10-4.477 10-10v-90.152c15.887-9.557 60-41.035 60-95.848V190c0-22.056-17.944-40-40-40a39.737 39.737 0 00-20.256 5.529C338.513 135.57 321.544 120 301 120a39.737 39.737 0 00-20.256 5.529C278.513 105.57 261.544 90 241 90s-37.513 15.57-39.744 35.529A39.737 39.737 0 00181 120c-22.056 0-40 17.944-40 40v42.266c-17.233 4.452-30 20.13-30 38.734zm250-71c11.028 0 20 8.972 20 20v51c0 11.028-8.972 20-20 20s-20-8.972-20-20v-51c0-11.028 8.972-20 20-20zm-60-30c11.028 0 20 8.972 20 20v66c0 2.836-.571 3.632-.577 3.638-1.503 1.491-10.186 1.422-15.375 1.383A485.546 485.546 0 00301 231c-11.028 0-20-8.972-20-20v-51c0-11.028 8.972-20 20-20zm-80-10c0-11.028 8.972-20 20-20s20 8.972 20 20v71h-40zm-40 10c11.028 0 20 8.972 20 20v41h-40v-41c0-11.028 8.972-20 20-20z"
			fill="currentColor"
		/>
	</svg>
);

export const StandIcon = (props: any) => <Box as={StandSvg} {...props} />;

const ImpactSvg = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="-25 -20 649 649.335"
		{...props}
	>
		<path
			d="M119.832 158.996c-33.121 0-59.969-26.851-59.969-59.969 0-33.12 26.848-59.965 59.969-59.965 33.117 0 59.965 26.844 59.965 59.965-.031 33.102-26.863 59.934-59.965 59.97zm0-99.945c-22.082 0-39.98 17.894-39.98 39.976 0 22.078 17.898 39.98 39.98 39.98 22.078 0 39.977-17.902 39.977-39.98 0-22.082-17.899-39.976-39.977-39.976zm0 0M359.7 438.844v59.969H249.761V361.675l-59.969-19.992v-102.73h89.95c27.585-.036 49.94-22.391 49.976-49.974v-19.988H49.867C22.281 169.02-.07 191.375-.105 218.965v109.937c0 16.559 13.425 29.985 29.984 29.985h19.988v179.902H-.105v69.965h19.992v-49.977h139.922v49.977h19.988V518.8h179.902v89.953h19.992V458.832h199.891v149.922h19.988v-169.91zM49.866 228.957v109.941H29.88c-5.52 0-9.992-4.476-9.992-9.996V218.965c0-16.567 13.422-29.985 29.98-29.985h259.86c0 16.56-13.426 29.985-29.985 29.985H169.805v137.133l59.965 19.988v122.726h-29.98V391.938l-99.95-37.48v184.332H69.86V228.957zM159.81 498.813v39.976h-39.977V383.305l59.965 22.484v93.024zm0 0"
			fill="currentColor"
		/>
		<path
			d="M439.656 408.86h79.957V158.995h57.871L479.637 0l-97.848 158.996h57.867zM417.57 139.007l62.067-100.871 62.066 100.87h-42.078v249.864h-39.977V139.008zm0 0"
			fill="currentColor"
		/>
	</svg>
);

export const ImpactIcon = (props: any) => <Box as={ImpactSvg} {...props} />;

const SpeakerSvg = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		// viewBox="0 0 497 497.048"
		viewBox="0 0 512 512"
		{...props}
	>
		<path
			d="M359.016 375.574L256.023 346.97v-24.77l21.704 6.512 11.464.336c25.825 0 46.832-21.008 46.832-46.832 0-4.766 1.13-9.528 3.258-13.79l9.696-19.402c10.59-.496 19.046-9.27 19.046-19.976 0-4.293-1.414-8.55-4-12l-2.984-3.977c-10.976-14.629-17.016-32.758-17.016-51.054a48.67 48.67 0 00-6.062-23.59l2.648-2.649c17.68-17.68 27.414-41.183 27.414-66.191 0-20.121-6.648-40.074-18.718-56.172L339.215 0l-5.152 1.29c-41.817 10.452-85.192 15.757-128.926 15.757h-4.395c-70.972 0-128.719 57.746-128.719 128.723 0 21.824 5.602 43.437 16.551 63.085l27.93 41.512a161.142 161.142 0 0119.223 39.098 161.3 161.3 0 018.296 51.101v6.403L41.031 375.574C16.887 382.29.023 404.473.023 429.535v67.512h400v-67.512c0-25.062-16.863-47.246-41.007-53.96zm-109.61-13.84l5.793 1.61-11.847 47.398-29.985-24.98zm98.832-139.062l2.977 3.969c.527.703.808 1.535.808 2.406a4 4 0 01-4 4h-8.945l-14.101 28.219a46.955 46.955 0 00-4.954 20.949c0 17-13.832 30.832-30.832 30.832H281.2l-78.879-23.664-4.593 15.328 42.296 12.687v31.372l-40 26.664-40-26.664v-8.204c0-7.59-.625-15.132-1.582-22.62l2.95-2.954c19.754-19.754 30.632-46.015 30.632-73.945v-8h-16c-8.824 0-16-7.176-16-16s7.176-16 16-16h16v-18.383c0-12.129 4.168-24.023 11.747-33.496 10.238-12.785 25.496-20.121 41.87-20.121h49.415c8.808 0 17.09 3.433 23.312 9.656 6.227 6.227 9.656 14.512 9.656 23.313 0 21.738 7.176 43.273 20.215 60.656zM150.641 361.734l36.039 24.028-29.985 24.98-11.847-47.398zm-20.864-120.293l-27.57-40.937a112.964 112.964 0 01-14.184-54.734c0-62.153 50.57-112.723 112.72-112.723h4.394c43.36 0 86.383-5.063 127.664-14.977l3.703 4.946c10.008 13.351 15.52 29.886 15.52 46.57 0 20.727-8.07 40.215-22.727 54.879l-1.352 1.351c-9.035-8.222-20.601-12.77-32.89-12.77H245.64c-21.266 0-41.075 9.52-54.36 26.13-9.84 12.297-15.258 27.734-15.258 43.488v2.383c-17.648 0-32 14.351-32 32 0 17.527 14.168 31.808 31.649 32-1.625 18.266-8.824 35.36-20.734 49.336a177.46 177.46 0 00-4.028-13.977 177.349 177.349 0 00-21.133-42.965zm254.246 239.606h-368v-51.512c0-17.894 12.047-33.75 29.297-38.543l84.106-23.36 17.933 71.72 52.664-43.887 52.665 43.894 17.937-71.718L354.727 391c17.25 4.785 29.296 20.633 29.296 38.535zm0 0M463.215 169.855l-11.313 11.313c18.137 18.129 28.121 42.238 28.121 67.879s-9.984 49.754-28.12 67.883l11.312 11.308c21.16-21.148 32.808-49.27 32.808-79.191 0-29.918-11.648-58.04-32.808-79.192zm0 0"
			fill="currentColor"
		/>
		<path
			d="M440.594 192.48l-11.313 11.313c12.086 12.086 18.742 28.16 18.742 45.254 0 17.098-6.656 33.168-18.742 45.258l11.313 11.312c15.101-15.105 23.43-35.203 23.43-56.57s-8.329-41.461-23.43-56.567zm0 0"
			fill="currentColor"
		/>
		<path
			d="M417.969 215.105l-11.313 11.31c6.04 6.05 9.367 14.089 9.367 22.632 0 8.547-3.328 16.586-9.367 22.633l11.313 11.312c9.062-9.07 14.054-21.12 14.054-33.945s-4.992-24.871-14.054-33.942zm0 0"
			fill="currentColor"
		/>
	</svg>
);

export const SpeakerIcon = (props: any) => <Box as={SpeakerSvg} {...props} />;
