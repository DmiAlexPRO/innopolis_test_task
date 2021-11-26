import { Container } from "@mui/material";
import Link from '@mui/material/Link';



function Aboutme(){
    

    return(
        <Container className="p-grid">
            <p>
                Была идея, чтобы написать тут небольшое сопроводительное письмо, <br/>
                но я так и не успел, не удалять же теперь раздел) На всякий случай <br/>
                оставлю тут ссылку на <Link href='https://career.habr.com/dmialexpro'>резюме</Link>.
            </p>
            
            
        </Container>
    );
}

export default Aboutme;