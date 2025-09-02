"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Target, Users } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-muted"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 right-1/3 w-24 h-24 bg-accent/15 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <span className="text-balance">Transformez Votre</span>
            <br />
            <span className="text-primary">Vision d'Affaires</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            Hippocampus Consulting vous accompagne dans la croissance et l'optimisation de votre entreprise avec des
            solutions sur mesure et une expertise reconnue.
          </p>

          {/* Feature Icons */}
          <div
            className={`flex justify-center items-center space-x-8 mb-10 transition-all duration-1000 delay-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Stratégie</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-2">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground">Performance</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Accompagnement</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-900 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg animate-pulse-glow"
            >
              Consultation Gratuite
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("services")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
            >
              Découvrir nos Services
            </Button>
          </div>

          {/* Company Info */}
          <div
            className={`mt-12 text-center transition-all duration-1000 delay-1100 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <p className="text-muted-foreground">
              <span className="font-semibold">Société Tunisienne</span> • Totalement Exportatrice • Solutions
              Internationales
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
