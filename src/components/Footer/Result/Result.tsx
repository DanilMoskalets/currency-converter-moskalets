import React from 'react';
import {useSelector} from 'react-redux';
import {currencyFullName, setCommasInNumber} from '../../../common/common';
import {RootState} from '../../../store/store';
import styles from './Result.module.css';

const Result: React.FC = () => {
    const {quote, amount, rate} = useSelector(
        (s: RootState) => s.currency
    );

    const fixedAmount = (+amount || 1).toFixed(2);


    return (
        <div className={styles.result}>
            <p className={styles.resultTo}>
        <span>
          {rate
              ? setCommasInNumber((rate * +fixedAmount || 1).toFixed(2))
              : '0.00'}
            &nbsp;
        </span>
                <span>{`${currencyFullName[quote]}s`}&nbsp;</span>
            </p>
        </div>
    );
};

export default Result;
