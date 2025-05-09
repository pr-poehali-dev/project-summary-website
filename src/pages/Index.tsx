
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-purple-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-purple-600 text-white p-2 rounded-lg">
              <Icon name="Code" size={24} />
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
              Проект.Резюме
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Особенности</a>
            <a href="#tech" className="text-gray-600 hover:text-purple-600 transition-colors">Технологии</a>
            <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors">Контакты</a>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Icon name="Download" className="mr-2" size={16} />
              Скачать резюме
            </Button>
          </nav>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block p-2 px-4 mb-6 rounded-full bg-purple-100 text-purple-800 font-medium animate-fade-in">
              <div className="flex items-center gap-2">
                <Icon name="Sparkles" size={16} />
                <span>Инновационный подход к разработке</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600">
              Представляем уникальный IT проект
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Современное решение для создания цифровых продуктов с использованием 
              передовых технологий и методологий разработки
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6">
                Начать работу
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-purple-300">
                <Icon name="Play" className="mr-2" size={16} />
                Смотреть демо
              </Button>
            </div>
          </div>
        </div>
        
        {/* Abstract Shape */}
        <div className="absolute top-40 right-0 -z-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-60 left-20 -z-10 w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-20"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ключевые особенности</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Наш проект предлагает набор инновационных функций, 
              разработанных для оптимизации вашего рабочего процесса
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Layout",
                title: "Адаптивный дизайн",
                description: "Интерфейс автоматически подстраивается под любые устройства и размеры экранов"
              },
              {
                icon: "Zap",
                title: "Высокая производительность",
                description: "Оптимизированный код обеспечивает молниеносную загрузку и работу приложения"
              },
              {
                icon: "Shield",
                title: "Безопасность данных",
                description: "Современные протоколы шифрования для защиты всей пользовательской информации"
              },
              {
                icon: "Users",
                title: "Командная работа",
                description: "Инструменты для эффективного взаимодействия в команде разработчиков"
              },
              {
                icon: "Code",
                title: "Чистый код",
                description: "Следование лучшим практикам для создания поддерживаемого кодового базиса"
              },
              {
                icon: "BarChart2",
                title: "Аналитика",
                description: "Встроенные инструменты анализа данных для принятия обоснованных решений"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 mb-4 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                  <Icon name={feature.icon} size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Технологический стек</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы используем передовые технологии для создания надежных и масштабируемых решений
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "React", icon: "SquareCode" },
              { name: "TypeScript", icon: "FileJson2" },
              { name: "Tailwind CSS", icon: "Palette" },
              { name: "Vite", icon: "Zap" },
              { name: "Node.js", icon: "Server" },
              { name: "GraphQL", icon: "Diamond" },
              { name: "PostgreSQL", icon: "Database" },
              { name: "Docker", icon: "Package" }
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-purple-50 transition-colors"
              >
                <div className="w-16 h-16 mb-4 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                  <Icon name={tech.icon} size={32} />
                </div>
                <h3 className="text-lg font-medium">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Связаться с нами</h2>
            <p className="text-xl text-gray-600">
              У вас есть вопросы о проекте? Мы всегда открыты для диалога!
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto border border-purple-100">
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ваше имя
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Иван Иванов"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Электронная почта
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Расскажите о вашем запросе..."
                ></textarea>
              </div>
              
              <Button className="bg-purple-600 hover:bg-purple-700 w-full py-6">
                Отправить сообщение
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-white p-2 rounded-lg">
                  <Icon name="Code" size={24} className="text-purple-600" />
                </div>
                <h1 className="text-xl font-bold text-white">
                  Проект.Резюме
                </h1>
              </div>
              <p className="text-gray-400 max-w-sm">
                Инновационное решение для разработки цифровых продуктов с использованием современных технологий.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Ресурсы</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Документация</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Руководства</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Примеры</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Компания</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Карьера</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Блог</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Соцсети</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Icon name="Github" size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Icon name="Twitter" size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Icon name="Linkedin" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-center">
              © {new Date().getFullYear()} Проект.Резюме. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
