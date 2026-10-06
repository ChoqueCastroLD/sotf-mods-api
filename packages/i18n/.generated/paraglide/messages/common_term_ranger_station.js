/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Term_Ranger_StationInputs */

const en_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderation`)
};

const es_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderación`)
};

const de_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderation`)
};

const fr_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modération`)
};

const it_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderazione`)
};

const nl_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatie`)
};

const pl_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderacja`)
};

const pt_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderação`)
};

const ru_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модерация`)
};

const sv_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderering`)
};

const tr_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderasyon`)
};

const zh_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`审核`)
};

const ja_common_term_ranger_station = /** @type {(inputs: Common_Term_Ranger_StationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーション`)
};

/**
* | output |
* | --- |
* | "Moderation" |
*
* @param {Common_Term_Ranger_StationInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_term_ranger_station = /** @type {((inputs?: Common_Term_Ranger_StationInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Term_Ranger_StationInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_term_ranger_station(inputs)
	if (locale === "de") return de_common_term_ranger_station(inputs)
	if (locale === "fr") return fr_common_term_ranger_station(inputs)
	if (locale === "it") return it_common_term_ranger_station(inputs)
	if (locale === "nl") return nl_common_term_ranger_station(inputs)
	if (locale === "pl") return pl_common_term_ranger_station(inputs)
	if (locale === "pt") return pt_common_term_ranger_station(inputs)
	if (locale === "ru") return ru_common_term_ranger_station(inputs)
	if (locale === "sv") return sv_common_term_ranger_station(inputs)
	if (locale === "tr") return tr_common_term_ranger_station(inputs)
	if (locale === "zh") return zh_common_term_ranger_station(inputs)
	if (locale === "ja") return ja_common_term_ranger_station(inputs)
	return en_common_term_ranger_station(inputs)
});
