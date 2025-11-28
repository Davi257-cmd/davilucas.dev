import { useState, useEffect } from "react";
import { X, Smartphone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const AppNotification = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar notificação após 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Verificar se já foi fechada antes
    const wasClosed = localStorage.getItem("appNotificationClosed");
    if (wasClosed === "true") {
      setIsVisible(false);
    }

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("appNotificationClosed", "true");
  };

  const handleContactWhatsApp = () => {
    const whatsappNumber = "5585996827671";
    const message = encodeURIComponent("Olá! Gostaria de ter meu aplicativo publicado ainda essa semana!");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-3 right-3 md:bottom-4 md:right-4 z-50 w-[calc(100vw-1.5rem)] max-w-[280px] md:max-w-sm"
        >
          <div className="bg-card border border-border rounded-lg shadow-lg p-2.5 md:p-4 glass backdrop-blur-sm">
            <div className="flex items-start gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                <Smartphone className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-xs md:text-sm lg:text-base leading-tight">Tenha Seu App Ainda Hoje!</h3>
                    <p className="text-[10px] md:text-xs lg:text-sm text-muted-foreground mt-0.5 md:mt-1 leading-snug">
                      Fale comigo e tenha seu app publicado ainda essa semana!
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="text-muted-foreground hover:text-foreground transition-colors shrink-0 p-1 -mt-1 -mr-1"
                  >
                    <X className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-gradient-primary border-0 text-[10px] md:text-xs lg:text-sm h-7 md:h-8 px-2 md:px-4"
                  onClick={handleContactWhatsApp}
                >
                  <span className="truncate">Tenha Seu App Hoje</span>
                  <ExternalLink className="ml-1 md:ml-2 w-2.5 h-2.5 md:w-3 md:h-3 shrink-0" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppNotification;

