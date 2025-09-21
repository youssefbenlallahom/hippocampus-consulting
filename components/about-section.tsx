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
    <section id="apropos" ref={sectionRef} className="py-16 md:py-20 bg-background w-full">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            À Propos de <span className="text-primary">Nous</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance px-4">
            Hippocampus Consulting est votre partenaire de confiance pour le développement et la transformation de votre
            entreprise, avec une expertise reconnue dans le conseil en affaires et gestion.
          </p>
        </div>

        {/* Company Information */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Left Column - Company Details */}
          <div className={`${visibleItems.includes(4) ? "animate-fade-in-up" : "opacity-0"}`} data-index="4">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 md:mb-6">Notre Expertise</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start space-x-3">
                <Badge variant="secondary" className="mt-1 flex-shrink-0">
                  <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  <span className="text-xs sm:text-sm">Spécialisation</span>
                </Badge>
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">Conseil en Affaires & Gestion</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Solutions personnalisées pour optimiser vos performances
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Badge variant="secondary" className="mt-1 flex-shrink-0">
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  <span className="text-xs sm:text-sm">Portée</span>
                </Badge>
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">Services Internationaux</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Accompagnement local et international</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Badge variant="secondary" className="mt-1 flex-shrink-0">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  <span className="text-xs sm:text-sm">Approche</span>
                </Badge>
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">Partenariat Stratégique</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Collaboration étroite pour votre réussite</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Badge variant="secondary" className="mt-1 flex-shrink-0">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  <span className="text-xs sm:text-sm">Excellence</span>
                </Badge>
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">Qualité Garantie</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Standards élevés et résultats mesurables</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Mission & Vision */}
          <div className={`${visibleItems.includes(5) ? "animate-fade-in-up" : "opacity-0"}`} data-index="5">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 md:mb-6">Nos Valeurs</h3>
            <div className="space-y-4 md:space-y-6">
              <div className="bg-card p-4 md:p-6 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2 md:mb-3 flex items-center text-sm sm:text-base">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 md:mr-3 flex-shrink-0" />
                  Vision
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Devenir le partenaire de référence pour les entreprises cherchant à optimiser leurs performances et à
                  se développer sur les marchés internationaux.
                </p>
              </div>

              <div className="bg-card p-4 md:p-6 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2 md:mb-3 flex items-center text-sm sm:text-base">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-accent mr-2 md:mr-3 flex-shrink-0" />
                  Mission
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Accompagner les entreprises dans leur transformation et leur croissance en proposant des solutions de
                  conseil personnalisées et innovantes.
                </p>
              </div>

              <div className="bg-card p-4 md:p-6 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-2 md:mb-3 flex items-center text-sm sm:text-base">
                  <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 md:mr-3 flex-shrink-0" />
                  Valeurs
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Excellence, innovation, intégrité et engagement envers le succès de nos clients dans un environnement
                  international.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8 md:mb-12">Notre Parcours</h3>
          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on larger screens */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border"></div>

            {timeline.map((item, index) => {
              const Icon = item.icon
              const isVisible = visibleItems.includes(index + 6)
              const isLeft = index % 2 === 0

              return (
                <div
                  key={index}
                  data-index={index + 6}
                  className={`relative flex items-center mb-8 md:mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: `${(index + 6) * 200}ms` }}
                >
                  {/* Timeline Node - Hidden on mobile */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-full items-center justify-center z-10 animate-pulse-glow">
                    <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${isLeft ? "md:pr-8 md:text-right" : "md:ml-auto md:pl-8"}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-4 md:p-6">
                        <div className="flex items-center mb-2 md:mb-3">
                          {/* Icon visible on mobile only */}
                          <div className="md:hidden w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {item.year}
                          </Badge>
                        </div>
                        <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                        <p className="text-muted-foreground text-xs sm:text-sm">{item.description}</p>
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
