import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Select,
  Switch,
  Text,
} from "@chakra-ui/react";
import {
  BrakesType,
  EngineType,
  SuspensionType,
  TransmissionType,
  TyresType,
} from "@prisma/client";
import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { useState } from "react";
import { api } from "../../utils/api";

const New: NextPage = () => {
  const { data: sessionData } = useSession();

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [engine, setEngine] = useState<EngineType>();
  const [transmission, setTransmission] = useState<TransmissionType>();
  const [brakes, setBrakes] = useState<BrakesType>();
  const [suspension, setSuspension] = useState<SuspensionType>();
  const [tyres, setTyres] = useState<TyresType>();
  const [turbine, setTurbine] = useState<boolean>(false);
  const [airSuspension, setAirSuspension] = useState<boolean>(false);
  const [armor, setArmor] = useState<boolean>(false);
  const [xenon, setXenon] = useState<boolean>(false);
  const [radio, setRadio] = useState<boolean>(false);

  const createVehicleMutation = api.vehicles.create.useMutation();

  const handleAddVehicle = () => {
    if (
      !name ||
      !price ||
      !imageUrl ||
      !engine ||
      !transmission ||
      !brakes ||
      !suspension ||
      !tyres
    ) {
      alert("Užpildykite visus laukus!");
      return;
    }

    createVehicleMutation
      .mutateAsync({
        name,
        price: Number(price),
        imageUrl,
        engine,
        transmission,
        brakes,
        suspension,
        tyres,
        turbine,
        airSuspension,
        armor,
        xenon,
        radio,
        sold: false,
      })
      .then(() => {
        setName("");
        setPrice("");
        setImageUrl("");
        setEngine(undefined);
        setTransmission(undefined);
        setBrakes(undefined);
        setSuspension(undefined);
        setTyres(undefined);
        setTurbine(false);
        setAirSuspension(false);
        setArmor(false);
        setXenon(false);
        setRadio(false);
        alert("Tr. priemonė pridėta");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <Head>
        <title>
          {sessionData ? "Pridėti naują tr. priemonę" : "Nepasiekiama"}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container w="100vw" h="100vh" maxW="100vw" p="40px">
        <Button
          onClick={sessionData ? () => void signOut() : () => void signIn()}
          float="right"
        >
          {sessionData ? "Atsijungti" : "Prisijungti"}
        </Button>
        {(sessionData?.user?.id === "clcrrt2g80000mo09hvi6qxcm" ||
          sessionData?.user?.id === "clcs38san0000ky08ytm8l70s" ||
          sessionData?.user?.id === "clcsz5l7o0000l008m5k0as44") && (
          <Box>
            <Heading size="md" mb="20px">
              Pridėti tr. priemonę
            </Heading>
            <Input
              type="text"
              placeholder="Tr. priemonės pavadinimas"
              minWidth="300px"
              width="30vw"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Text mb="10px" color="gray.500" fontSize="12px">
              Pvz.: Lexus LFA
            </Text>
            <Input
              type="text"
              placeholder="Kaina"
              minWidth="300px"
              width="30vw"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Text mb="10px" color="gray.500" fontSize="12px">
              Pvz.: 4000000
            </Text>
            <Input
              type="text"
              placeholder="Nuotraukos nuoroda"
              minWidth="300px"
              width="30vw"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <Text mb="10px" color="gray.500" fontSize="12px">
              Pvz.: https://i.imgur.com/qpR08ck.png
            </Text>
            <Select
              placeholder="Variklis"
              minWidth="300px"
              width="30vw"
              mb="10px"
              value={engine}
              onChange={(e) => setEngine(e.target.value as EngineType)}
            >
              {Object.values(EngineType).map((engine, i) => (
                <option key={i} value={engine}>
                  {engine}
                </option>
              ))}
            </Select>
            <Select
              placeholder="Transmisija"
              minWidth="300px"
              width="30vw"
              mb="10px"
              value={transmission}
              onChange={(e) =>
                setTransmission(e.target.value as TransmissionType)
              }
            >
              {Object.values(TransmissionType).map((transmission, i) => (
                <option key={i} value={transmission}>
                  {transmission}
                </option>
              ))}
            </Select>
            <Select
              placeholder="Stabdžių sistema"
              minWidth="300px"
              width="30vw"
              mb="10px"
              value={brakes}
              onChange={(e) => setBrakes(e.target.value as BrakesType)}
            >
              {Object.values(BrakesType).map((brakes, i) => (
                <option key={i} value={brakes}>
                  {brakes}
                </option>
              ))}
            </Select>
            <Select
              placeholder="Važiuoklė"
              minWidth="300px"
              width="30vw"
              mb="10px"
              value={suspension}
              onChange={(e) => setSuspension(e.target.value as SuspensionType)}
            >
              {Object.values(SuspensionType).map((suspension, i) => (
                <option key={i} value={suspension}>
                  {suspension}
                </option>
              ))}
            </Select>
            <Select
              placeholder="Padangos"
              minWidth="300px"
              width="30vw"
              mb="10px"
              value={tyres}
              onChange={(e) => setTyres(e.target.value as TyresType)}
            >
              {Object.values(TyresType).map((tyres, i) => (
                <option key={i} value={tyres}>
                  {tyres}
                </option>
              ))}
            </Select>
            <Flex alignItems="center" mb="10px">
              <Switch
                isChecked={turbine}
                onChange={(e) => setTurbine(e.target.checked)}
              />
              <Text ml="10px">Turbina</Text>
            </Flex>
            <Flex alignItems="center" mb="10px">
              <Switch
                isChecked={airSuspension}
                onChange={(e) => setAirSuspension(e.target.checked)}
              />
              <Text ml="10px">Orinė važiuoklė</Text>
            </Flex>
            <Flex alignItems="center" mb="10px">
              <Switch
                isChecked={armor}
                onChange={(e) => setArmor(e.target.checked)}
              />
              <Text ml="10px">Sustiprintas korpusas</Text>
            </Flex>
            <Flex alignItems="center" mb="10px">
              <Switch
                isChecked={xenon}
                onChange={(e) => setXenon(e.target.checked)}
              />
              <Text ml="10px">Xenon lempos</Text>
            </Flex>
            <Flex alignItems="center" mb="10px">
              <Switch
                isChecked={radio}
                onChange={(e) => setRadio(e.target.checked)}
              />
              <Text ml="10px">Radija</Text>
            </Flex>
            <Button onClick={handleAddVehicle}>Pridėti</Button>
          </Box>
        )}
      </Container>
    </>
  );
};

export default New;
