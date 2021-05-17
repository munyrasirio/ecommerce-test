import { 
  Button,
} from "grommet";
import { FormAdd, FormSubtract } from 'grommet-icons';

export default function StdBtnView ({type, title, clickEvt}) {
  return (
    <Button 
      primary
      plain
      title={title}
      margin={{horizontal: "small"}} 
      icon={type === "Add" ? <FormAdd /> : <FormSubtract />}
      onClick={clickEvt} 
    />
  )
}