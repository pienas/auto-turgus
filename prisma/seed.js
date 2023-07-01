const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const seed = async () => {
  try {
    await prisma.vehicle.create({
      data: {
        name: "Lexus RC350",
        price: 4000000,
        imageUrl:
          "https://img.gta5-mods.com/q95/images/lexus-rc350/62e43a-RC4.jpg",
        engine: "V12",
        transmission: "Level3",
        brakes: "Competition",
        suspension: "Rally",
        tyres: "Standard",
        turbine: true,
        airSuspension: false,
        armor: false,
        xenon: true,
        radio: true,
        sold: false,
      },
    });
    await prisma.vehicle.create({
      data: {
        name: "Audi RS6",
        price: 2500000,
        imageUrl:
          "https://img.gta5-mods.com/q95/images/2021-audi-rs6-sedan-c8-add-on/b8c954-40.jpg",
        engine: "V10",
        transmission: "Level3",
        brakes: "Performance",
        suspension: "Street",
        tyres: "Standard",
        turbine: true,
        airSuspension: true,
        armor: true,
        xenon: true,
        radio: true,
        sold: true,
      },
    });
    await prisma.vehicle.create({
      data: {
        name: "Lexus LFA",
        price: 3250000,
        imageUrl: "https://i.imgur.com/qpR08ck.png",
        engine: "V12",
        transmission: "Level3",
        brakes: "Competition",
        suspension: "Rally",
        tyres: "Standard",
        turbine: true,
        airSuspension: false,
        armor: false,
        xenon: true,
        radio: true,
        sold: false,
      },
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

seed();
