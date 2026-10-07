/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Filter_Age_72hInputs */

const en_ranger_filter_age_72h = /** @type {(inputs: Ranger_Filter_Age_72hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Over 3 days`)
};

const es_ranger_filter_age_72h = /** @type {(inputs: Ranger_Filter_Age_72hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más de 3 días`)
};

const de_ranger_filter_age_72h = /** @type {(inputs: Ranger_Filter_Age_72hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Über 3 Tage`)
};

const fr_ranger_filter_age_72h = /** @type {(inputs: Ranger_Filter_Age_72hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus de 3 jours`)
};

const it_ranger_filter_age_72h = /** @type {(inputs: Ranger_Filter_Age_72hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oltre 3 giorni`)
};

const nl_ranger_filter_age_72h = /** @type {(inputs: Ranger_Filter_Age_72hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer dan 3 dagen`)
};

const pl_ranger_filter_age_72h = /** @type {(inputs: Ranger_Filter_Age_72hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ponad 3 dni`)
};

const pt_ranger_filter_age_72h = /** @type {(inputs: Ranger_Filter_Age_72hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais de 3 dias`)
};

const ru_ranger_filter_age_72h = /** @type {(inputs: Ranger_Filter_Age_72hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Больше 3 дней`)
};

const sv_ranger_filter_age_72h = /** @type {(inputs: Ranger_Filter_Age_72hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Över 3 dagar`)
};

const tr_ranger_filter_age_72h = /** @type {(inputs: Ranger_Filter_Age_72hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3 günden uzun`)
};

const zh_ranger_filter_age_72h = /** @type {(inputs: Ranger_Filter_Age_72hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`超过 3 天`)
};

const ja_ranger_filter_age_72h = /** @type {(inputs: Ranger_Filter_Age_72hInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3 日以上`)
};

/**
* | output |
* | --- |
* | "Over 3 days" |
*
* @param {Ranger_Filter_Age_72hInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_filter_age_72h = /** @type {((inputs?: Ranger_Filter_Age_72hInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Filter_Age_72hInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_filter_age_72h(inputs)
	if (locale === "de") return de_ranger_filter_age_72h(inputs)
	if (locale === "fr") return fr_ranger_filter_age_72h(inputs)
	if (locale === "it") return it_ranger_filter_age_72h(inputs)
	if (locale === "nl") return nl_ranger_filter_age_72h(inputs)
	if (locale === "pl") return pl_ranger_filter_age_72h(inputs)
	if (locale === "pt") return pt_ranger_filter_age_72h(inputs)
	if (locale === "ru") return ru_ranger_filter_age_72h(inputs)
	if (locale === "sv") return sv_ranger_filter_age_72h(inputs)
	if (locale === "tr") return tr_ranger_filter_age_72h(inputs)
	if (locale === "zh") return zh_ranger_filter_age_72h(inputs)
	if (locale === "ja") return ja_ranger_filter_age_72h(inputs)
	return en_ranger_filter_age_72h(inputs)
});
