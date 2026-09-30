/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Stat_CreatorsInputs */

const en_landing_stat_creators = /** @type {(inputs: Landing_Stat_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creators`)
};

const es_landing_stat_creators = /** @type {(inputs: Landing_Stat_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creadores`)
};

const de_landing_stat_creators = /** @type {(inputs: Landing_Stat_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ersteller`)
};

const fr_landing_stat_creators = /** @type {(inputs: Landing_Stat_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateurs`)
};

const it_landing_stat_creators = /** @type {(inputs: Landing_Stat_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatori`)
};

const nl_landing_stat_creators = /** @type {(inputs: Landing_Stat_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Makers`)
};

const pl_landing_stat_creators = /** @type {(inputs: Landing_Stat_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórcy`)
};

const pt_landing_stat_creators = /** @type {(inputs: Landing_Stat_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criadores`)
};

const ru_landing_stat_creators = /** @type {(inputs: Landing_Stat_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Авторы`)
};

const sv_landing_stat_creators = /** @type {(inputs: Landing_Stat_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapare`)
};

const tr_landing_stat_creators = /** @type {(inputs: Landing_Stat_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcı`)
};

const zh_landing_stat_creators = /** @type {(inputs: Landing_Stat_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者`)
};

const ja_landing_stat_creators = /** @type {(inputs: Landing_Stat_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイター`)
};

/**
* | output |
* | --- |
* | "Creators" |
*
* @param {Landing_Stat_CreatorsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_stat_creators = /** @type {((inputs?: Landing_Stat_CreatorsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Stat_CreatorsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_stat_creators(inputs)
	if (locale === "de") return de_landing_stat_creators(inputs)
	if (locale === "fr") return fr_landing_stat_creators(inputs)
	if (locale === "it") return it_landing_stat_creators(inputs)
	if (locale === "nl") return nl_landing_stat_creators(inputs)
	if (locale === "pl") return pl_landing_stat_creators(inputs)
	if (locale === "pt") return pt_landing_stat_creators(inputs)
	if (locale === "ru") return ru_landing_stat_creators(inputs)
	if (locale === "sv") return sv_landing_stat_creators(inputs)
	if (locale === "tr") return tr_landing_stat_creators(inputs)
	if (locale === "zh") return zh_landing_stat_creators(inputs)
	if (locale === "ja") return ja_landing_stat_creators(inputs)
	return en_landing_stat_creators(inputs)
});
