import patients from "../index";

const patientObject = (patientsList) => {
  const nPatients = patientsList.length;
  return nPatients;
};

const patientObjectAdult = (patientList) => {
  const nAdults = patientList.filter((element) => element.patient.age > 18);
  return nAdults;
};

describe("Given a patientObject function", () => {
  describe("When it recieves the patients array", () => {
    test("Then it should return an array length", () => {
      // Arrange
      const arrayP = patients;
      const expectedResult = 6;
      // Act
      const functionP = patientObject(arrayP);
      // Assert
      expect(functionP).toBe(expectedResult);
    });
  });
});

describe("Given a patientObject function", () => {
  describe("When it recieves the patients array", () => {
    test("Then it should return an array with only adults", () => {
      // Arrange
      const arrayP = patients;
      const expectedResult = [
        {
          patient: {
            name: "Luis",
            age: 25,
            sex: "M",
          },
          daysInHospital: 3,
          diet: "Low fiber",
        },
        {
          patient: {
            name: "Marta",
            age: 56,
            sexo: "W",
          },
          daysInHospital: 5,
          diet: "Diabetes",
        },
        {
          patient: {
            name: "Julia",
            age: 38,
            sexo: "W",
          },
          daysInHospital: 1,
          diet: "Salt free",
        },
        {
          patient: {
            name: "Esteban",
            age: 40,
            sexo: "M",
          },
          daysInHospital: 3,
          diet: "Diabetes",
        },
        {
          patient: {
            name: "Isabel",
            age: 63,
            sexo: "W",
          },
          daysInHospital: 6,
          diet: "Salt free",
        },
      ];

      // Act
      const functionP = patientObjectAdult(arrayP);
      // Assert
      expect(functionP).toEqual(expectedResult);
    });
  });
});
