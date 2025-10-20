import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail, Menu } from "lucide-react";
import heroBurger from "@/assets/hero-burger.jpg";
import clasica from "@/assets/clasica.jpg";
import deluxe from "@/assets/deluxe.jpg";
import picante from "@/assets/picante.jpg";
import { useState } from "react";
import { toast } from "sonner";

const Index = () => {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para hacer scroll suave a una sección específica
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Cierra el menú móvil después de navegar
  };

  // Maneja el envío del formulario de contacto
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Nos pondremos en contacto pronto.");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* BARRA DE NAVEGACIÓN - Fija en la parte superior */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo del restaurante */}
            <h1 className="text-2xl md:text-3xl font-bold text-primary">Lo de Paco</h1>
            
            {/* Menú de navegación para escritorio - se oculta en móvil */}
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition-colors font-medium">
                Inicio
              </button>
              <button onClick={() => scrollToSection("productos")} className="text-foreground hover:text-primary transition-colors font-medium">
                Productos
              </button>
              <button onClick={() => scrollToSection("contacto")} className="text-foreground hover:text-primary transition-colors font-medium">
                Contacto
              </button>
            </div>

            {/* Botón para abrir el menú en móviles - solo visible en pantallas pequeñas */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Menú móvil desplegable - solo se muestra cuando isMenuOpen es true */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-3 pb-4">
              <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                Inicio
              </button>
              <button onClick={() => scrollToSection("productos")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                Productos
              </button>
              <button onClick={() => scrollToSection("contacto")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                Contacto
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* SECCIÓN HERO (INICIO) - Primera pantalla que ve el usuario */}
      <section id="inicio" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        {/* Imagen de fondo con opacidad reducida */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${heroBurger})` }}
        />
        {/* Gradiente sobre la imagen para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        
        {/* Contenido principal del hero */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Título principal */}
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Lo de Paco
            </h2>
            {/* Eslogan */}
            <p className="text-xl md:text-2xl mb-8 text-secondary">
              Las mejores hamburguesas artesanales
            </p>
            {/* Descripción del negocio */}
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Más de 20 años preparando las hamburguesas más deliciosas de la ciudad. 
              Carne 100% de res, ingredientes frescos y el sabor que buscas.
            </p>
            {/* Botón de llamada a la acción */}
            <Button 
              size="lg" 
              onClick={() => scrollToSection("productos")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
            >
              Ver Nuestro Menú
            </Button>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE PRODUCTOS - Muestra el menú de hamburguesas */}
      <section id="productos" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          {/* Encabezado de la sección */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Nuestras Hamburguesas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Todas nuestras hamburguesas incluyen papas fritas y refresco
            </p>
          </div>

          {/* Grid de productos - 3 columnas en pantallas grandes, 2 en medianas, 1 en móviles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* TARJETA: Hamburguesa Clásica */}
            <Card className="overflow-hidden bg-background border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              {/* Imagen del producto con efecto hover */}
              <div className="aspect-square overflow-hidden">
                <img 
                  src={clasica} 
                  alt="Hamburguesa Clásica" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              {/* Información del producto */}
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Clásica</h3>
                <p className="text-muted-foreground mb-4">
                  Carne de res, queso cheddar, lechuga, tomate, pepinillos y nuestra salsa especial
                </p>
                <p className="text-3xl font-bold text-secondary">$120</p>
              </CardContent>
            </Card>

            {/* TARJETA: Hamburguesa Deluxe */}
            <Card className="overflow-hidden bg-background border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={deluxe} 
                  alt="Hamburguesa Deluxe" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Deluxe</h3>
                <p className="text-muted-foreground mb-4">
                  Doble carne, tocino crujiente, queso, cebolla caramelizada y salsa BBQ
                </p>
                <p className="text-3xl font-bold text-secondary">$180</p>
              </CardContent>
            </Card>

            {/* TARJETA: Hamburguesa Picante */}
            <Card className="overflow-hidden bg-background border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={picante} 
                  alt="Hamburguesa Picante" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Picante</h3>
                <p className="text-muted-foreground mb-4">
                  Carne de res, jalapeños asados, queso pepper jack y salsa chipotle
                </p>
                <p className="text-3xl font-bold text-secondary">$150</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CONTACTO - Información de contacto y formulario */}
      <section id="contacto" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Encabezado de la sección */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Contáctanos</h2>
            <p className="text-lg text-muted-foreground">
              Estamos aquí para servirte
            </p>
          </div>

          {/* Grid de 2 columnas: información de contacto y formulario */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* COLUMNA IZQUIERDA: Información de contacto */}
            <div className="space-y-8">
              {/* Tarjeta de teléfono */}
              <Card className="p-6 bg-card border-border">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">Teléfono</h3>
                    <p className="text-muted-foreground">+52 (55) 1234-5678</p>
                    <p className="text-muted-foreground">Lun - Dom: 12:00 - 23:00</p>
                  </div>
                </div>
              </Card>

              {/* Tarjeta de dirección */}
              <Card className="p-6 bg-card border-border">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">Dirección</h3>
                    <p className="text-muted-foreground">Av. Principal #123</p>
                    <p className="text-muted-foreground">Col. Centro, CDMX</p>
                  </div>
                </div>
              </Card>

              {/* Tarjeta de email */}
              <Card className="p-6 bg-card border-border">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">Email</h3>
                    <p className="text-muted-foreground">contacto@lodepaco.com</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* COLUMNA DERECHA: Formulario de contacto */}
            <Card className="p-6 bg-card border-border">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Campo de nombre */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Nombre</label>
                  <Input 
                    required 
                    placeholder="Tu nombre" 
                    className="bg-background border-input text-foreground"
                  />
                </div>
                {/* Campo de email */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <Input 
                    type="email" 
                    required 
                    placeholder="tu@email.com" 
                    className="bg-background border-input text-foreground"
                  />
                </div>
                {/* Campo de mensaje */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Mensaje</label>
                  <Textarea 
                    required 
                    placeholder="¿En qué podemos ayudarte?" 
                    className="min-h-[120px] bg-background border-input text-foreground"
                  />
                </div>
                {/* Botón de envío */}
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* PIE DE PÁGINA - Copyright e información legal */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Lo de Paco - Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
