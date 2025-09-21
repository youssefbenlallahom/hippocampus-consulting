"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Target, BarChart3, Lightbulb, Shield, ArrowRight } from "lucide-react"

const services = [
  {
    icon: TrendingUp,
    title: "Conseil Stratégique",
    description:
      "Développement de stratégies d'affaires personnalisées pour accélérer votre croissance et optimiser vos performances.",
    features: ["Analyse de marché", "Planification stratégique", "Optimisation des processus"],
    color: "from-blue-500 to-indigo-600",
    delay: 0
  },
  {
    icon: Users,
    title: "Gestion des Ressources Humaines",
    description:
      "Solutions complètes pour optimiser votre capital humain et améliorer la performance organisationnelle.",
    features: ["Recrutement", "Formation", "Évaluation des performances"],
    color: "from-purple-500 to-pink-600",
    delay: 200
  },
  {
    icon: Target,
    title: "Développement Commercial",
    description:
      "Stratégies de vente et marketing pour augmenter votre chiffre d'affaires et conquérir de nouveaux marchés.",
    features: ["Stratégie commerciale", "Formation vente", "Expansion internationale"],
    color: "from-green-500 to-teal-600",
    delay: 400
  },
  {
    icon: BarChart3,
    title: "Analyse Financière",
    description:
      "Optimisation de votre gestion financière avec des analyses approfondies et des recommandations stratégiques.",
    features: ["Audit financier", "Contrôle de gestion", "Prévisions budgétaires"],
    color: "from-orange-500 to-red-600",
    delay: 600
  },
  {
    icon: Lightbulb,
    title: "Innovation & Transformation",
    description:
      "Accompagnement dans la transformation digitale et l'innovation pour rester compétitif sur votre marché.",
    features: ["Transformation digitale", "Innovation produit", "Change management"],
    color: "from-cyan-500 to-blue-600",
    delay: 800
  },
  {
    icon: Shield,
    title: "Conformité & Risques",
    description: "Gestion des risques et mise en conformité réglementaire pour sécuriser vos opérations commerciales.",
    features: ["Audit de conformité", "Gestion des risques", "Mise en conformité"],
    color: "from-violet-500 to-purple-600",
    delay: 1000
  },
]

export function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, cardIndex])
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-20 bg-muted/30 w-full">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
            Nos <span className="text-primary">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-balance px-4">
            Des solutions complètes et personnalisées pour accompagner votre entreprise dans tous les aspects de son
            développement et de sa croissance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            const isVisible = visibleCards.includes(index)

            return (
                            <Card
                key={index}
                data-index={index}
                className={`group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 hover:scale-105 hover:shadow-xl glass-morphism ${
                  visibleCards.includes(index) ? "animate-slide-in-left opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: `${service.delay}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-all duration-300 glow-on-hover">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 relative z-10">
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-muted-foreground group-hover:text-foreground/80 transition-all duration-300">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className="w-full text-primary hover:bg-primary hover:text-primary-foreground group-hover:translate-x-1 transition-all duration-300 text-xs sm:text-sm shine-effect"
                    onClick={scrollToContact}
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Enhanced CTA Section with animations */}
        <div className="text-center bg-card rounded-2xl p-6 md:p-8 border border-border/50 glass-morphism hover:scale-105 transition-all duration-500 glow-on-hover">
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 md:mb-4 animate-fade-in-up">
            Besoin d'une solution personnalisée ?
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 md:mb-6 max-w-2xl mx-auto px-4 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Chaque entreprise est unique. Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment
            nous pouvons vous accompagner dans votre réussite.
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto group hover:scale-105 transition-all duration-300 shine-effect animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            Consultation Gratuite
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  )
}
