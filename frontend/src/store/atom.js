import {atom} from "recoil";

const sectionatom = atom({
    key: 'sectionatom',
    default: "upload"
})

export default sectionatom;

export const nameatom = atom({
    key: 'nameatom',
    default: ""
})

export const tokenatom = atom({
    key: 'tokenatom',
    default: ""
})