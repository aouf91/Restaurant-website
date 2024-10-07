
import { errorHandlerClass } from "../utils/error-class.utils.js";
export const authorization =(allowesRules) => {
    return (req,res,next) => {
        const user = req.authUser; // loggedIn user
        if(!allowesRules.includes(user.role)){
            return next (new errorHandlerClass('Authorization Error',401,'You are not allowed to access this page.'));
        }
        next();
    }

}