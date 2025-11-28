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

  const handleOpenPlayStore = () => {
    window.open("https://play.google.com/store/apps", "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-4 right-4 z-50 max-w-sm"
        >
          <div className="bg-card border border-border rounded-lg shadow-lg p-4 glass backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-sm md:text-base">Tenha Seu Aplicativo!</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">
                      Aplicativo construído em React Native. Disponível na Play Store!
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-gradient-primary border-0 text-xs md:text-sm"
                  onClick={handleOpenPlayStore}
                >
                  Ver na Play Store
                  <ExternalLink className="ml-2 w-3 h-3 md:w-4 md:h-4" />
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

