// Direct test: check what rawLines the parser creates for your exact case
const fs = require('fs');

// Simulate the parser logic directly
function testParseInlineMsgid() {
    const lineText = '     A            PRUEBA       10  O 18 31MSGID(WWM 0049 BIBLIOTECA/FPRBMSGF1-';
    
    console.log('Input line:', lineText);
    console.log('\n');
    
    // Step 1: Search for MSGID(
    const msgidStart = lineText.search(/MSGID\(/i);
    console.log(`Step 1: Search for MSGID( → position ${msgidStart}`);
    
    if (msgidStart < 0) {
        console.log('❌ MSGID not found!');
        return null;
    }
    
    // Step 2: Extract first segment
    const firstSegment = lineText.substring(msgidStart + 'MSGID('.length).trim();
    console.log(`Step 2: Extract first segment → "${firstSegment}"`);
    console.log('\n');
    
    // Step 3: Look for closing ")"
    const closedInFirst = firstSegment.indexOf(')');
    console.log(`Step 3: Look for ")" → position ${closedInFirst}`);
    
    if (closedInFirst >= 0) {
        console.log('✅ Found ")" in first segment');
        const content = firstSegment.substring(0, closedInFirst).trim();
        console.log(`Content: "${content}"`);
        console.log('\nRawLines = ["' + content + '"]');
        return {
            rawLines: [content],
            isSingleLine: true
        };
    } else {
        console.log('❌ No ")" found in first segment');
        console.log(`Will need continuation. First line of rawLines: "${firstSegment}"`);
        console.log('\nrawLines would start with: ["' + firstSegment + '", ...]');
        return {
            rawLines: [firstSegment],
            isSingleLine: false,
            needsContinuation: true
        };
    }
}

console.log('=== Testing parser logic for your exact case ===\n');
const result = testParseInlineMsgid();
console.log('\n');
if (result) {
    console.log(JSON.stringify(result, null, 2));
    console.log('\n');
    if (!result.isSingleLine) {
        console.log('⚠️  The parser detected that MSGID needs a continuation line');
        console.log('It should look for "2)" in the next line  and add it to rawLines[1]');
    }
}
