import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo, WhatsAppButton } from './UI';
export const links = [['Início','inicio'],['Motos','motos'],['Financiamento','financiamento'],['Venda sua Moto','venda'],['Sobre Nós','sobre'],['Clientes','clientes'],['Contato','contato']];
export default function Header({ onContact }) {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const scroll = () => setScrolled(window.scrollY > 35); scroll(); window.addEventListener('scroll',scroll,{passive:true}); return () => window.removeEventListener('scroll',scroll); },[]);
  useEffect(() => { if(!open) return; const key = e => {if(e.key==='Escape')setOpen(false)}; window.addEventListener('keydown',key); return () => window.removeEventListener('keydown',key); },[open]);
  return <header className={`header ${scrolled || open ? 'header-solid' : ''}`}><div className="container header-inner"><Logo/><nav id="main-nav" aria-label="Menu principal" className={open?'nav nav-open':'nav'}>{links.map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{label}</a>)}</nav><div className="header-cta"><WhatsAppButton onContact={onContact}/></div><button className="icon-button menu-toggle" aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open} aria-controls="main-nav" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header>;
}
