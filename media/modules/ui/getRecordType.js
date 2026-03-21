// Get the type of the current record (SFLCTL, SFL, or SCREEN)
export function getRecordType({ recordName, currentDocument }) {
    const lines = currentDocument.split('\n');
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes(`R ${recordName}`) || line.includes(`R  ${recordName}`)) {
            // Check keywords on the same line first
            if (line.includes('SFLCTL')) {return 'SFLCTL';}
            if (line.includes('SFL')) {return 'SFL';}
            if (line.includes('WINDOW(')) {return 'WINDOW';}

            // If not found on same line, check following lines within this record
            for (let j = i + 1; j < lines.length; j++) {
                const nextLine = lines[j];
                // Stop if we hit another record declaration
                if (nextLine.match(/^\s{5}A\s+R\s+\w+/)) {
                    break;
                }
                // Check for keywords in continuation lines (any keyword that determines record type)
                if (nextLine.includes('SFLCTL')) {return 'SFLCTL';}
                if (nextLine.includes('SFL') && !nextLine.includes('SFLCTL')) {return 'SFL';}
                if (nextLine.includes('WINDOW(')) {return 'WINDOW';}
            }

            return 'SCREEN';
        }
    }
    return 'SCREEN';
}
