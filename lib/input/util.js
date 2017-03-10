"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getKeycode = getKeycode;
exports.getKeysym = getKeysym;

var _keysym = require("./keysym.js");

var _keysym2 = _interopRequireDefault(_keysym);

var _keysymdef = require("./keysymdef.js");

var keysyms = _interopRequireWildcard(_keysymdef);

var _fixedkeys = require("./fixedkeys.js");

var _fixedkeys2 = _interopRequireDefault(_fixedkeys);

var _vkeys = require("./vkeys.js");

var _vkeys2 = _interopRequireDefault(_vkeys);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isMac() {
    return navigator && !!/mac/i.exec(navigator.platform);
}

// Get 'KeyboardEvent.code', handling legacy browsers
function getKeycode(evt) {
    // Are we getting proper key identifiers?
    // (unfortunately Firefox and Chrome are crappy here and gives
    // us an empty string on some platforms, rather than leaving it
    // undefined)
    if (evt.code) {
        // Mozilla isn't fully in sync with the spec yet
        switch (evt.code) {
            case 'OSLeft':
                return 'MetaLeft';
            case 'OSRight':
                return 'MetaRight';
        }

        return evt.code;
    }

    // The de-facto standard is to use Windows Virtual-Key codes
    // in the 'keyCode' field for non-printable characters. However
    // Webkit sets it to the same as charCode in 'keypress' events.
    if (evt.type !== 'keypress' && evt.keyCode in _vkeys2.default) {
        var code = _vkeys2.default[evt.keyCode];

        // macOS has messed up this code for some reason
        if (isMac() && code === 'ContextMenu') {
            code = 'MetaRight';
        }

        // The keyCode doesn't distinguish between left and right
        // for the standard modifiers
        if (evt.location === 2) {
            switch (code) {
                case 'ShiftLeft':
                    return 'ShiftRight';
                case 'ControlLeft':
                    return 'ControlRight';
                case 'AltLeft':
                    return 'AltRight';
            }
        }

        // Nor a bunch of the numpad keys
        if (evt.location === 3) {
            switch (code) {
                case 'Delete':
                    return 'NumpadDecimal';
                case 'Insert':
                    return 'Numpad0';
                case 'End':
                    return 'Numpad1';
                case 'ArrowDown':
                    return 'Numpad2';
                case 'PageDown':
                    return 'Numpad3';
                case 'ArrowLeft':
                    return 'Numpad4';
                case 'ArrowRight':
                    return 'Numpad6';
                case 'Home':
                    return 'Numpad7';
                case 'ArrowUp':
                    return 'Numpad8';
                case 'PageUp':
                    return 'Numpad9';
                case 'Enter':
                    return 'NumpadEnter';
            }
        }

        return code;
    }

    return 'Unidentified';
}

// Get the most reliable keysym value we can get from a key event
function getKeysym(evt) {

    // We start with layout independent keys
    var code = getKeycode(evt);
    if (code in _fixedkeys2.default) {
        return _fixedkeys2.default[code];
    }

    // Next with mildly layout or state sensitive stuff

    // Like AltGraph
    if (code === 'AltRight') {
        if (evt.key === 'AltGraph') {
            return _keysym2.default.XK_ISO_Level3_Shift;
        } else {
            return _keysym2.default.XK_Alt_R;
        }
    }

    // Or the numpad
    if (evt.location === 3) {
        var key = evt.key;

        // IE and Edge use some ancient version of the spec
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8860571/
        switch (key) {
            case 'Up':
                key = 'ArrowUp';break;
            case 'Left':
                key = 'ArrowLeft';break;
            case 'Right':
                key = 'ArrowRight';break;
            case 'Down':
                key = 'ArrowDown';break;
            case 'Del':
                key = 'Delete';break;
        }

        // Safari doesn't support KeyboardEvent.key yet
        if (key === undefined && evt.charCode) {
            key = String.fromCharCode(evt.charCode);
        }

        switch (key) {
            case '0':
                return _keysym2.default.XK_KP_0;
            case '1':
                return _keysym2.default.XK_KP_1;
            case '2':
                return _keysym2.default.XK_KP_2;
            case '3':
                return _keysym2.default.XK_KP_3;
            case '4':
                return _keysym2.default.XK_KP_4;
            case '5':
                return _keysym2.default.XK_KP_5;
            case '6':
                return _keysym2.default.XK_KP_6;
            case '7':
                return _keysym2.default.XK_KP_7;
            case '8':
                return _keysym2.default.XK_KP_8;
            case '9':
                return _keysym2.default.XK_KP_9;
            // There is utter mayhem in the world when it comes to which
            // character to use as a decimal separator...
            case '.':
                return _keysym2.default.XK_KP_Decimal;
            case ',':
                return _keysym2.default.XK_KP_Separator;
            case 'Home':
                return _keysym2.default.XK_KP_Home;
            case 'End':
                return _keysym2.default.XK_KP_End;
            case 'PageUp':
                return _keysym2.default.XK_KP_Prior;
            case 'PageDown':
                return _keysym2.default.XK_KP_Next;
            case 'Insert':
                return _keysym2.default.XK_KP_Insert;
            case 'Delete':
                return _keysym2.default.XK_KP_Delete;
            case 'ArrowUp':
                return _keysym2.default.XK_KP_Up;
            case 'ArrowLeft':
                return _keysym2.default.XK_KP_Left;
            case 'ArrowRight':
                return _keysym2.default.XK_KP_Right;
            case 'ArrowDown':
                return _keysym2.default.XK_KP_Down;
        }
    }

    // Now we need to look at the Unicode symbol instead

    var codepoint;

    if ('key' in evt) {
        // Special key? (FIXME: Should have been caught earlier)
        if (evt.key.length !== 1) {
            return null;
        }

        codepoint = evt.key.charCodeAt();
    } else if ('charCode' in evt) {
        codepoint = evt.charCode;
    }

    if (codepoint) {
        return keysyms.lookup(codepoint);
    }

    return null;
}