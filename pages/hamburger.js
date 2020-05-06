import React from 'react';
import {
  Box,
  Text,
  Radio,
  RadioButtonGroup,
  RadioGroup,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  useDisclosure,
  Divider,
  Image,
  Icon,
} from '@chakra-ui/core';
import { AiOutlineMenu } from 'react-icons/ai';
import MainHeading from '../components/MainHeading';

function MobileNav({ icon }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState('right');
  const handlePlacementChange = (event) => setPlacement(event.target.value);

  return (
    <>
      <Button variantColor="blue" onClick={onOpen}>
        <Box size="30px" as={icon}>
          <Icon icon={AiOutlineMenu} />
        </Box>
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Image src="/assets/logo.png" alt="logo" margin="auto" />
          </DrawerHeader>
          <DrawerBody>
            <MainHeading
              py={4}
              borderBottomWidth="1px"
              textAlign="center"
              fontWeight="500"
            >
              HOME
            </MainHeading>
            <MainHeading
              py={4}
              borderBottomWidth="1px"
              textAlign="center"
              fontWeight="500"
            >
              ABOUT
            </MainHeading>
            <MainHeading
              py={4}
              borderBottomWidth="1px"
              textAlign="center"
              fontWeight="500"
            >
              SERMONS
            </MainHeading>
            <MainHeading
              py={4}
              borderBottomWidth="1px"
              textAlign="center"
              fontWeight="500"
            >
              WEEKLY SERVICES
            </MainHeading>
            <MainHeading
              py={4}
              borderBottomWidth="1px"
              textAlign="center"
              fontWeight="500"
            >
              GIVE
            </MainHeading>
            <MainHeading
              py={4}
              borderBottomWidth="1px"
              textAlign="center"
              fontWeight="500"
            >
              CONTACT
            </MainHeading>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileNav;
