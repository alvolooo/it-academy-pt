export interface Feature {
  id: number;
  name: string;
}

interface CertificateData {
  id: number;
  fullName: string;
  direction: string;
  dateStart: string;
  dateFinish: string;
  features: Feature[];
}

type UseCertType = {
  addCert(): Promise<CertificateData>;
};

function getData(): Promise<CertificateData> {
  return new Promise<CertificateData>((resolve) => {
    setTimeout(
      () =>
        resolve({
          id: 1,
          fullName: "Petr Petrov Petrovich",
          direction: "front",
          dateFinish: "11/05/2022",
          dateStart: "11/04/2022",
          features: [
            {
              id: 1,
              name: "Context",
            },
            {
              id: 2,
              name: "Material UI",
            },
          ],
        }),
      5000
    );
  });
}

export const useCert = (): UseCertType => {
  const addCert = async () => {
    const result = await getData();
    return result;
  };
  return {
    addCert,
  };
};
