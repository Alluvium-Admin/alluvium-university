import {Fragment} from 'react';
import classes from './Map.module.css';

import { AiOutlineRight } from 'react-icons/ai';


const Map = () => {
    return ( 
    <Fragment>
        <div className={classes.page}>
            <h2>You could be working for one of our clients from these countries:</h2>
        </div>
        <div>
            <img src="images/worldmap.png"   alt='' />
        </div>
        <div className={classes.clist}>
            <div className={classes.europe}>
                <h3>Europe</h3> 
                <ul className={classes.dlist}>
                    
                    <li><AiOutlineRight/> England</li>
                    <li><AiOutlineRight/> Scotland</li>
                    <li><AiOutlineRight/>Netherlands</li>
                    <li><AiOutlineRight/> Belgium</li>
                    <li><AiOutlineRight/> France</li>
                </ul>
            </div>
            <div className={classes.europe}>
                <h3>North America</h3>
                <ul className={classes.dlist}>
                     
                    <li><AiOutlineRight /> USA</li>
                </ul>
            </div>
            <div className={classes.europe}>
                <h3>Africa</h3>
                <ul className={classes.dlist}>
                
                        
                
                    <li>
                        <AiOutlineRight /> Ghana
                    </li>

                    <li>
                        <AiOutlineRight /> Nigeria
                    </li>
                </ul>
               
            </div>
        </div>
        <div className={classes.dpan}>
            <span className={classes.news}>News and Trends</span>
            <span className={classes.read}>Read More News</span>
        </div>
    </Fragment> );
}
 
export default Map;