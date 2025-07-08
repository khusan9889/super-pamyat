import { Clock } from "lucide-react";
import { Badge } from "./ui/badge";
import { useEffect, useState } from "react";

export const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 7,
        minutes: 5,
        seconds: 34,
    })

    useEffect(() => {
        const totalSeconds = timeLeft.hours * 3600 + timeLeft.minutes * 60 + timeLeft.seconds
        if (totalSeconds <= 0) return

        const timer = setTimeout(() => {
            setTimeLeft((prev) => {
                const { hours, minutes, seconds } = prev
                if (seconds > 0) {
                    return { ...prev, seconds: seconds - 1 }
                } else if (minutes > 0) {
                    return { hours, minutes: minutes - 1, seconds: 59 }
                } else if (hours > 0) {
                    return { hours: hours - 1, minutes: 59, seconds: 59 }
                }
                return prev
            })
        }, 1000)

        return () => clearTimeout(timer)
    }, [timeLeft])
    return (<div className="flex flex-col sm:flex-row items-center gap-4 text-center">
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
}

