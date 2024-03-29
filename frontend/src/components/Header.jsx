import React from "react";
import {
  Text,
  Container,
  Flex,
  Tag,
  TagLabel,
  Link,
  Button,
  Divider,
} from "@chakra-ui/react";

import { Link as ReactLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Container maxW="100%" color="red.500" centerContent>
        <Flex>
          <Link as={ReactLink} to="/">
            <Flex>
              <Text
                fontSize="5xl"
                fontWeight="bold"
                margin={2}
                bgGradient="linear(to-l, #3494E6, #EC6EAD)"
                bgClip="text"
              >
                KOuery for TCR
              </Text>
              <Tag bgColor="blue.500" color="white" height={2} marginTop={3}>
                <TagLabel>Beta</TagLabel>
              </Tag>
            </Flex>
          </Link>
        </Flex>
      </Container>
      <Container maxW="100%" centerContent>
        <Flex>
          <ReactLink to="/">
            <Button
              margin={4}
              variant="ghost"
              fontWeight="bold"
              fontSize="xl"
              width="auto"
              color="blackAlpha.700"
              textDecoration="none"
            >
              Home Page
            </Button>
          </ReactLink>
          <ReactLink as={ReactLink} to="/categories">
            <Button
              margin={4}
              variant="ghost"
              fontWeight="bold"
              fontSize="xl"
              width="auto"
              color="blackAlpha.700"
            >
              Query Gallery
            </Button>
          </ReactLink>
          <ReactLink as={ReactLink} to="/twitter-trends">
            <Button
              margin={4}
              variant="ghost"
              fontWeight="bold"
              fontSize="xl"
              width="auto"
              color="blackAlpha.700"
            >
              Global Twitter Trends
            </Button>
          </ReactLink>
        </Flex>
        <Divider orientation="horizontal" />
      </Container>

      {/* <Box maxW="100%" bg="blackAlpha.100" color="red.500" shadow="lg">
        <Flex>
          <Text fontSize="5xl" fontWeight="bold" margin={2}>
            KOuery for TCR
          </Text>
          <Text>&nbsp;&nbsp;</Text>
          <Tag bgColor="red.500" color="white" height={2} marginTop={3}>
            <TagLabel>Beta</TagLabel>
          </Tag>
        </Flex>
      </Box> */}
    </div>
  );
};

// const DesktopNav = () => {
//   const linkColor = useColorModeValue("grey.600", "grey.200");
//   const linkHoverColor = useColorModeValue("gray.800", "white");
//   const popoverContentBgColor = useColorModeValue("white", "gray.800");

//   return (
//     <Stack direction="row" spacing={4}>
//       {NAV_ITEMS.map((navItem) => (
//         <Box key={navItem.label}>
//           <Popover trigger="hover" placement={"bottom-start"}>
//             <PopoverTrigger>
//               <Link to={navItem.to ?? "#"}>{navItem.label}</Link>
//             </PopoverTrigger>

//             {navItem.children && (
//               <PopoverContent
//                 border={0}
//                 boxShadow="xl"
//                 p={4}
//                 rounded="xl"
//                 minW="sm"
//               >
//                 <Stack>
//                   {navItem.children.map((child) => (
//                     <DesktopSubNav key={child.label} {...child} />
//                   ))}
//                 </Stack>
//               </PopoverContent>
//             )}
//           </Popover>
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// const DesktopSubNav = ({ label, to, subLabel }) => {
//   return (
//     <Link to={to}>
//       <Stack direction="row" align="center">
//         <Box>
//           <Text>{label}</Text>
//         </Box>
//         <Flex></Flex>
//       </Stack>
//     </Link>
//   );
// };

// const NAV_ITEMS = [
//   {
//     label: "Home",
//   },
//   {
//     label: "Categories",
//     children: [
//       {
//         label: "Mental Performance & Focus",
//         to: "#",
//       },
//       {
//         label: "Immunity",
//         to: "#",
//       },
//       {
//         label: "Twitter Trends",
//       },
//     ],
//   },
// ];

export default Header;
