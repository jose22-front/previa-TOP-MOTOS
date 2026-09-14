import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Inventory from './sections/Inventory';
import { Modal, Button } from './components/UI';
import { WHATSAPP_NUMBER, STORE } from './data/config';
import { Financing, SellBike } from './sections/Forms';
import { Benefits, Clients, About, InstagramSection, Location, FinalCTA, Footer } from './sections/Company';
export default function App(){
  const [contact,setContact]=useState(null); const [copied,setCopied]=useState(false);
  useEffect(()=>{if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');observer.unobserve(e.target);}}),{threshold:.07});document.querySelectorAll('.section-heading,.section-copy,.form-card,.benefits-grid,.store-photo,.clients-grid,.sell-heading').forEach(el=>{el.classList.add('reveal');observer.observe(el);});return()=>observer.disconnect();},[]);
  function onContact(message='Olá! Vim pelo site da Top Motos 021 e gostaria de falar com um consultor.') {if(/^\d{12,13}$/.test(WHATSAPP_NUMBER)){window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');}else{setCopied(false);setContact(message);}}
  async function copy(){try{await navigator.clipboard.writeText(contact);setCopied(true);}catch{setCopied(false);}}
  return <><a className="skip-link" href="#motos">Pular para o conteúdo</a><Header onContact={onContact}/><main><Hero onContact={onContact}/><Inventory onContact={onContact}/><Financing onContact={onContact}/><SellBike onContact={onContact}/><Benefits/><Clients onContact={onContact}/><About/><InstagramSection/><Location onContact={onContact}/><FinalCTA onContact={onContact}/></main><Footer onContact={onContact}/><button className="floating-whatsapp" aria-label="Falar com a Top Motos pelo WhatsApp" onClick={()=>onContact()}><MessageCircle size={27}/></button>{contact&&<Modal title="Vamos conversar?" onClose={()=>setContact(null)}><p>O número do WhatsApp ainda não foi informado. Fale com a Top Motos pelo Instagram ou copie sua mensagem para usar depois.</p><label className="field contact-message"><span>Sua mensagem — ainda não enviada</span><textarea readOnly value={contact} rows={6}/></label><div className="contact-actions"><Button href={STORE.instagram} target="_blank" rel="noopener noreferrer">ABRIR INSTAGRAM</Button><Button secondary onClick={copy}>{copied?'MENSAGEM COPIADA':'COPIAR MENSAGEM'}</Button></div><p className="data-note" aria-live="polite">{copied?'Agora você pode colar a mensagem na conversa.':'Você também pode selecionar e copiar o texto acima.'}</p></Modal>}</>;
}
