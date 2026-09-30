/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Field_Message_HintInputs */

const en_admin_ann_field_message_hint = /** @type {(inputs: Admin_Ann_Field_Message_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`One or two short sentences, no Markdown.`)
};

const es_admin_ann_field_message_hint = /** @type {(inputs: Admin_Ann_Field_Message_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una o dos frases cortas, sin Markdown.`)
};

const de_admin_ann_field_message_hint = /** @type {(inputs: Admin_Ann_Field_Message_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein oder zwei kurze Sätze, kein Markdown.`)
};

const fr_admin_ann_field_message_hint = /** @type {(inputs: Admin_Ann_Field_Message_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une ou deux phrases courtes, sans Markdown.`)
};

const it_admin_ann_field_message_hint = /** @type {(inputs: Admin_Ann_Field_Message_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una o due frasi brevi, senza Markdown.`)
};

const nl_admin_ann_field_message_hint = /** @type {(inputs: Admin_Ann_Field_Message_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een of twee korte zinnen, geen Markdown.`)
};

const pl_admin_ann_field_message_hint = /** @type {(inputs: Admin_Ann_Field_Message_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jedno lub dwa krótkie zdania, bez Markdown.`)
};

const pt_admin_ann_field_message_hint = /** @type {(inputs: Admin_Ann_Field_Message_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uma ou duas frases curtas, sem Markdown.`)
};

const ru_admin_ann_field_message_hint = /** @type {(inputs: Admin_Ann_Field_Message_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Одно-два коротких предложения, без Markdown.`)
};

const sv_admin_ann_field_message_hint = /** @type {(inputs: Admin_Ann_Field_Message_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En eller två korta meningar, ingen Markdown.`)
};

const tr_admin_ann_field_message_hint = /** @type {(inputs: Admin_Ann_Field_Message_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir iki kısa cümle, Markdown yok.`)
};

const zh_admin_ann_field_message_hint = /** @type {(inputs: Admin_Ann_Field_Message_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一两句短句，不支持 Markdown。`)
};

const ja_admin_ann_field_message_hint = /** @type {(inputs: Admin_Ann_Field_Message_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`短い文を 1〜2 つ。Markdown は使えません。`)
};

/**
* | output |
* | --- |
* | "One or two short sentences, no Markdown." |
*
* @param {Admin_Ann_Field_Message_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_field_message_hint = /** @type {((inputs?: Admin_Ann_Field_Message_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Field_Message_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_field_message_hint(inputs)
	if (locale === "de") return de_admin_ann_field_message_hint(inputs)
	if (locale === "fr") return fr_admin_ann_field_message_hint(inputs)
	if (locale === "it") return it_admin_ann_field_message_hint(inputs)
	if (locale === "nl") return nl_admin_ann_field_message_hint(inputs)
	if (locale === "pl") return pl_admin_ann_field_message_hint(inputs)
	if (locale === "pt") return pt_admin_ann_field_message_hint(inputs)
	if (locale === "ru") return ru_admin_ann_field_message_hint(inputs)
	if (locale === "sv") return sv_admin_ann_field_message_hint(inputs)
	if (locale === "tr") return tr_admin_ann_field_message_hint(inputs)
	if (locale === "zh") return zh_admin_ann_field_message_hint(inputs)
	if (locale === "ja") return ja_admin_ann_field_message_hint(inputs)
	return en_admin_ann_field_message_hint(inputs)
});
