{rosterData.map((rower) => (
    <Card key={rower.id} 
      style={{ background: rower.id % 2 === 0 ? '#f0f0f0' : 'white', 
      marginBottom: rower.id === numRowers ? '20px' : '0px', 
      display: 'flex', 
      alignItems: 'center', 
      boxShadow: '0 0px 5px rgba(0, 0, 0, 0)' }}>
        <CardMedia
          component="img"
          alt={rower.name}
        //   height="140"
          image={rower.photo}
          style={{ width: '7%', objectFit: 'cover',  marginLeft: '20px', marginTop: '20px', marginBottom: '20px', marginRight: '20px' }}
        />
        {/* <CardContent style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}> */}
        <CardContent style={{alignItems: 'center' }}>
          <Typography variant="body2" style={{ fontSize: '12px', color: '#333', fontFamily: '"source-sans-pro", sans-serif' }}>
            {rower.position}
          </Typography>
          <Typography variant="body1" style={{ fontSize: '18px',color: '#666666', fontWeight: '700', fontFamily: '"source-sans-pro", sans-serif' }}>
            {rower.name}
          </Typography>
        </CardContent>
        <CardContent style={{  marginLeft: 'auto', marginRight: '0px', alignItems: 'center' }}>
            <Typography>&nbsp;&nbsp;</Typography>
            <Typography variant="body1" style={{ fontFamily: '"source-sans-pro", sans-serif', fontSize: '12px', color: '#2c2a29', width: '450px' }}>
              <span style={{ fontWeight: '700', fontStyle: 'italic' }}>{rower.year}&nbsp;</span>
              / {rower.major} / {rower.hometown} / {rower.highschool}
            </Typography>
            
        </CardContent>
      
    </Card>
  ))}