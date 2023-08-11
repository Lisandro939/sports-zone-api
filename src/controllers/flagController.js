import path from 'path';
import { fileURLToPath } from 'url'; // Importa la función necesaria para convertir URL a rutas de archivos

export function getFlag(req, res) {

    function transformWord(word) {
        const firstTwoLetters = word.slice(0, 2).toLowerCase();
        return firstTwoLetters;
    }

    const country = req.params.country;

    const flagInit = transformWord(country)

    const currentFilePath = fileURLToPath(import.meta.url);
    const currentDirectory = path.dirname(currentFilePath);
    const flag = path.join(currentDirectory, `../assets/flags/${flagInit}.png`);
    res.sendFile(flag);
}
