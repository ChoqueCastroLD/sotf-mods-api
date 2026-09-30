/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sla_AverageInputs */

const en_ranger_sla_average = /** @type {(inputs: Ranger_Sla_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Average wait`)
};

const es_ranger_sla_average = /** @type {(inputs: Ranger_Sla_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Espera media`)
};

const de_ranger_sla_average = /** @type {(inputs: Ranger_Sla_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mittlere Wartezeit`)
};

const fr_ranger_sla_average = /** @type {(inputs: Ranger_Sla_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attente moyenne`)
};

const it_ranger_sla_average = /** @type {(inputs: Ranger_Sla_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attesa media`)
};

const nl_ranger_sla_average = /** @type {(inputs: Ranger_Sla_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemiddelde wachttijd`)
};

const pl_ranger_sla_average = /** @type {(inputs: Ranger_Sla_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Średni czas oczekiwania`)
};

const pt_ranger_sla_average = /** @type {(inputs: Ranger_Sla_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Espera média`)
};

const ru_ranger_sla_average = /** @type {(inputs: Ranger_Sla_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Среднее ожидание`)
};

const sv_ranger_sla_average = /** @type {(inputs: Ranger_Sla_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Genomsnittlig väntetid`)
};

const tr_ranger_sla_average = /** @type {(inputs: Ranger_Sla_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ortalama bekleme`)
};

const zh_ranger_sla_average = /** @type {(inputs: Ranger_Sla_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`平均等待`)
};

const ja_ranger_sla_average = /** @type {(inputs: Ranger_Sla_AverageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`平均待ち時間`)
};

/**
* | output |
* | --- |
* | "Average wait" |
*
* @param {Ranger_Sla_AverageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sla_average = /** @type {((inputs?: Ranger_Sla_AverageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sla_AverageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sla_average(inputs)
	if (locale === "de") return de_ranger_sla_average(inputs)
	if (locale === "fr") return fr_ranger_sla_average(inputs)
	if (locale === "it") return it_ranger_sla_average(inputs)
	if (locale === "nl") return nl_ranger_sla_average(inputs)
	if (locale === "pl") return pl_ranger_sla_average(inputs)
	if (locale === "pt") return pt_ranger_sla_average(inputs)
	if (locale === "ru") return ru_ranger_sla_average(inputs)
	if (locale === "sv") return sv_ranger_sla_average(inputs)
	if (locale === "tr") return tr_ranger_sla_average(inputs)
	if (locale === "zh") return zh_ranger_sla_average(inputs)
	if (locale === "ja") return ja_ranger_sla_average(inputs)
	return en_ranger_sla_average(inputs)
});
