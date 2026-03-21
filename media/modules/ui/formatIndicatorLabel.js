// Convierte un array de indicadores en texto como "02 43 11" o "N03 51"
export function formatIndicatorLabel(list) {
    if (!Array.isArray(list) || list.length === 0) {
        return 'No ind.';
    }

    return list
        .map(ind => (ind.not ? `N${ind.number.padStart(2, '0')}` : ind.number.padStart(2, '0')))
        .join(' ');
}
