import { patients, type Patient } from '../mocks/patients';

export type MockScenario = 'normal' | 'slow' | 'empty' | 'error';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function searchPatients(query: string, scenario: MockScenario = 'normal'): Promise<Patient[]> {
  if (scenario === 'slow') await sleep(1800);
  if (scenario === 'error') throw new Error('Synthetic patient search error');
  if (scenario === 'empty') return [];

  const needle = query.trim().toLowerCase();
  if (!needle) return [];

  return patients.filter((patient) => {
    const fullName = `${patient.firstName} ${patient.lastName}`.toLowerCase();
    return patient.hn.includes(needle) || fullName.includes(needle);
  });
}
