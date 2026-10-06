/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Cmdk_Go_UploadInputs */

const en_shell_cmdk_go_upload = /** @type {(inputs: Shell_Cmdk_Go_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload a mod`)
};

const es_shell_cmdk_go_upload = /** @type {(inputs: Shell_Cmdk_Go_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Subir un mod`)
};

const de_shell_cmdk_go_upload = /** @type {(inputs: Shell_Cmdk_Go_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod hochladen`)
};

const fr_shell_cmdk_go_upload = /** @type {(inputs: Shell_Cmdk_Go_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléverser un mod`)
};

const it_shell_cmdk_go_upload = /** @type {(inputs: Shell_Cmdk_Go_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carica un mod`)
};

const nl_shell_cmdk_go_upload = /** @type {(inputs: Shell_Cmdk_Go_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een mod uploaden`)
};

const pl_shell_cmdk_go_upload = /** @type {(inputs: Shell_Cmdk_Go_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prześlij mod`)
};

const pt_shell_cmdk_go_upload = /** @type {(inputs: Shell_Cmdk_Go_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar um mod`)
};

const ru_shell_cmdk_go_upload = /** @type {(inputs: Shell_Cmdk_Go_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузить мод`)
};

const sv_shell_cmdk_go_upload = /** @type {(inputs: Shell_Cmdk_Go_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda upp en mod`)
};

const tr_shell_cmdk_go_upload = /** @type {(inputs: Shell_Cmdk_Go_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod yükle`)
};

const zh_shell_cmdk_go_upload = /** @type {(inputs: Shell_Cmdk_Go_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传模组`)
};

const ja_shell_cmdk_go_upload = /** @type {(inputs: Shell_Cmdk_Go_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODをアップロード`)
};

/**
* | output |
* | --- |
* | "Upload a mod" |
*
* @param {Shell_Cmdk_Go_UploadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_cmdk_go_upload = /** @type {((inputs?: Shell_Cmdk_Go_UploadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Cmdk_Go_UploadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_cmdk_go_upload(inputs)
	if (locale === "de") return de_shell_cmdk_go_upload(inputs)
	if (locale === "fr") return fr_shell_cmdk_go_upload(inputs)
	if (locale === "it") return it_shell_cmdk_go_upload(inputs)
	if (locale === "nl") return nl_shell_cmdk_go_upload(inputs)
	if (locale === "pl") return pl_shell_cmdk_go_upload(inputs)
	if (locale === "pt") return pt_shell_cmdk_go_upload(inputs)
	if (locale === "ru") return ru_shell_cmdk_go_upload(inputs)
	if (locale === "sv") return sv_shell_cmdk_go_upload(inputs)
	if (locale === "tr") return tr_shell_cmdk_go_upload(inputs)
	if (locale === "zh") return zh_shell_cmdk_go_upload(inputs)
	if (locale === "ja") return ja_shell_cmdk_go_upload(inputs)
	return en_shell_cmdk_go_upload(inputs)
});
