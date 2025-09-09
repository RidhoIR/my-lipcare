"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Star, Heart, Sparkles, Shield, MessageCircle } from "lucide-react"
import { useEffect } from "react"

export default function RitzGlamLanding() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [promoPrice, setPromoPrice] = useState("Rp 299.000")

  // Dummy API call for promo price
  useState(() => {
    const fetchPromoPrice = async () => {
      // Simulate API call
      setTimeout(() => {
        setPromoPrice("Rp 249.000")
      }, 1000)
    }
    fetchPromoPrice()
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission to Google Sheets
    try {
      // In real implementation, this would be your Google Sheets webhook URL
      const response = await fetch("/api/submit-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Pesanan berhasil dikirim! Kami akan menghubungi Anda segera.")
        setFormData({ name: "", whatsapp: "", email: "" })
      }
    } catch (error) {
      alert("Terjadi kesalahan. Silakan coba lagi.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-card to-background py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  Produk Terlaris #1
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  <span className="text-primary">RitzGlam</span> Lip Serum
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Serum bibir revolusioner yang memberikan kelembapan maksimal dan kilau alami untuk bibir yang sehat
                  dan menawan sepanjang hari.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{promoPrice}</span>
                    <span className="text-lg text-muted-foreground line-through">Rp 399.000</span>
                  </div>
                  <div className="text-sm text-accent font-medium">Hemat 37% - Promo Terbatas!</div>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                  <Heart className="w-5 h-5 mr-2" />
                  Pesan Sekarang
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.9/5</span>
                  <span>(2,847 ulasan)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>BPOM Certified</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl">
                <img
                  src="/lip-serum.jpeg"
                  alt="RitzGlam Lip Serum"
                  className="w-full h-auto max-w-sm mx-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl transform rotate-6"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Mengapa Memilih RitzGlam Lip Serum?</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Formulasi premium dengan bahan-bahan terbaik untuk hasil yang maksimal
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Heart className="w-8 h-8 text-primary" />,
                title: "Kelembapan 24 Jam",
                description: "Formula hyaluronic acid yang memberikan kelembapan tahan lama tanpa rasa lengket",
              },
              {
                icon: <Sparkles className="w-8 h-8 text-primary" />,
                title: "Kilau Alami",
                description: "Memberikan efek glossy natural yang membuat bibir terlihat lebih penuh dan sehat",
              },
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Perlindungan UV",
                description: "Mengandung SPF 15 untuk melindungi bibir dari paparan sinar matahari berbahaya",
              },
              {
                icon: <Star className="w-8 h-8 text-primary" />,
                title: "Vitamin E & C",
                description: "Diperkaya antioksidan untuk menutrisi dan memperbaiki tekstur bibir",
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">{benefit.icon}</div>
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Apa Kata Mereka?</h2>
            <p className="text-lg text-muted-foreground">Ribuan wanita telah merasakan manfaatnya</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Wijaya",
                location: "Jakarta",
                rating: 5,
                text: "Lip serum terbaik yang pernah saya coba! Bibir saya yang tadinya kering dan pecah-pecah sekarang jadi lembap dan berkilau alami. Teksturnya tidak lengket dan wanginya juga enak. Highly recommended!",
                image: "/young-woman-natural-makeup.jpeg",
              },
              {
                name: "Maya Sari",
                location: "Surabaya",
                rating: 5,
                text: "Sudah 3 bulan pakai RitzGlam dan hasilnya amazing! Bibir jadi lebih sehat, warnanya natural pink, dan yang paling suka itu tahan lama banget. Sekali oles bisa bertahan seharian. Worth it banget!",
                image: "/young-woman-natural-makeup.jpeg",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Order Form Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Pesan RitzGlam Lip Serum Sekarang</h2>
            <p className="text-lg text-muted-foreground">Dapatkan bibir impian Anda hari ini juga!</p>
          </div>
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Masukkan nama lengkap Anda"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-muted-foreground/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">Nomor WhatsApp</Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    placeholder="08xxxxxxxxxx"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    required
                    className="h-12 border-muted-foreground/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Alamat Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-12 border-muted-foreground/20"
                  />
                </div>
                <div className="bg-pink-100/50 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between items-center">
                    <span>RitzGlam Lip Serum (1 pcs)</span>
                    <span className="font-semibold">{promoPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>Gratis Ongkir</span>
                    <span>Rp 0</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between items-center font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary">{promoPrice}</span>
                  </div>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Memproses..." : "Pesan Sekarang"}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Dengan memesan, Anda menyetujui syarat dan ketentuan yang berlaku. Data Anda aman dan tidak akan
                  dibagikan kepada pihak ketiga.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">RitzGlam</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                Produk kecantikan premium untuk wanita modern yang menginginkan yang terbaik untuk perawatan bibir
                mereka.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Hubungi Kami</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: +62 812-3456-7890</span>
                </div>
                <div>Email: hello@ritzglam.com</div>
                <div>Instagram: @ritzglam.official</div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Informasi</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div>BPOM: NA18221200001</div>
                <div>Halal MUI: 00150077910220</div>
                <div>Customer Service 24/7</div>
                <div>Garansi Uang Kembali</div>
              </div>
            </div>
          </div>
          <hr className="my-8 opacity-20" />
          <div className="text-center text-sm opacity-60">
            <p>&copy; 2024 RitzGlam. All rights reserved. Made with ❤️ for beautiful lips.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
