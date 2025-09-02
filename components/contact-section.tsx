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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const subject = encodeURIComponent(`Demande de consultation - ${formData.company || formData.name}`)
      const body = encodeURIComponent(`
Bonjour,

Je souhaite prendre contact avec Hippocampus Consulting pour une consultation.

Informations de contact:
- Nom: ${formData.name}
- Email: ${formData.email}
- Entreprise: ${formData.company || "Non spécifiée"}

Message:
${formData.message}

Cordialement,
${formData.name}
      `)

      const mailtoLink = `mailto:contact@hippocampus-consulting.tn?subject=${subject}&body=${body}`

      window.location.href = mailtoLink

      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 5000)
      setFormData({ name: "", email: "", company: "", message: "" })
    } catch (error) {
      console.error("Error sending email:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Contactez <span className="text-primary">Nous</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Prêt à transformer votre entreprise ? Contactez-nous dès aujourd'hui pour une consultation gratuite et
            découvrez comment nous pouvons vous aider.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Demande de Consultation</CardTitle>
              <CardDescription>
                Remplissez ce formulaire et nous vous recontacterons dans les plus brefs délais.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8 animate-fade-in-up">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Email ouvert !</h3>
                  <p className="text-muted-foreground">
                    Votre client email s'est ouvert avec votre message pré-rempli. Envoyez-le pour nous contacter.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Entreprise</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="transition-all focus:ring-2 focus:ring-primary/20"
                      placeholder="Décrivez vos besoins et objectifs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow"
                  >
                    {isSubmitting ? "Ouverture..." : "Envoyer le message"}
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            {/* Company Info Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Informations de Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Adresse</h4>
                    <p className="text-muted-foreground">
                      05 Rue Alia Babbou
                      <br />
                      2036 Chotrana 2, Soukra
                      <br />
                      Ariana, Tunisie
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a
                      href="mailto:contact@hippocampus-consulting.tn"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contact@hippocampus-consulting.tn
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Téléphone</h4>
                    <a href="tel:+21658873878" className="text-muted-foreground hover:text-primary transition-colors">
                      +216 58 873 878
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Horaires</h4>
                    <p className="text-muted-foreground">
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
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Consultation Gratuite</h3>
                <p className="mb-4 opacity-90">
                  Bénéficiez d'une première consultation gratuite de 30 minutes pour évaluer vos besoins et définir une
                  stratégie adaptée.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
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
