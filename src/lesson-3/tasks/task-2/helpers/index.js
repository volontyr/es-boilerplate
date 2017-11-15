import { getEntityById } from "../after/dataManager/index";

export default (obj) => {

    if (typeof obj.id !== 'number') {
        throw new Error("Object must have id property and it must be a Number");
    }

    if (getEntityById(obj.id) !== null) {
        throw new Error(`Object must have unique id property. Such ${obj.id} already exists`);
    }

    if (typeof obj.firstName !== 'string') {
        throw new Error("Object must have firstName property and it must be a String");
    }

    if (typeof obj.secondName !== 'string') {
        throw new Error("Object must have secondName property and it must be a String");
    }

    if (typeof obj.age !== 'number') {
        throw new Error("Object must have age property and it must be a Number");
    }

    if (obj.age <= 0) {
        throw new Error("Age property must be greater that 0");
    }

    if (typeof obj.sex !== 'string') {
        throw new Error("Object must have sex property and it must be a String");
    }

    if (!['male', 'female'].includes(obj.sex)) {
        throw new Error("Sex property can be one of two values: 'male' or 'female'");
    }
}
