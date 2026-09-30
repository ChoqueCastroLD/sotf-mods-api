/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Manifest_PlatformInputs */

const en_upload_manifest_platform = /** @type {(inputs: Upload_Manifest_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform`)
};

const es_upload_manifest_platform = /** @type {(inputs: Upload_Manifest_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plataforma`)
};

const de_upload_manifest_platform = /** @type {(inputs: Upload_Manifest_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plattform`)
};

const fr_upload_manifest_platform = /** @type {(inputs: Upload_Manifest_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plateforme`)
};

const it_upload_manifest_platform = /** @type {(inputs: Upload_Manifest_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Piattaforma`)
};

const nl_upload_manifest_platform = /** @type {(inputs: Upload_Manifest_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform`)
};

const pl_upload_manifest_platform = /** @type {(inputs: Upload_Manifest_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platforma`)
};

const pt_upload_manifest_platform = /** @type {(inputs: Upload_Manifest_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plataforma`)
};

const ru_upload_manifest_platform = /** @type {(inputs: Upload_Manifest_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Платформа`)
};

const sv_upload_manifest_platform = /** @type {(inputs: Upload_Manifest_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plattform`)
};

const tr_upload_manifest_platform = /** @type {(inputs: Upload_Manifest_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform`)
};

const zh_upload_manifest_platform = /** @type {(inputs: Upload_Manifest_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`平台`)
};

const ja_upload_manifest_platform = /** @type {(inputs: Upload_Manifest_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プラットフォーム`)
};

/**
* | output |
* | --- |
* | "Platform" |
*
* @param {Upload_Manifest_PlatformInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_manifest_platform = /** @type {((inputs?: Upload_Manifest_PlatformInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Manifest_PlatformInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_manifest_platform(inputs)
	if (locale === "de") return de_upload_manifest_platform(inputs)
	if (locale === "fr") return fr_upload_manifest_platform(inputs)
	if (locale === "it") return it_upload_manifest_platform(inputs)
	if (locale === "nl") return nl_upload_manifest_platform(inputs)
	if (locale === "pl") return pl_upload_manifest_platform(inputs)
	if (locale === "pt") return pt_upload_manifest_platform(inputs)
	if (locale === "ru") return ru_upload_manifest_platform(inputs)
	if (locale === "sv") return sv_upload_manifest_platform(inputs)
	if (locale === "tr") return tr_upload_manifest_platform(inputs)
	if (locale === "zh") return zh_upload_manifest_platform(inputs)
	if (locale === "ja") return ja_upload_manifest_platform(inputs)
	return en_upload_manifest_platform(inputs)
});
