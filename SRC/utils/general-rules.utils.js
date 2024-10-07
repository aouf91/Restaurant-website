import Joi from "joi";
import { Types } from "mongoose"


const objectIdRule = (value,helper) => {
    const isObjectValid= Types.ObjectId.isValid(value); //boolean
    return isObjectValid ? value : helper.message('Invalid object Id')
};

export const generalRules = {
    objectId : Joi.string().custom(objectIdRule),

}