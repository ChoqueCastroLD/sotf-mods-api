/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Issue_Missing_VersionInputs */

const en_upload_issue_missing_version = /** @type {(inputs: Upload_Issue_Missing_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The manifest has no version.`)
};

const es_upload_issue_missing_version = /** @type {(inputs: Upload_Issue_Missing_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El manifest no tiene versión.`)
};

const de_upload_issue_missing_version = /** @type {(inputs: Upload_Issue_Missing_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Manifest hat keine Version.`)
};

const fr_upload_issue_missing_version = /** @type {(inputs: Upload_Issue_Missing_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le manifest n’a pas de version.`)
};

const it_upload_issue_missing_version = /** @type {(inputs: Upload_Issue_Missing_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il manifest non ha una versione.`)
};

const nl_upload_issue_missing_version = /** @type {(inputs: Upload_Issue_Missing_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het manifest heeft geen versie.`)
};

const pl_upload_issue_missing_version = /** @type {(inputs: Upload_Issue_Missing_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifest nie ma wersji.`)
};

const pt_upload_issue_missing_version = /** @type {(inputs: Upload_Issue_Missing_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O manifest não tem versão.`)
};

const ru_upload_issue_missing_version = /** @type {(inputs: Upload_Issue_Missing_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В манифесте нет версии.`)
};

const sv_upload_issue_missing_version = /** @type {(inputs: Upload_Issue_Missing_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifestet saknar version.`)
};

const tr_upload_issue_missing_version = /** @type {(inputs: Upload_Issue_Missing_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manifest’te sürüm yok.`)
};

const zh_upload_issue_missing_version = /** @type {(inputs: Upload_Issue_Missing_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清单缺少版本。`)
};

const ja_upload_issue_missing_version = /** @type {(inputs: Upload_Issue_Missing_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マニフェストにバージョンがありません。`)
};

/**
* | output |
* | --- |
* | "The manifest has no version." |
*
* @param {Upload_Issue_Missing_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_issue_missing_version = /** @type {((inputs?: Upload_Issue_Missing_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Missing_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_issue_missing_version(inputs)
	if (locale === "de") return de_upload_issue_missing_version(inputs)
	if (locale === "fr") return fr_upload_issue_missing_version(inputs)
	if (locale === "it") return it_upload_issue_missing_version(inputs)
	if (locale === "nl") return nl_upload_issue_missing_version(inputs)
	if (locale === "pl") return pl_upload_issue_missing_version(inputs)
	if (locale === "pt") return pt_upload_issue_missing_version(inputs)
	if (locale === "ru") return ru_upload_issue_missing_version(inputs)
	if (locale === "sv") return sv_upload_issue_missing_version(inputs)
	if (locale === "tr") return tr_upload_issue_missing_version(inputs)
	if (locale === "zh") return zh_upload_issue_missing_version(inputs)
	if (locale === "ja") return ja_upload_issue_missing_version(inputs)
	return en_upload_issue_missing_version(inputs)
});
