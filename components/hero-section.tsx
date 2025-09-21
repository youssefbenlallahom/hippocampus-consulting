"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Target, Users } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [typingComplete, setTypingComplete] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    // Démarrer l'animation de typing après un délai
    setTimeout(() => {
      setTypingComplete(true)
    }, 1000)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-muted w-full"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-4 md:left-10 w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-4 md:right-20 w-20 h-20 md:w-32 md:h-32 bg-accent/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 right-1/3 w-16 h-16 md:w-24 md:h-24 bg-accent/15 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-16 md:pb-20 pt-24 sm:pt-28 md:pt-32 lg:pt-40 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1
            className={`text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 transition-all duration-1000 delay-300 leading-tight ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <span className="text-balance">Transformez Votre</span>
            <br />
            <span className="text-primary">Vision d'Affaires</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto text-balance transition-all duration-1000 delay-500 px-2 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            Hippocampus Consulting vous accompagne dans la croissance et l'optimisation de votre entreprise avec des
            solutions sur mesure et une expertise reconnue.
          </p>

          {/* Feature Icons */}
          <div
            className={`flex justify-center items-center space-x-4 sm:space-x-8 mb-8 md:mb-10 transition-all duration-1000 delay-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors duration-300 glow-on-hover">
                <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">Stratégie</span>
            </div>
            <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center mb-2 group-hover:bg-accent/20 transition-colors duration-300 glow-on-hover">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300">Performance</span>
            </div>
            <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors duration-300 glow-on-hover">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">Accompagnement</span>
            </div>
          </div>

          {/* Enhanced CTA Buttons with animations */}
          <div
            className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center transition-all duration-1000 delay-900 px-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base w-full sm:w-auto group hover:scale-105 transition-all duration-300 glow-on-hover shine-effect"
            >
              Consultation Gratuite
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("services")}
              className="border-primary text-primary hover:bg-primary/5 hover:border-primary hover:text-primary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base w-full sm:w-auto hover:scale-105 transition-all duration-300 glass-morphism backdrop-blur-sm"
            >
              Découvrir nos Services
            </Button>
          </div>

          {/* Company Info */}
          <div
            className={`mt-8 md:mt-12 text-center transition-all duration-1000 delay-1100 px-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <p className="text-xs sm:text-sm text-muted-foreground">
              <span className="font-semibold">Société Tunisienne</span> • Totalement Exportatrice • Solutions
              Internationales
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
