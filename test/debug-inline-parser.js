// Debug: Check if inline parsing is working correctly
const fs = require('fs');
const path = require('path');

const sample = 'A            PRUEBA       10  O 18 31MSGID(WWM 0049 BIBLIOTECA/FPRBMSGF1-';

console.log('=== Simulating inline MSGID parsing ===\n');
console.log('Line content:', sample);
console.log('\n');

// Extract keyword area (columns > 43)
const keywordArea = sample.length > 43 ? sample.substring(43) : '';
console.log('Keyword area (>col 43):', keywordArea);
console.log('\n');

// Search for MSGID
const msgidStart = keywordArea.search(/MSGID\(/i);
console.log('MSGID found at position:', msgidStart);

if (msgidStart >= 0) {
    const firstSegment = keywordArea.substring(msgidStart + 'MSGID('.length).trim();
    console.log('First segment (after "MSGID("):', firstSegment);
    console.log('\n');
    
    const closedInFirst = firstSegment.indexOf(')');
    console.log('Closing ")" found at position:', closedInFirst);
    
    if (closedInFirst >= 0) {
        console.log('✅ CLOSED IN FIRST LINE');
        console.log('Content:', firstSegment.substring(0, closedInFirst).trim());
    } else {
        console.log('❌ NOT CLOSED - needs continuation line');
        console.log('Will add to rawLines:', firstSegment);
    }
}
