import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {


  return (
<>
<Head>
  <title>Página Principal</title>
  <meta name="Keywords" content="palavra chave01, palavra chave02, palavra chave03, palavra chave04, "></meta>
  <meta name="description" content="Descrição da sua empresa aqui!, "></meta>
</Head>
<div>
  <h1 className = {styles.title}>Olá Sejá Bem Vindo!!</h1>
  <p>Esse site está em construção!!</p>
  <Image 
  src="/images/02.jpg"
  width="700px"
  height="500px"
  alt="Chave da Empresa"
  />
  
  </div>
</>
  )
}
