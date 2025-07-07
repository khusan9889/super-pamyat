"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Phone, MapPin, Mail, Gift, Shield, Truck } from "lucide-react"
import { useState, useEffect } from "react"

export default function ThankYouPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 7,
    minutes: 5,
    seconds: 34,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const CountdownTimer = () => (
    <div className="flex flex-col sm:flex-row items-center gap-4 text-center">
      <Badge variant="destructive" className="text-lg lg:text-xl font-bold px-4 py-3">
        50% CHEGIRMA
      </Badge>
      <div className="flex items-center gap-2">
        <Clock className="h-6 w-6 text-orange-500" />
        <div className="flex gap-2">
          <div className="bg-white/90 px-3 py-2 rounded-lg text-2xl lg:text-3xl font-bold text-green-600 min-w-[50px]">
            {timeLeft.hours.toString().padStart(2, "0")}
          </div>
          <span className="text-white font-bold text-2xl lg:text-3xl">:</span>
          <div className="bg-white/90 px-3 py-2 rounded-lg text-2xl lg:text-3xl font-bold text-green-600 min-w-[50px]">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </div>
          <span className="text-white font-bold text-2xl lg:text-3xl">:</span>
          <div className="bg-white/90 px-3 py-2 rounded-lg text-2xl lg:text-3xl font-bold text-green-600 min-w-[50px]">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-400 to-cyan-300">
      {/* Success Section */}
      <section className="py-16 lg:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Rahmat! Arizangiz muvaffaqiyatli yuborildi
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Bizning mutaxassislarimiz tez orada siz bilan bog'lanishadi va barcha savollaringizga javob berishadi.
            </p>

            <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Keyingi qadamlar:</h2>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Qo'ng'iroq kutib turing</h3>
                    <p className="text-gray-600 text-sm">Bizning mutaxassis 15-30 daqiqa ichida siz bilan bog'lanadi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Buyurtmani tasdiqlang</h3>
                    <p className="text-gray-600 text-sm">Yetkazib berish manzili va to'lov usulini aniqlang</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Mahsulotni oling</h3>
                    <p className="text-gray-600 text-sm">1-3 kun ichida mahsulot sizga yetkazib beriladi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Qabul qilishni boshlang</h3>
                    <p className="text-gray-600 text-sm">Ko'rsatmalarga rioya qiling va natijalarni kuzating</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <CountdownTimer />
              <p className="text-gray-600 mt-4">Chegirma vaqti tugashiga oz qoldi!</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/90">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-pink-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Telefon</h3>
                <p className="text-gray-600">+998 (90) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="bg-white/90">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-pink-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">info@superpamyat.uz</p>
              </CardContent>
            </Card>
            <Card className="bg-white/90">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-pink-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Manzil</h3>
                <p className="text-gray-600">Toshkent, Uzbekiston</p>
              </CardContent>
            </Card>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/90">
              <CardContent className="p-6 text-center">
                <Truck className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Bepul yetkazib berish</h3>
                <p className="text-gray-600 text-sm">Butun Uzbekiston bo'ylab</p>
              </CardContent>
            </Card>
            <Card className="bg-white/90">
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Sifat kafolati</h3>
                <p className="text-gray-600 text-sm">100% original mahsulot</p>
              </CardContent>
            </Card>
            <Card className="bg-white/90">
              <CardContent className="p-6 text-center">
                <Gift className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Maxsus chegirma</h3>
                <p className="text-gray-600 text-sm">Faqat bugun 50% chegirma</p>
              </CardContent>
            </Card>
          </div>

          <Link href="/">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Bosh sahifaga qaytish
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
