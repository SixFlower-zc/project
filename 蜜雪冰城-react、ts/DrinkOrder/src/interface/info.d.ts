interface Right {
  id: string;
  rightName: string;
  assistDesc: string;
  imgs: string;
}

interface CategoryRight {
  id: number;
  name: string;
  rights: Right[];
}

interface Data {
  id: number;
  name: string;
  backgroundColor: string;
  growthValueMin: number;
  growthValueMax: number;
  nextLevelTxt: string;
  tequan: number;
  icon: string;
  categoryRights: CategoryRight[];
}

interface RootObject {
  data: Data[];
}
