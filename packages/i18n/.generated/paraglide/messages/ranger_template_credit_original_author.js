/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Template_Credit_Original_AuthorInputs */

const en_ranger_template_credit_original_author = /** @type {(inputs: Ranger_Template_Credit_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please credit the original author and link their work.`)
};

const es_ranger_template_credit_original_author = /** @type {(inputs: Ranger_Template_Credit_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menciona al autor original y enlaza su trabajo.`)
};

const de_ranger_template_credit_original_author = /** @type {(inputs: Ranger_Template_Credit_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenne bitte den Originalautor und verlinke seine Arbeit.`)
};

const fr_ranger_template_credit_original_author = /** @type {(inputs: Ranger_Template_Credit_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créditez l’auteur original et mettez un lien vers son travail.`)
};

const it_ranger_template_credit_original_author = /** @type {(inputs: Ranger_Template_Credit_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cita l’autore originale e metti un link al suo lavoro.`)
};

const nl_ranger_template_credit_original_author = /** @type {(inputs: Ranger_Template_Credit_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vermeld de oorspronkelijke maker en link naar diens werk.`)
};

const pl_ranger_template_credit_original_author = /** @type {(inputs: Ranger_Template_Credit_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podaj autora oryginału i dodaj link do jego pracy.`)
};

const pt_ranger_template_credit_original_author = /** @type {(inputs: Ranger_Template_Credit_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dê crédito ao autor original e coloque um link para o trabalho dele.`)
};

const ru_ranger_template_credit_original_author = /** @type {(inputs: Ranger_Template_Credit_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Укажите автора оригинала и дайте ссылку на его работу.`)
};

const sv_ranger_template_credit_original_author = /** @type {(inputs: Ranger_Template_Credit_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ange originalskaparen och länka till verket.`)
};

const tr_ranger_template_credit_original_author = /** @type {(inputs: Ranger_Template_Credit_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lütfen asıl yazarı belirtin ve çalışmasına bağlantı verin.`)
};

const zh_ranger_template_credit_original_author = /** @type {(inputs: Ranger_Template_Credit_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请注明原作者并附上其作品链接。`)
};

const ja_ranger_template_credit_original_author = /** @type {(inputs: Ranger_Template_Credit_Original_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原作者をクレジットし、その作品へのリンクを載せてください。`)
};

/**
* | output |
* | --- |
* | "Please credit the original author and link their work." |
*
* @param {Ranger_Template_Credit_Original_AuthorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_template_credit_original_author = /** @type {((inputs?: Ranger_Template_Credit_Original_AuthorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Template_Credit_Original_AuthorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_template_credit_original_author(inputs)
	if (locale === "de") return de_ranger_template_credit_original_author(inputs)
	if (locale === "fr") return fr_ranger_template_credit_original_author(inputs)
	if (locale === "it") return it_ranger_template_credit_original_author(inputs)
	if (locale === "nl") return nl_ranger_template_credit_original_author(inputs)
	if (locale === "pl") return pl_ranger_template_credit_original_author(inputs)
	if (locale === "pt") return pt_ranger_template_credit_original_author(inputs)
	if (locale === "ru") return ru_ranger_template_credit_original_author(inputs)
	if (locale === "sv") return sv_ranger_template_credit_original_author(inputs)
	if (locale === "tr") return tr_ranger_template_credit_original_author(inputs)
	if (locale === "zh") return zh_ranger_template_credit_original_author(inputs)
	if (locale === "ja") return ja_ranger_template_credit_original_author(inputs)
	return en_ranger_template_credit_original_author(inputs)
});
