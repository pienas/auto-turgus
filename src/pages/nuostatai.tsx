import {
  Container,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
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
      <Container
        maxW="100vw"
        px="400px"
        py="100px"
        background="#1E1E1E"
        overflowX="hidden"
        m="0"
      >
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
        <Heading color="white" my="20px">
          Taisyklės
        </Heading>
        <Heading color="white" size="sm" mb="16px">
          1. Bendrosios nuostatos
        </Heading>
        <Text color="white" mb="8px">
          1.1. Šiomis taisyklėmis (toliau – Taisyklės) nustatoma naudojimosi UAB
          „Auto Turgus“ (toliau – Auto Turgus) aikštelių tvarka, taip pat Auto
          Turgus aikštelių vartotojų teisės, pareigos, atsakomybės bei kitos
          nuostatos.
        </Text>
        <Text color="white" mb="8px">
          1.2. Auto Turgus aikštelių vartotojams suteikiama galimybė atvykti bei
          apžiūrėti eksponuojamas tr. priemones.
        </Text>
        <Text color="white" mb="8px">
          1.3. Auto Turgus aikštelių vartotojams suteikiama galimybė eksponuoti
          savo tr. priemones sumokėjus Auto Turgus nustatytą 2 000 (dviejų
          tūkstančių) eurų mokestį.
        </Text>
        <Text color="white" mb="8px">
          1.4. Auto Turgus aikštelių vartotojas sutikimą su Taisyklėmis ir
          įsipareigojimą jų laikytis išreiškia bet kokiu būdu ir forma
          naudodamasis Auto Turgus teikiamomis paslaugomis. Asmenys,
          nesutinkantys bent su viena Taisyklių sąlyga, neturi teisės naudotis
          Auto Turgus aikštelėmis.
        </Text>
        <Text color="white" mb="8px">
          1.5. Auto Turgus kitiems asmenims tik teikia eksponavimo priemones ir
          nėra jokių asmenų atstovas ar agentas, suinteresuotoji šalis ar
          tarpininkas, todėl už ne Auto Turgus įsigytą nuosavybę neatsako.
        </Text>
        <Text color="white" mb="8px">
          1.6. Auto Turgus turi teisę vienašališkai keisti Auto Turgus teikiamas
          paslaugas bei jų apmokestinimą, bet kurias Taisyklių nuostatas. Jei
          pakeitus, pataisius ar papildžius Taisykles vartotojas toliau naudosis
          Auto Turgus aikštelėmis, tai reikš vartotojo sutikimą su Taisyklių
          pakeitimais.
        </Text>
        <Heading color="white" size="sm" mb="16px">
          2. Reikalavimai Auto Turgus aikštelių vartotojams
        </Heading>
        <Text color="white" mb="8px">
          2.1. Eksponuodamas tr. priemonę Auto Turgus aikštelių vartotojas
          prisiima visą atsakomybę už jo eksponuojamą tr. priemonę, įskaitant,
          bet ne tik:
          <UnorderedList>
            <ListItem>techninę būklę;</ListItem>
            <ListItem>teisėtumą;</ListItem>
            <ListItem>komplektaciją;</ListItem>
            <ListItem>tinkamumą eksploatuoti.</ListItem>
          </UnorderedList>
        </Text>
        <Text color="white" mb="8px">
          2.2. Auto Turgus vartotojai naudodamiesi Auto Turgus aikštelėmis
          eksponuojant savo tr. priemonę privalo klausyti visų Auto Turgus
          atstovų ir darbuotojų nurodymų kaip tinkamai eksponuoti savo tr.
          priemonę.
        </Text>
        <Text color="white" mb="8px">
          2.3. Auto Turgus vartotojai naudodamiesi Auto Turgus aikštelėmis vienu
          metu gali eksponuoti ne daugiau kaip vieną tr. priemonę, nebent Auto
          Turgus atstovai ar darbuotojai nurodys kitaip.
        </Text>
        <Text color="white" mb="8px">
          2.4. Auto Turgus vartotojai Auto Turgus aikštelėse eksponuojamą tr.
          priemonę gali patalpinti Auto Turgus internetinėje svetainėje už
          papildomą Auto Turgus nustatytą 10 000 (dešimties tūkstančių) eurų
          mokestį.
        </Text>
        <Text color="white" mb="8px">
          2.5. Auto Turgus aikštelėse draudžiama reklamuoti, skelbti
          informaciją, kurioje minimi su Auto Turgus tiesiogiai ar netiesiogiai
          konkuruojantys tretieji asmenys arba jų prekės ir(ar) paslaugos.
        </Text>
        <Text color="white" mb="8px">
          2.6. Auto Turgus aikštelėse draudžiama eksponuoti ir(ar) bandyti
          parduoti tr. priemones, kurios nepriklauso jas eksponuojančiam
          asmeniui.
        </Text>
        <Heading color="white" size="sm" mb="16px">
          3. Taisyklių pažeidimo pasekmės
        </Heading>
        <Text color="white" mb="8px">
          3.1. Auto Turgus aikštelėse vartotojas eksponuodamas savo tr. priemonę
          privalo laikytis visų Auto Turgus nustatytų instrukcijų ir šių
          Taisyklių. Priklausomai nuo pažeidimo pobūdžio, Auto Turgus turi
          teisę, tr. priemones, neatitinkančias Taisyklių ar valstybės teisės
          aktų, iš Auto Turgus aikštelių zonos išvežti, ištempti ar kitaip jas
          pašalinti.
        </Text>
        <Text color="white" mb="8px">
          3.2. Apie sankcijas, pritaikytas už Taisyklių pažeidimą, vartotojas
          informuojamas iš karto po pažeidimo. Taisyklių pažeidimo atveju
          vartotojas privalo apmokėti Auto Turgus patirtus nuostolius. Taisyklių
          pažeidimo atveju, papildomos užsakytos paslaugos yra anuliuojamos ir
          pinigai nėra gražinami.
        </Text>
        <Text color="white" mb="8px">
          3.3. Auto turgus pasilieka teisę bet kada be išankstinio įspėjimo
          nutraukti vartotojo priėjimą prie Auto Turgus aikštelių ar naudojimąsi
          Auto Turgus paslaugomis už Taisyklių ar teisės aktų pažeidimus.
        </Text>
        <Heading color="white" size="sm" mb="16px">
          4. Atsakomybės apribojimas
        </Heading>
        <Text color="white" mb="8px">
          4.1. Auto turgus atsako tik už savo parduodamas tr. priemones.
        </Text>
        <Text color="white" mb="8px">
          4.2. Auto turgus neatsako už bet kokius sutrikimus, kilusius dėl
          priežasčių, kurių Auto Turgus negali kontroliuoti.
        </Text>
        <Text color="white" mb="8px">
          4.3. Auto turgus, po pirkimo-pardavimo sutarties pasirašymo,
          nebeatsako už tr. priemonės techninę būklę, teisėtumą, komplektaciją
          ir tinkamumą eksploatuoti. Visa informacija apie tr. priemonę, kuri
          teikiama pardavimo metu yra tik orientacinė ir Auto Turgus neatsako už
          bet kokias klaidas ar netikslumus informacijoje apie tr. priemonę.
          Pirkėjas privalo patikrinti tr. priemonę ir jos dokumentus pats ir
          užtikrinti, kad jie yra teisėti ir tinkami naudoti. Auto Turgus
          neteikia jokios tr. priemonės garantijos.
        </Text>
        <Heading color="white" size="sm" mb="16px">
          5. Intelektinės nuosavybės teisės
        </Heading>
        <Text color="white" mb="8px">
          5.1. Auto turgus yra visų teisių į Auto Turgus aikštelėse eksponuojamų
          tr. priemonių ir turi išimtinę teisę į jų naudojimą.
        </Text>
        <Text color="white" mb="8px">
          5.2. Bet koks trečiųjų asmenų atliekamas Auto Turgus turinio, dizaino
          apdorojimas, kopijavimas ir (ar) kitoks naudojimos be raštiško Auto
          Turgus leidimo ir (arba) nesilaikant Taisyklių, yra autorių ir kitų
          teisių pažeidimas, baudžiamas pagal valstybės įstatymus.
        </Text>
        <Text color="white" mb="8px">
          5.3. Vartotojas sutinka, kad Auto Turgus turi teisę panaudoti
          fotografijas iš Auto Turgus aikštelių reklaminiais bendrovės tikslais,
          neatskleisdamas asmeninės vartotojo informacijos. Vartotojas sutinka,
          kad jo tr. priemonė ir pats vartotojas gali būti fotografuojamas ir
          vėliau fotografuotas turinys gali būti publikuojamas. Nei Auto Turgus,
          nei jokia kita trečioji šalis, naudodama iš Auto Turgus aikštelės
          publikuotą turinį, nebus įpareigota mokėti vartotojui autorinio ar
          kitokio atlyginimo už tokio turinio panaudojimą.
        </Text>
        <Heading color="white" size="sm" mb="16px">
          6. Taikytina teisė ir ginčų sprendimas
        </Heading>
        <Text color="white" mb="8px">
          6.1. Bet kokie ginčai, kilę Auto Turgus aikštelėse ar susiję su jose
          vykdoma veikla, bus sprendžiami derybų keliu, o nepavykus susitarti -
          valstybės kompetentingame teisme.
        </Text>
        <Text color="white" mb="8px">
          6.2. Vartotojas prašymą ir (ar) skundą dėl Auto Turgus veiklos ir
          paslaugų pirmiausia raštu privalo pateikti Auto Turgus atstovams ar
          darbuotojams ir nurodyti savo reikalavimus. Tokius raštus prašome
          siųsti adresu erelis@coastside.lt. Nesutikdamas su Auto Turgus
          atsakymu, vartotojas gali kreipti į vartotojų teisių apsaugos tarnybą,
          ar užpildyti prašymo formą vartotojų ginčų sprendimo komisijai.
          Teisminiai ginčai yra nagrinėjami teisės aktų nustatyta tvarka.
        </Text>
        <Heading color="white" size="sm" mb="16px">
          7. Baigiamosios nuostatos
        </Heading>
        <Text color="white" mb="8px">
          7.1. Taisyklės įsigalios nuo to momento, kai vartotojas patvirtins,
          kad sutinka su jomis ir galios visą santykių tarp vartotojo ir Auto
          Turgus laiką.
        </Text>
        <Text color="white" mb="8px">
          7.2. Kadangi Auto Turgus tobulėja ir vystosi, siekiant užtikrinti
          patogesnį bei saugesnį naudojimąsi Auto Turgus aikštelėmis, Auto
          Turgus turi teisę vienašališkai pakeisti Taisykles. Auto Turgus praneš
          vartotojui apie Taisyklių pakeitimus paskelbdamas apie tai savo
          internetinėje svetainėje. Taisyklių pakeitimai įsigalios nuo jų
          paskelbimo Auto Turgus internetinėje svetainėje.
        </Text>
        <Text color="white" mb="8px">
          7.3. Toliau naudodamasis Auto Turgus aikštelėmis, įskaitant, bet
          neapsiribojant paslaugų pratęsimu, naujų paslaugų užsakymų, po to, kai
          įsigalios Taisyklių pakeitimai, vartotojas patvirtinta, kad jis
          susipažino su tokiais pakeitimais ir visiškai su jais sutinka. Iki
          Auto Turgus Taisyklių pakeitimo užsakytos paslaugos teikiamo tokia
          tvarka ir terminais kaip buvo nustatyta tuo metu galiojusiose
          Taisyklėse.
        </Text>
      </Container>
    </>
  );
};

export default Rules;
