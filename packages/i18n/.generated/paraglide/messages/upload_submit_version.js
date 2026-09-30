/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Submit_VersionInputs */

const en_upload_submit_version = /** @type {(inputs: Upload_Submit_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish this version`)
};

const es_upload_submit_version = /** @type {(inputs: Upload_Submit_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar esta versión`)
};

const de_upload_submit_version = /** @type {(inputs: Upload_Submit_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Version veröffentlichen`)
};

const fr_upload_submit_version = /** @type {(inputs: Upload_Submit_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publier cette version`)
};

const it_upload_submit_version = /** @type {(inputs: Upload_Submit_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblica questa versione`)
};

const nl_upload_submit_version = /** @type {(inputs: Upload_Submit_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze versie publiceren`)
};

const pl_upload_submit_version = /** @type {(inputs: Upload_Submit_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikuj tę wersję`)
};

const pt_upload_submit_version = /** @type {(inputs: Upload_Submit_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar esta versão`)
};

const ru_upload_submit_version = /** @type {(inputs: Upload_Submit_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликовать эту версию`)
};

const sv_upload_submit_version = /** @type {(inputs: Upload_Submit_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicera den här versionen`)
};

const tr_upload_submit_version = /** @type {(inputs: Upload_Submit_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sürümü yayınla`)
};

const zh_upload_submit_version = /** @type {(inputs: Upload_Submit_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布此版本`)
};

const ja_upload_submit_version = /** @type {(inputs: Upload_Submit_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このバージョンを公開`)
};

/**
* | output |
* | --- |
* | "Publish this version" |
*
* @param {Upload_Submit_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_submit_version = /** @type {((inputs?: Upload_Submit_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Submit_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_submit_version(inputs)
	if (locale === "de") return de_upload_submit_version(inputs)
	if (locale === "fr") return fr_upload_submit_version(inputs)
	if (locale === "it") return it_upload_submit_version(inputs)
	if (locale === "nl") return nl_upload_submit_version(inputs)
	if (locale === "pl") return pl_upload_submit_version(inputs)
	if (locale === "pt") return pt_upload_submit_version(inputs)
	if (locale === "ru") return ru_upload_submit_version(inputs)
	if (locale === "sv") return sv_upload_submit_version(inputs)
	if (locale === "tr") return tr_upload_submit_version(inputs)
	if (locale === "zh") return zh_upload_submit_version(inputs)
	if (locale === "ja") return ja_upload_submit_version(inputs)
	return en_upload_submit_version(inputs)
});
