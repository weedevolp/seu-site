import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/components/ContactForm"
import SmoothScroll from "@/components/SmoothScroll"

export default function Home() {
  return (
    <>
      <SmoothScroll />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Criação de Sites Profissionais</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Transforme sua presença digital com websites modernos e impactantes
          </p>
          <a 
            href="#contato"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Começar Projeto
          </a>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nossos Trabalhos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Site Institucional",
                description: "Design profissional para empresas",
                image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                link: "/demos/institucional"
              },
              {
                title: "Landing Page",
                description: "Páginas otimizadas para conversão",
                image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                link: "/demos/landing"
              },
              {
                title: "Blog",
                description: "Compartilhe seu conteúdo",
                image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                link: "/demos/blog"
              },
              {
                title: "Loja Virtual",
                description: "Venda seus produtos online",
                image: "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                link: "/demos/loja"
              },
              {
                title: "Portfólio",
                description: "Mostre seu trabalho",
                image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                link: "/demos/portfolio"
              },
              {
                title: "Sistema Web",
                description: "Aplicações web personalizadas",
                image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                link: "/demos/sistema"
              }
            ].map((item, index) => (
              <Link 
                key={index}
                href={item.link}
                className="group relative block aspect-video overflow-hidden rounded-xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Vamos Criar Seu Site?</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
