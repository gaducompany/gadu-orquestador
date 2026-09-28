/**
 * Inicializa y rehidrata los iconos de Lucide en el DOM utilizando
 * la librería global cargada para evitar sobrecargar el bundle principal de Angular.
 */
export function inicializarIconosLucide(): void {
  if (typeof window !== 'undefined') {
    const ventana = window as unknown as { lucide?: { createIcons: () => void } };
    if (ventana.lucide?.createIcons) {
      ventana.lucide.createIcons();
    }
  }
}
