const Logger = {
    _enabled: true,

    parse(message, ...args) {
        if (this._enabled) {console.log('🔍', message, ...args);}
    },

    success(message, ...args) {
        if (this._enabled) {console.log('✅', message, ...args);}
    },

    error(message, ...args) {
        if (this._enabled) {console.error('❌', message, ...args);}
    },

    warn(message, ...args) {
        if (this._enabled) {console.warn('⚠️', message, ...args);}
    },

    stats(message, ...args) {
        if (this._enabled) {console.log('📊', message, ...args);}
    },

    ui(message, ...args) {
        if (this._enabled) {console.log('🎨', message, ...args);}
    },

    dds(message, ...args) {
        if (this._enabled) {console.log('📝', message, ...args);}
    },

    debug(message, ...args) {
        if (this._enabled) {console.log('🐛', message, ...args);}
    },

    key(message, ...args) {
        if (this._enabled) {console.log('🔑', message, ...args);}
    },

    window(message, ...args) {
        if (this._enabled) {console.log('🪟', message, ...args);}
    },

    enable() {
        this._enabled = true;
        console.log('✅ Logging enabled');
    },

    disable() {
        console.log('⛔ Logging disabled');
        this._enabled = false;
    },

    isEnabled() {
        return this._enabled;
    },

    group(title, callback) {
        if (this._enabled) {
            console.group('📦 ' + title);
            callback();
            console.groupEnd();
        }
    }
};

if (!globalThis.Logger) {
    globalThis.Logger = Logger;
}

export { Logger };
