/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Issue_Missing_IdInputs */

const en_upload_issue_missing_id = /** @type {(inputs: Upload_Issue_Missing_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The manifest has no id.`)
};

const es_upload_issue_missing_id = /** @type {(inputs: Upload_Issue_Missing_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El manifest no tiene id.`)
};

const de_upload_issue_missing_id = /** @type {(inputs: Upload_Issue_Missing_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Manifest hat keine ID.`)
};

const fr_upload_issue_missing_id = /** @type {(inputs: Upload_Issue_Missing_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le manifest n’a pas d’id.`)
};

const it_upload_issue_missing_id = /** @type {(inputs: Upload_Issue_Missing_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il manifest non ha un id.`)
};

const nl_upload_issue_missing_id = /** @type {(inputs: Upload_Issue_Missing_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het manifest heeft geen id.`)
};

const pl_upload_issue_missing_id = /** @type {(inputs: Upload_Issue_Missing_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifest nie ma identyfikatora.`)
};

const pt_upload_issue_missing_id = /** @type {(inputs: Upload_Issue_Missing_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O manifest não tem id.`)
};

const ru_upload_issue_missing_id = /** @type {(inputs: Upload_Issue_Missing_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В манифесте нет id.`)
};

const sv_upload_issue_missing_id = /** @type {(inputs: Upload_Issue_Missing_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifestet saknar id.`)
};

const tr_upload_issue_missing_id = /** @type {(inputs: Upload_Issue_Missing_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifest’te kimlik yok.`)
};

const zh_upload_issue_missing_id = /** @type {(inputs: Upload_Issue_Missing_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清单缺少 id。`)
};

const ja_upload_issue_missing_id = /** @type {(inputs: Upload_Issue_Missing_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マニフェストに id がありません。`)
};

/**
* | output |
* | --- |
* | "The manifest has no id." |
*
* @param {Upload_Issue_Missing_IdInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_issue_missing_id = /** @type {((inputs?: Upload_Issue_Missing_IdInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Missing_IdInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_issue_missing_id(inputs)
	if (locale === "de") return de_upload_issue_missing_id(inputs)
	if (locale === "fr") return fr_upload_issue_missing_id(inputs)
	if (locale === "it") return it_upload_issue_missing_id(inputs)
	if (locale === "nl") return nl_upload_issue_missing_id(inputs)
	if (locale === "pl") return pl_upload_issue_missing_id(inputs)
	if (locale === "pt") return pt_upload_issue_missing_id(inputs)
	if (locale === "ru") return ru_upload_issue_missing_id(inputs)
	if (locale === "sv") return sv_upload_issue_missing_id(inputs)
	if (locale === "tr") return tr_upload_issue_missing_id(inputs)
	if (locale === "zh") return zh_upload_issue_missing_id(inputs)
	if (locale === "ja") return ja_upload_issue_missing_id(inputs)
	return en_upload_issue_missing_id(inputs)
});
