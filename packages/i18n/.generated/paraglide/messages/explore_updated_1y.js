/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Updated_1yInputs */

const en_explore_updated_1y = /** @type {(inputs: Explore_Updated_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Last 12 months`)
};

const es_explore_updated_1y = /** @type {(inputs: Explore_Updated_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Últimos 12 meses`)
};

const de_explore_updated_1y = /** @type {(inputs: Explore_Updated_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Letzte 12 Monate`)
};

const fr_explore_updated_1y = /** @type {(inputs: Explore_Updated_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`12 derniers mois`)
};

const it_explore_updated_1y = /** @type {(inputs: Explore_Updated_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ultimi 12 mesi`)
};

const nl_explore_updated_1y = /** @type {(inputs: Explore_Updated_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afgelopen 12 maanden`)
};

const pl_explore_updated_1y = /** @type {(inputs: Explore_Updated_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnie 12 miesięcy`)
};

const pt_explore_updated_1y = /** @type {(inputs: Explore_Updated_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Últimos 12 meses`)
};

const ru_explore_updated_1y = /** @type {(inputs: Explore_Updated_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`За 12 месяцев`)
};

const sv_explore_updated_1y = /** @type {(inputs: Explore_Updated_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste 12 månaderna`)
};

const tr_explore_updated_1y = /** @type {(inputs: Explore_Updated_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son 12 ay`)
};

const zh_explore_updated_1y = /** @type {(inputs: Explore_Updated_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近 12 个月`)
};

const ja_explore_updated_1y = /** @type {(inputs: Explore_Updated_1yInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`過去 12 か月`)
};

/**
* | output |
* | --- |
* | "Last 12 months" |
*
* @param {Explore_Updated_1yInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_updated_1y = /** @type {((inputs?: Explore_Updated_1yInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Updated_1yInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_updated_1y(inputs)
	if (locale === "de") return de_explore_updated_1y(inputs)
	if (locale === "fr") return fr_explore_updated_1y(inputs)
	if (locale === "it") return it_explore_updated_1y(inputs)
	if (locale === "nl") return nl_explore_updated_1y(inputs)
	if (locale === "pl") return pl_explore_updated_1y(inputs)
	if (locale === "pt") return pt_explore_updated_1y(inputs)
	if (locale === "ru") return ru_explore_updated_1y(inputs)
	if (locale === "sv") return sv_explore_updated_1y(inputs)
	if (locale === "tr") return tr_explore_updated_1y(inputs)
	if (locale === "zh") return zh_explore_updated_1y(inputs)
	if (locale === "ja") return ja_explore_updated_1y(inputs)
	return en_explore_updated_1y(inputs)
});
