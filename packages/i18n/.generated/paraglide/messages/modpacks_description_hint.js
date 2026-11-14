/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Description_HintInputs */

const en_modpacks_description_hint = /** @type {(inputs: Modpacks_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown is supported.`)
};

const es_modpacks_description_hint = /** @type {(inputs: Modpacks_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se admite Markdown.`)
};

const de_modpacks_description_hint = /** @type {(inputs: Modpacks_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown wird unterstützt.`)
};

const fr_modpacks_description_hint = /** @type {(inputs: Modpacks_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le Markdown est pris en charge.`)
};

const it_modpacks_description_hint = /** @type {(inputs: Modpacks_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown supportato.`)
};

const nl_modpacks_description_hint = /** @type {(inputs: Modpacks_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown wordt ondersteund.`)
};

const pl_modpacks_description_hint = /** @type {(inputs: Modpacks_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obsługiwany jest Markdown.`)
};

const pt_modpacks_description_hint = /** @type {(inputs: Modpacks_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown é suportado.`)
};

const ru_modpacks_description_hint = /** @type {(inputs: Modpacks_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поддерживается Markdown.`)
};

const sv_modpacks_description_hint = /** @type {(inputs: Modpacks_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown stöds.`)
};

const tr_modpacks_description_hint = /** @type {(inputs: Modpacks_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown desteklenir.`)
};

const zh_modpacks_description_hint = /** @type {(inputs: Modpacks_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`支持 Markdown。`)
};

const ja_modpacks_description_hint = /** @type {(inputs: Modpacks_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown を使えます。`)
};

/**
* | output |
* | --- |
* | "Markdown is supported." |
*
* @param {Modpacks_Description_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_description_hint = /** @type {((inputs?: Modpacks_Description_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Description_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_description_hint(inputs)
	if (locale === "de") return de_modpacks_description_hint(inputs)
	if (locale === "fr") return fr_modpacks_description_hint(inputs)
	if (locale === "it") return it_modpacks_description_hint(inputs)
	if (locale === "nl") return nl_modpacks_description_hint(inputs)
	if (locale === "pl") return pl_modpacks_description_hint(inputs)
	if (locale === "pt") return pt_modpacks_description_hint(inputs)
	if (locale === "ru") return ru_modpacks_description_hint(inputs)
	if (locale === "sv") return sv_modpacks_description_hint(inputs)
	if (locale === "tr") return tr_modpacks_description_hint(inputs)
	if (locale === "zh") return zh_modpacks_description_hint(inputs)
	if (locale === "ja") return ja_modpacks_description_hint(inputs)
	return en_modpacks_description_hint(inputs)
});
