import { Box, Button, Input, Stack, Textarea } from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import {
  ContactUsFormData,
  GetApiProvider
} from "../services/providers/api-provider";

const initialValues = {
	name: "",
	email: "",
	message: "",
};

const validationSchema = yup.object().shape({
	name: yup.string().required("Please enter your name"),
	email: yup.string().email().required("Please enter your email"),
	message: yup
		.string()
		.required("Please enter a message")
		.min(2, "Message must be at least 2 characters"),
});

interface ContactFormProps {
	onFormSumbissionSuccessful: () => void;
	onFormSubmissionFailed: () => void;
	[propname: string]: any;
}
export const ContactForm = ({
	onFormSumbissionSuccessful,
	onFormSubmissionFailed,
	...rest
}: ContactFormProps) => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (data) => {
		setIsSubmitting(true);
		try {
			const provider = GetApiProvider();
			const request: ContactUsFormData = {
				name: data.name,
				email: data.email,
				message: data.message,
			};
			const response = await provider
				.contactUs()
				.sendContactInformation(request);

			// Show Modal Telling User that information was sent.
			setIsSubmitting(false);
			onFormSumbissionSuccessful();
		} catch {
			// Show User that we couldn't send information at this time.
			setIsSubmitting(false);
			onFormSubmissionFailed();
		}
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: handleSubmit,
	});

	const nameProps = formik.getFieldProps("name");
	const emailProps = formik.getFieldProps("email");
	const messageProps = formik.getFieldProps("message");

	return (
		<form onSubmit={formik.handleSubmit}>
			<Box {...rest}>
				<Box minWidth="45%" margin="auto">
					<Stack spacing={3}>
						{/* // @ts-ignore */}
						<Input
							placeholder="Name"
							// @ts-ignore
							label="Name"
							type="text"
							size="lg"
							focusBorderColor="#3AC7B1"
							paddingY={5}
							error={formik.errors.name}
							errorBorderColor="crimson"
							{...nameProps}
						/>

						<Input
							placeholder="Email"
							size="lg"
							aria-label="Email"
							// @ts-ignore
							label="Email"
							type="email"
							focusBorderColor="#3AC7B1"
							paddingY={5}
							errorBorderColor="crimson"
							error={formik.errors.email}
							{...emailProps}
						/>

						<Textarea
							placeholder="Message"
							size="lg"
							// @ts-ignore
							label="Message"
							type="text"
							minHeight="10em"
							focusBorderColor="#3AC7B1"
							errorBorderColor="crimson"
							error={formik.errors.message}
							{...messageProps}
						/>
					</Stack>

					<Button
						isLoading={isSubmitting}
						type="submit"
						height={["44px", "44px", "55px"]}
						px={["20px", "20px", "30px"]}
						bg="#3AC7B1"
						_hover={{ bg: "#1FBDA5" }}
						// @ts-ignore
						_focus="teal.800"
						fontSize={["16px", "16px", "21px"]}
						fontWeight="400"
						color="white"
						disabled={!(formik.isValid && formik.dirty)}
						children="SEND"
						my={10}
					/>
				</Box>
			</Box>
		</form>
	);
};
