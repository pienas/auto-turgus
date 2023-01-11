import { Container, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Rules: NextPage = () => {
  return (
    <>
      <Head>
        <title>Taisyklės ir nuostatai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container w="100vw" h="100vh" maxW="100vw" p="40px" background="#1E1E1E">
        <Link href="/">
          <Text
            color="white"
            fontSize="12px"
            letterSpacing={-1}
            _hover={{
              textDecoration: "underline",
            }}
          >
            ← Grįžti į parduodamų tr. priemonių sąrašą
          </Text>
        </Link>
        <Heading color="white" textAlign="center">
          Taisyklės
        </Heading>
        <Heading color="white" textAlign="center">
          Nuostatai
        </Heading>
      </Container>
    </>
  );
};

export default Rules;
