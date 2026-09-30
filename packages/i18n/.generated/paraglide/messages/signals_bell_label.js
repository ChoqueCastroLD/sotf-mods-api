/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Bell_LabelInputs */

const en_signals_bell_label = /** @type {(inputs: Signals_Bell_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signals`)
};

const es_signals_bell_label = /** @type {(inputs: Signals_Bell_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Señales`)
};

const de_signals_bell_label = /** @type {(inputs: Signals_Bell_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signale`)
};

const fr_signals_bell_label = /** @type {(inputs: Signals_Bell_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaux`)
};

const it_signals_bell_label = /** @type {(inputs: Signals_Bell_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnali`)
};

const nl_signals_bell_label = /** @type {(inputs: Signals_Bell_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signalen`)
};

const pl_signals_bell_label = /** @type {(inputs: Signals_Bell_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sygnały`)
};

const pt_signals_bell_label = /** @type {(inputs: Signals_Bell_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinais`)
};

const ru_signals_bell_label = /** @type {(inputs: Signals_Bell_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сигналы`)
};

const sv_signals_bell_label = /** @type {(inputs: Signals_Bell_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaler`)
};

const tr_signals_bell_label = /** @type {(inputs: Signals_Bell_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinyaller`)
};

const zh_signals_bell_label = /** @type {(inputs: Signals_Bell_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信号`)
};

const ja_signals_bell_label = /** @type {(inputs: Signals_Bell_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`シグナル`)
};

/**
* | output |
* | --- |
* | "Signals" |
*
* @param {Signals_Bell_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_bell_label = /** @type {((inputs?: Signals_Bell_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Bell_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_bell_label(inputs)
	if (locale === "de") return de_signals_bell_label(inputs)
	if (locale === "fr") return fr_signals_bell_label(inputs)
	if (locale === "it") return it_signals_bell_label(inputs)
	if (locale === "nl") return nl_signals_bell_label(inputs)
	if (locale === "pl") return pl_signals_bell_label(inputs)
	if (locale === "pt") return pt_signals_bell_label(inputs)
	if (locale === "ru") return ru_signals_bell_label(inputs)
	if (locale === "sv") return sv_signals_bell_label(inputs)
	if (locale === "tr") return tr_signals_bell_label(inputs)
	if (locale === "zh") return zh_signals_bell_label(inputs)
	if (locale === "ja") return ja_signals_bell_label(inputs)
	return en_signals_bell_label(inputs)
});
