/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_ShortcutsInputs */

const en_settings_shortcuts = /** @type {(inputs: Settings_ShortcutsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keyboard shortcuts`)
};

const es_settings_shortcuts = /** @type {(inputs: Settings_ShortcutsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atajos de teclado`)
};

const de_settings_shortcuts = /** @type {(inputs: Settings_ShortcutsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tastenkürzel`)
};

const fr_settings_shortcuts = /** @type {(inputs: Settings_ShortcutsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raccourcis clavier`)
};

const it_settings_shortcuts = /** @type {(inputs: Settings_ShortcutsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scorciatoie da tastiera`)
};

const nl_settings_shortcuts = /** @type {(inputs: Settings_ShortcutsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sneltoetsen`)
};

const pl_settings_shortcuts = /** @type {(inputs: Settings_ShortcutsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skróty klawiszowe`)
};

const pt_settings_shortcuts = /** @type {(inputs: Settings_ShortcutsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atalhos de teclado`)
};

const ru_settings_shortcuts = /** @type {(inputs: Settings_ShortcutsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Горячие клавиши`)
};

const sv_settings_shortcuts = /** @type {(inputs: Settings_ShortcutsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kortkommandon`)
};

const tr_settings_shortcuts = /** @type {(inputs: Settings_ShortcutsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klavye kısayolları`)
};

const zh_settings_shortcuts = /** @type {(inputs: Settings_ShortcutsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`键盘快捷键`)
};

const ja_settings_shortcuts = /** @type {(inputs: Settings_ShortcutsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キーボードショートカット`)
};

/**
* | output |
* | --- |
* | "Keyboard shortcuts" |
*
* @param {Settings_ShortcutsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_shortcuts = /** @type {((inputs?: Settings_ShortcutsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_ShortcutsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_shortcuts(inputs)
	if (locale === "de") return de_settings_shortcuts(inputs)
	if (locale === "fr") return fr_settings_shortcuts(inputs)
	if (locale === "it") return it_settings_shortcuts(inputs)
	if (locale === "nl") return nl_settings_shortcuts(inputs)
	if (locale === "pl") return pl_settings_shortcuts(inputs)
	if (locale === "pt") return pt_settings_shortcuts(inputs)
	if (locale === "ru") return ru_settings_shortcuts(inputs)
	if (locale === "sv") return sv_settings_shortcuts(inputs)
	if (locale === "tr") return tr_settings_shortcuts(inputs)
	if (locale === "zh") return zh_settings_shortcuts(inputs)
	if (locale === "ja") return ja_settings_shortcuts(inputs)
	return en_settings_shortcuts(inputs)
});
