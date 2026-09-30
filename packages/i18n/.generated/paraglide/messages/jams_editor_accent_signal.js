/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Accent_SignalInputs */

const en_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signal orange`)
};

const es_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naranja señal`)
};

const de_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signalorange`)
};

const fr_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orange signal`)
};

const it_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arancione segnale`)
};

const nl_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaaloranje`)
};

const pl_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pomarańcz sygnałowy`)
};

const pt_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laranja sinal`)
};

const ru_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сигнальный оранжевый`)
};

const sv_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signalorange`)
};

const tr_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinyal turuncusu`)
};

const zh_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信号橙`)
};

const ja_jams_editor_accent_signal = /** @type {(inputs: Jams_Editor_Accent_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`シグナルオレンジ`)
};

/**
* | output |
* | --- |
* | "Signal orange" |
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
