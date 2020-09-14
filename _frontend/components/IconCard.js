import React from 'react';
import { Icon, Heading, Box, Text } from '@chakra-ui/core';
import SubHeading from './SubHeading';

const CupSvg = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' {...props}>
    <path
      d='M391 497h-3.098c-3.607-22.64-23.263-40-46.902-40h-18.954c-16.125-10.419-26.346-27.239-28.228-46.138 11.366-3.377 19.682-13.914 19.682-26.362a27.4 27.4 0 00-3.744-13.863c47.53-21.079 78.744-68.428 78.744-121.137V207h2.5a7.5 7.5 0 000-15H121a7.5 7.5 0 000 15h2.5v42.5c0 52.709 31.214 100.058 78.744 121.137A27.4 27.4 0 00198.5 384.5c0 12.448 8.316 22.985 19.682 26.362-1.881 18.899-12.103 35.72-28.228 46.138H171c-23.639 0-43.295 17.36-46.902 40H121a7.5 7.5 0 000 15h270a7.5 7.5 0 000-15zM213.5 384.5c0-4.26 2.153-8.189 5.76-10.51a7.501 7.501 0 00-1.611-13.397C170.307 344.253 138.5 299.608 138.5 249.5V207h235v42.5c0 50.108-31.807 94.753-79.148 111.094a7.499 7.499 0 00-1.611 13.397c3.606 2.321 5.76 6.25 5.76 10.51 0 6.893-5.607 12.5-12.5 12.5h-60C219.107 397 213.5 391.393 213.5 384.5zm19.645 27.5h45.71c1.61 17.026 8.681 32.707 20.047 45h-85.805c11.367-12.293 18.438-27.974 20.048-45zm-93.762 85c3.396-14.315 16.278-25 31.617-25h170c15.339 0 28.221 10.685 31.617 25H139.383zM286 96h-22.5V75.5a7.5 7.5 0 00-15 0V96H226a7.5 7.5 0 000 15h22.5v58.5a7.5 7.5 0 0015 0V111H286a7.5 7.5 0 000-15z'
      fill='currentColor'
    />
    <path
      d='M256 0c-67.547 0-122.5 54.953-122.5 122.5 0 17.428 3.59 34.274 10.672 50.068a7.499 7.499 0 009.912 3.776 7.5 7.5 0 003.775-9.912c-6.21-13.852-9.359-28.632-9.359-43.932C148.5 63.224 196.724 15 256 15s107.5 48.224 107.5 107.5c0 15.299-3.149 30.08-9.359 43.932a7.501 7.501 0 0013.687 6.136c7.082-15.794 10.672-32.64 10.672-50.068C378.5 54.953 323.547 0 256 0zM266.799 360.183h-21.598a7.5 7.5 0 000 15h21.598a7.5 7.5 0 000-15z'
      fill='currentColor'
    />
    <circle cx='351' cy='229.5' r='7.5' fill='currentColor' />
    <circle cx='321' cy='259.5' r='7.5' fill='currentColor' />
  </svg>
);

export const CupIcon = (props) => <Box as={CupSvg} {...props} />;

// <IconCard icon={<CupIcon/>}/>

function IconCard({
  icon,
  heading,
  subheading,
  content,
  borderColor = 'green.600',
  ...rest
}) {
  return (
    <Box
      backgroundColor='#fff'
      borderBottom='solid 6px'
      flexShrink='0'
      // width="600px"
      textAlign='center'
      padding='30px'
      margin='0 auto'
      borderColor={borderColor}
      {...rest}
    >
      {icon}
      <Heading
        fontSize='21px'
        paddingTop='30px'
        fontWeight='600'
        textTransform='uppercase'
      >
        {heading}
      </Heading>
      <SubHeading color='#3AC7B1' marginBottom='0' marginTop='10px'>
        {subheading}
      </SubHeading>
      <Text marginTop='16px'>{content}</Text>
    </Box>
  );
}

export default IconCard;
