/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_State_LabelInputs */

const en_signals_state_label = /** @type {(inputs: Signals_State_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show`)
};

const es_signals_state_label = /** @type {(inputs: Signals_State_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar`)
};

const de_signals_state_label = /** @type {(inputs: Signals_State_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anzeigen`)
};

const fr_signals_state_label = /** @type {(inputs: Signals_State_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher`)
};

const it_signals_state_label = /** @type {(inputs: Signals_State_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra`)
};

const nl_signals_state_label = /** @type {(inputs: Signals_State_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tonen`)
};

const pl_signals_state_label = /** @type {(inputs: Signals_State_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokaż`)
};

const pt_signals_state_label = /** @type {(inputs: Signals_State_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar`)
};

const ru_signals_state_label = /** @type {(inputs: Signals_State_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показывать`)
};

const sv_signals_state_label = /** @type {(inputs: Signals_State_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa`)
};

const tr_signals_state_label = /** @type {(inputs: Signals_State_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Göster`)
};

const zh_signals_state_label = /** @type {(inputs: Signals_State_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示`)
};

const ja_signals_state_label = /** @type {(inputs: Signals_State_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示`)
};

/**
* | output |
* | --- |
* | "Show" |
*
* @param {Signals_State_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_state_label = /** @type {((inputs?: Signals_State_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_State_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_state_label(inputs)
	if (locale === "de") return de_signals_state_label(inputs)
	if (locale === "fr") return fr_signals_state_label(inputs)
	if (locale === "it") return it_signals_state_label(inputs)
	if (locale === "nl") return nl_signals_state_label(inputs)
	if (locale === "pl") return pl_signals_state_label(inputs)
	if (locale === "pt") return pt_signals_state_label(inputs)
	if (locale === "ru") return ru_signals_state_label(inputs)
	if (locale === "sv") return sv_signals_state_label(inputs)
	if (locale === "tr") return tr_signals_state_label(inputs)
	if (locale === "zh") return zh_signals_state_label(inputs)
	if (locale === "ja") return ja_signals_state_label(inputs)
	return en_signals_state_label(inputs)
});
