// components/Footer/index.tsx
'use client';

import Link from 'next/link';
import { Facebook, Instagram, Github, Youtube } from 'lucide-react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Navigation Links */}
        <div className="footer-nav-links">
          <Link href="/about" className="footer-link">
            About
          </Link>
          <Link href="/blog" className="footer-link">
            Blog
          </Link>
          <Link href="/jobs" className="footer-link">
            Jobs
          </Link>
          <Link href="/press" className="footer-link">
            Press
          </Link>
          <Link href="/accessibility" className="footer-link">
            Accessibility
          </Link>
          <Link href="/partners" className="footer-link">
            Partners
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-link">
            <Facebook size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-link">
            <Instagram size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="footer-social-link">
            <span className="footer-icon-wrapper">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.5 11.5M4.5 20l15-15" />
                <path d="M19 4L4.5 18.5M15 20l4-4" />
              </svg>
            </span>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-social-link">
            <Github size={24} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social-link">
            <Youtube size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>© 2025 Your Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;