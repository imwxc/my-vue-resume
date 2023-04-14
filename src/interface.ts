type Title = {
    time: string;
    role: string;
    company?: string;
    project?: string;
}
export type WorkExp = {
    title: Title
    works: string[]
}
export type ProjectExp = {
    title: Title,
    backGround: string
    action: string[];
    result: string[];
}
export type MyInfo = {
    name: string;
    gental: string;
    tel: number;
    email: string;
    pic: string;
    nationality: string;
}
export type Hobbys = string[]
export type Skills = string[]
export type EducationExp = string[]
export type Resume = {
    myinfo: MyInfo,
    skills: Skills,
    educationExp:EducationExp,
    workExps:WorkExp[],
    projectExps:ProjectExp[],
    hobbys: Hobbys,
}
export type ResumeInfo = {} & Resume