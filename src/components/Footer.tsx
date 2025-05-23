import React from 'react';
import { Github, Mail, Linkedin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-surface py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Min Kyu Kim</h2>
            <p className="text-text-secondary">Frontend Developer</p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <a 
              href="mailto:kmkkkp@ajou.ac.kr" 
              className="flex items-center gap-2 bg-background hover:bg-primary/20 text-text-secondary hover:text-primary transition-colors px-4 py-2 rounded-lg"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
            
            <a 
              href="https://github.com/kmkkkp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-background hover:bg-primary/20 text-text-secondary hover:text-primary transition-colors px-4 py-2 rounded-lg"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/민규-김-8b9371271/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-background hover:bg-primary/20 text-text-secondary hover:text-primary transition-colors px-4 py-2 rounded-lg"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="https://kmkkkp.github.io/kmkkkp/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-background hover:bg-primary/20 text-text-secondary hover:text-primary transition-colors px-4 py-2 rounded-lg"
            >
              <ExternalLink size={18} />
              <span>Original Site</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-text-muted/20 text-center text-text-muted text-sm">
          <p>© {new Date().getFullYear()} Min Kyu Kim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;