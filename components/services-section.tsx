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
  },
  {
    icon: Users,
    title: "Gestion des Ressources Humaines",
    description:
      "Solutions complètes pour optimiser votre capital humain et améliorer la performance organisationnelle.",
    features: ["Recrutement", "Formation", "Évaluation des performances"],
  },
  {
    icon: Target,
    title: "Développement Commercial",
    description:
      "Stratégies de vente et marketing pour augmenter votre chiffre d'affaires et conquérir de nouveaux marchés.",
    features: ["Stratégie commerciale", "Formation vente", "Expansion internationale"],
  },
  {
    icon: BarChart3,
    title: "Analyse Financière",
    description:
      "Optimisation de votre gestion financière avec des analyses approfondies et des recommandations stratégiques.",
    features: ["Audit financier", "Contrôle de gestion", "Prévisions budgétaires"],
  },
  {
    icon: Lightbulb,
    title: "Innovation & Transformation",
    description:
      "Accompagnement dans la transformation digitale et l'innovation pour rester compétitif sur votre marché.",
    features: ["Transformation digitale", "Innovation produit", "Change management"],
  },
  {
    icon: Shield,
    title: "Conformité & Risques",
    description: "Gestion des risques et mise en conformité réglementaire pour sécuriser vos opérations commerciales.",
    features: ["Audit de conformité", "Gestion des risques", "Mise en conformité"],
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
    <section id="services" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nos <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Des solutions complètes et personnalisées pour accompagner votre entreprise dans tous les aspects de son
            développement et de sa croissance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            const isVisible = visibleCards.includes(index)

            return (
              <Card
                key={index}
                data-index={index}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-border/50 hover:border-primary/50 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className="w-full text-primary hover:bg-primary hover:text-primary-foreground group-hover:translate-x-1 transition-all"
                    onClick={scrollToContact}
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-8 border border-border/50">
          <h3 className="text-2xl font-bold text-foreground mb-4">Besoin d'une solution personnalisée ?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Chaque entreprise est unique. Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment
            nous pouvons vous accompagner dans votre réussite.
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow"
          >
            Consultation Gratuite
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
