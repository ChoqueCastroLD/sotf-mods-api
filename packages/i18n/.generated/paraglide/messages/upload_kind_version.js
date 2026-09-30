/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Kind_VersionInputs */

const en_upload_kind_version = /** @type {(inputs: Upload_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New version`)
};

const es_upload_kind_version = /** @type {(inputs: Upload_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nueva versión`)
};

const de_upload_kind_version = /** @type {(inputs: Upload_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Version`)
};

const fr_upload_kind_version = /** @type {(inputs: Upload_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelle version`)
};

const it_upload_kind_version = /** @type {(inputs: Upload_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuova versione`)
};

const nl_upload_kind_version = /** @type {(inputs: Upload_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe versie`)
};

const pl_upload_kind_version = /** @type {(inputs: Upload_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowa wersja`)
};

const pt_upload_kind_version = /** @type {(inputs: Upload_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nova versão`)
};

const ru_upload_kind_version = /** @type {(inputs: Upload_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новая версия`)
};

const sv_upload_kind_version = /** @type {(inputs: Upload_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny version`)
};

const tr_upload_kind_version = /** @type {(inputs: Upload_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni sürüm`)
};

const zh_upload_kind_version = /** @type {(inputs: Upload_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新版本`)
};

const ja_upload_kind_version = /** @type {(inputs: Upload_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいバージョン`)
};

/**
* | output |
* | --- |
* | "New version" |
*
* @param {Upload_Kind_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_kind_version = /** @type {((inputs?: Upload_Kind_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Kind_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_kind_version(inputs)
	if (locale === "de") return de_upload_kind_version(inputs)
	if (locale === "fr") return fr_upload_kind_version(inputs)
	if (locale === "it") return it_upload_kind_version(inputs)
	if (locale === "nl") return nl_upload_kind_version(inputs)
	if (locale === "pl") return pl_upload_kind_version(inputs)
	if (locale === "pt") return pt_upload_kind_version(inputs)
	if (locale === "ru") return ru_upload_kind_version(inputs)
	if (locale === "sv") return sv_upload_kind_version(inputs)
	if (locale === "tr") return tr_upload_kind_version(inputs)
	if (locale === "zh") return zh_upload_kind_version(inputs)
	if (locale === "ja") return ja_upload_kind_version(inputs)
	return en_upload_kind_version(inputs)
});
