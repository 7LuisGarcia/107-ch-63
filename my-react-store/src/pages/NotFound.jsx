import {Link} from 'react-router-dom';

import {IconMoodPuzzled} from '@tabler/icons-react';
import {IconCodeCircle} from '@tabler/icons-react';
import { IconInfoCircle } from '@tabler/icons-react';
function NotFound(){
    return(
        <div className='pb-4'>
            <IconInfoCircle/>
            <IconMoodPuzzled size={84} color={"blue"} />
            <IconCodeCircle size={84} color={"green"} />
           
            <h1 className='fs-6'>404 - Page Not Found  <IconInfoCircle/> </h1>
            <p className="-text-secondary fs-5">Oops page does not exist</p>
            <Link className='btn btn-dark' to="/">Go Home</Link>
            
        </div>
    )
}

export default NotFound