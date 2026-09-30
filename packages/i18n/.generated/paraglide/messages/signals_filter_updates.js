/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Filter_UpdatesInputs */

const en_signals_filter_updates = /** @type {(inputs: Signals_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updates`)
};

const es_signals_filter_updates = /** @type {(inputs: Signals_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizaciones`)
};

const de_signals_filter_updates = /** @type {(inputs: Signals_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updates`)
};

const fr_signals_filter_updates = /** @type {(inputs: Signals_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mises à jour`)
};

const it_signals_filter_updates = /** @type {(inputs: Signals_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiornamenti`)
};

const nl_signals_filter_updates = /** @type {(inputs: Signals_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updates`)
};

const pl_signals_filter_updates = /** @type {(inputs: Signals_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualizacje`)
};

const pt_signals_filter_updates = /** @type {(inputs: Signals_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizações`)
};

const ru_signals_filter_updates = /** @type {(inputs: Signals_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обновления`)
};

const sv_signals_filter_updates = /** @type {(inputs: Signals_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdateringar`)
};

const tr_signals_filter_updates = /** @type {(inputs: Signals_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncellemeler`)
};

const zh_signals_filter_updates = /** @type {(inputs: Signals_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新`)
};

const ja_signals_filter_updates = /** @type {(inputs: Signals_Filter_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アップデート`)
};

/**
* | output |
* | --- |
* | "Updates" |
*
* @param {Signals_Filter_UpdatesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_filter_updates = /** @type {((inputs?: Signals_Filter_UpdatesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Filter_UpdatesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_filter_updates(inputs)
	if (locale === "de") return de_signals_filter_updates(inputs)
	if (locale === "fr") return fr_signals_filter_updates(inputs)
	if (locale === "it") return it_signals_filter_updates(inputs)
	if (locale === "nl") return nl_signals_filter_updates(inputs)
	if (locale === "pl") return pl_signals_filter_updates(inputs)
	if (locale === "pt") return pt_signals_filter_updates(inputs)
	if (locale === "ru") return ru_signals_filter_updates(inputs)
	if (locale === "sv") return sv_signals_filter_updates(inputs)
	if (locale === "tr") return tr_signals_filter_updates(inputs)
	if (locale === "zh") return zh_signals_filter_updates(inputs)
	if (locale === "ja") return ja_signals_filter_updates(inputs)
	return en_signals_filter_updates(inputs)
});
