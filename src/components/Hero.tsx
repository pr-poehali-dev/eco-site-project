import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <Icon name="TreePine" size={40} className="text-green-600" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 font-montserrat">
          Сделать Москву <span className="text-green-600">чище</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto font-open-sans">
          Не сидеть в гаджетах вам лето, а убирать город
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <Card className="p-6 bg-white/70 backdrop-blur border-0 shadow-sm">
            <Icon
              name="Calendar"
              size={32}
              className="text-green-600 mb-4 mx-auto"
            />
            <h3 className="font-semibold text-gray-800 mb-2">Каждую субботу</h3>
            <p className="text-gray-600 text-sm">Сортировка пластика</p>
          </Card>

          <Card className="p-6 bg-white/70 backdrop-blur border-0 shadow-sm">
            <Icon
              name="MapPin"
              size={32}
              className="text-green-600 mb-4 mx-auto"
            />
            <h3 className="font-semibold text-gray-800 mb-2">1 парк в месяц</h3>
            <p className="text-gray-600 text-sm">Комплексная уборка</p>
          </Card>

          <Card className="p-6 bg-white/70 backdrop-blur border-0 shadow-sm">
            <Icon
              name="Users"
              size={32}
              className="text-green-600 mb-4 mx-auto"
            />
            <h3 className="font-semibold text-gray-800 mb-2">Вместе</h3>
            <p className="text-gray-600 text-sm">Делаем город лучше</p>
          </Card>
        </div>

        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full font-medium"
        >
          <Icon name="Phone" size={20} className="mr-2" />
          Участвовать в акции
        </Button>
      </div>
    </section>
  );
}
