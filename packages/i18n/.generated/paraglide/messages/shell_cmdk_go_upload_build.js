/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Cmdk_Go_Upload_BuildInputs */

const en_shell_cmdk_go_upload_build = /** @type {(inputs: Shell_Cmdk_Go_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload a build`)
};

const es_shell_cmdk_go_upload_build = /** @type {(inputs: Shell_Cmdk_Go_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Subir un build`)
};

const de_shell_cmdk_go_upload_build = /** @type {(inputs: Shell_Cmdk_Go_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build hochladen`)
};

const fr_shell_cmdk_go_upload_build = /** @type {(inputs: Shell_Cmdk_Go_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléverser un build`)
};

const it_shell_cmdk_go_upload_build = /** @type {(inputs: Shell_Cmdk_Go_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carica una build`)
};

const nl_shell_cmdk_go_upload_build = /** @type {(inputs: Shell_Cmdk_Go_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een build uploaden`)
};

const pl_shell_cmdk_go_upload_build = /** @type {(inputs: Shell_Cmdk_Go_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prześlij build`)
};

const pt_shell_cmdk_go_upload_build = /** @type {(inputs: Shell_Cmdk_Go_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar uma build`)
};

const ru_shell_cmdk_go_upload_build = /** @type {(inputs: Shell_Cmdk_Go_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузить постройку`)
};

const sv_shell_cmdk_go_upload_build = /** @type {(inputs: Shell_Cmdk_Go_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda upp ett bygge`)
};

const tr_shell_cmdk_go_upload_build = /** @type {(inputs: Shell_Cmdk_Go_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapı yükle`)
};

const zh_shell_cmdk_go_upload_build = /** @type {(inputs: Shell_Cmdk_Go_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传建筑`)
};

const ja_shell_cmdk_go_upload_build = /** @type {(inputs: Shell_Cmdk_Go_Upload_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築をアップロード`)
};

/**
* | output |
* | --- |
* | "Upload a build" |
*
* @param {Shell_Cmdk_Go_Upload_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_cmdk_go_upload_build = /** @type {((inputs?: Shell_Cmdk_Go_Upload_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Cmdk_Go_Upload_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_cmdk_go_upload_build(inputs)
	if (locale === "de") return de_shell_cmdk_go_upload_build(inputs)
	if (locale === "fr") return fr_shell_cmdk_go_upload_build(inputs)
	if (locale === "it") return it_shell_cmdk_go_upload_build(inputs)
	if (locale === "nl") return nl_shell_cmdk_go_upload_build(inputs)
	if (locale === "pl") return pl_shell_cmdk_go_upload_build(inputs)
	if (locale === "pt") return pt_shell_cmdk_go_upload_build(inputs)
	if (locale === "ru") return ru_shell_cmdk_go_upload_build(inputs)
	if (locale === "sv") return sv_shell_cmdk_go_upload_build(inputs)
	if (locale === "tr") return tr_shell_cmdk_go_upload_build(inputs)
	if (locale === "zh") return zh_shell_cmdk_go_upload_build(inputs)
	if (locale === "ja") return ja_shell_cmdk_go_upload_build(inputs)
	return en_shell_cmdk_go_upload_build(inputs)
});
