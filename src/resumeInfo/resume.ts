
import type { WorkExp, ProjectExp, EducationExp, MyInfo, Resume, ResumeInfo } from '../interface'
function getHobby(hobby:string){
    return hobby
}
function addWorkExp(workExp: WorkExp){
    return {
        ...workExp,
    }
}
function addProjectExp(projectExp: ProjectExp){
    return {
        ...projectExp,
    }
}
function addSkill(skill: string){
    return skill
}
function getEducationExp(educationExp: EducationExp){
    return {
        ...educationExp,
    }
}
function getMyInfo(info: MyInfo){
    return {
        ...info
    }
}
function getMyResume(resumeInfo: ResumeInfo): Resume{
    return {
        myinfo: getMyInfo(resumeInfo.myinfo),
        skills: resumeInfo.skills.map(i=>addSkill(i)),
        educationExp: getEducationExp(resumeInfo.educationExp),
        workExps: resumeInfo.workExps.map(i=>addWorkExp(i)),
        projectExps: resumeInfo.projectExps.map(i=>addProjectExp(i)),
        hobbys: resumeInfo.hobbys.map(i=>getHobby(i))
    }
}
export default getMyResume;