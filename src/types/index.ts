export interface PersonConditions {
  qualitativeEvaluation: boolean;
  seniorWorker: boolean;
  pregnancy: boolean;
  telework: boolean;
  screenWork: boolean;
}

export interface PhysicalTaskLoad {
  manualHandling: boolean;
  pushPull: boolean;
  repetitiveMovements: boolean;
  forcedPostures: boolean;
  posturalEvaluationType?: string;
  toolsForceVibration: boolean;
}

export interface WorkConditions {
  workType: string;
  posture: string;
  repetitive: string;
  load: string;
  duration: string;
}

export interface PhysicalLoad {
  forceLevel: string;
  frequency: string;
  handArms: boolean;
  back: boolean;
  lowerLimbs: boolean;
  wholebody: boolean;
}

export interface Methodology {
  id: string;
  name: string;
  description: string;
  bodyArea: string[];
  workType: string[];
  riskLevel: string;
  link?: string;
}

export interface FormData {
  personConditions: PersonConditions | null;
  physicalTaskLoad: PhysicalTaskLoad | null;
  workConditions: WorkConditions | null;
  physicalLoad: PhysicalLoad | null;
}