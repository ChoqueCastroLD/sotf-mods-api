/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Issue_Missing_DescriptionInputs */

const en_upload_issue_missing_description = /** @type {(inputs: Upload_Issue_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The blueprint has no Description.`)
};

const es_upload_issue_missing_description = /** @type {(inputs: Upload_Issue_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El plano no tiene Description.`)
};

const de_upload_issue_missing_description = /** @type {(inputs: Upload_Issue_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Bauplan hat keine Description.`)
};

const fr_upload_issue_missing_description = /** @type {(inputs: Upload_Issue_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le plan n’a pas de Description.`)
};

const it_upload_issue_missing_description = /** @type {(inputs: Upload_Issue_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il progetto non ha una Description.`)
};

const nl_upload_issue_missing_description = /** @type {(inputs: Upload_Issue_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De bouwtekening heeft geen Description.`)
};

const pl_upload_issue_missing_description = /** @type {(inputs: Upload_Issue_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plan nie ma pola Description.`)
};

const pt_upload_issue_missing_description = /** @type {(inputs: Upload_Issue_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A planta não tem Description.`)
};

const ru_upload_issue_missing_description = /** @type {(inputs: Upload_Issue_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В чертеже нет Description.`)
};

const sv_upload_issue_missing_description = /** @type {(inputs: Upload_Issue_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ritningen saknar Description.`)
};

const tr_upload_issue_missing_description = /** @type {(inputs: Upload_Issue_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Planda Description yok.`)
};

const zh_upload_issue_missing_description = /** @type {(inputs: Upload_Issue_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`蓝图缺少 Description。`)
};

const ja_upload_issue_missing_description = /** @type {(inputs: Upload_Issue_Missing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設計図に Description がありません。`)
};

/**
* | output |
* | --- |
* | "The blueprint has no Description." |
*
* @param {Upload_Issue_Missing_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_issue_missing_description = /** @type {((inputs?: Upload_Issue_Missing_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Missing_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_issue_missing_description(inputs)
	if (locale === "de") return de_upload_issue_missing_description(inputs)
	if (locale === "fr") return fr_upload_issue_missing_description(inputs)
	if (locale === "it") return it_upload_issue_missing_description(inputs)
	if (locale === "nl") return nl_upload_issue_missing_description(inputs)
	if (locale === "pl") return pl_upload_issue_missing_description(inputs)
	if (locale === "pt") return pt_upload_issue_missing_description(inputs)
	if (locale === "ru") return ru_upload_issue_missing_description(inputs)
	if (locale === "sv") return sv_upload_issue_missing_description(inputs)
	if (locale === "tr") return tr_upload_issue_missing_description(inputs)
	if (locale === "zh") return zh_upload_issue_missing_description(inputs)
	if (locale === "ja") return ja_upload_issue_missing_description(inputs)
	return en_upload_issue_missing_description(inputs)
});
