/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Updated_90dInputs */

const en_explore_updated_90d = /** @type {(inputs: Explore_Updated_90dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Last 90 days`)
};

const es_explore_updated_90d = /** @type {(inputs: Explore_Updated_90dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Últimos 90 días`)
};

const de_explore_updated_90d = /** @type {(inputs: Explore_Updated_90dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Letzte 90 Tage`)
};

const fr_explore_updated_90d = /** @type {(inputs: Explore_Updated_90dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`90 derniers jours`)
};

const it_explore_updated_90d = /** @type {(inputs: Explore_Updated_90dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ultimi 90 giorni`)
};

const nl_explore_updated_90d = /** @type {(inputs: Explore_Updated_90dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afgelopen 90 dagen`)
};

const pl_explore_updated_90d = /** @type {(inputs: Explore_Updated_90dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnie 90 dni`)
};

const pt_explore_updated_90d = /** @type {(inputs: Explore_Updated_90dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Últimos 90 dias`)
};

const ru_explore_updated_90d = /** @type {(inputs: Explore_Updated_90dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`За 90 дней`)
};

const sv_explore_updated_90d = /** @type {(inputs: Explore_Updated_90dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste 90 dagarna`)
};

const tr_explore_updated_90d = /** @type {(inputs: Explore_Updated_90dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son 90 gün`)
};

const zh_explore_updated_90d = /** @type {(inputs: Explore_Updated_90dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近 90 天`)
};

const ja_explore_updated_90d = /** @type {(inputs: Explore_Updated_90dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`過去 90 日`)
};

/**
* | output |
* | --- |
* | "Last 90 days" |
*
* @param {Explore_Updated_90dInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_updated_90d = /** @type {((inputs?: Explore_Updated_90dInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Updated_90dInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_updated_90d(inputs)
	if (locale === "de") return de_explore_updated_90d(inputs)
	if (locale === "fr") return fr_explore_updated_90d(inputs)
	if (locale === "it") return it_explore_updated_90d(inputs)
	if (locale === "nl") return nl_explore_updated_90d(inputs)
	if (locale === "pl") return pl_explore_updated_90d(inputs)
	if (locale === "pt") return pt_explore_updated_90d(inputs)
	if (locale === "ru") return ru_explore_updated_90d(inputs)
	if (locale === "sv") return sv_explore_updated_90d(inputs)
	if (locale === "tr") return tr_explore_updated_90d(inputs)
	if (locale === "zh") return zh_explore_updated_90d(inputs)
	if (locale === "ja") return ja_explore_updated_90d(inputs)
	return en_explore_updated_90d(inputs)
});
