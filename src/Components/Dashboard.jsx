import React from "react";
import {
  Box,
  Flex,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useToast,
} from "@chakra-ui/react";

import { SlOptionsVertical } from "react-icons/sl";

import filter from "../Assets/filter.svg";

import search from "../Assets/search.svg";

import home from "../Assets/home.svg";

import notification from "../Assets/message.svg";

import heart from "../Assets/heart.svg";

import message from "../Assets/message.svg";

import profile from "../Assets/profile.svg";

import setting from "../Assets/setting.svg";

import favorite from "../Assets/favorite.svg";

import wallets from "../Assets/wallets.svg";

import logout from "../Assets/logout.png";

import lara from "../Assets/lara.png";

import lara_card from "../Assets/lara_card.png";

import whiteheart from "../Assets/whiteHeart.svg";

import blackheart from "../Assets/blackheart.svg";

import share from "../Assets/share.svg";
import comment from "../Assets/comment.svg";

import thomas from "../Assets/thomas.png";

import thomas_card from "../Assets/thomas_card.png";

import star from "../Assets/star.svg";

import caro1 from "../Assets/caro1.png";
import caro2 from "../Assets/caro2.png";
import caro3 from "../Assets/caro3.png";
import caro4 from "../Assets/caro4.png";

import card1 from "../Assets/card1.png";

import card1_profile from "../Assets/card1_profile.png";

import card2 from "../Assets/card2.png";
import card2_profile from "../Assets/card2_profile.png";

import card3 from "../Assets/card3.png";

import card3_profile from "../Assets/card3_profile.png";

import card4 from "../Assets/card4.png";

import card4_profile from "../Assets/card4_profile.png";

import card5 from "../Assets/card5.png";

import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import ProfileCard from "./Dashboard Components/ProfileCard";

const Dashboard = () => {
  const menuItems = [
    { icon: home, label: "Home" },
    { icon: notification, label: "Notification" },
    { icon: heart, label: "Shop" },
    { icon: message, label: "Conversation" },
    { icon: wallets, label: "Wallet" },
    { icon: favorite, label: "Subscription" },
    { icon: profile, label: "My Profile" },
    { icon: setting, label: "Settings" },
  ];

  const items = [
    { imageSrc: caro1, price: "$199.99" },
    { imageSrc: caro2, price: "$199.99" },
    { imageSrc: caro3, price: "$199.99" },
    { imageSrc: caro4, price: "$199.99" },
  ];

  const nav = useNavigate();

  const toast = useToast();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      nav("/");
    } catch (error) {
      toast({
        title: "Error For LogOut Please Try Again!",
        description: "You are Not registered.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box bgColor={"#f5f5f5"} height={"80vh"}>
      <Box w={"80%"} m={"auto"} mt={"20px"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
          gap={"2rem"}
        >
          {/* LOGO */}
          <Box
            top="30px"
            left="200px"
            width="260px"
            height="80px"
            bg="#FFFFFF"
            borderRadius="10px"
            opacity="1"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              textAlign="left"
              fontSize="32px"
              lineHeight="44px"
              fontFamily="Mongolian Baiti"
              letterSpacing="0px"
              color="#101010"
            >
              LOGO
            </Text>
          </Box>
          {/* Search */}
          <Box
            top="30px"
            left="490px"
            width="620px"
            height="80px"
            bg="#FFFFFF"
            borderRadius="10px"
            opacity="1"
            display="flex"
            alignItems="center"
            padding="0 20px"
          >
            <Flex alignItems="center" mr="auto">
              <InputGroup width="auto">
                <InputLeftElement pointerEvents="none">
                  <img src={search} />
                </InputLeftElement>

                <Input
                  placeholder="Search here.."
                  variant="outline"
                  width="100px"
                  height="20px"
                  paddingLeft="30px"
                  fontSize="12px"
                  fontWeight="medium"
                  lineHeight="14px"
                  color="#9A9A9E"
                  border={"none"}
                />
              </InputGroup>
            </Flex>
            <Flex alignItems="center">
              <IconButton
                aria-label="Filter"
                icon={<img src={filter} alt="Filter Icon" />}
                background="transparent"
                width="26px"
                height="26px"
                mr="10px"
                border={"none"}
              />
              <Text
                fontSize="14px"
                fontWeight="medium"
                lineHeight="16px"
                color="#303030"
              >
                Filter
              </Text>
            </Flex>
          </Box>

          {/* seller */}
          <Box
            top="30px"
            left="1140px"
            width="260px"
            height="80px"
            fontSize={'16px'}
            bg="#88C2BB"
            borderRadius="10px"
            opacity="1"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color={'white'}
          >
            Become a Seller
          </Box>
        </Box>
      </Box>

      <Box w={"80%"} m={"auto"} mt={"30px"}>
        <Box display={"flex"} gap={"2rem"}>
          {/* sidebar */}
          <Box
            width="252px"
            height={"75vh"}
            bg="#FFFFFF"
            borderRadius="10px"
            opacity="1"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box pl={"1.5rem"} pt={"1.5rem"}>
              {menuItems.map((item, index) => (
                <Flex
                  key={index}
                  alignItems="center"
                //   mb="4px"
                  position={"relative"}
                >
                  {item.label === "Home" && (
                    <Box
                      position="absolute"
                      top="10px"
                      left="-22px"
                      width="3px"
                      height="24px"
                      bg="#88C2BB"
                      opacity="1"
                    />
                  )}
                  <Image src={item.icon} width="20px" height="20px" mr="12px" />
                  <Text
                    fontSize="16px"
                    fontWeight="600"
                    lineHeight="10px"
                    color={item.label === "Home" ? "#101010" : "#8D8D8D"}
                  >
                    {item.label}
                  </Text>
                </Flex>
              ))}
            </Box>

            <Box
              display={"flex"}
              alignItems={"center"}
              pl={"1.5rem"}
              cursor={"pointer"}
              onClick={handleLogout}
              mt={"100px"}
            >
              <Image src={logout} width="24px" height="22px" mr={"12px"} />
              <Text
                fontSize="16px"
                fontWeight="600"
                fontFamily="Gilroy"
                color="#88C2BB"
              >
                Logout
              </Text>
            </Box>

            <Box
              width="250px"
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Text
                textAlign="right"
                fontSize="10px"
                fontWeight="600"
                fontFamily="Gilroy"
                letterSpacing="0px"
                color="#8D8D8D"
                opacity="1"
              >
                2022©logo name
              </Text>
              <Text
                textAlign="right"
                fontSize="10px"
                fontWeight="600"
                fontFamily="Gilroy"
                letterSpacing="0px"
                color="#8D8D8D"
                opacity="1"
              >
                Developed by ivan Infotech
              </Text>
            </Box>
          </Box>

          {/* Cards */}
          <Box
            height={"75vh"}
            overflow={"scroll"}
            css={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
              "-ms-overflow-style": "none", // IE and Edge
              "scrollbar-width": "none", // Firefox
            }}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-around"}
            gap={"1rem"}
          >
            {/* Card-1 */}
            <Box
              top="150px"
              width="580px"
              bg="#FFFFFF"
              borderRadius="10px"
              opacity="1"
              display="flex"
              flexDirection="column"
              pr={"2rem"}
              pl={"2rem"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-around"}
                >
                  <Image src={lara} height={"48px"} width={"48px"} />
                  <Box p={"1rem"} lineHeight={"2px"}>
                    <Text
                      width="111px"
                      textAlign="left"
                      fontSize="20px"
                      fontWeight="600"
                      fontFamily="Gilroy"
                      color="#101010"
                      opacity="1"
                    >
                      Lara Leones
                    </Text>
                    <Text
                      width="77px"
                      textAlign="left"
                      fontSize="14px"
                      fontWeight="medium"
                      fontFamily="Gilroy"
                      color="#8D8D8D"
                      opacity="1"
                    >
                      @thewallart
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <SlOptionsVertical />
                </Box>
              </Box>
              <Text
                w={"580px"}
                fontSize={"17px"}
                mt={"1px"}
                textAlign={"left"}
                color={"#101010"}
                fontFamily={"Gilroy"}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                <Text as={"span"} color={"#FF5E8A"}>
                  {" "}
                  Read More
                </Text>
              </Text>

              <Box
                width="580px"
                height="306px"
                mb={"1rem"}
                backgroundImage={lara_card}
                backgroundRepeat={"no-repeat"}
                backgroundSize="cover"
                borderRadius="10px"
                opacity="1"
              >
                <Image
                  src={whiteheart}
                  alt="Overlay Image"
                  height={"24px"}
                  width={"24px"}
                  mt="25px"
                  ml="520px"
                />
              </Box>

              <Box
                width="640px"
                mt={"10px"}
                ml={"-40px"}
                border="2px solid #F3F3F3"
                opacity="1"
              ></Box>

              <Box width="100%" mt="10px" mb={"10px"}>
                <Flex alignItems={"center"} gap={"2rem"}>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={"0.5rem"}
                  >
                    <Image
                      src={blackheart}
                      alt="Image 1"
                      width={"22px"}
                      height={"20px"}
                    />
                    <Text fontSize="20px" fontWeight="600" color="#101010">
                      9.8k
                    </Text>
                  </Box>

                  {/* Box 2 */}
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={"0.5rem"}
                  >
                    <Image
                      src={comment}
                      alt="Image 2"
                      width={"22px"}
                      height={"20px"}
                    />
                    <Text fontSize="20px" fontWeight="600" color="#101010">
                      8.6k
                    </Text>
                  </Box>

                  {/* Box 3 */}
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={"0.5rem"}
                  >
                    <Image
                      src={share}
                      alt="Image 3"
                      width={"22px"}
                      height={"20px"}
                    />
                    <Text fontSize="20px" fontWeight="600" color="#101010">
                      7.2k
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>

            {/* card-2 */}
            <Box
              top="150px"
              width="580px"
              bg="#FFFFFF"
              borderRadius="10px"
              opacity="1"
              display="flex"
              flexDirection="column"
              pr={"2rem"}
              pl={"2rem"}
              mt={"1.5rem"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-around"}
                >
                  <Image src={thomas} height={"48px"} width={"48px"} />
                  <Box p={"1rem"} lineHeight={"2px"}>
                    <Text
                      width="111px"
                      textAlign="left"
                      fontSize="20px"
                      fontWeight="600"
                      fontFamily="Gilroy"
                      color="#101010"
                      opacity="1"
                    >
                      Thomas J.
                    </Text>
                    <Text
                      width="77px"
                      textAlign="left"
                      fontSize="14px"
                      fontWeight="medium"
                      fontFamily="Gilroy"
                      color="#8D8D8D"
                      opacity="1"
                    >
                      @thecustomecreater
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <SlOptionsVertical />
                </Box>
              </Box>
              <Text
                w={"100%"}
                mt={"1px"}
                fontSize={"17px"}
                textAlign={"left"}
                color={"#101010"}
                fontFamily={"Gilroy"}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                <Text as={"span"} color={"#FF5E8A"}>
                  {" "}
                  Read More
                </Text>
              </Text>

              <Box
                left="1140px"
                width="580px"
                height="306px"
                mb={"1rem"}
                backgroundImage={thomas_card}
                backgroundRepeat={"no-repeat"}
                backgroundSize="cover"
                borderRadius="10px"
                opacity="1"
              >
                <Image
                  src={whiteheart}
                  alt="Overlay Image"
                  height={"24px"}
                  width={"24px"}
                  mt="25px"
                  ml="500px"
                />
              </Box>

              <Box
                width="640px"
                mt={"10px"}
                ml={"-40px"}
                border="2px solid #F3F3F3"
                opacity="1"
              ></Box>

              <Box width="100%" mt="10px" mb={"10px"}>
                <Flex alignItems={"center"} gap={"2rem"}>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={"0.5rem"}
                  >
                    <Image
                      src={blackheart}
                      alt="Image 1"
                      width={"22px"}
                      height={"20px"}
                    />
                    <Text fontSize="20px" fontWeight="600" color="#101010">
                      9.8k
                    </Text>
                  </Box>

                  {/* Box 2 */}
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={"0.5rem"}
                  >
                    <Image
                      src={comment}
                      alt="Image 2"
                      width={"22px"}
                      height={"20px"}
                    />
                    <Text fontSize="20px" fontWeight="600" color="#101010">
                      8.6k
                    </Text>
                  </Box>

                  {/* Box 3 */}
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={"0.5rem"}
                  >
                    <Image
                      src={share}
                      alt="Image 3"
                      width={"22px"}
                      height={"20px"}
                    />
                    <Text fontSize="20px" fontWeight="600" color="#101010">
                      7.2k
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>

            {/* Card 3 Carousal */}
            <Box
              width="630px"
              borderRadius="10px"
              opacity="1"
              display="flex"
              flexDirection="column"
              alignItems={"center"}
            >
              <Flex
                overflowX="scroll"
                css={{
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                  "-ms-overflow-style": "none", // IE and Edge
                  "scrollbar-width": "none", // Firefox
                }}
                gap={"1.5rem"}
              >
                {items.map((item, index) => (
                  <Box
                    key={index}
                    minWidth="242px"
                    borderRadius="10px"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    gap={"10px"}
                    boxShadow="lg"
                  >
                    <Image
                      src={item.imageSrc}
                      alt={`Image ${index + 1}`}
                      width="100%"
                      height="50%"
                      borderRadius="10px"
                    />

                    <Text
                      w={"100%"}
                      textAlign={"left"}
                      fontSize={"13px"}
                      fontFamily={"Gilroy"}
                      lineHeight={"2px"}
                      mb={"-1rem"}
                    >
                      Modern Wall Decor Framed Painting
                    </Text>
                    <Box
                      width="99%"
                      display={"flex"}
                      flexDirection="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Text fontSize="18px" fontWeight="600" color="#101010">
                        {item.price}
                      </Text>
                      <Flex>
                        {[...Array(5)].map((_, starIndex) => (
                          <Image key={starIndex} src={star} mr={"1px"} />
                        ))}
                      </Flex>
                    </Box>
                  </Box>
                ))}
              </Flex>
            </Box>
          </Box>

          {/* Artists */}
          <Box
            width="250px"
            borderRadius={"10px"}
            height={"80vh"}
            display={"flex"}
            flexDirection={"column"}
            gap={"1rem"}
          >
            <Box
              display={"flex"}
              textAlign={"left"}
              gap={"1rem"}
              fontSize={"16px"}
              fontFamily={"Gilroy"}
              pl={"10px"}
              mt={"-10px"}
              mb={"-15px"}
            >
              <Text color={"#101010"} fontWeight={"600"}>
                Artist
              </Text>
              <Text color={"#8D8D8D"}>Photographer</Text>
            </Box>

            {/* <Box
              overflow={"scroll"}
              css={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                "-ms-overflow-style": "none", // IE and Edge
                "scrollbar-width": "none", // Firefox
              }}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"space-around"}
              gap={"0.1rem"}
            >
             

              <Box
                width="244px"
                height="126px"
                mb="1rem"
                backgroundImage={`url(${card1})`}
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                borderRadius="15px"
                opacity="1"
              >
                <Box mt={"70px"} ml={"20px"} display="flex" alignItems="center">
                  <Box>
                  <Box
                      ml={"30px"}
                      width="10px"
                      height="10px"
                      background="#0EC297"
                      border="2px solid #FFFFFF"
                      borderRadius="100%"
                     
                    />
                    <Image
                      src={card1_profile}
                      borderRadius="full"
                      boxSize="40px"
                      mt={
                        '-10px'
                      }
                    />
                    
                  </Box>
                  <Box
                    ml="12px"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    lineHeight={"2px"}
                  >
                    <Text fontSize="14px" color="#FFFFFF">
                      Thomas Edward
                    </Text>
                    <Text fontSize="10px" color="#FFFFFF">
                      @thewildwithyou
                    </Text>
                  </Box>
                </Box>
              </Box>

              <Box
                width="244px"
                height="126px"
                mb="1rem"
                backgroundImage={`url(${card2})`}
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                borderRadius="15px"
                opacity="1"
              >
                <Box mt={"70px"} ml={"20px"} display="flex" alignItems="center">
                  <Box>
                    <Image
                      src={card2_profile}
                      borderRadius="full"
                      boxSize="40px"
                    />
                    <Box
                      position="absolute"
                      mt={"-50px"}
                      ml={"30px"}
                      width="10px"
                      height="10px"
                      background="#0EC297"
                      border="2px solid #FFFFFF"
                      borderRadius="100%"
                      opacity="1"
                    />
                  </Box>
                  <Box
                    ml="12px"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    lineHeight={"2px"}
                  >
                    <Text fontSize="14px" color="#FFFFFF">
                    Chris Doe
                    </Text>
                    <Text fontSize="10px" color="#FFFFFF">
                      @thewildwithyou
                    </Text>
                  </Box>
                </Box>
              </Box>


              <Box
                width="244px"
                height="126px"
                mb="1rem"
                backgroundImage={`url(${card3})`}
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                borderRadius="15px"
                opacity="1"
              >
                <Box mt={"70px"} ml={"20px"} display="flex" alignItems="center">
                  <Box>
                    <Image
                      src={card3_profile}
                      borderRadius="full"
                      boxSize="40px"
                    />
                    <Box
                      position="absolute"
                      mt={"-50px"}
                      ml={"30px"}
                      width="10px"
                      height="10px"
                      background="#0EC297"
                      border="2px solid #FFFFFF"
                      borderRadius="100%"
                      opacity="1"
                    />
                  </Box>
                  <Box
                    ml="12px"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    lineHeight={"2px"}
                  >
                    <Text fontSize="14px" color="#FFFFFF">
                    Chris Doe
                    </Text>
                    <Text fontSize="10px" color="#FFFFFF">
                      @thewildwithyou
                    </Text>
                  </Box>
                </Box>
              </Box>


              <Box
                width="244px"
                height="126px"
                mb="1rem"
                backgroundImage={`url(${card4})`}
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                borderRadius="15px"
                opacity="1"
              >
                <Box mt={"70px"} ml={"20px"} display="flex" alignItems="center">
                  <Box>
                    <Image
                      src={card4_profile}
                      borderRadius="full"
                      boxSize="40px"
                    />
                    <Box
                      position="absolute"
                      mt={"-50px"}
                      ml={"30px"}
                      width="10px"
                      height="10px"
                      background="#0EC297"
                      border="2px solid #FFFFFF"
                      borderRadius="100%"
                      opacity="1"
                    />
                  </Box>
                  <Box
                    ml="12px"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    lineHeight={"2px"}
                  >
                    <Text fontSize="14px" color="#FFFFFF">
                    Chris Doe
                    </Text>
                    <Text fontSize="10px" color="#FFFFFF">
                      @thewildwithyou
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box> */}
            <ProfileCard
              card1={card1}
              card1_profile={card1_profile}
              card1_name="Thomas Edward"
              card2={card2}
              card2_profile={card2_profile}
              card2_name="Chris Doe"
              card3={card3}
              card3_profile={card3_profile}
              card3_name="Emilie Jones"
              card4={card4}
              card4_profile={card4_profile}
              card4_name="Jessica Williams"
              card5={card5}
              card5_profile={card1_profile}
              card5_name="Thomas Edward"
            />

            <Box
              width="250px"
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems={'center'}
            >
              <Text
                textAlign="right"
                fontSize="10px"
                fontWeight="600"
                fontFamily="Gilroy"
                letterSpacing="0px"
                color="#8D8D8D"
                opacity="1"
              >
               Privacy
              </Text>
              <Text
                textAlign="right"
                fontSize="10px"
                fontWeight="600"
                fontFamily="Gilroy"
                letterSpacing="0px"
                color="#8D8D8D"
                opacity="1"
              >
                Terms of Service
              </Text>
              <Text
                textAlign="right"
                fontSize="10px"
                fontWeight="600"
                fontFamily="Gilroy"
                letterSpacing="0px"
                color="#8D8D8D"
                opacity="1"
              >
                Cookie Notice
              </Text>

            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
