"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-400 to-cyan-300">
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/" className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors">
          <ArrowLeft className="h-5 w-5" />
          Bosh sahifaga qaytish
        </Link>
      </div>

      {/* Main Content */}
      <section className="py-16 lg:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-6">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Rahmat!</h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">Sizning arizangiz muvaffaqiyatli qabul qilindi</p>
          </div>

          {/* Information Card */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-2 border-white/20 mb-8">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 text-left">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">Keyingi qadamlar:</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <p className="text-gray-700">
                        Bizning mutaxassisimiz <strong>15 daqiqa ichida</strong> siz bilan bog'lanadi
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <p className="text-gray-700">
                        Mahsulot haqida batafsil ma'lumot beramiz va savollaringizga javob beramiz
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <p className="text-gray-700">
                        Buyurtmangizni rasmiylashtiramiz va <strong>1-2 kun ichida</strong> yetkazib beramiz
                      </p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold text-gray-800">Aloqa uchun:</span>
                    </div>
                    <p className="text-gray-700">Agar qo'shimcha savollaringiz bo'lsa, bizga qo'ng'iroq qiling:</p>
                    <p className="text-xl font-bold text-blue-600 mt-1">+998 (90) 123-45-67</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=300&width=200"
                    alt="Super Pamyat bottle"
                    width={200}
                    height={300}
                    className="drop-shadow-2xl"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Special Offer Reminder */}
          <Card className="bg-gradient-to-r from-pink-500 to-red-500 text-white">
            <CardContent className="p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2">50% chegirma hali ham amal qilmoqda!</h3>
                  <p className="text-white/90">Mutaxassis bilan suhbat paytida chegirmangizni tasdiqlang</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-orange-200" />
                  <div className="flex gap-2">
                    <div className="bg-white/20 px-3 py-2 rounded-lg text-xl font-bold min-w-[40px]">
                      {timeLeft.hours.toString().padStart(2, "0")}
                    </div>
                    <span className="font-bold text-xl">:</span>
                    <div className="bg-white/20 px-3 py-2 rounded-lg text-xl font-bold min-w-[40px]">
                      {timeLeft.minutes.toString().padStart(2, "0")}
                    </div>
                    <span className="font-bold text-xl">:</span>
                    <div className="bg-white/20 px-3 py-2 rounded-lg text-xl font-bold min-w-[40px]">
                      {timeLeft.seconds.toString().padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits Reminder */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Bepul yetkazib berish", desc: "Butun O'zbekiston bo'ylab" },
              { title: "Sifat kafolati", desc: "100% tabiiy mahsulot" },
              { title: "Mutaxassis maslahati", desc: "Bepul konsultatsiya" },
              { title: "Tez yetkazish", desc: "1-2 kun ichida" },
            ].map((benefit, index) => (
              <Card key={index} className="bg-white/90">
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold text-gray-800 mb-1">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
