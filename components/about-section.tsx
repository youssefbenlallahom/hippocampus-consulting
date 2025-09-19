"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, Building, Target, Heart, Lightbulb } from "lucide-react"

const timeline = [
  {
    year: "2025",
    title: "Création d'Hippocampus Consulting",
    description:
      "Fondation de la société avec une vision claire : accompagner les entreprises dans leur transformation et leur croissance.",
    icon: Building,
  },
  {
    year: "2025",
    title: "Services Internationaux",
    description:
      "Développement de notre expertise pour offrir nos services de conseil aux entreprises tunisiennes et internationales.",
    icon: Globe,
  },
  {
    year: "Futur",
    title: "Expansion Stratégique",
    description:
      "Développement de notre présence sur les marchés européens et africains avec des partenariats stratégiques.",
    icon: Award,
  },
]



export function AboutSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...prev, itemIndex])
          }
        })
      },
      { threshold: 0.1 },
    )

    const items = sectionRef.current?.querySelectorAll("[data-index]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="apropos" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            À Propos de <span className="text-primary">Nous</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Hippocampus Consulting est votre partenaire de confiance pour le développement et la transformation de votre
            entreprise, avec une expertise reconnue dans le conseil en affaires et gestion.
          </p>
        </div>

        {/* Company Information */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Company Details */}
          <div className={`${visibleItems.includes(4) ? "animate-fade-in-up" : "opacity-0"}`} data-index="4">
            <h3 className="text-2xl font-bold text-foreground mb-6">Notre Expertise</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Badge variant="secondary" className="mt-1">
                  <Target className="w-4 h-4 mr-1" />
                  Spécialisation
                </Badge>
                <div>
                  <p className="font-semibold text-foreground">Conseil en Affaires & Gestion</p>
                  <p className="text-muted-foreground text-sm">
                    Solutions personnalisées pour optimiser vos performances
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Badge variant="secondary" className="mt-1">
                  <Globe className="w-4 h-4 mr-1" />
                  Portée
                </Badge>
                <div>
                  <p className="font-semibold text-foreground">Services Internationaux</p>
                  <p className="text-muted-foreground text-sm">Accompagnement local et international</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Badge variant="secondary" className="mt-1">
                  <Users className="w-4 h-4 mr-1" />
                  Approche
                </Badge>
                <div>
                  <p className="font-semibold text-foreground">Partenariat Stratégique</p>
                  <p className="text-muted-foreground text-sm">Collaboration étroite pour votre réussite</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Badge variant="secondary" className="mt-1">
                  <Award className="w-4 h-4 mr-1" />
                  Excellence
                </Badge>
                <div>
                  <p className="font-semibold text-foreground">Qualité Garantie</p>
                  <p className="text-muted-foreground text-sm">Standards élevés et résultats mesurables</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Mission & Vision */}
          <div className={`${visibleItems.includes(5) ? "animate-fade-in-up" : "opacity-0"}`} data-index="5">
            <h3 className="text-2xl font-bold text-foreground mb-6">Nos Valeurs</h3>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <Target className="w-5 h-5 text-primary mr-3" />
                  Vision
                </h4>
                <p className="text-muted-foreground">
                  Devenir le partenaire de référence pour les entreprises cherchant à optimiser leurs performances et à
                  se développer sur les marchés internationaux.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <Heart className="w-5 h-5 text-accent mr-3" />
                  Mission
                </h4>
                <p className="text-muted-foreground">
                  Accompagner les entreprises dans leur transformation et leur croissance en proposant des solutions de
                  conseil personnalisées et innovantes.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <Lightbulb className="w-5 h-5 text-primary mr-3" />
                  Valeurs
                </h4>
                <p className="text-muted-foreground">
                  Excellence, innovation, intégrité et engagement envers le succès de nos clients dans un environnement
                  international.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Notre Parcours</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border"></div>

            {timeline.map((item, index) => {
              const Icon = item.icon
              const isVisible = visibleItems.includes(index + 6)
              const isLeft = index % 2 === 0

              return (
                <div
                  key={index}
                  data-index={index + 6}
                  className={`relative flex items-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: `${(index + 6) * 200}ms` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10 animate-pulse-glow">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <div className={`w-5/12 ${isLeft ? "pr-8 text-right" : "ml-auto pl-8"}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <Badge variant="outline" className="mb-3">
                          {item.year}
                        </Badge>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
