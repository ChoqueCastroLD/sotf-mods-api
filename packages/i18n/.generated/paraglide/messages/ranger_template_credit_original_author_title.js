/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Template_Credit_Original_Author_TitleInputs */

const en_ranger_template_credit_original_author_title = /** @type {(inputs: Ranger_Template_Credit_Original_Author_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Credit the original author`)
};

const es_ranger_template_credit_original_author_title = /** @type {(inputs: Ranger_Template_Credit_Original_Author_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menciona al autor original`)
};

const de_ranger_template_credit_original_author_title = /** @type {(inputs: Ranger_Template_Credit_Original_Author_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Originalautor nennen`)
};

const fr_ranger_template_credit_original_author_title = /** @type {(inputs: Ranger_Template_Credit_Original_Author_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créditer l’auteur original`)
};

const it_ranger_template_credit_original_author_title = /** @type {(inputs: Ranger_Template_Credit_Original_Author_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cita l’autore originale`)
};

const nl_ranger_template_credit_original_author_title = /** @type {(inputs: Ranger_Template_Credit_Original_Author_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vermeld de oorspronkelijke maker`)
};

const pl_ranger_template_credit_original_author_title = /** @type {(inputs: Ranger_Template_Credit_Original_Author_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podaj autora oryginału`)
};

const pt_ranger_template_credit_original_author_title = /** @type {(inputs: Ranger_Template_Credit_Original_Author_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dê crédito ao autor original`)
};

const ru_ranger_template_credit_original_author_title = /** @type {(inputs: Ranger_Template_Credit_Original_Author_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Укажите автора оригинала`)
};

const sv_ranger_template_credit_original_author_title = /** @type {(inputs: Ranger_Template_Credit_Original_Author_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ange originalskaparen`)
};

const tr_ranger_template_credit_original_author_title = /** @type {(inputs: Ranger_Template_Credit_Original_Author_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asıl yazarı belirtin`)
};

const zh_ranger_template_credit_original_author_title = /** @type {(inputs: Ranger_Template_Credit_Original_Author_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注明原作者`)
};

const ja_ranger_template_credit_original_author_title = /** @type {(inputs: Ranger_Template_Credit_Original_Author_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原作者のクレジット`)
};

/**
* | output |
* | --- |
* | "Credit the original author" |
*
* @param {Ranger_Template_Credit_Original_Author_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_template_credit_original_author_title = /** @type {((inputs?: Ranger_Template_Credit_Original_Author_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Template_Credit_Original_Author_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_template_credit_original_author_title(inputs)
	if (locale === "de") return de_ranger_template_credit_original_author_title(inputs)
	if (locale === "fr") return fr_ranger_template_credit_original_author_title(inputs)
	if (locale === "it") return it_ranger_template_credit_original_author_title(inputs)
	if (locale === "nl") return nl_ranger_template_credit_original_author_title(inputs)
	if (locale === "pl") return pl_ranger_template_credit_original_author_title(inputs)
	if (locale === "pt") return pt_ranger_template_credit_original_author_title(inputs)
	if (locale === "ru") return ru_ranger_template_credit_original_author_title(inputs)
	if (locale === "sv") return sv_ranger_template_credit_original_author_title(inputs)
	if (locale === "tr") return tr_ranger_template_credit_original_author_title(inputs)
	if (locale === "zh") return zh_ranger_template_credit_original_author_title(inputs)
	if (locale === "ja") return ja_ranger_template_credit_original_author_title(inputs)
	return en_ranger_template_credit_original_author_title(inputs)
});
