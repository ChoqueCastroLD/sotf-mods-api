/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Updated_30dInputs */

const en_explore_updated_30d = /** @type {(inputs: Explore_Updated_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Last 30 days`)
};

const es_explore_updated_30d = /** @type {(inputs: Explore_Updated_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Últimos 30 días`)
};

const de_explore_updated_30d = /** @type {(inputs: Explore_Updated_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Letzte 30 Tage`)
};

const fr_explore_updated_30d = /** @type {(inputs: Explore_Updated_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 derniers jours`)
};

const it_explore_updated_30d = /** @type {(inputs: Explore_Updated_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ultimi 30 giorni`)
};

const nl_explore_updated_30d = /** @type {(inputs: Explore_Updated_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afgelopen 30 dagen`)
};

const pl_explore_updated_30d = /** @type {(inputs: Explore_Updated_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnie 30 dni`)
};

const pt_explore_updated_30d = /** @type {(inputs: Explore_Updated_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Últimos 30 dias`)
};

const ru_explore_updated_30d = /** @type {(inputs: Explore_Updated_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`За 30 дней`)
};

const sv_explore_updated_30d = /** @type {(inputs: Explore_Updated_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste 30 dagarna`)
};

const tr_explore_updated_30d = /** @type {(inputs: Explore_Updated_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son 30 gün`)
};

const zh_explore_updated_30d = /** @type {(inputs: Explore_Updated_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近 30 天`)
};

const ja_explore_updated_30d = /** @type {(inputs: Explore_Updated_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`過去 30 日`)
};

/**
* | output |
* | --- |
* | "Last 30 days" |
*
* @param {Explore_Updated_30dInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_updated_30d = /** @type {((inputs?: Explore_Updated_30dInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Updated_30dInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_updated_30d(inputs)
	if (locale === "de") return de_explore_updated_30d(inputs)
	if (locale === "fr") return fr_explore_updated_30d(inputs)
	if (locale === "it") return it_explore_updated_30d(inputs)
	if (locale === "nl") return nl_explore_updated_30d(inputs)
	if (locale === "pl") return pl_explore_updated_30d(inputs)
	if (locale === "pt") return pt_explore_updated_30d(inputs)
	if (locale === "ru") return ru_explore_updated_30d(inputs)
	if (locale === "sv") return sv_explore_updated_30d(inputs)
	if (locale === "tr") return tr_explore_updated_30d(inputs)
	if (locale === "zh") return zh_explore_updated_30d(inputs)
	if (locale === "ja") return ja_explore_updated_30d(inputs)
	return en_explore_updated_30d(inputs)
});
