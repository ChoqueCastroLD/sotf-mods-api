/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Issue_Missing_GuidInputs */

const en_upload_issue_missing_guid = /** @type {(inputs: Upload_Issue_Missing_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The build has no Guid.`)
};

const es_upload_issue_missing_guid = /** @type {(inputs: Upload_Issue_Missing_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La build no tiene Guid.`)
};

const de_upload_issue_missing_guid = /** @type {(inputs: Upload_Issue_Missing_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Build hat keine Guid.`)
};

const fr_upload_issue_missing_guid = /** @type {(inputs: Upload_Issue_Missing_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le build n’a pas de Guid.`)
};

const it_upload_issue_missing_guid = /** @type {(inputs: Upload_Issue_Missing_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La build non ha un Guid.`)
};

const nl_upload_issue_missing_guid = /** @type {(inputs: Upload_Issue_Missing_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De build heeft geen Guid.`)
};

const pl_upload_issue_missing_guid = /** @type {(inputs: Upload_Issue_Missing_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build nie ma pola Guid.`)
};

const pt_upload_issue_missing_guid = /** @type {(inputs: Upload_Issue_Missing_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A build não tem Guid.`)
};

const ru_upload_issue_missing_guid = /** @type {(inputs: Upload_Issue_Missing_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В постройке нет Guid.`)
};

const sv_upload_issue_missing_guid = /** @type {(inputs: Upload_Issue_Missing_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bygget saknar Guid.`)
};

const tr_upload_issue_missing_guid = /** @type {(inputs: Upload_Issue_Missing_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapıda Guid yok.`)
};

const zh_upload_issue_missing_guid = /** @type {(inputs: Upload_Issue_Missing_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建筑缺少 Guid。`)
};

const ja_upload_issue_missing_guid = /** @type {(inputs: Upload_Issue_Missing_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築に Guid がありません。`)
};

/**
* | output |
* | --- |
* | "The build has no Guid." |
*
* @param {Upload_Issue_Missing_GuidInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_issue_missing_guid = /** @type {((inputs?: Upload_Issue_Missing_GuidInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Missing_GuidInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_issue_missing_guid(inputs)
	if (locale === "de") return de_upload_issue_missing_guid(inputs)
	if (locale === "fr") return fr_upload_issue_missing_guid(inputs)
	if (locale === "it") return it_upload_issue_missing_guid(inputs)
	if (locale === "nl") return nl_upload_issue_missing_guid(inputs)
	if (locale === "pl") return pl_upload_issue_missing_guid(inputs)
	if (locale === "pt") return pt_upload_issue_missing_guid(inputs)
	if (locale === "ru") return ru_upload_issue_missing_guid(inputs)
	if (locale === "sv") return sv_upload_issue_missing_guid(inputs)
	if (locale === "tr") return tr_upload_issue_missing_guid(inputs)
	if (locale === "zh") return zh_upload_issue_missing_guid(inputs)
	if (locale === "ja") return ja_upload_issue_missing_guid(inputs)
	return en_upload_issue_missing_guid(inputs)
});
