/*
 * noVNC: HTML5 VNC client
 * Copyright (C) 2017 Pierre Ossman for Cendio AB
 * Licensed under MPL 2.0 or any later version (see LICENSE.txt)
 */

import KeyTable from "./keysym";

export default {
    'Backspace':       KeyTable.XK_BackSpace,
    'AltLeft':         KeyTable.XK_Alt_L,
    // AltRight is special
    'CapsLock':        KeyTable.XK_Caps_Lock,
    'ContextMenu':     KeyTable.XK_Menu,
    'ControlLeft':     KeyTable.XK_Control_L,
    'ControlRight':    KeyTable.XK_Control_R,
    'Enter':           KeyTable.XK_Return,
    'MetaLeft':        KeyTable.XK_Super_L,
    'MetaRight':       KeyTable.XK_Super_R,
    'ShiftLeft':       KeyTable.XK_Shift_L,
    'ShiftRight':      KeyTable.XK_Shift_R,
    'Space':           KeyTable.XK_space,
    'Tab':             KeyTable.XK_Tab,
    // FIXME: Japanese/Korean keys
    'Delete':          KeyTable.XK_Delete,
    'End':             KeyTable.XK_End,
    'Help':            KeyTable.XK_Help,
    'Home':            KeyTable.XK_Home,
    'Insert':          KeyTable.XK_Insert,
    'PageDown':        KeyTable.XK_Next,
    'PageUp':          KeyTable.XK_Prior,
    'ArrowDown':       KeyTable.XK_Down,
    'ArrowLeft':       KeyTable.XK_Left,
    'ArrowRight':      KeyTable.XK_Right,
    'ArrowUp':         KeyTable.XK_Up,
    'NumLock':         KeyTable.XK_Num_Lock,
    'NumpadAdd':       KeyTable.XK_KP_Add,
    'NumpadBackspace': KeyTable.XK_KP_Delete,
    'NumpadClear':     KeyTable.XK_Clear,
    // NumpadDecimal is special
    'NumpadDivide':    KeyTable.XK_KP_Divide,
    'NumpadEnter':     KeyTable.XK_KP_Enter,
    'NumpadEqual':     KeyTable.XK_KP_Equal,
    'NumpadMultiply':  KeyTable.XK_KP_Multiply,
    'NumpadSubtract':  KeyTable.XK_KP_Subtract,
    'Escape':          KeyTable.XK_Escape,
    'F1':              KeyTable.XK_F1,
    'F2':              KeyTable.XK_F2,
    'F3':              KeyTable.XK_F3,
    'F4':              KeyTable.XK_F4,
    'F5':              KeyTable.XK_F5,
    'F6':              KeyTable.XK_F6,
    'F7':              KeyTable.XK_F7,
    'F8':              KeyTable.XK_F8,
    'F9':              KeyTable.XK_F9,
    'F10':             KeyTable.XK_F10,
    'F11':             KeyTable.XK_F11,
    'F12':             KeyTable.XK_F12,
    'F13':             KeyTable.XK_F13,
    'F14':             KeyTable.XK_F14,
    'F15':             KeyTable.XK_F15,
    'F16':             KeyTable.XK_F16,
    'F17':             KeyTable.XK_F17,
    'F18':             KeyTable.XK_F18,
    'F19':             KeyTable.XK_F19,
    'F20':             KeyTable.XK_F20,
    'F21':             KeyTable.XK_F21,
    'F22':             KeyTable.XK_F22,
    'F23':             KeyTable.XK_F23,
    'F24':             KeyTable.XK_F24,
    'F25':             KeyTable.XK_F25,
    'F26':             KeyTable.XK_F26,
    'F27':             KeyTable.XK_F27,
    'F28':             KeyTable.XK_F28,
    'F29':             KeyTable.XK_F29,
    'F30':             KeyTable.XK_F30,
    'F31':             KeyTable.XK_F31,
    'F32':             KeyTable.XK_F32,
    'F33':             KeyTable.XK_F33,
    'F34':             KeyTable.XK_F34,
    'F35':             KeyTable.XK_F35,
    'PrintScreen':     KeyTable.XK_Print,
    'ScrollLock':      KeyTable.XK_Scroll_Lock,
    'Pause':           KeyTable.XK_Pause,
    'BrowserBack':     KeyTable.XF86XK_Back,
    'BrowserFavorites': KeyTable.XF86XK_Favorites,
    'BrowserForward':  KeyTable.XF86XK_Forward,
    'BrowserHome':     KeyTable.XF86XK_HomePage,
    'BrowserRefresh':  KeyTable.XF86XK_Refresh,
    'BrowserSearch':   KeyTable.XF86XK_Search,
    'BrowserStop':     KeyTable.XF86XK_Stop,
    'LaunchApp1':      KeyTable.XF86XK_Explorer,
    'LaunchApp2':      KeyTable.XF86XK_Calculator,
    'LaunchMail':      KeyTable.XF86XK_Mail,
    'MediaPlayPause':  KeyTable.XF86XK_AudioPlay,
    'MediaStop':       KeyTable.XF86XK_AudioStop,
    'MediaTrackNext':  KeyTable.XF86XK_AudioNext,
    'MediaTrackPrevious': KeyTable.XF86XK_AudioPrev,
    'Power':           KeyTable.XF86XK_PowerOff,
    'Sleep':           KeyTable.XF86XK_Sleep,
    'AudioVolumeDown': KeyTable.XF86XK_AudioLowerVolume,
    'AudioVolumeMute': KeyTable.XF86XK_AudioMute,
    'AudioVolumeUp':   KeyTable.XF86XK_AudioRaiseVolume,
    'WakeUp':          KeyTable.XF86XK_WakeUp,
};
