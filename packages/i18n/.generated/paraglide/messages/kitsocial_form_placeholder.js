/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Form_PlaceholderInputs */

const en_kitsocial_form_placeholder = /** @type {(inputs: Kitsocial_Form_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share your thoughts on this kit. Markdown is supported.`)
};

const es_kitsocial_form_placeholder = /** @type {(inputs: Kitsocial_Form_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparte tu opinión sobre este kit. Se admite Markdown.`)
};

const de_kitsocial_form_placeholder = /** @type {(inputs: Kitsocial_Form_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teile deine Meinung zu diesem Kit. Markdown wird unterstützt.`)
};

const fr_kitsocial_form_placeholder = /** @type {(inputs: Kitsocial_Form_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partagez votre avis sur ce kit. Markdown pris en charge.`)
};

const it_kitsocial_form_placeholder = /** @type {(inputs: Kitsocial_Form_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Condividi cosa ne pensi di questo kit. Markdown supportato.`)
};

const nl_kitsocial_form_placeholder = /** @type {(inputs: Kitsocial_Form_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deel je mening over deze kit. Markdown wordt ondersteund.`)
};

const pl_kitsocial_form_placeholder = /** @type {(inputs: Kitsocial_Form_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podziel się opinią o tym zestawie. Obsługiwany jest Markdown.`)
};

const pt_kitsocial_form_placeholder = /** @type {(inputs: Kitsocial_Form_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compartilhe sua opinião sobre este kit. Markdown é suportado.`)
};

const ru_kitsocial_form_placeholder = /** @type {(inputs: Kitsocial_Form_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поделитесь мнением об этом наборе. Поддерживается Markdown.`)
};

const sv_kitsocial_form_placeholder = /** @type {(inputs: Kitsocial_Form_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dela dina tankar om det här kitet. Markdown stöds.`)
};

const tr_kitsocial_form_placeholder = /** @type {(inputs: Kitsocial_Form_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kit hakkındaki düşüncelerini paylaş. Markdown desteklenir.`)
};

const zh_kitsocial_form_placeholder = /** @type {(inputs: Kitsocial_Form_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分享你对这个套件的看法，支持 Markdown。`)
};

const ja_kitsocial_form_placeholder = /** @type {(inputs: Kitsocial_Form_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このキットの感想を共有しましょう。Markdown に対応しています。`)
};

/**
* | output |
* | --- |
* | "Share your thoughts on this kit. Markdown is supported." |
*
* @param {Kitsocial_Form_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_form_placeholder = /** @type {((inputs?: Kitsocial_Form_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Form_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_form_placeholder(inputs)
	if (locale === "de") return de_kitsocial_form_placeholder(inputs)
	if (locale === "fr") return fr_kitsocial_form_placeholder(inputs)
	if (locale === "it") return it_kitsocial_form_placeholder(inputs)
	if (locale === "nl") return nl_kitsocial_form_placeholder(inputs)
	if (locale === "pl") return pl_kitsocial_form_placeholder(inputs)
	if (locale === "pt") return pt_kitsocial_form_placeholder(inputs)
	if (locale === "ru") return ru_kitsocial_form_placeholder(inputs)
	if (locale === "sv") return sv_kitsocial_form_placeholder(inputs)
	if (locale === "tr") return tr_kitsocial_form_placeholder(inputs)
	if (locale === "zh") return zh_kitsocial_form_placeholder(inputs)
	if (locale === "ja") return ja_kitsocial_form_placeholder(inputs)
	return en_kitsocial_form_placeholder(inputs)
});
