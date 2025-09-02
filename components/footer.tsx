"use client"

import { Mail, MapPin, Phone, Linkedin, Facebook, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-card to-muted border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated_Image_September_01__2025_-_10_20PM-removebg-preview-5i1c8quWnywB8yKfCOVEZgdbVqLu3e.png"
                alt="Hippocampus Consulting Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Votre partenaire de confiance pour la transformation et la croissance de votre entreprise. Solutions
              personnalisées et expertise internationale.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6 text-lg">Liens Rapides</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#accueil"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-primary/30 rounded-full mr-3 group-hover:bg-primary transition-colors"></span>
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-primary/30 rounded-full mr-3 group-hover:bg-primary transition-colors"></span>
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#apropos"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-primary/30 rounded-full mr-3 group-hover:bg-primary transition-colors"></span>
                  À Propos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-primary/30 rounded-full mr-3 group-hover:bg-primary transition-colors"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-6 text-lg">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Adresse</p>
                  <p className="text-sm text-muted-foreground">Ariana, Tunisie</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a
                    href="mailto:contact@hippocampus-consulting.tn"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    contact@hippocampus-consulting.tn
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Téléphone</p>
                  <a
                    href="tel:+21658873878"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +216 58 873 878
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Hippocampus Consulting SARL. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Mentions Légales
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Politique de Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
