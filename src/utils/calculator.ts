import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
/* 
const yearly = useSelector((state: RootState) => state.user.yearly);
const addon = useSelector((state: RootState) => state.user.addon);
const plan = useSelector((state: RootState) => state.user.plan) */
const getTotalBill = () => {
  let plans = [9, 12, 15];
  let yplan = [90, 120, 150];
  let add = [1, 2, 2];
  let yadd = [10, 20, 20];
  let total = 0;
  /*     let isAnual = yearly
    if(!isAnual){
        if(plan === "Arcade"){
            total += 9
        }
        if(plan === "Advanced"){
            total += 12
        }
        if(plan === "Advanced"){
            total += 15
        }
    }else{
        
    }
 */
  return total;
};

export default getTotalBill;
