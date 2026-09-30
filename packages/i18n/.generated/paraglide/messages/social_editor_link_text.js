/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Editor_Link_TextInputs */

const en_social_editor_link_text = /** @type {(inputs: Social_Editor_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`link text`)
};

const es_social_editor_link_text = /** @type {(inputs: Social_Editor_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`texto del enlace`)
};

const de_social_editor_link_text = /** @type {(inputs: Social_Editor_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Linktext`)
};

const fr_social_editor_link_text = /** @type {(inputs: Social_Editor_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`texte du lien`)
};

const it_social_editor_link_text = /** @type {(inputs: Social_Editor_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`testo del link`)
};

const nl_social_editor_link_text = /** @type {(inputs: Social_Editor_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`linktekst`)
};

const pl_social_editor_link_text = /** @type {(inputs: Social_Editor_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`tekst linku`)
};

const pt_social_editor_link_text = /** @type {(inputs: Social_Editor_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`texto do link`)
};

const ru_social_editor_link_text = /** @type {(inputs: Social_Editor_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`текст ссылки`)
};

const sv_social_editor_link_text = /** @type {(inputs: Social_Editor_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`länktext`)
};

const tr_social_editor_link_text = /** @type {(inputs: Social_Editor_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`bağlantı metni`)
};

const zh_social_editor_link_text = /** @type {(inputs: Social_Editor_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`链接文字`)
};

const ja_social_editor_link_text = /** @type {(inputs: Social_Editor_Link_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンクテキスト`)
};

/**
* | output |
* | --- |
* | "link text" |
*
* @param {Social_Editor_Link_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_editor_link_text = /** @type {((inputs?: Social_Editor_Link_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Editor_Link_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_editor_link_text(inputs)
	if (locale === "de") return de_social_editor_link_text(inputs)
	if (locale === "fr") return fr_social_editor_link_text(inputs)
	if (locale === "it") return it_social_editor_link_text(inputs)
	if (locale === "nl") return nl_social_editor_link_text(inputs)
	if (locale === "pl") return pl_social_editor_link_text(inputs)
	if (locale === "pt") return pt_social_editor_link_text(inputs)
	if (locale === "ru") return ru_social_editor_link_text(inputs)
	if (locale === "sv") return sv_social_editor_link_text(inputs)
	if (locale === "tr") return tr_social_editor_link_text(inputs)
	if (locale === "zh") return zh_social_editor_link_text(inputs)
	if (locale === "ja") return ja_social_editor_link_text(inputs)
	return en_social_editor_link_text(inputs)
});
