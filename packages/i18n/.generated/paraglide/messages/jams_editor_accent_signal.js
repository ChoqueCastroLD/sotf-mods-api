/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Accent_SignalInputs */

const en_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orange`)
};

const es_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naranja`)
};

const de_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orange`)
};

const fr_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orange`)
};

const it_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arancione`)
};

const nl_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oranje`)
};

const pl_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pomarańczowy`)
};

const pt_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laranja`)
};

const ru_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Оранжевый`)
};

const sv_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orange`)
};

const tr_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turuncu`)
};

const zh_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`橙色`)
};

const ja_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`オレンジ`)
};

/**
* | output |
* | --- |
* | "Orange" |
*
* @param {Jams_Editor_Accent_SignalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_accent_signal = /** @type {((inputs?: Jams_Editor_Accent_SignalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Accent_SignalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_accent_signal(inputs)
	if (locale === "de") return de_jams_editor_accent_signal(inputs)
	if (locale === "fr") return fr_jams_editor_accent_signal(inputs)
	if (locale === "it") return it_jams_editor_accent_signal(inputs)
	if (locale === "nl") return nl_jams_editor_accent_signal(inputs)
	if (locale === "pl") return pl_jams_editor_accent_signal(inputs)
	if (locale === "pt") return pt_jams_editor_accent_signal(inputs)
	if (locale === "ru") return ru_jams_editor_accent_signal(inputs)
	if (locale === "sv") return sv_jams_editor_accent_signal(inputs)
	if (locale === "tr") return tr_jams_editor_accent_signal(inputs)
	if (locale === "zh") return zh_jams_editor_accent_signal(inputs)
	if (locale === "ja") return ja_jams_editor_accent_signal(inputs)
	return en_jams_editor_accent_signal(inputs)
});
