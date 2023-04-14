export type Title = {
  time: string;
  role: string;
  company?: string;
  project?: string;
};
export type WorkExp = {
  title: Title;
  works: string[];
};
export type ProjectExp = {
  title: Title;
  background: string;
  actions: string[];
  results: string[];
};
export type MyInfo = {
  name: string;
  gental: string;
  tel: number;
  email: string;
  pic: string;
  nationality: string;
};
export type Hobbys = string[];
export type Skills = string[];
export type EducationExp = string[];
export type Resume = {
  myinfo: MyInfo;
  skills: Skills;
  educationExp: EducationExp;
  workExps: WorkExp[];
  projectExps: ProjectExp[];
  hobbys: Hobbys;
};
export type ResumeInfo = {} & Resume;
export type infoArea = { 
    areaType: string // 标明第一层模块是什么
    areaTitle?: Partial<Title>
    areaInfoList : {
        infoTitle: string,
        infoType: string,
        infoList: (Skills | EducationExp | WorkExp['works'] | ProjectExp['actions'] | ProjectExp['results']) | (ProjectExp['background'])[]
    }[],
};
export type ModuleConfig = Partial<{
  infoAreaList: infoArea[]; 
  moduleType: string; // keyof ResumeInfo
  moduleTitle: string // title of the module
}>;
export type PageConfig = {
    myInfo: MyInfo,
    moduleList: ModuleConfig[]
}