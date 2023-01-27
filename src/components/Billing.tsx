import React from 'react';
import style from '../styles/components/Billing.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { setPage } from '../app/slices/userSlice';
const Billing = () => {
  const dispatch = useDispatch();
  const { plan, totalPlan, yearly, addon, totalAddon } = useSelector(
    (state: RootState) => state.user
  );
  const plans = ['Online service', 'Larger storage', 'Customizable profile'];
  const addonPrices = [1, 2, 2];
  const addonPricesA = [10, 20, 20];

  const redirect = () => {
    dispatch(setPage(2));
  };

  return (
    <>
      <div className={style.Card__body}>
        <div className={style.Card__body_plan}>
          <div className={style.Card__body_plan_content}>
            <span>
              {plan}({yearly ? 'Yearly' : 'Monthly'})
            </span>
            <span style={{ cursor: 'pointer' }} onClick={redirect}>
              Change
            </span>
          </div>
          <div className={style.Card__body_plan_content_price}>
            ${totalPlan}/mo
          </div>
        </div>
        <div>
          {plans.map((item, i) => {
            const isValid = Object.values(addon);
            if (isValid[i]) {
              return (
                <div className={style.card_body_addon}>
                  <span>{item}</span>
                  <span>${!yearly ? addonPrices[i] : addonPricesA[i]}/mo</span>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className={style.total}>
        <span>Total({!yearly ? 'per month' : 'per year'})</span>
        <span>
          +${totalAddon + totalPlan}/{yearly ? 'yr' : 'mo'}
        </span>
      </div>
    </>
  );
};

export default Billing;
