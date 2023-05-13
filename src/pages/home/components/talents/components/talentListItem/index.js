import {
  Box,
  Flex,
  Text,
  Button,
  Avatar,
  useColorMode,
} from '@chakra-ui/react';
import { FiMessageSquare } from 'react-icons/fi';
import topRatedStarIcon from '../../../../../../assets/images/topRatedStarIcon.png';
import topRatedTickIcon from '../../../../../../assets/images/topRatedTickIcon.png';

const TalentListItem = ({ talent, setSelectedTalent }) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      p={2}
      variant="outline"
      borderWidth="1px"
      colorScheme="gray"
      borderRadius="20px"
      width="100%"
      my={2}
      textAlign="left"
    >
      <Flex justifyContent="space-between">
        <Box maxW="33%">
          <Flex position="relative">
            <Avatar
              src={talent?.profileImage}
              size="md"
              borderWidth="2px"
              borderColor={colorMode === 'dark' ? '#000' : 'white'}
            />
            <img
              src={topRatedStarIcon}
              alt="topRatedStarIcon"
              style={
                talent.topRated
                  ? {
                      position: 'absolute',
                      top: '30px',
                      left: '30px',
                    }
                  : { display: 'none' }
              }
            />
            <img
              src={topRatedTickIcon}
              alt="topRatedTickIcon"
              style={
                talent.topRated
                  ? {
                      position: 'absolute',
                      top: '38px',
                      left: '36px',
                      zIndex: 1,
                    }
                  : { display: 'none' }
              }
            />
            <Flex flexDirection="column" ml={4}>
              <Text fontSize="16" fontWeight="700">
                {talent?.name}
              </Text>
              <Text fontSize="12" fontWeight="400" color="gray.500" mb={2}>
                {talent?.desc}
              </Text>
              <Text fontSize="18" fontWeight="700" mb={2}>
                $75/hour
              </Text>
              <Flex alignItems="center">
                <FiMessageSquare size={16} />
                <Text ml={1} fontSize="12" fontWeight="500">
                  {talent?.coments}
                </Text>
                <Text
                  cursor="pointer"
                  ml={1}
                  fontSize="12"
                  fontWeight="500"
                  color="gray.500"
                  onClick={() => setSelectedTalent(talent)}
                >
                  Comments
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Flex>
          {talent.services.map((service, i) => (
            <Button
              key={i}
              fontSize="12"
              fontWeight="600"
              variant="outline"
              rounded="full"
              borderWidth="1px"
              mr={2}
            >
              {service}
            </Button>
          ))}
          <Button variant="outline" rounded="full" borderWidth="1px">
            +3
          </Button>
        </Flex>
        <Flex alignItems="center">
          {talent.tallentImages.map((tallentImage, i) => (
            <Box
              key={i}
              borderRadius="20px"
              overflow="hidden"
              boxShadow="md"
              mr={1}
            >
              <img src={tallentImage?.image} alt="cardImg1" />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default TalentListItem;
