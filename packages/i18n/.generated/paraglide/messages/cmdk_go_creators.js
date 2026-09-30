/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Go_CreatorsInputs */

const en_cmdk_go_creators = /** @type {(inputs: Cmdk_Go_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creators`)
};

const es_cmdk_go_creators = /** @type {(inputs: Cmdk_Go_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creadores`)
};

const de_cmdk_go_creators = /** @type {(inputs: Cmdk_Go_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kreative`)
};

const fr_cmdk_go_creators = /** @type {(inputs: Cmdk_Go_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateurs`)
};

const it_cmdk_go_creators = /** @type {(inputs: Cmdk_Go_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator`)
};

const nl_cmdk_go_creators = /** @type {(inputs: Cmdk_Go_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Makers`)
};

const pl_cmdk_go_creators = /** @type {(inputs: Cmdk_Go_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórcy`)
};

const pt_cmdk_go_creators = /** @type {(inputs: Cmdk_Go_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criadores`)
};

const ru_cmdk_go_creators = /** @type {(inputs: Cmdk_Go_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Авторы`)
};

const sv_cmdk_go_creators = /** @type {(inputs: Cmdk_Go_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapare`)
};

const tr_cmdk_go_creators = /** @type {(inputs: Cmdk_Go_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yaratıcılar`)
};

const zh_cmdk_go_creators = /** @type {(inputs: Cmdk_Go_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者`)
};

const ja_cmdk_go_creators = /** @type {(inputs: Cmdk_Go_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイター`)
};

/**
* | output |
* | --- |
* | "Creators" |
*
* @param {Cmdk_Go_CreatorsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_go_creators = /** @type {((inputs?: Cmdk_Go_CreatorsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Go_CreatorsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_go_creators(inputs)
	if (locale === "de") return de_cmdk_go_creators(inputs)
	if (locale === "fr") return fr_cmdk_go_creators(inputs)
	if (locale === "it") return it_cmdk_go_creators(inputs)
	if (locale === "nl") return nl_cmdk_go_creators(inputs)
	if (locale === "pl") return pl_cmdk_go_creators(inputs)
	if (locale === "pt") return pt_cmdk_go_creators(inputs)
	if (locale === "ru") return ru_cmdk_go_creators(inputs)
	if (locale === "sv") return sv_cmdk_go_creators(inputs)
	if (locale === "tr") return tr_cmdk_go_creators(inputs)
	if (locale === "zh") return zh_cmdk_go_creators(inputs)
	if (locale === "ja") return ja_cmdk_go_creators(inputs)
	return en_cmdk_go_creators(inputs)
});
