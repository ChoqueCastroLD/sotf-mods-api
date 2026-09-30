/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Issue_Invalid_VersionInputs */

const en_upload_issue_invalid_version = /** @type {(inputs: Upload_Issue_Invalid_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The version must look like 1.2.3.`)
};

const es_upload_issue_invalid_version = /** @type {(inputs: Upload_Issue_Invalid_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La versión debe tener la forma 1.2.3.`)
};

const de_upload_issue_invalid_version = /** @type {(inputs: Upload_Issue_Invalid_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Version muss wie 1.2.3 aussehen.`)
};

const fr_upload_issue_invalid_version = /** @type {(inputs: Upload_Issue_Invalid_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La version doit ressembler à 1.2.3.`)
};

const it_upload_issue_invalid_version = /** @type {(inputs: Upload_Issue_Invalid_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La versione deve avere la forma 1.2.3.`)
};

const nl_upload_issue_invalid_version = /** @type {(inputs: Upload_Issue_Invalid_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De versie moet eruitzien als 1.2.3.`)
};

const pl_upload_issue_invalid_version = /** @type {(inputs: Upload_Issue_Invalid_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja musi wyglądać jak 1.2.3.`)
};

const pt_upload_issue_invalid_version = /** @type {(inputs: Upload_Issue_Invalid_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A versão precisa ter o formato 1.2.3.`)
};

const ru_upload_issue_invalid_version = /** @type {(inputs: Upload_Issue_Invalid_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия должна выглядеть как 1.2.3.`)
};

const sv_upload_issue_invalid_version = /** @type {(inputs: Upload_Issue_Invalid_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionen måste se ut som 1.2.3.`)
};

const tr_upload_issue_invalid_version = /** @type {(inputs: Upload_Issue_Invalid_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm 1.2.3 gibi görünmeli.`)
};

const zh_upload_issue_invalid_version = /** @type {(inputs: Upload_Issue_Invalid_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本格式应类似 1.2.3。`)
};

const ja_upload_issue_invalid_version = /** @type {(inputs: Upload_Issue_Invalid_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョンは 1.2.3 の形式にしてください。`)
};

/**
* | output |
* | --- |
* | "The version must look like 1.2.3." |
*
* @param {Upload_Issue_Invalid_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_issue_invalid_version = /** @type {((inputs?: Upload_Issue_Invalid_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Invalid_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_issue_invalid_version(inputs)
	if (locale === "de") return de_upload_issue_invalid_version(inputs)
	if (locale === "fr") return fr_upload_issue_invalid_version(inputs)
	if (locale === "it") return it_upload_issue_invalid_version(inputs)
	if (locale === "nl") return nl_upload_issue_invalid_version(inputs)
	if (locale === "pl") return pl_upload_issue_invalid_version(inputs)
	if (locale === "pt") return pt_upload_issue_invalid_version(inputs)
	if (locale === "ru") return ru_upload_issue_invalid_version(inputs)
	if (locale === "sv") return sv_upload_issue_invalid_version(inputs)
	if (locale === "tr") return tr_upload_issue_invalid_version(inputs)
	if (locale === "zh") return zh_upload_issue_invalid_version(inputs)
	if (locale === "ja") return ja_upload_issue_invalid_version(inputs)
	return en_upload_issue_invalid_version(inputs)
});
