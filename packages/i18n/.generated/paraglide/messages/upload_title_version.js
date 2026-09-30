/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Upload_Title_VersionInputs */

const en_upload_title_version = /** @type {(inputs: Upload_Title_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`New version of ${i?.name}`)
};

const es_upload_title_version = /** @type {(inputs: Upload_Title_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nueva versión de ${i?.name}`)
};

const de_upload_title_version = /** @type {(inputs: Upload_Title_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Neue Version von ${i?.name}`)
};

const fr_upload_title_version = /** @type {(inputs: Upload_Title_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nouvelle version de ${i?.name}`)
};

const it_upload_title_version = /** @type {(inputs: Upload_Title_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nuova versione di ${i?.name}`)
};

const nl_upload_title_version = /** @type {(inputs: Upload_Title_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nieuwe versie van ${i?.name}`)
};

const pl_upload_title_version = /** @type {(inputs: Upload_Title_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nowa wersja: ${i?.name}`)
};

const pt_upload_title_version = /** @type {(inputs: Upload_Title_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nova versão de ${i?.name}`)
};

const ru_upload_title_version = /** @type {(inputs: Upload_Title_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Новая версия: ${i?.name}`)
};

const sv_upload_title_version = /** @type {(inputs: Upload_Title_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ny version av ${i?.name}`)
};

const tr_upload_title_version = /** @type {(inputs: Upload_Title_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} için yeni sürüm`)
};

const zh_upload_title_version = /** @type {(inputs: Upload_Title_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的新版本`)
};

const ja_upload_title_version = /** @type {(inputs: Upload_Title_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の新バージョン`)
};

/**
* | output |
* | --- |
* | "New version of {name}" |
*
* @param {Upload_Title_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_title_version = /** @type {((inputs: Upload_Title_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Title_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_title_version(inputs)
	if (locale === "de") return de_upload_title_version(inputs)
	if (locale === "fr") return fr_upload_title_version(inputs)
	if (locale === "it") return it_upload_title_version(inputs)
	if (locale === "nl") return nl_upload_title_version(inputs)
	if (locale === "pl") return pl_upload_title_version(inputs)
	if (locale === "pt") return pt_upload_title_version(inputs)
	if (locale === "ru") return ru_upload_title_version(inputs)
	if (locale === "sv") return sv_upload_title_version(inputs)
	if (locale === "tr") return tr_upload_title_version(inputs)
	if (locale === "zh") return zh_upload_title_version(inputs)
	if (locale === "ja") return ja_upload_title_version(inputs)
	return en_upload_title_version(inputs)
});
