/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Md_SpoilerInputs */

const en_mod_md_spoiler = /** @type {(inputs: Mod_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const es_mod_md_spoiler = /** @type {(inputs: Mod_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const de_mod_md_spoiler = /** @type {(inputs: Mod_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const fr_mod_md_spoiler = /** @type {(inputs: Mod_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const it_mod_md_spoiler = /** @type {(inputs: Mod_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const nl_mod_md_spoiler = /** @type {(inputs: Mod_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const pl_mod_md_spoiler = /** @type {(inputs: Mod_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const pt_mod_md_spoiler = /** @type {(inputs: Mod_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const ru_mod_md_spoiler = /** @type {(inputs: Mod_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Спойлер`)
};

const sv_mod_md_spoiler = /** @type {(inputs: Mod_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const tr_mod_md_spoiler = /** @type {(inputs: Mod_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const zh_mod_md_spoiler = /** @type {(inputs: Mod_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`剧透`)
};

const ja_mod_md_spoiler = /** @type {(inputs: Mod_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ネタバレ`)
};

/**
* | output |
* | --- |
* | "Spoiler" |
*
* @param {Mod_Md_SpoilerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_md_spoiler = /** @type {((inputs?: Mod_Md_SpoilerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Md_SpoilerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_md_spoiler(inputs)
	if (locale === "de") return de_mod_md_spoiler(inputs)
	if (locale === "fr") return fr_mod_md_spoiler(inputs)
	if (locale === "it") return it_mod_md_spoiler(inputs)
	if (locale === "nl") return nl_mod_md_spoiler(inputs)
	if (locale === "pl") return pl_mod_md_spoiler(inputs)
	if (locale === "pt") return pt_mod_md_spoiler(inputs)
	if (locale === "ru") return ru_mod_md_spoiler(inputs)
	if (locale === "sv") return sv_mod_md_spoiler(inputs)
	if (locale === "tr") return tr_mod_md_spoiler(inputs)
	if (locale === "zh") return zh_mod_md_spoiler(inputs)
	if (locale === "ja") return ja_mod_md_spoiler(inputs)
	return en_mod_md_spoiler(inputs)
});
