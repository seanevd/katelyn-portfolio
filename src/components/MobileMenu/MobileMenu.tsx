import { useEffect, useRef, useState } from "react";
import { ABOUT_HREF, EMAIL_ADDRESS, RESUME_HREF } from "../../consts";
import './MobileMenu.css'

export default function MobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            const menuElement = menuRef.current;

            const focusableElements = menuElement?.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            ) as NodeListOf<HTMLElement>;

            const firstElement = focusableElements && focusableElements[0];
            const lastElement = focusableElements && focusableElements[focusableElements.length - 1];

            const handleTabKeyPress = (event: KeyboardEvent) => {
            if (event.key === "Tab") {
                if (event.shiftKey && document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement?.focus();
                } else if (
                    !event.shiftKey &&
                    document.activeElement === lastElement
                ) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
            };

            const handleEscapeKeyPress = (event: KeyboardEvent) => {
                if (event.key === "Escape") {
                    setIsMenuOpen(false);
                }
            };

            menuElement?.addEventListener("keydown", handleTabKeyPress);
            menuElement?.addEventListener("keydown", handleEscapeKeyPress);

            return () => {
            menuElement?.removeEventListener("keydown", handleTabKeyPress);
            menuElement?.removeEventListener("keydown", handleEscapeKeyPress);
            };
        } else {
            document.body.style.overflow = '';
        }
      }, [isMenuOpen, setIsMenuOpen]);

    return (
        <>
            <button 
                className={`menu-icon-wrapper ${isMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMenuOpen((prev) => !prev)}>
                <div className="menu-icon"></div>
            </button>
            {isMenuOpen && (
                <aside ref={menuRef} className="responsive-text-large">
                    <ul>
                        <li>
                            <a href={RESUME_HREF}>Resume</a>
                        </li>
                        <li>
                            <a href={ABOUT_HREF}>About</a>
                        </li>
                    </ul>
                    <div className="contact">
                        <div className="mono-medium">Contact</div>
                        <a className="email" href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
                        <div className="social-links">
                            <a href="https://medium.com/@duncan.katelynj" target="_blank">
                                <span className="sr-only">Read My Articles on Medium</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1043.63 592.71"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M588.67,296.36c0,163.67-131.78,296.35-294.33,296.35S0,460,0,296.36,131.78,0,294.34,0,588.67,132.69,588.67,296.36"/><path d="M911.56,296.36c0,154.06-65.89,279-147.17,279s-147.17-124.94-147.17-279,65.88-279,147.16-279,147.17,124.9,147.17,279"/><path d="M1043.63,296.36c0,138-23.17,249.94-51.76,249.94s-51.75-111.91-51.75-249.94S963.29,46.42,991.87,46.42s51.76,111.9,51.76,249.94"/></g></g></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/duncankatelyn/" target="_blank">
                                <span className="sr-only">Follow Me on LinkedIn</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                        </div>
                    </div>
                    
                </aside>
            )}
            
        </>
    )
}