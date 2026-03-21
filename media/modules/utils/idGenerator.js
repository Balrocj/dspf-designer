export const IdGenerator = {
    _counters: {},

    generateFieldId() {
        const timestamp = Date.now();
        const random = Math.random().toString(36).substr(2, 9);
        return `field_${timestamp}_${random}`;
    },

    generateUniqueName(prefix, existingNames = []) {
        if (!this._counters[prefix]) {
            this._counters[prefix] = 1;
        }

        let name;
        let attempts = 0;
        const maxAttempts = 1000;

        do {
            name = prefix + this._counters[prefix];
            this._counters[prefix]++;
            attempts++;

            if (attempts > maxAttempts) {
                name = prefix + Date.now();
                break;
            }
        } while (existingNames.includes(name));

        return name;
    },

    resetCounter(prefix) {
        if (this._counters[prefix]) {
            this._counters[prefix] = 1;
        }
    },

    resetAllCounters() {
        this._counters = {};
    },

    getCounter(prefix) {
        return this._counters[prefix] || 0;
    },

    generateUniqueRecordName(prefix = 'REC', existingNames = []) {
        return this.generateUniqueName(prefix, existingNames);
    },

    generateUniqueId(prefix = 'id') {
        const timestamp = Date.now();
        const random = Math.random().toString(36).substr(2, 9);
        return `${prefix}-${timestamp}-${random}`;
    }
};
