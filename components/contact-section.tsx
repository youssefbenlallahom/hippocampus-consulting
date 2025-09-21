"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Fonction pour envoyer l'email directement via l'API
  async function sendEmailDirect({ name, email, company, message }: typeof formData) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          company,
          message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi')
      }

      return { success: true }
    } catch (error) {
      console.error('Erreur:', error)
      return { success: false, error: error instanceof Error ? error.message : 'Erreur inconnue' }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    
    setIsSubmitting(true)
    
    const result = await sendEmailDirect(formData)
    
    if (result.success) {
      setIsSubmitted(true)
      setFormData({ name: "", email: "", company: "", message: "" })
      setTimeout(() => setIsSubmitted(false), 5000)
    } else {
      // Afficher l'erreur à l'utilisateur
      alert(`Erreur lors de l'envoi: ${result.error}`)
    }
    
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-16 md:py-20 bg-muted/30 w-full">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Contactez <span className="text-primary">Nous</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance px-4">
            Prêt à transformer votre entreprise ? Contactez-nous dès aujourd'hui pour une consultation gratuite et
            découvrez comment nous pouvons vous aider.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="animate-fade-in-up">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl sm:text-2xl text-foreground">Demande de Consultation</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Remplissez ce formulaire et nous recevrons directement votre message par email.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-6 md:py-8 animate-fade-in-up">
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-accent mx-auto mb-3 md:mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Message envoyé !</h3>
                  <p className="text-sm sm:text-base text-muted-foreground px-4">
                    Votre demande a été envoyée avec succès. Nous vous contacterons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm sm:text-base">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="transition-all focus:ring-2 focus:ring-primary/20 text-sm sm:text-base border-2 border-muted-foreground/30 hover:border-muted-foreground/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm sm:text-base">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="transition-all focus:ring-2 focus:ring-primary/20 text-sm sm:text-base border-2 border-muted-foreground/30 hover:border-muted-foreground/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm sm:text-base">Entreprise</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="transition-all focus:ring-2 focus:ring-primary/20 text-sm sm:text-base border-2 border-muted-foreground/30 hover:border-muted-foreground/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm sm:text-base">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="transition-all focus:ring-2 focus:ring-primary/20 text-sm sm:text-base resize-none border-2 border-muted-foreground/30 hover:border-muted-foreground/50 focus:border-primary"
                      placeholder="Décrivez vos besoins et objectifs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow text-sm sm:text-base"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer la Demande"}
                    <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            {/* Company Info Card */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl text-foreground">Informations de Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Adresse</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      05 Rue Alia Babbou
                      <br />
                      2036 Chotrana 2, Soukra
                      <br />
                      Ariana, Tunisie
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Email</h4>
                    <a
                      href="mailto:hippocampusconsultingtunisia@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm break-all"
                    >
                      hippocampusconsultingtunisia@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Téléphone</h4>
                    <a href="tel:+21658873878" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">
                      +216 58 873 878
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Horaires</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Lun - Ven: 8h00 - 18h00
                      <br />
                      Sam: 9h00 - 13h00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-4 md:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3">Consultation Gratuite</h3>
                <p className="mb-3 md:mb-4 opacity-90 text-sm sm:text-base">
                  Bénéficiez d'une première consultation gratuite de 30 minutes pour évaluer vos besoins et définir une
                  stratégie adaptée.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full sm:w-auto text-sm sm:text-base"
                >
                  Réserver maintenant
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
