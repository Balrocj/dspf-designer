export const FieldNameValidator = {
    MAX_LENGTH: 10,
    ALLOWED_NAME_CHARS: 'A-Z0-9_@#$',

    isValid(name, options = {}) {
        const {
            allowEmpty = false,
            mustStartWithLetter = true,
            maxLength = this.MAX_LENGTH
        } = options;

        if (!name || name.length === 0) {
            return allowEmpty;
        }

        if (name.length > maxLength) {
            return false;
        }

        if (mustStartWithLetter) {
            return new RegExp(`^[A-Z][${this.ALLOWED_NAME_CHARS}]*$`, 'i').test(name);
        } else {
            return new RegExp(`^[${this.ALLOWED_NAME_CHARS}]+$`, 'i').test(name);
        }
    },

    validate(name, options = {}) {
        if (!this.isValid(name, options)) {
            const { mustStartWithLetter = true, maxLength = this.MAX_LENGTH } = options;

            if (!name || name.length === 0) {
                throw new Error('Field name cannot be empty');
            }

            if (name.length > maxLength) {
                throw new Error(`Field name cannot exceed ${maxLength} characters`);
            }

            if (mustStartWithLetter) {
                throw new Error('Field name must start with a letter and contain only letters, numbers, underscores, @, #, and $');
            } else {
                throw new Error('Field name must contain only letters, numbers, underscores, @, #, and $');
            }
        }

        return name;
    },

    sanitize(name, fallback = 'FIELD') {
        if (!name || name.length === 0) {
            return fallback;
        }

        let sanitized = name.toUpperCase();
        sanitized = sanitized.replace(/[^A-Z0-9_@#$]/g, '');

        if (!/^[A-Z]/.test(sanitized)) {
            sanitized = 'F' + sanitized;
        }

        if (sanitized.length > this.MAX_LENGTH) {
            sanitized = sanitized.substring(0, this.MAX_LENGTH);
        }

        if (!this.isValid(sanitized)) {
            return fallback;
        }

        return sanitized;
    },

    isReservedKeyword(name) {
        const reserved = ['DATE', 'TIME', 'SYSNAME', 'USER', 'PAGE'];
        return reserved.includes(name.toUpperCase());
    }
};
