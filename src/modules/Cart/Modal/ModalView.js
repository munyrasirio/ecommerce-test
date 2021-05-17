import { 
  Box, 
  Button,
  Heading, 
  Layer
} from 'grommet';

export default function ModalView ({label, title, clickEvt}) {
  return (
    <Layer responsive={false}> 
      <Box
        pad="medium"
        width={{"min": "250px", "max": "450px"}}
      >
        <Heading 
          level="3"
          textAlign="center"
        >
          {title}
        </Heading>
        <Button 
          primary
          label={label}
          onClick={clickEvt} />
      </Box>
    </Layer>    
  )
}