'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keysym = require('./keysym');

var _keysym2 = _interopRequireDefault(_keysym);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    'Backspace': _keysym2.default.XK_BackSpace,
    'AltLeft': _keysym2.default.XK_Alt_L,
    // AltRight is special
    'CapsLock': _keysym2.default.XK_Caps_Lock,
    'ContextMenu': _keysym2.default.XK_Menu,
    'ControlLeft': _keysym2.default.XK_Control_L,
    'ControlRight': _keysym2.default.XK_Control_R,
    'Enter': _keysym2.default.XK_Return,
    'MetaLeft': _keysym2.default.XK_Super_L,
    'MetaRight': _keysym2.default.XK_Super_R,
    'ShiftLeft': _keysym2.default.XK_Shift_L,
    'ShiftRight': _keysym2.default.XK_Shift_R,
    'Space': _keysym2.default.XK_space,
    'Tab': _keysym2.default.XK_Tab,
    // FIXME: Japanese/Korean keys
    'Delete': _keysym2.default.XK_Delete,
    'End': _keysym2.default.XK_End,
    'Help': _keysym2.default.XK_Help,
    'Home': _keysym2.default.XK_Home,
    'Insert': _keysym2.default.XK_Insert,
    'PageDown': _keysym2.default.XK_Next,
    'PageUp': _keysym2.default.XK_Prior,
    'ArrowDown': _keysym2.default.XK_Down,
    'ArrowLeft': _keysym2.default.XK_Left,
    'ArrowRight': _keysym2.default.XK_Right,
    'ArrowUp': _keysym2.default.XK_Up,
    'NumLock': _keysym2.default.XK_Num_Lock,
    'NumpadAdd': _keysym2.default.XK_KP_Add,
    'NumpadBackspace': _keysym2.default.XK_KP_Delete,
    'NumpadClear': _keysym2.default.XK_Clear,
    // NumpadDecimal is special
    'NumpadDivide': _keysym2.default.XK_KP_Divide,
    'NumpadEnter': _keysym2.default.XK_KP_Enter,
    'NumpadEqual': _keysym2.default.XK_KP_Equal,
    'NumpadMultiply': _keysym2.default.XK_KP_Multiply,
    'NumpadSubtract': _keysym2.default.XK_KP_Subtract,
    'Escape': _keysym2.default.XK_Escape,
    'F1': _keysym2.default.XK_F1,
    'F2': _keysym2.default.XK_F2,
    'F3': _keysym2.default.XK_F3,
    'F4': _keysym2.default.XK_F4,
    'F5': _keysym2.default.XK_F5,
    'F6': _keysym2.default.XK_F6,
    'F7': _keysym2.default.XK_F7,
    'F8': _keysym2.default.XK_F8,
    'F9': _keysym2.default.XK_F9,
    'F10': _keysym2.default.XK_F10,
    'F11': _keysym2.default.XK_F11,
    'F12': _keysym2.default.XK_F12,
    'F13': _keysym2.default.XK_F13,
    'F14': _keysym2.default.XK_F14,
    'F15': _keysym2.default.XK_F15,
    'F16': _keysym2.default.XK_F16,
    'F17': _keysym2.default.XK_F17,
    'F18': _keysym2.default.XK_F18,
    'F19': _keysym2.default.XK_F19,
    'F20': _keysym2.default.XK_F20,
    'F21': _keysym2.default.XK_F21,
    'F22': _keysym2.default.XK_F22,
    'F23': _keysym2.default.XK_F23,
    'F24': _keysym2.default.XK_F24,
    'F25': _keysym2.default.XK_F25,
    'F26': _keysym2.default.XK_F26,
    'F27': _keysym2.default.XK_F27,
    'F28': _keysym2.default.XK_F28,
    'F29': _keysym2.default.XK_F29,
    'F30': _keysym2.default.XK_F30,
    'F31': _keysym2.default.XK_F31,
    'F32': _keysym2.default.XK_F32,
    'F33': _keysym2.default.XK_F33,
    'F34': _keysym2.default.XK_F34,
    'F35': _keysym2.default.XK_F35,
    'PrintScreen': _keysym2.default.XK_Print,
    'ScrollLock': _keysym2.default.XK_Scroll_Lock,
    'Pause': _keysym2.default.XK_Pause,
    'BrowserBack': _keysym2.default.XF86XK_Back,
    'BrowserFavorites': _keysym2.default.XF86XK_Favorites,
    'BrowserForward': _keysym2.default.XF86XK_Forward,
    'BrowserHome': _keysym2.default.XF86XK_HomePage,
    'BrowserRefresh': _keysym2.default.XF86XK_Refresh,
    'BrowserSearch': _keysym2.default.XF86XK_Search,
    'BrowserStop': _keysym2.default.XF86XK_Stop,
    'LaunchApp1': _keysym2.default.XF86XK_Explorer,
    'LaunchApp2': _keysym2.default.XF86XK_Calculator,
    'LaunchMail': _keysym2.default.XF86XK_Mail,
    'MediaPlayPause': _keysym2.default.XF86XK_AudioPlay,
    'MediaStop': _keysym2.default.XF86XK_AudioStop,
    'MediaTrackNext': _keysym2.default.XF86XK_AudioNext,
    'MediaTrackPrevious': _keysym2.default.XF86XK_AudioPrev,
    'Power': _keysym2.default.XF86XK_PowerOff,
    'Sleep': _keysym2.default.XF86XK_Sleep,
    'AudioVolumeDown': _keysym2.default.XF86XK_AudioLowerVolume,
    'AudioVolumeMute': _keysym2.default.XF86XK_AudioMute,
    'AudioVolumeUp': _keysym2.default.XF86XK_AudioRaiseVolume,
    'WakeUp': _keysym2.default.XF86XK_WakeUp
}; /*
    * noVNC: HTML5 VNC client
    * Copyright (C) 2017 Pierre Ossman for Cendio AB
    * Licensed under MPL 2.0 or any later version (see LICENSE.txt)
    */