from PIL import Image, UnidentifiedImageError
import os
import logging

# Configuration du logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def upscale_images(directory):
    if not os.path.isdir(directory):
        logging.error(f"Le répertoire '{directory}' n'existe pas.")
        return

    for filename in os.listdir(directory):
        filepath = os.path.join(directory, filename)
        if os.path.isfile(filepath):
            try:
                img = Image.open(filepath)
                width, height = img.size
                new_img = img.resize((width * 4, height * 4), Image.NEAREST)
                new_img.save(filepath)
                logging.info(f"Image '{filename}' mise à l'échelle et écrasée")
            except UnidentifiedImageError:
                logging.warning(f"Le fichier '{filename}' n'est pas une image.")
            except Exception as e:
                logging.error(f"Erreur lors du traitement de '{filename}': {e}")

directory = "src/data/pokefront"
upscale_images(directory)
