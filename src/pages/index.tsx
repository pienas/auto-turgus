import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Scrollbars from "react-custom-scrollbars-2";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

import type { RouterOutputs } from "../utils/api";
import { api } from "../utils/api";
import { useEffect, useRef, useState } from "react";
import { CheckIcon } from "../icons/CheckIcon/CheckIcon";
import { CrossIcon } from "../icons/CrossIcon/CrossIcon";
import { ArrowUp } from "../icons/ArrowUp/ArrowUp";
import { ArrowDown } from "../icons/ArrowDown/ArrowDown";

export enum ENGINE {
  Standard = "Originalus",
  V8 = "V8",
  V10 = "V10",
  V12 = "V12",
}

export enum TRANSMISSION {
  Standard = "Originali",
  Level1 = "1 lygio",
  Level2 = "2 lygio",
  Level3 = "3 lygio",
}

export enum BRAKES {
  Standard = "Originali",
  Performance = "Performance",
  GT = "GT Dideli",
  Competition = "Competition",
}

export enum SUSPENSION {
  Standard = "Originali",
  Low = "Žeminta",
  Street = "Gatvės",
  Race = "Lenktyninė",
  Rally = "Ralio",
}

export enum TYRES {
  Standard = "Originalios",
  Bulletproof = "Neperšaunamos",
  Drift = "Šonaslydžio",
}

type VehicleFromServer = RouterOutputs["vehicles"]["getById"];

const Home: NextPage = () => {
  const vehicles = api.vehicles.getAll.useQuery();

  const [selectedVehicle, setSelectedVehicle] = useState<VehicleFromServer>();
  const [selectedVehicleIndex, setSelectedVehicleIndex] = useState<number>(0);

  const scrollbarRef = useRef<Scrollbars>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (vehicles.data) {
        if (event.key === "ArrowDown") {
          if (selectedVehicleIndex < vehicles.data.length - 1) {
            setSelectedVehicle(vehicles.data[selectedVehicleIndex + 1]);
            setSelectedVehicleIndex(selectedVehicleIndex + 1);
            scrollbarRef.current?.scrollTop(
              scrollbarRef.current.getScrollTop() + 78
            );
          }
        } else if (event.key === "ArrowUp") {
          if (selectedVehicleIndex > 0) {
            setSelectedVehicle(vehicles.data[selectedVehicleIndex - 1]);
            setSelectedVehicleIndex(selectedVehicleIndex - 1);
            scrollbarRef.current?.scrollTop(
              scrollbarRef.current.getScrollTop() - 78
            );
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedVehicleIndex, vehicles.data]);

  useEffect(() => {
    if (vehicles.data?.length) {
      setSelectedVehicle(vehicles.data[selectedVehicleIndex]);
    }
  }, [selectedVehicleIndex, vehicles.data]);

  if (!selectedVehicle) return null;

  const renderHasFeature = (feature: boolean) => {
    if (feature) return <CheckIcon color="#00F0FF" boxSize={3} />;
    return <CrossIcon color="#FF0000" boxSize={3} />;
  };

  return (
    <>
      <Head>
        <title>UAB „Auto Turgus“</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        w="100vw"
        h="100vh"
        maxW="100vw"
        backgroundImage={`radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%), url(${selectedVehicle.imageUrl})`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundColor="rgba(0,0,0,1)"
        p="40px"
        overflow="hidden"
      >
        <Heading color="white" letterSpacing={-1} fontSize="6xl">
          AIKŠTELĖ
        </Heading>
        <Heading
          color="white"
          letterSpacing={-1}
          fontSize="4xl"
          mt="-10px"
          mb="10px"
        >
          UAB „Auto Turgus“
        </Heading>
        <Flex justifyContent="space-between">
          <Flex
            direction="column"
            justifyContent="space-between"
            height="calc(100vh - 180px)"
          >
            <Flex alignItems="center" mb="8px">
              <Text color="white" letterSpacing={-1} mr="8px">
                Parduodamų tr. priemonių sąrašas
              </Text>
              <Box
                height="2px"
                width="230px"
                background="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0) 100%)"
              />
            </Flex>
            <Scrollbars
              ref={scrollbarRef}
              hideTracksWhenNotNeeded={true}
              renderThumbVertical={({ style, ...props }) => (
                <div
                  {...props}
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  style={{
                    ...style,
                    backgroundColor: "rgba(0,240,255,1)",
                    borderRadius: "5px",
                  }}
                />
              )}
              renderTrackVertical={({ style, ...props }) => (
                <div
                  {...props}
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  style={{
                    ...style,
                    backgroundColor: "rgba(149,149,149,0.3)",
                    width: "4px",
                    right: "0",
                    bottom: "0",
                    top: "0",
                    borderRadius: "5px",
                  }}
                />
              )}
            >
              {vehicles.data?.map((vehicle) => (
                <Flex
                  width="500px"
                  p="20px"
                  mb="12px"
                  color="white"
                  justifyContent="space-between"
                  borderRadius="5px"
                  backgroundColor={
                    selectedVehicle.id === vehicle.id
                      ? vehicle.sold
                        ? "rgba(255,0,0,0.6)"
                        : "rgba(70,202,210,0.8)"
                      : vehicle.sold
                      ? "rgba(175,58,58,0.3)"
                      : "rgba(149,149,149,0.3)"
                  }
                  border="1px solid"
                  cursor="pointer"
                  transition=".3s all"
                  key={vehicle.id}
                  style={{
                    borderImage: vehicle.sold
                      ? "linear-gradient(to right, rgba(0,0,0,0), rgba(255,0,0,0.5), rgba(0,0,0,0)) 1"
                      : selectedVehicle.id === vehicle.id
                      ? "linear-gradient(to right, rgba(0,0,0,0), rgba(0,240,255,0.8), rgba(0,0,0,0)) 1"
                      : "linear-gradient(to right, rgba(0,0,0,0), rgba(255,255,255,0.5), rgba(0,0,0,0)) 1",
                  }}
                  onClick={() => {
                    setSelectedVehicle(vehicle);
                    setSelectedVehicleIndex(vehicles.data.indexOf(vehicle));
                  }}
                  _hover={{
                    backgroundColor:
                      selectedVehicle.id === vehicle.id
                        ? vehicle.sold
                          ? "rgba(255,0,0,0.8)"
                          : "rgba(70,202,210,0.9)"
                        : vehicle.sold
                        ? "rgba(175,58,58,0.5)"
                        : "rgba(149,149,149,0.5)",
                  }}
                >
                  <Text>{vehicle.name}</Text>
                  <Text>
                    {new Intl.NumberFormat("lt-LT", {
                      style: "currency",
                      currency: "EUR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(vehicle.price)}
                  </Text>
                </Flex>
              ))}
            </Scrollbars>
            <Flex mt="12px" alignItems="center">
              <Text letterSpacing={-1} fontSize="14px" color="white" mr="4px">
                Naudokite
              </Text>
              <ArrowUp color="#00F0FF" boxSize={6} />
              <ArrowDown color="#00F0FF" boxSize={6} />
              <Text letterSpacing={-1} fontSize="14px" color="white" ml="4px">
                mygtukus, norėdami keisti peržiūrimą tr. priemonę
              </Text>
            </Flex>
          </Flex>
          <Flex
            direction="column"
            justifyContent="space-between"
            height="calc(100vh - 180px)"
          >
            <Box>
              <Flex alignItems="center" mb="8px">
                <Text color="white" letterSpacing={-1} mr="8px">
                  Tr. priemonės komplektacija
                </Text>
                <Box
                  height="2px"
                  width="130px"
                  background="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0) 100%)"
                />
              </Flex>
              <Box
                width="370px"
                p="20px"
                color="white"
                borderRadius="5px"
                backgroundColor="rgba(149,149,149,0.3)"
                border="1px solid"
                style={{
                  borderImage:
                    "linear-gradient(to right, rgba(0,0,0,0), rgba(255,255,255,0.5), rgba(0,0,0,0)) 1",
                }}
              >
                <Flex justifyContent="space-between" mb="8px">
                  <Text letterSpacing={-1} fontSize="14px">
                    Variklis
                  </Text>
                  <Text letterSpacing={-1} fontSize="14px">
                    {ENGINE[selectedVehicle.engine]}
                  </Text>
                </Flex>
                <Flex justifyContent="space-between" mb="8px">
                  <Text letterSpacing={-1} fontSize="14px">
                    Transmisija
                  </Text>
                  <Text letterSpacing={-1} fontSize="14px">
                    {TRANSMISSION[selectedVehicle.transmission]}
                  </Text>
                </Flex>
                <Flex justifyContent="space-between" mb="8px">
                  <Text letterSpacing={-1} fontSize="14px">
                    Stabdžių sistema
                  </Text>
                  <Text letterSpacing={-1} fontSize="14px">
                    {BRAKES[selectedVehicle.brakes]}
                  </Text>
                </Flex>
                <Flex justifyContent="space-between" mb="8px">
                  <Text letterSpacing={-1} fontSize="14px">
                    Važiuoklė
                  </Text>
                  <Text letterSpacing={-1} fontSize="14px">
                    {SUSPENSION[selectedVehicle.suspension]}
                  </Text>
                </Flex>
                <Flex justifyContent="space-between" mb="8px">
                  <Text letterSpacing={-1} fontSize="14px">
                    Padangos
                  </Text>
                  <Text letterSpacing={-1} fontSize="14px">
                    {TYRES[selectedVehicle.tyres]}
                  </Text>
                </Flex>
                <Flex
                  justifyContent="space-between"
                  mb="8px"
                  alignItems="center"
                >
                  <Text letterSpacing={-1} fontSize="14px">
                    Turbina
                  </Text>
                  {renderHasFeature(selectedVehicle.turbine)}
                </Flex>
                <Flex
                  justifyContent="space-between"
                  mb="8px"
                  alignItems="center"
                >
                  <Text letterSpacing={-1} fontSize="14px">
                    Orinė važiuoklė
                  </Text>
                  {renderHasFeature(selectedVehicle.airSuspension)}
                </Flex>
                <Flex
                  justifyContent="space-between"
                  mb="8px"
                  alignItems="center"
                >
                  <Text letterSpacing={-1} fontSize="14px">
                    Sustiprintas korpusas
                  </Text>
                  {renderHasFeature(selectedVehicle.armor)}
                </Flex>
                <Flex
                  justifyContent="space-between"
                  mb="8px"
                  alignItems="center"
                >
                  <Text letterSpacing={-1} fontSize="14px">
                    Xenon lempos
                  </Text>
                  {renderHasFeature(selectedVehicle.xenon)}
                </Flex>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text letterSpacing={-1} fontSize="14px">
                    Radija
                  </Text>
                  {renderHasFeature(selectedVehicle.radio)}
                </Flex>
              </Box>
            </Box>
            <Link href="/nuostatai">
              <Text
                letterSpacing={-1}
                fontSize="14px"
                color="white"
                textAlign="right"
                _hover={{
                  textDecoration: "underline",
                }}
              >
                Taisyklės
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Home;
