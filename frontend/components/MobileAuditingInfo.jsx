import React from 'react';
import styles from '../styles/MobileAuditingInfo.module.css';

const MobileAuditingInfo = () => {
  return (
    <div>
        <div className={styles.infoContainer}>
            <h2 className={styles.title}>SC Auditing Experience</h2>
            <div className={styles.section}>
                <span>Code4rena:</span>
                <ul>
                    <li><a>Asymmetry Report</a></li>
                </ul>
            </div>
            <div className={styles.section}>
                <span>Practice:</span>
                <ul>
                    <li><a href="https://github.com/CadeDev17/SmartContractAudits/tree/master/Code4rena/Y2K_Finance">Y2K Finance Report</a></li>
                    <li><a href="https://github.com/CadeDev17/SmartContractAudits/tree/master/Code4rena/Frax_Finance">Frax Finance Report</a></li>
                </ul>
            </div>
            <div className={styles.section}>
                <span>All Things Auditing:</span>
                <ul>
                    <li><a href="https://www.notion.so/bitsorbytesdev/82af86c128ba4743a06e10d5394e498f?v=70cd793088f74c57a220558ecb21fa5a">Auditing Findings Database</a></li>
                    <li><a href="https://bitsorbytesdev.notion.site/424a7db928524fa9b45ffe24e2fe937e?v=bf358f31e0c9445fa773d23b170b8391">My Ethernaut Solutions</a></li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default MobileAuditingInfo;