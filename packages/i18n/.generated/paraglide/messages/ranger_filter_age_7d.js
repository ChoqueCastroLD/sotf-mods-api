/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Filter_Age_7dInputs */

const en_ranger_filter_age_7d = /** @type {(inputs: Ranger_Filter_Age_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Over 7 days`)
};

const es_ranger_filter_age_7d = /** @type {(inputs: Ranger_Filter_Age_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más de 7 días`)
};

const de_ranger_filter_age_7d = /** @type {(inputs: Ranger_Filter_Age_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Über 7 Tage`)
};

const fr_ranger_filter_age_7d = /** @type {(inputs: Ranger_Filter_Age_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus de 7 jours`)
};

const it_ranger_filter_age_7d = /** @type {(inputs: Ranger_Filter_Age_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oltre 7 giorni`)
};

const nl_ranger_filter_age_7d = /** @type {(inputs: Ranger_Filter_Age_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer dan 7 dagen`)
};

const pl_ranger_filter_age_7d = /** @type {(inputs: Ranger_Filter_Age_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ponad 7 dni`)
};

const pt_ranger_filter_age_7d = /** @type {(inputs: Ranger_Filter_Age_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais de 7 dias`)
};

const ru_ranger_filter_age_7d = /** @type {(inputs: Ranger_Filter_Age_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Больше 7 дней`)
};

const sv_ranger_filter_age_7d = /** @type {(inputs: Ranger_Filter_Age_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Över 7 dagar`)
};

const tr_ranger_filter_age_7d = /** @type {(inputs: Ranger_Filter_Age_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`7 günden uzun`)
};

const zh_ranger_filter_age_7d = /** @type {(inputs: Ranger_Filter_Age_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`超过 7 天`)
};

const ja_ranger_filter_age_7d = /** @type {(inputs: Ranger_Filter_Age_7dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`7 日以上`)
};

/**
* | output |
* | --- |
* | "Over 7 days" |
*
* @param {Ranger_Filter_Age_7dInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_filter_age_7d = /** @type {((inputs?: Ranger_Filter_Age_7dInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Filter_Age_7dInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_filter_age_7d(inputs)
	if (locale === "de") return de_ranger_filter_age_7d(inputs)
	if (locale === "fr") return fr_ranger_filter_age_7d(inputs)
	if (locale === "it") return it_ranger_filter_age_7d(inputs)
	if (locale === "nl") return nl_ranger_filter_age_7d(inputs)
	if (locale === "pl") return pl_ranger_filter_age_7d(inputs)
	if (locale === "pt") return pt_ranger_filter_age_7d(inputs)
	if (locale === "ru") return ru_ranger_filter_age_7d(inputs)
	if (locale === "sv") return sv_ranger_filter_age_7d(inputs)
	if (locale === "tr") return tr_ranger_filter_age_7d(inputs)
	if (locale === "zh") return zh_ranger_filter_age_7d(inputs)
	if (locale === "ja") return ja_ranger_filter_age_7d(inputs)
	return en_ranger_filter_age_7d(inputs)
});
