import {
  Box,
  Flex,
  Input,
  IconButton,
  Text,
  Avatar,
  Spacer,
  Link,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { FiMessageSquare, FiBell } from 'react-icons/fi';
import { BiChevronDown } from 'react-icons/bi'; // Example: using BiChevronDown as arrow icon
import logo from '../../assets/images/logo.svg';
import profileImg from '../../assets/images/profile-img.svg';
import homeIcon from '../../assets/images/home.svg';
import myNetworkIcon from '../../assets/images/myNetwork.svg';
import jobsIcon from '../../assets/images/jobs.svg';
import searchIcon from '../../assets/images/searchIcon.png';
import slashIcon from '../../assets/images/slashIcon.png';
import profileCaretDown from '../../assets/images/profileCaretDown.png';
import SearchDropdown from './components/searchDropdown';
import { useState } from 'react';

const Navbar = () => {
  const [searchDropdwonOpen, setSearchDropdwonOpen] = useState(false);
  return (
    <Box p={4}>
      <Flex align="center" maxW="1200px" mx="auto">
        {/* Logo */}
        <Box>
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </Box>

        {/* Search Bar */}
        <Flex
          position="relative"
          align="center"
          ml={4}
          rounded="10px"
          bg="#FBFBFC;"
        >
          <InputGroup flex="1">
            <InputLeftElement
              pointerEvents="none"
              children={<img src={searchIcon} alt="searchIcon" />}
            />
            <Input
              type="text"
              placeholder="Search candidate, competencies, services"
              width="400px"
              borderWidth="0"
              css={{ fontSize: '12' }}
            />
            <InputRightElement
              pointerEvents="none"
              children={<img src={slashIcon} alt="searchIcon" />}
            />
          </InputGroup>
          {searchDropdwonOpen && <SearchDropdown />}
        </Flex>
        <Spacer />
        {/* Navigation Links */}
        <Box ml={4}>
          <Flex align="center">
            <Link href="/" mr={2}>
              <Flex align="center">
                <img src={homeIcon} alt="homeIcon" />
                <Text ml={2} fontSize="12" fontWeight="500">
                  Home
                </Text>
              </Flex>
            </Link>
            <Link href="/network" mr={2}>
              <Flex align="center">
                <img src={myNetworkIcon} alt="homeIcon" />
                <Text ml={2} fontSize="12" fontWeight="500">
                  My Network
                </Text>
              </Flex>
            </Link>
            <Link href="/jobs" mr={2}>
              <Flex align="center">
                <img src={jobsIcon} alt="homeIcon" />
                <Text ml={2} fontSize="12" fontWeight="500">
                  Jobs
                </Text>
              </Flex>
            </Link>
          </Flex>
        </Box>

        {/* Message and Notification Icons */}
        <Box>
          <IconButton
            aria-label="Messages"
            icon={<FiMessageSquare />}
            mr={1}
            variant="ghost"
          />
          <IconButton
            aria-label="Notifications"
            icon={<FiBell />}
            mr={1}
            variant="ghost"
          />
        </Box>

        {/* Profile Name, Avatar, and Arrow Down */}
        <Box ml={2}>
          <Flex align="center">
            <Text fontWeight="600" fontSize="14">
              John Doe
            </Text>
            <Avatar size="sm" name="John Doe" src={profileImg} ml={2} mr={2} />
            <img src={profileCaretDown} alt="profileCaretDown" />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
