import { useEffect, useRef } from 'react';
import { ArrowUpRight, X, MessageCircle } from 'lucide-react';
export function Logo() { return <a className="logo" href="#inicio" aria-label="Top Motos 021, início"><span>TOP<span className="logo-slashes">///</span></span><strong>MOTOS<span className="logo-number">021</span></strong><small>FÁBRICA DE REALIZAR SONHOS</small></a>; }
export function Button({ children, onClick, href, secondary, className = '', ...props }) { const C = href ? 'a' : 'button'; return <C href={href} onClick={onClick} className={`button ${secondary ? 'button-secondary' : ''} ${className}`} {...props}>{children}<ArrowUpRight size={18}/></C>; }
export function WhatsAppButton({ onContact, children = 'Falar no WhatsApp', ...props }) { return <button className="button" onClick={() => onContact()} {...props}><MessageCircle size={19}/>{children}</button>; }
export function SectionTitle({ eyebrow, title, text, children }) { return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>{children}</div>; }
export function Modal({ title, onClose, children }) {
  const ref = useRef(null);
  useEffect(() => { const d = ref.current; const focused = document.activeElement; d.showModal(); const before = document.body.style.overflow; document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = before; focused?.focus(); }; }, []);
  return <dialog ref={ref} className="modal" aria-labelledby="modal-title" onCancel={onClose} onClick={e => { if(e.target === e.currentTarget) { const r = e.currentTarget.getBoundingClientRect(); if(e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) onClose(); } }}><button className="icon-button modal-close" onClick={onClose} aria-label="Fechar"><X/></button><h2 id="modal-title">{title}</h2>{children}</dialog>;
}
