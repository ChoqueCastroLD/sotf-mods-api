/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Detail_LoaderInputs */

const en_mod_detail_loader = /** @type {(inputs: Mod_Detail_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const es_mod_detail_loader = /** @type {(inputs: Mod_Detail_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const de_mod_detail_loader = /** @type {(inputs: Mod_Detail_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const fr_mod_detail_loader = /** @type {(inputs: Mod_Detail_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const it_mod_detail_loader = /** @type {(inputs: Mod_Detail_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const nl_mod_detail_loader = /** @type {(inputs: Mod_Detail_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const pl_mod_detail_loader = /** @type {(inputs: Mod_Detail_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const pt_mod_detail_loader = /** @type {(inputs: Mod_Detail_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const ru_mod_detail_loader = /** @type {(inputs: Mod_Detail_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const sv_mod_detail_loader = /** @type {(inputs: Mod_Detail_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const tr_mod_detail_loader = /** @type {(inputs: Mod_Detail_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const zh_mod_detail_loader = /** @type {(inputs: Mod_Detail_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const ja_mod_detail_loader = /** @type {(inputs: Mod_Detail_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

/**
* | output |
* | --- |
* | "RedLoader" |
*
* @param {Mod_Detail_LoaderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_detail_loader = /** @type {((inputs?: Mod_Detail_LoaderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Detail_LoaderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_detail_loader(inputs)
	if (locale === "de") return de_mod_detail_loader(inputs)
	if (locale === "fr") return fr_mod_detail_loader(inputs)
	if (locale === "it") return it_mod_detail_loader(inputs)
	if (locale === "nl") return nl_mod_detail_loader(inputs)
	if (locale === "pl") return pl_mod_detail_loader(inputs)
	if (locale === "pt") return pt_mod_detail_loader(inputs)
	if (locale === "ru") return ru_mod_detail_loader(inputs)
	if (locale === "sv") return sv_mod_detail_loader(inputs)
	if (locale === "tr") return tr_mod_detail_loader(inputs)
	if (locale === "zh") return zh_mod_detail_loader(inputs)
	if (locale === "ja") return ja_mod_detail_loader(inputs)
	return en_mod_detail_loader(inputs)
});
