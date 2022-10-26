import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
export default function Navbar(){
return(
<ul className = {styles.navbar}>

<li>
        <Link href="/"><a>Home</a></Link>
    </li>
  
    <li>
        <Link href="/projetos"><a>Projetos</a></Link>
    </li>
    <li>
        <Link href="/about"><a>Sobre Nós</a></Link>
    </li>


 
  
  </ul>

)

}