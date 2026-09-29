/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Nav_CreatorsInputs */

const en_common_nav_creators = /** @type {(inputs: Common_Nav_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creators`)
};

const es_common_nav_creators = /** @type {(inputs: Common_Nav_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creadores`)
};

const de_common_nav_creators = /** @type {(inputs: Common_Nav_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator`)
};

const fr_common_nav_creators = /** @type {(inputs: Common_Nav_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateurs`)
};

const it_common_nav_creators = /** @type {(inputs: Common_Nav_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatori`)
};

const nl_common_nav_creators = /** @type {(inputs: Common_Nav_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Makers`)
};

const pl_common_nav_creators = /** @type {(inputs: Common_Nav_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórcy`)
};

const pt_common_nav_creators = /** @type {(inputs: Common_Nav_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criadores`)
};

const ru_common_nav_creators = /** @type {(inputs: Common_Nav_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Авторы`)
};

const sv_common_nav_creators = /** @type {(inputs: Common_Nav_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapare`)
};

const tr_common_nav_creators = /** @type {(inputs: Common_Nav_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üreticiler`)
};

const zh_common_nav_creators = /** @type {(inputs: Common_Nav_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者`)
};

const ja_common_nav_creators = /** @type {(inputs: Common_Nav_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイター`)
};

/**
* | output |
* | --- |
* | "Creators" |
*
* @param {Common_Nav_CreatorsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_nav_creators = /** @type {((inputs?: Common_Nav_CreatorsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Nav_CreatorsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_nav_creators(inputs)
	if (locale === "de") return de_common_nav_creators(inputs)
	if (locale === "fr") return fr_common_nav_creators(inputs)
	if (locale === "it") return it_common_nav_creators(inputs)
	if (locale === "nl") return nl_common_nav_creators(inputs)
	if (locale === "pl") return pl_common_nav_creators(inputs)
	if (locale === "pt") return pt_common_nav_creators(inputs)
	if (locale === "ru") return ru_common_nav_creators(inputs)
	if (locale === "sv") return sv_common_nav_creators(inputs)
	if (locale === "tr") return tr_common_nav_creators(inputs)
	if (locale === "zh") return zh_common_nav_creators(inputs)
	if (locale === "ja") return ja_common_nav_creators(inputs)
	return en_common_nav_creators(inputs)
});
