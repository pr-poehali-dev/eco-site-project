import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Participation() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Как участвовать
          </h2>
          <p className="text-xl text-gray-600 font-open-sans">
            Присоединяйся к сообществу за чистую Москву
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-green-50 border-green-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 font-montserrat">
                Связь с нами
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <Icon name="Phone" size={20} className="text-green-600 mr-3" />
                <span className="text-2xl font-semibold text-gray-800">
                  +7 (917) 526-75-83
                </span>
              </div>

              <p className="text-gray-600">
                Позвоните или напишите для участия в акциях
              </p>

              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white mt-4"
                onClick={() => (window.location.href = "tel:+79175267583")}
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </Button>
            </div>
          </Card>

          <Card className="p-8 bg-blue-50 border-blue-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <Icon name="Calendar" size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 font-montserrat">
                Субботние акции
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <Icon
                  name="Recycle"
                  size={20}
                  className="text-blue-600 mr-3 mt-1"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Сортировка пластика
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Каждую субботу с 10:00
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Icon
                  name="MapPin"
                  size={20}
                  className="text-blue-600 mr-3 mt-1"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">Уборка парков</h4>
                  <p className="text-gray-600 text-sm">1 парк в месяц</p>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mt-4"
              >
                <Icon name="MapPin" size={20} className="mr-2" />
                Найти место сбора
              </Button>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Card className="inline-block p-6 bg-white border-gray-200 shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <Icon name="Heart" size={24} className="text-red-500 mr-2" />
              <span className="text-lg font-semibold text-gray-800">
                Присоединяйся к движению
              </span>
            </div>
            <p className="text-gray-600 max-w-md">
              Мы верим, что маленькие действия могут привести к большим
              изменениям. Каждый убранный мусор делает наш город лучше.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
