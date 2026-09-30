/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Md_SpoilerInputs */

const en_builds_md_spoiler = /** @type {(inputs: Builds_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const es_builds_md_spoiler = /** @type {(inputs: Builds_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const de_builds_md_spoiler = /** @type {(inputs: Builds_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const fr_builds_md_spoiler = /** @type {(inputs: Builds_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const it_builds_md_spoiler = /** @type {(inputs: Builds_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const nl_builds_md_spoiler = /** @type {(inputs: Builds_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const pl_builds_md_spoiler = /** @type {(inputs: Builds_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const pt_builds_md_spoiler = /** @type {(inputs: Builds_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const ru_builds_md_spoiler = /** @type {(inputs: Builds_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Спойлер`)
};

const sv_builds_md_spoiler = /** @type {(inputs: Builds_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const tr_builds_md_spoiler = /** @type {(inputs: Builds_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const zh_builds_md_spoiler = /** @type {(inputs: Builds_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`剧透`)
};

const ja_builds_md_spoiler = /** @type {(inputs: Builds_Md_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ネタバレ`)
};

/**
* | output |
* | --- |
* | "Spoiler" |
*
* @param {Builds_Md_SpoilerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_md_spoiler = /** @type {((inputs?: Builds_Md_SpoilerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Md_SpoilerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_md_spoiler(inputs)
	if (locale === "de") return de_builds_md_spoiler(inputs)
	if (locale === "fr") return fr_builds_md_spoiler(inputs)
	if (locale === "it") return it_builds_md_spoiler(inputs)
	if (locale === "nl") return nl_builds_md_spoiler(inputs)
	if (locale === "pl") return pl_builds_md_spoiler(inputs)
	if (locale === "pt") return pt_builds_md_spoiler(inputs)
	if (locale === "ru") return ru_builds_md_spoiler(inputs)
	if (locale === "sv") return sv_builds_md_spoiler(inputs)
	if (locale === "tr") return tr_builds_md_spoiler(inputs)
	if (locale === "zh") return zh_builds_md_spoiler(inputs)
	if (locale === "ja") return ja_builds_md_spoiler(inputs)
	return en_builds_md_spoiler(inputs)
});
