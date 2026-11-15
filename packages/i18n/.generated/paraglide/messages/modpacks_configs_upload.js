/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Configs_UploadInputs */

const en_modpacks_configs_upload = /** @type {(inputs: Modpacks_Configs_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload zip`)
};

const es_modpacks_configs_upload = /** @type {(inputs: Modpacks_Configs_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Subir zip`)
};

const de_modpacks_configs_upload = /** @type {(inputs: Modpacks_Configs_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip hochladen`)
};

const fr_modpacks_configs_upload = /** @type {(inputs: Modpacks_Configs_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoyer un zip`)
};

const it_modpacks_configs_upload = /** @type {(inputs: Modpacks_Configs_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carica zip`)
};

const nl_modpacks_configs_upload = /** @type {(inputs: Modpacks_Configs_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip uploaden`)
};

const pl_modpacks_configs_upload = /** @type {(inputs: Modpacks_Configs_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyślij zip`)
};

const pt_modpacks_configs_upload = /** @type {(inputs: Modpacks_Configs_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar zip`)
};

const ru_modpacks_configs_upload = /** @type {(inputs: Modpacks_Configs_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузить zip`)
};

const sv_modpacks_configs_upload = /** @type {(inputs: Modpacks_Configs_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda upp zip`)
};

const tr_modpacks_configs_upload = /** @type {(inputs: Modpacks_Configs_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zip yükle`)
};

const zh_modpacks_configs_upload = /** @type {(inputs: Modpacks_Configs_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传 zip`)
};

const ja_modpacks_configs_upload = /** @type {(inputs: Modpacks_Configs_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zip をアップロード`)
};

/**
* | output |
* | --- |
* | "Upload zip" |
*
* @param {Modpacks_Configs_UploadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_configs_upload = /** @type {((inputs?: Modpacks_Configs_UploadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_UploadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_configs_upload(inputs)
	if (locale === "de") return de_modpacks_configs_upload(inputs)
	if (locale === "fr") return fr_modpacks_configs_upload(inputs)
	if (locale === "it") return it_modpacks_configs_upload(inputs)
	if (locale === "nl") return nl_modpacks_configs_upload(inputs)
	if (locale === "pl") return pl_modpacks_configs_upload(inputs)
	if (locale === "pt") return pt_modpacks_configs_upload(inputs)
	if (locale === "ru") return ru_modpacks_configs_upload(inputs)
	if (locale === "sv") return sv_modpacks_configs_upload(inputs)
	if (locale === "tr") return tr_modpacks_configs_upload(inputs)
	if (locale === "zh") return zh_modpacks_configs_upload(inputs)
	if (locale === "ja") return ja_modpacks_configs_upload(inputs)
	return en_modpacks_configs_upload(inputs)
});
