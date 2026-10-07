/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Filter_AgeInputs */

const en_ranger_filter_age = /** @type {(inputs: Ranger_Filter_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waiting time`)
};

const es_ranger_filter_age = /** @type {(inputs: Ranger_Filter_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tiempo de espera`)
};

const de_ranger_filter_age = /** @type {(inputs: Ranger_Filter_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wartezeit`)
};

const fr_ranger_filter_age = /** @type {(inputs: Ranger_Filter_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temps d’attente`)
};

const it_ranger_filter_age = /** @type {(inputs: Ranger_Filter_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tempo di attesa`)
};

const nl_ranger_filter_age = /** @type {(inputs: Ranger_Filter_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachttijd`)
};

const pl_ranger_filter_age = /** @type {(inputs: Ranger_Filter_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czas oczekiwania`)
};

const pt_ranger_filter_age = /** @type {(inputs: Ranger_Filter_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tempo de espera`)
};

const ru_ranger_filter_age = /** @type {(inputs: Ranger_Filter_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Время ожидания`)
};

const sv_ranger_filter_age = /** @type {(inputs: Ranger_Filter_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Väntetid`)
};

const tr_ranger_filter_age = /** @type {(inputs: Ranger_Filter_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekleme süresi`)
};

const zh_ranger_filter_age = /** @type {(inputs: Ranger_Filter_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`等待时间`)
};

const ja_ranger_filter_age = /** @type {(inputs: Ranger_Filter_AgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`待機時間`)
};

/**
* | output |
* | --- |
* | "Waiting time" |
*
* @param {Ranger_Filter_AgeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_filter_age = /** @type {((inputs?: Ranger_Filter_AgeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Filter_AgeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_filter_age(inputs)
	if (locale === "de") return de_ranger_filter_age(inputs)
	if (locale === "fr") return fr_ranger_filter_age(inputs)
	if (locale === "it") return it_ranger_filter_age(inputs)
	if (locale === "nl") return nl_ranger_filter_age(inputs)
	if (locale === "pl") return pl_ranger_filter_age(inputs)
	if (locale === "pt") return pt_ranger_filter_age(inputs)
	if (locale === "ru") return ru_ranger_filter_age(inputs)
	if (locale === "sv") return sv_ranger_filter_age(inputs)
	if (locale === "tr") return tr_ranger_filter_age(inputs)
	if (locale === "zh") return zh_ranger_filter_age(inputs)
	if (locale === "ja") return ja_ranger_filter_age(inputs)
	return en_ranger_filter_age(inputs)
});
