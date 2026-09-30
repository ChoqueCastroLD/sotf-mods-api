/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Editor_SpoilerInputs */

const en_social_editor_spoiler = /** @type {(inputs: Social_Editor_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const es_social_editor_spoiler = /** @type {(inputs: Social_Editor_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const de_social_editor_spoiler = /** @type {(inputs: Social_Editor_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const fr_social_editor_spoiler = /** @type {(inputs: Social_Editor_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const it_social_editor_spoiler = /** @type {(inputs: Social_Editor_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const nl_social_editor_spoiler = /** @type {(inputs: Social_Editor_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const pl_social_editor_spoiler = /** @type {(inputs: Social_Editor_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const pt_social_editor_spoiler = /** @type {(inputs: Social_Editor_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const ru_social_editor_spoiler = /** @type {(inputs: Social_Editor_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Спойлер`)
};

const sv_social_editor_spoiler = /** @type {(inputs: Social_Editor_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const tr_social_editor_spoiler = /** @type {(inputs: Social_Editor_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spoiler`)
};

const zh_social_editor_spoiler = /** @type {(inputs: Social_Editor_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`剧透`)
};

const ja_social_editor_spoiler = /** @type {(inputs: Social_Editor_SpoilerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ネタバレ`)
};

/**
* | output |
* | --- |
* | "Spoiler" |
*
* @param {Social_Editor_SpoilerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_editor_spoiler = /** @type {((inputs?: Social_Editor_SpoilerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Editor_SpoilerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_editor_spoiler(inputs)
	if (locale === "de") return de_social_editor_spoiler(inputs)
	if (locale === "fr") return fr_social_editor_spoiler(inputs)
	if (locale === "it") return it_social_editor_spoiler(inputs)
	if (locale === "nl") return nl_social_editor_spoiler(inputs)
	if (locale === "pl") return pl_social_editor_spoiler(inputs)
	if (locale === "pt") return pt_social_editor_spoiler(inputs)
	if (locale === "ru") return ru_social_editor_spoiler(inputs)
	if (locale === "sv") return sv_social_editor_spoiler(inputs)
	if (locale === "tr") return tr_social_editor_spoiler(inputs)
	if (locale === "zh") return zh_social_editor_spoiler(inputs)
	if (locale === "ja") return ja_social_editor_spoiler(inputs)
	return en_social_editor_spoiler(inputs)
});
