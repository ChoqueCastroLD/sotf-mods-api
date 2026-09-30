/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Field_TitleInputs */

const en_requests_field_title = /** @type {(inputs: Requests_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Title`)
};

const es_requests_field_title = /** @type {(inputs: Requests_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Título`)
};

const de_requests_field_title = /** @type {(inputs: Requests_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titel`)
};

const fr_requests_field_title = /** @type {(inputs: Requests_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titre`)
};

const it_requests_field_title = /** @type {(inputs: Requests_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titolo`)
};

const nl_requests_field_title = /** @type {(inputs: Requests_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titel`)
};

const pl_requests_field_title = /** @type {(inputs: Requests_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tytuł`)
};

const pt_requests_field_title = /** @type {(inputs: Requests_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Título`)
};

const ru_requests_field_title = /** @type {(inputs: Requests_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заголовок`)
};

const sv_requests_field_title = /** @type {(inputs: Requests_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titel`)
};

const tr_requests_field_title = /** @type {(inputs: Requests_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başlık`)
};

const zh_requests_field_title = /** @type {(inputs: Requests_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标题`)
};

const ja_requests_field_title = /** @type {(inputs: Requests_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タイトル`)
};

/**
* | output |
* | --- |
* | "Title" |
*
* @param {Requests_Field_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_field_title = /** @type {((inputs?: Requests_Field_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Field_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_field_title(inputs)
	if (locale === "de") return de_requests_field_title(inputs)
	if (locale === "fr") return fr_requests_field_title(inputs)
	if (locale === "it") return it_requests_field_title(inputs)
	if (locale === "nl") return nl_requests_field_title(inputs)
	if (locale === "pl") return pl_requests_field_title(inputs)
	if (locale === "pt") return pt_requests_field_title(inputs)
	if (locale === "ru") return ru_requests_field_title(inputs)
	if (locale === "sv") return sv_requests_field_title(inputs)
	if (locale === "tr") return tr_requests_field_title(inputs)
	if (locale === "zh") return zh_requests_field_title(inputs)
	if (locale === "ja") return ja_requests_field_title(inputs)
	return en_requests_field_title(inputs)
});
