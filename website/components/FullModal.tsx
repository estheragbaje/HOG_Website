import {
	useDisclosure,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Box,
} from "@chakra-ui/core";
import React from "react";

interface FullModalProps {
	isOpen: boolean;
	onClose: () => void;
	children?: any;
}

export const FullModal = (props: FullModalProps) => {
	// const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Modal isOpen={props.isOpen} onClose={props.onClose}>
				<ModalOverlay />
				<ModalContent>
					{/* <ModalHeader>Modal Title</ModalHeader> */}
					{/* <ModalCloseButton /> */}

					<Box
						padding="5px"
						// background="green"
						width="100%"
						height="100%"
						display="flex"
						flexDirection="row"
					>
						{props.children}
					</Box>

					{/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
				</ModalContent>
			</Modal>
		</>
	);
};
