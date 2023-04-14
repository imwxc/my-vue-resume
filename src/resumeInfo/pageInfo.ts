import { ModuleTitle } from '@/constants';
import type { ModuleConfig, ProjectExp, ResumeInfo, WorkExp, infoArea } from '@/interface'
function getBaseInfo(resume: ResumeInfo){}
function getModuleInfoList(resume: ResumeInfo): ModuleConfig[]{
    const moduleList = [] as ModuleConfig[];
    Object.keys(resume).forEach( i=>{

    })
    return moduleList
}
function parseSkillorEducationExp(resume: ResumeInfo, key: keyof Pick<ResumeInfo, 'skills' | 'educationExp'>):ModuleConfig{
    return {
        moduleType: key,
        moduleTitle: ModuleTitle[key],
        infoAreaList:[{
            areaInfoList: [
                {
                    infoTitle: '',
                    infoType: 'list',
                    infoList: resume[key]
                }
            ],
            areaType: 'list'
        }]
    }
}
function parseWorkExpsorProjectExps(resume: ResumeInfo, key: keyof Pick<ResumeInfo, 'workExps' | 'projectExps'>):ModuleConfig[]{
    const getAreaInfoItem = (i:( WorkExp & ProjectExp ),key: keyof Pick<ResumeInfo, 'workExps' | 'projectExps'>): infoArea['areaInfoList']=>{
        if(key === 'workExps') return [
            {
                infoTitle: '',
                infoType: 'list',
                infoList: i.works || []
            }
        ]
        const projAreaInfoList = [] as infoArea['areaInfoList'];
        if(key === 'projectExps'){
            Object.keys(i).forEach((item)=>{
                const temp = i[item]
            })
        }

        return []
    }
    return resume[key].map((i:( Partial<WorkExp> & Partial<ProjectExp> ))=>({
        moduleType: key,
        moduleTitle: ModuleTitle[key],
        infoAreaList:[{
            areaTitle: i.title,
            areaInfoList: [
                {
                    infoTitle: '',
                    infoType: 'list',
                    infoList: i?.works || i?.actions || i?.results || []
                }
            ],
            areaType: 'list'
        }]
    }))
}
export default function getPageInfo(resume: ResumeInfo){
    return {
        baseInfo: getBaseInfo(resume),
        moduleInfoList: getModuleInfoList(resume),
    }
}