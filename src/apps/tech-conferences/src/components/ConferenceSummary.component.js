import {
    Box, Chip, 
} from '@material-ui/core'

function ConferenceSummary(props) {
  if (!props.conference.name) {
    return null
  }
  return (
    <Box id='conference-card' 
      style={{
        display: 'flex', flexDirection: 'row', backgroundColor: 'white', borderRadius: 4,
        height: 200, marginTop: 30
      }}
    >
      {/* <Box id='conference-img' style={{display: 'flex', flex: 1, backgroundColor: 'lightgrey', margin: 20, borderRadius: 8}}>
        <Box 
          style={{
            flex: 1, borderRadius: 8, width: 140, height: 160,
            backgroundImage: `url(${props.conference.img_link})`,
            backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
          }}
        > 
        </Box>
      </Box> */}
      <Box id='conference-summary' 
        style={{flex: 3, display: 'flex', flexDirection: 'column', marginTop: 20, marginBottom: 20}}
      >
        <Box style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <Box style={{fontSize: 20, fontWeight: 'bold'}}>{props.conference.name}</Box>
          <Box style={{display: 'flex', flexDirection: 'row', fontSize: 14, marginRight: 20}}>
            <Box style={{paddingRight: 15}}>Aug 8 to Aug 11</Box>
          </Box>
        </Box>
        <Box style={{flex: 1, marginTop: 15, marginRight: 20, fontSize: 12, fontStyle: 'italic'}}>
          {props.conference.description}
        </Box>
        <Box style={{marginRight: 20, alignItems: 'space-around', }}>
          <Chip style={{marginRight: 10}} label='Security' size='small'/>
          <Chip style={{marginRight: 10}} label='Hacking' size='small'/>
        </Box>
      </Box>
    </Box>
  );
}

export default ConferenceSummary;