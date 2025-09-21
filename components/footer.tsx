"use client"

import { Mail, MapPin, Phone, Linkedin, Facebook, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-card to-muted border-t border-border w-full">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="md:col-span-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-4 md:mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated_Image_September_01__2025_-_10_20PM-removebg-preview-5i1c8quWnywB8yKfCOVEZgdbVqLu3e.png"
                alt="Hippocampus Consulting Logo"
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
            </div>
            <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Votre partenaire de confiance pour la transformation et la croissance de votre entreprise. Solutions
              personnalisées et expertise internationale.
            </p>
            <div className="flex justify-center md:justify-start space-x-3">
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 glow-on-hover group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce" />
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 glow-on-hover group"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce" />
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 glow-on-hover group"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-foreground mb-4 md:mb-6 text-base md:text-lg">Liens Rapides</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="#accueil"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center justify-center md:justify-start group text-sm md:text-base"
                >
                  <span className="w-2 h-2 bg-primary/30 rounded-full mr-3 group-hover:bg-primary transition-colors flex-shrink-0"></span>
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center justify-center md:justify-start group text-sm md:text-base"
                >
                  <span className="w-2 h-2 bg-primary/30 rounded-full mr-3 group-hover:bg-primary transition-colors flex-shrink-0"></span>
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#apropos"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center justify-center md:justify-start group text-sm md:text-base"
                >
                  <span className="w-2 h-2 bg-primary/30 rounded-full mr-3 group-hover:bg-primary transition-colors flex-shrink-0"></span>
                  À Propos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center justify-center md:justify-start group text-sm md:text-base"
                >
                  <span className="w-2 h-2 bg-primary/30 rounded-full mr-3 group-hover:bg-primary transition-colors flex-shrink-0"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-foreground mb-4 md:mb-6 text-base md:text-lg">Contact</h4>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start justify-center md:justify-start space-x-3 md:space-x-4 group">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-medium text-foreground">Adresse</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Ariana, Tunisie</p>
                </div>
              </div>
              <div className="flex items-start justify-center md:justify-start space-x-3 md:space-x-4 group">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-medium text-foreground">Email</p>
                  <a
                    href="mailto:hippocampusconsultingtunisia@gmail.com"
                    className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    hippocampusconsultingtunisia@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start justify-center md:justify-start space-x-3 md:space-x-4 group">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-medium text-foreground">Téléphone</p>
                  <a
                    href="tel:+21658873878"
                    className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +216 58 873 878
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-xs md:text-sm text-muted-foreground">
            © {currentYear} Hippocampus Consulting SARL. Tous droits réservés.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mt-3 md:mt-0">
            <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
              Mentions Légales
            </a>
            <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
              Politique de Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
