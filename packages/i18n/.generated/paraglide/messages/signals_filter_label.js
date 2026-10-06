/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Filter_LabelInputs */

const en_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter notifications`)
};

const es_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar notificaciones`)
};

const de_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benachrichtigungen filtern`)
};

const fr_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrer les notifications`)
};

const it_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtra le notifiche`)
};

const nl_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldingen filteren`)
};

const pl_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtruj powiadomienia`)
};

const pt_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar notificações`)
};

const ru_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Фильтр уведомлений`)
};

const sv_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrera aviseringar`)
};

const tr_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildirimleri filtrele`)
};

const zh_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`筛选通知`)
};

const ja_signals_filter_label = /** @type {(inputs: Signals_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知を絞り込む`)
};

/**
* | output |
* | --- |
* | "Filter notifications" |
*
* @param {Signals_Filter_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_filter_label = /** @type {((inputs?: Signals_Filter_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Filter_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_filter_label(inputs)
	if (locale === "de") return de_signals_filter_label(inputs)
	if (locale === "fr") return fr_signals_filter_label(inputs)
	if (locale === "it") return it_signals_filter_label(inputs)
	if (locale === "nl") return nl_signals_filter_label(inputs)
	if (locale === "pl") return pl_signals_filter_label(inputs)
	if (locale === "pt") return pt_signals_filter_label(inputs)
	if (locale === "ru") return ru_signals_filter_label(inputs)
	if (locale === "sv") return sv_signals_filter_label(inputs)
	if (locale === "tr") return tr_signals_filter_label(inputs)
	if (locale === "zh") return zh_signals_filter_label(inputs)
	if (locale === "ja") return ja_signals_filter_label(inputs)
	return en_signals_filter_label(inputs)
});
