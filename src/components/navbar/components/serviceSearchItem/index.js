import { Flex, Text } from '@chakra-ui/react';
import serviceSerchIcon from '../../../../assets/images/serviceSerchIcon.png';
import servicePopleIcon from '../../../../assets/images/servicePopleIcon.png';
import React from 'react';

const ServiceSearchItem = () => {
  return (
    <Flex align="center" justifyContent="space-between" px={4} mb={2}>
      <Flex align="center">
        <img src={serviceSerchIcon} alt="serviceSerchIcon" />
        <Text fontSize="14" ml={2}>
          UI Design
        </Text>
      </Flex>
      <Flex align="center">
        <img src={servicePopleIcon} alt="servicePopleIcon" />
        <Text fontSize="12" ml={2}>
          435
        </Text>
      </Flex>
    </Flex>
  );
};

export default ServiceSearchItem;
