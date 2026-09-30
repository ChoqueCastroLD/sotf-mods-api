/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Kind_CreatorInputs */

const en_cmdk_kind_creator = /** @type {(inputs: Cmdk_Kind_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator`)
};

const es_cmdk_kind_creator = /** @type {(inputs: Cmdk_Kind_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creador`)
};

const de_cmdk_kind_creator = /** @type {(inputs: Cmdk_Kind_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator`)
};

const fr_cmdk_kind_creator = /** @type {(inputs: Cmdk_Kind_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateur`)
};

const it_cmdk_kind_creator = /** @type {(inputs: Cmdk_Kind_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatore`)
};

const nl_cmdk_kind_creator = /** @type {(inputs: Cmdk_Kind_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maker`)
};

const pl_cmdk_kind_creator = /** @type {(inputs: Cmdk_Kind_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórca`)
};

const pt_cmdk_kind_creator = /** @type {(inputs: Cmdk_Kind_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criador`)
};

const ru_cmdk_kind_creator = /** @type {(inputs: Cmdk_Kind_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор`)
};

const sv_cmdk_kind_creator = /** @type {(inputs: Cmdk_Kind_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapare`)
};

const tr_cmdk_kind_creator = /** @type {(inputs: Cmdk_Kind_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üretici`)
};

const zh_cmdk_kind_creator = /** @type {(inputs: Cmdk_Kind_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者`)
};

const ja_cmdk_kind_creator = /** @type {(inputs: Cmdk_Kind_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイター`)
};

/**
* | output |
* | --- |
* | "Creator" |
*
* @param {Cmdk_Kind_CreatorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_kind_creator = /** @type {((inputs?: Cmdk_Kind_CreatorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Kind_CreatorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_kind_creator(inputs)
	if (locale === "de") return de_cmdk_kind_creator(inputs)
	if (locale === "fr") return fr_cmdk_kind_creator(inputs)
	if (locale === "it") return it_cmdk_kind_creator(inputs)
	if (locale === "nl") return nl_cmdk_kind_creator(inputs)
	if (locale === "pl") return pl_cmdk_kind_creator(inputs)
	if (locale === "pt") return pt_cmdk_kind_creator(inputs)
	if (locale === "ru") return ru_cmdk_kind_creator(inputs)
	if (locale === "sv") return sv_cmdk_kind_creator(inputs)
	if (locale === "tr") return tr_cmdk_kind_creator(inputs)
	if (locale === "zh") return zh_cmdk_kind_creator(inputs)
	if (locale === "ja") return ja_cmdk_kind_creator(inputs)
	return en_cmdk_kind_creator(inputs)
});
