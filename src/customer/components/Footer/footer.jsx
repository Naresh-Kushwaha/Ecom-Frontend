import { Button, Grid, Typography } from "@mui/material"

const Footer=()=>{


    return(
        <div>
            <Grid className="bg-black text-center mt-10" container sx={{bgcolor:"black",color:"white",py:3}}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6" >Company</Typography>
                    <div>
                    <Button className="pb-5" variant="h6" >About</Button>
                    </div>
                    <div>
                    <Button className="pb-5" variant="h6" >blogs</Button>
                        </div>
                        <div>
                        <Button className="pb-5" variant="h6" >press</Button>
                        </div>
                        <div>
                        <Button className="pb-5" variant="h6" >job</Button>
                        </div>
                        <div>
                        <Button className="pb-5" variant="h6" >partner</Button>
                        </div>
                   
                    
                    
                  
                  
                    
                </Grid>
                 </Grid>
        </div>
    )
}
export default Footer