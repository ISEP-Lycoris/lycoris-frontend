import styles from "@/pages/index.module.css";
import { Button as ButtonJ } from '@mui/joy';
import { Button as ButtonB } from '@mui/base/Button';
import { Button } from '@mui/material'


export default function Test() {
  return (
    <main className={styles.main}>

      <div>
        <ButtonJ>Click J</ButtonJ>
        <ButtonB>Click B</ButtonB>
        <Button variant={'contained'}>Click B</Button>
      </div>

      <div className={styles.grid}>
      </div>
    </main>
  );
}
