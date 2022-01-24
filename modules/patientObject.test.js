import patients from "../index";

const patientObject = (patientsList) => {
  const nPatients = patientsList.length;
  return nPatients;
};

describe("Given a patientObject function", () => {
  describe("When it recieves an array", () => {
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
