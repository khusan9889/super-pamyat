"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, User, Star, CheckCircle, Shield, Heart, Brain, Zap } from "lucide-react"
import { useRouter } from "next/navigation"
import { CountdownTimer } from "@/components/timer"
import { OrderForm } from "@/components/order-form"

export default function SuperPamyatLanding() {
  useEffect(() => {
    // Подключаем скрипт пикселя динамически
    const script = document.createElement("script")
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1268744111322851');
      fbq('track', 'PageView');
    `
    document.head.appendChild(script)

    // <noscript> блок нельзя напрямую вставить в head/body в useEffect, его можно вставить в JSX ниже

    return () => {
      // если нужно — можно очищать
    }
  }, [])
  return (
    <>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1268744111322851&ev=PageView&noscript=1"
        />
      </noscript>
      <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-400 to-cyan-300">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 px-4 min-h-[80vh] flex items-center">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
                  Birinchi haftadanoq xotirani yaxshilaydi va miya faoliyatini qo'llaydi
                </h1>
                <p className="text-gray-700 text-xl lg:text-2xl leading-relaxed">
                  Miyada qon aylanishini tiklovachi,insult, infarni va yoshga doir o'zgarishlardan profilaktika qiliuvchi
                  o'simliklardan tayyorlangan kompleks
                </p>
                <div className="pt-4">
                  <CountdownTimer />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
                {/* Левая часть — только бутылка */}
                <div className="flex items-center">
                  <div className="relative transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/images/bad.png"
                      alt="Super Pamyat bottle"
                      width={150}
                      height={250}
                      className="drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Правая часть — мозг + форма */}
                <div className="flex flex-col items-center gap-4">
                  <div className="relative -mb-2 transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/images/brain.png"
                      alt="Brain illustration"
                      width={180}
                      height={180}
                      className="drop-shadow-lg"
                    />
                  </div>
                  <div className="w-full lg:w-auto max-w-md lg:max-w-lg bg-white p-6 lg:p-8 rounded-2xl shadow-xl">
                    <OrderForm />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-16">
              "Super xotira" sizning sog'lig'ingizga nima uchun foydali?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Brain className="h-8 w-8 lg:h-10 lg:w-10 text-blue-600" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-center sm:text-left">
                      Miya faoliyatini yaxshilaydi
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg text-center sm:text-left">
                    Xotira zonalarini , fikrlash va e'tiborni aktivlashtiradi
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="h-8 w-8 lg:h-10 lg:w-10 text-red-600" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-center sm:text-left">
                      Yurak va qon tomirlarni mustahkamlaydi
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg text-center sm:text-left">
                    Qon bosimini pasaytiradi va tomirlar tozaligini saqlaydi
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="h-8 w-8 lg:h-10 lg:w-10 text-green-600" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-center sm:text-left">
                      Tromblar hosil bo'lishining oldini oladi
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg text-center sm:text-left">
                    Qonni suyultiradi, oquvchanligini yaxshilaydi
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="h-8 w-8 lg:h-10 lg:w-10 text-purple-600" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-center sm:text-left">
                      Miya faoliyatini yaxshilaydi
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg text-center sm:text-left">
                    Xotira, fikrlash va diqqat sohalarini faollashtiradi
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ingredients Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-cyan-100 to-blue-100">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-16">
              Tarkib va xususiyatlari
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  name: "Toloknyanka o'ti",
                  benefit:
                    "Suyuqlikni yumshoq chiqarish orqali bosimni pasaytiradi. Qon filtratsiyasi va miya oziqlanishini yaxshilaydi",
                },
                {
                  name: "Do'lana gullari",
                  benefit:
                    "Yurak urishi va miokardni qo'llab-quvvatlash. Koronar va miya qon aylanishini yaxshilaydi. Taxikardiya xurujlari chastotasini kamaytiradi, tomirlar spazmini bartaraf etadi",
                },
                {
                  name: "Ginkgo biloba barglari",
                  benefit:
                    "Miyaga qon oqimini rag'batlantiradi. Diqqat, fikrlash tezligi va qisqa muddatli xotirani yaxshilaydi. Antioksidant va tomirlarga qarshi (tromblarga qarshi) ta'sirga ega.",
                },
                {
                  name: "Dalachoy o'ti",
                  benefit:
                    "Yumshoq tabiiy antidepressant. Xavotirni kamaytiradi va hissiy muhitni yaxshilaydi. Diqqatni jamlashga va aqliy charchoq bilan kurashishga yordam beradi",
                },
                {
                  name: "Rozmarin o'ti",
                  benefit:
                    "Miya faoliyati va diqqatni faollashtiradi. Idrokni o'tkirlashtiradi va reaksiyani tezlashtiradi. Ko'nikishsiz tabiiy nootrop ta'sir",
                },
                {
                  name: "Pushti radiola ildizi",
                  benefit:
                    "Adaptogen - miyaning stresslarga chidamliligini oshiradi. Hujayra quvvatini oshiradi. Miyani kislorod tanqisligidan himoya qiladi",
                },
              ].map((ingredient, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 lg:p-8">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-md">
                      <Image
                        src={`/images/trava${index + 1}.png`}
                        alt={ingredient.name}
                        width={60}
                        height={60}
                      />
                    </div>
                    <h3 className="font-semibold text-lg lg:text-xl mb-3">{ingredient.name}</h3>
                    <p className="text-gray-600 text-sm lg:text-base">{ingredient.benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              "Super xotira" kimlar uchun
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Keksalarda",
                  description: "xotira pasayganda, tez-tez bosh aylanishida, quloq shang'illashida",
                },
                {
                  title: "Yurak xuruji yoki insultni boshdan kechirganlarga",
                  description: "tiklanish uchun",
                },
                {
                  title: "Gipertoniya bilan og'rigan odamlar uchun",
                  description: "qon bosimini normallashtirish",
                },
                {
                  title: "Aqliy mehnat bilan shug'ullanuvchilar uchun",
                  description: "aniqlik va diqqatni jamlash uchun",
                },
                {
                  title: "40 yoshdan oshgan barchaga",
                  description: "qon tomir kasalliklarining oldini olish uchun",
                },
                {
                  title: "Bolalar va o'smirlar uchun",
                  description: "xotira va diqqatni yaxshilash uchun",
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <Image
                        src={`/images/chel${index + 1}.png`}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full object-cover mx-auto"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-sky-400 via-blue-400 to-cyan-300">
          <div className="container mx-auto max-w-5xl px-4 text-center">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              <div className="space-y-6 order-1 lg:order-1">
                <CountdownTimer />
              </div>
              <div className="relative order-2 lg:order-2">
                <Image
                  src="/images/bad.png"
                  alt="Super Pamyat bottle"
                  width={150}
                  height={250}
                  className="drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-full lg:w-auto order-3 lg:order-3">
                <OrderForm />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gradient-to-br from-cyan-100 to-blue-100">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Mijozlarimizning fikrlari</h2>
            <div className="space-y-6">
              {[
                {
                  name: "Bahora - 68 yosh",
                  text: "3 haftalik qabuldan so'ng kalitlarni qayerga qo'yganimni yana eslay boshladim va boshimdagi shovqindan uyg'onmay qo'ydim. Bosim barqarorlashdi!",
                },
                {
                  name: "Bekzod - 55 yoshda",
                  text: "Ko'p yillardan beri gipertoniyaga chalinganman, buning ustiga IT sohasida ishlayman - kechga borib boshim aylanmay qoldi. Super xotira haqiqatan ham miyani jonlantirdi.",
                },
                {
                  name: "Gulnoza - 73 yoshda",
                  text: "Shifokor aytdi - xotira endi qaytib kelmaydi. Men esa kursdan o'tdim va kitoblarni takrorlamasdan o'qiyapman. Rahmat sizga!",
                },
                {
                  name: "Sherzod - 33 yosh",
                  text: "Otamga sotib oldim 75 yosh - ilgari ismlarni unutib qo'yardim, suhbatlarda o'zimni yo'qotib qo'yardim. Bir oydan keyin hazillashadigan, eski hikoyalarni eslaydigan, hatto krossvordlarni yechadigan bo'lib qoldi.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white/80">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Image
                        src={`/images/otziv${index + 1}.png`}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{testimonial.name}</h4>
                        <p className="text-gray-700 italic">"{testimonial.text}"</p>
                        <div className="flex mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Scientific Backing Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Nima uchun "Super xotira" haqiqatdan ham yordam beradi
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <p className="text-gray-700">Komponentlarning klinik tadqiqotlariga asoslangan</p>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <p className="text-gray-700">
                    Xalqaro fitoterapiya assotsiatsiyalari tomonidan tasdiqlangan o'simliklardan foydalaniladi.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <p className="text-gray-700">Uzoq muddat qabul qilinganda xavfsiz</p>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <p className="text-gray-700">Formula nevrologlar va kardiologlar ishtirokida ishlab chiqilgan.</p>
                </div>
                <p className="text-gray-600 text-sm mt-6">
                  Formula yoshga bog'liq kognitiv va qon tomir kasalliklarida samaradorligi isbotlangan o'simlik
                  ekstraktlarining klinik tadqiqotlari asosida ishlab chiqilgan.
                </p>
              </div>
              <div className="flex justify-center items-center gap-8">
                <Image
                  src="/images/bad.png"
                  alt="Product with certificate"
                  width={180}
                  height={300}
                  className="w-32 sm:w-40 lg:w-44 xl:w-48 drop-shadow-xl h-auto"
                />
                <Image
                  src="/images/license.png"
                  alt="Certificate"
                  width={300}
                  height={400}
                  className="w-40 sm:w-52 lg:w-64 xl:w-72 drop-shadow-lg h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Usage Conditions Section */}
        <section className="py-16 bg-gradient-to-br from-cyan-100 to-blue-100">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Qanday holatlarda qabul qilish tavsiya etiladi
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Unutuvchanlik, parishonxotirlik, chalkash fikrlash", icon: "🧠" },
                { title: "Yuqori bezovtalik va charchoq", icon: "😰" },
                { title: "Ismlar, yuzlar, harakatlar uchun zaif xotira", icon: "🤔" },
                { title: "Surunkali charchoq sindromi", icon: "😴" },
                { title: "Insult va mikroibsulrdan keyin", icon: "❤️" },
              ].map((condition, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{condition.icon}</div>
                    <h3 className="font-semibold text-lg">{condition.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-sky-400 via-blue-400 to-cyan-300">
          <div className="container mx-auto max-w-5xl px-4 text-center">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              <div className="space-y-6 order-1 lg:order-1">
                <CountdownTimer />
              </div>
              <div className="relative order-2 lg:order-2">
                <Image
                  src="/images/bad.png"
                  alt="Super Pamyat bottle"
                  width={150}
                  height={250}
                  className="drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-full lg:w-auto order-3 lg:order-3">
                <OrderForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>

  )
}
