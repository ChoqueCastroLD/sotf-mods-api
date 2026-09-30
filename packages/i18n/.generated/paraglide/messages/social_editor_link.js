/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Editor_LinkInputs */

const en_social_editor_link = /** @type {(inputs: Social_Editor_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const es_social_editor_link = /** @type {(inputs: Social_Editor_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlace`)
};

const de_social_editor_link = /** @type {(inputs: Social_Editor_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const fr_social_editor_link = /** @type {(inputs: Social_Editor_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lien`)
};

const it_social_editor_link = /** @type {(inputs: Social_Editor_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const nl_social_editor_link = /** @type {(inputs: Social_Editor_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const pl_social_editor_link = /** @type {(inputs: Social_Editor_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const pt_social_editor_link = /** @type {(inputs: Social_Editor_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

const ru_social_editor_link = /** @type {(inputs: Social_Editor_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылка`)
};

const sv_social_editor_link = /** @type {(inputs: Social_Editor_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Länk`)
};

const tr_social_editor_link = /** @type {(inputs: Social_Editor_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantı`)
};

const zh_social_editor_link = /** @type {(inputs: Social_Editor_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`链接`)
};

const ja_social_editor_link = /** @type {(inputs: Social_Editor_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンク`)
};

/**
* | output |
* | --- |
* | "Link" |
*
* @param {Social_Editor_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_editor_link = /** @type {((inputs?: Social_Editor_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Editor_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_editor_link(inputs)
	if (locale === "de") return de_social_editor_link(inputs)
	if (locale === "fr") return fr_social_editor_link(inputs)
	if (locale === "it") return it_social_editor_link(inputs)
	if (locale === "nl") return nl_social_editor_link(inputs)
	if (locale === "pl") return pl_social_editor_link(inputs)
	if (locale === "pt") return pt_social_editor_link(inputs)
	if (locale === "ru") return ru_social_editor_link(inputs)
	if (locale === "sv") return sv_social_editor_link(inputs)
	if (locale === "tr") return tr_social_editor_link(inputs)
	if (locale === "zh") return zh_social_editor_link(inputs)
	if (locale === "ja") return ja_social_editor_link(inputs)
	return en_social_editor_link(inputs)
});
