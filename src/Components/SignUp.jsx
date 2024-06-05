import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  useToast,
  Text,
  HStack,
  Image,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { auth, createUserWithEmailAndPassword, registerWithEmailAndPassword, signInWithGoogle, updateProfile } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [user, loading, authError] = useAuthState(auth);
  const toast = useToast();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsernameError(null);
    setEmailError(null);
    setPasswordError(null);

    if (username.trim() === "") {
      setUsernameError("Username is required.");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Invalid email format.");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters long.");
      return;
    }

    try {
        registerWithEmailAndPassword(username, email, password);
      toast({
        title: "Sign Up Successful!",
        description: "You are now registered.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/dashboard");
    } catch (err) {
      console.error("Sign up failed:", err);
      toast({
        title: "Sign up failed!",
        description: "You are Not registered.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setPasswordError("Sign up failed. Please check your details and try again.");
    }
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading, navigate]);

  useEffect(() => {
    if (authError) {
      setPasswordError(authError.message || "An error occurred during sign up.");
    }
  }, [authError]);

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} h="100vh" >
      <Heading fontSize={'2.5rem'} color={'teal'}>
        Relu Consultancy
      </Heading>
      <Box
        w={['90%', '50%', '50%', '40%']}
        m={'auto'}
        mt={'2rem'}
        p={5}
        bgColor="#dcdcdc"
        border={'4px solid black'}
        borderRadius="10px"
        shadow="md"
      >
        <Heading as="h1" fontSize="2xl" color="black" textAlign="center">
          Register
        </Heading>
        <FormControl mb={'1rem'} isRequired>
          <Input
            id="username"
            size="md"
            w={'70%'}
            p={'0.5rem'}
            borderRadius="5px"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
          {usernameError && (
            <Box color="red" fontSize="sm" mt={1}>
              <Text fontSize={'1rem'}>{usernameError}</Text>
            </Box>
          )}
        </FormControl>
        <FormControl mb={'1rem'} isRequired>
          <Input
            id="email"
            size="md"
            w={'70%'}
            p={'0.5rem'}
            borderRadius="5px"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {emailError && (
            <Box color="red" fontSize="sm" mt={1}>
              <Text fontSize={'1rem'}>{emailError}</Text>
            </Box>
          )}
        </FormControl>
        <FormControl mb={'1rem'} isRequired>
          <Input
            id="password"
            type="password"
            size="md"
            w={'70%'}
            p={'0.5rem'}
            borderRadius="5px"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          {passwordError && (
            <Box color="red" fontSize="sm" mt={1}>
              <Text fontSize={'1rem'}>{passwordError}</Text>
            </Box>
          )}
        </FormControl>
        <Button    cursor={'pointer'} w={'30%'} padding={'0.5rem'} fontSize={'1.2rem'} fontWeight={'bold'} borderRadius={'10px'} mb={'1rem'} backgroundColor="black"  color="white" onClick={handleSubmit} >
          Register
        </Button>
        <br/>
          <Button
            w={'60%'}
            backgroundColor="white"
            borderRadius="10px"
            color="blue"
            variant="outline"
            onClick={signInWithGoogle}
            mb="0.5rem"
            cursor={'pointer'}
          >
            <Box  display='flex' flexDirection={['column','row','row','row']} alignItems={'center'} justifyContent={'space-around'} gap={'1rem'} flexWrap={'wrap'}>
              <Image src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" boxSize="20px" />
              <Text fontSize="1rem" fontWeight="500" >Sign in with Google</Text>
            </Box>
          </Button>
        <Box mt={2} textAlign="center" mb={'0.5rem'}>
          Already have an account? <Link to="/">Login</Link> now.
        </Box>
      </Box>
    </Box>
  );
}

export default SignUp;
