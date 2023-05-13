import { Flex, Text } from '@chakra-ui/react';
import serviceSerchIcon from '../../../../assets/images/serviceSerchIcon.png';
import servicePopleIcon from '../../../../assets/images/servicePopleIcon.png';
import React from 'react';

const ServiceSearchItem = ({ item }) => {
  return (
    <Flex align="center" justifyContent="space-between" px={4} mb={2}>
      <Flex align="center">
        <i className="fal fa-search"></i>
        <Text fontSize="14" ml={2}>
          {item?.service}
        </Text>
      </Flex>
      <Flex align="center">
        <i className="fal fa-users"></i>
        <Text fontSize="12" ml={2}>
          {item?.talents?.length}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ServiceSearchItem;
