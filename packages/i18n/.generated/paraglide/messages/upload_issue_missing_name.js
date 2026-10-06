/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Issue_Missing_NameInputs */

const en_upload_issue_missing_name = /** @type {(inputs: Upload_Issue_Missing_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The build has no Name.`)
};

const es_upload_issue_missing_name = /** @type {(inputs: Upload_Issue_Missing_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La build no tiene Name.`)
};

const de_upload_issue_missing_name = /** @type {(inputs: Upload_Issue_Missing_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Build hat keinen Name.`)
};

const fr_upload_issue_missing_name = /** @type {(inputs: Upload_Issue_Missing_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le build n’a pas de Name.`)
};

const it_upload_issue_missing_name = /** @type {(inputs: Upload_Issue_Missing_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La build non ha un Name.`)
};

const nl_upload_issue_missing_name = /** @type {(inputs: Upload_Issue_Missing_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De build heeft geen Name.`)
};

const pl_upload_issue_missing_name = /** @type {(inputs: Upload_Issue_Missing_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build nie ma pola Name.`)
};

const pt_upload_issue_missing_name = /** @type {(inputs: Upload_Issue_Missing_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A build não tem Name.`)
};

const ru_upload_issue_missing_name = /** @type {(inputs: Upload_Issue_Missing_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В постройке нет Name.`)
};

const sv_upload_issue_missing_name = /** @type {(inputs: Upload_Issue_Missing_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bygget saknar Name.`)
};

const tr_upload_issue_missing_name = /** @type {(inputs: Upload_Issue_Missing_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapıda Name yok.`)
};

const zh_upload_issue_missing_name = /** @type {(inputs: Upload_Issue_Missing_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建筑缺少 Name。`)
};

const ja_upload_issue_missing_name = /** @type {(inputs: Upload_Issue_Missing_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築に Name がありません。`)
};

/**
* | output |
* | --- |
* | "The build has no Name." |
*
* @param {Upload_Issue_Missing_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_issue_missing_name = /** @type {((inputs?: Upload_Issue_Missing_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Missing_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_issue_missing_name(inputs)
	if (locale === "de") return de_upload_issue_missing_name(inputs)
	if (locale === "fr") return fr_upload_issue_missing_name(inputs)
	if (locale === "it") return it_upload_issue_missing_name(inputs)
	if (locale === "nl") return nl_upload_issue_missing_name(inputs)
	if (locale === "pl") return pl_upload_issue_missing_name(inputs)
	if (locale === "pt") return pt_upload_issue_missing_name(inputs)
	if (locale === "ru") return ru_upload_issue_missing_name(inputs)
	if (locale === "sv") return sv_upload_issue_missing_name(inputs)
	if (locale === "tr") return tr_upload_issue_missing_name(inputs)
	if (locale === "zh") return zh_upload_issue_missing_name(inputs)
	if (locale === "ja") return ja_upload_issue_missing_name(inputs)
	return en_upload_issue_missing_name(inputs)
});
