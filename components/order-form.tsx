import { Phone, User } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const OrderForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/[^\d+]/g, "");
    let formatted = cleaned;

    if (!formatted.startsWith("+998")) {
      if (formatted.startsWith("998")) {
        formatted = "+" + formatted;
      } else if (formatted.startsWith("+")) {
        formatted = "+998" + formatted.slice(1);
      } else {
        formatted = "+998" + formatted;
      }
    }

    formatted = formatted.slice(0, 13);

    if (formatted.length >= 4) {
      const countryCode = formatted.slice(0, 4);
      const rest = formatted.slice(4);

      if (rest.length >= 2) {
        const areaCode = rest.slice(0, 2);
        const remaining = rest.slice(2);

        if (remaining.length >= 3) {
          const firstPart = remaining.slice(0, 3);
          const secondPart = remaining.slice(3, 5);
          const thirdPart = remaining.slice(5, 7);

          formatted = `${countryCode} (${areaCode}) ${firstPart}`;
          if (secondPart) formatted += `-${secondPart}`;
          if (thirdPart) formatted += `-${thirdPart}`;
        } else if (remaining.length > 0) {
          formatted = `${countryCode} (${areaCode}) ${remaining}`;
        } else {
          formatted = `${countryCode} (${areaCode})`;
        }
      } else if (rest.length > 0) {
        formatted = `${countryCode} (${rest}`;
      }
    }

    return formatted;
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      phone: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Ism kiritish majburiy";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Ism kamida 2 ta belgidan iborat bo'lishi kerak";
    }

    const phoneDigits = formData.phone.replace(/[^\d]/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Telefon raqam kiritish majburiy";
    } else if (phoneDigits.length < 12) {
      newErrors.phone = "To'liq telefon raqam kiriting";
    } else if (!formData.phone.startsWith("+998")) {
      newErrors.phone = "Telefon raqam +998 bilan boshlanishi kerak";
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.phone;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filteredValue = value.replace(/[^a-zA-ZА-Яа-яЁёўғҳқ\s'-]/g, "");
    setFormData({ ...formData, name: filteredValue });

    if (errors.name) {
      setErrors({ ...errors, name: "" });
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formatted = formatPhoneNumber(value);
    setFormData({ ...formData, phone: formatted });

    if (errors.phone) {
      setErrors({ ...errors, phone: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        router.push("/thank-you");
      } else {
        alert("Xatolik yuz berdi. Iltimos, yana urinib ko‘ring.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Xatolik yuz berdi.");
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-sm bg-white/95 backdrop-blur-sm shadow-xl border-2 border-white/20">
      <CardContent className="p-6 lg:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Ismingiz"
              value={formData.name}
              onChange={handleNameChange}
              className={`pl-12 py-4 text-lg border-2 focus:border-blue-500 ${errors.name ? "border-red-500 focus:border-red-500" : ""
                }`}
              disabled={isSubmitting}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="relative">
            <Phone className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
            <Input
              placeholder="+998 (XX) XXX-XX-XX"
              value={formData.phone}
              onChange={handlePhoneChange}
              className={`pl-12 py-4 text-lg border-2 focus:border-blue-500 ${errors.phone ? "border-red-500 focus:border-red-500" : ""
                }`}
              type="tel"
              disabled={isSubmitting}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <Button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Yuborilmoqda..." : "Ariza qoldiring"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};