/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Nav_UploadInputs */

const en_shell_nav_upload = /** @type {(inputs: Shell_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload`)
};

const es_shell_nav_upload = /** @type {(inputs: Shell_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Subir`)
};

const de_shell_nav_upload = /** @type {(inputs: Shell_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hochladen`)
};

const fr_shell_nav_upload = /** @type {(inputs: Shell_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléverser`)
};

const it_shell_nav_upload = /** @type {(inputs: Shell_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carica`)
};

const nl_shell_nav_upload = /** @type {(inputs: Shell_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploaden`)
};

const pl_shell_nav_upload = /** @type {(inputs: Shell_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prześlij`)
};

const pt_shell_nav_upload = /** @type {(inputs: Shell_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar`)
};

const ru_shell_nav_upload = /** @type {(inputs: Shell_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузить`)
};

const sv_shell_nav_upload = /** @type {(inputs: Shell_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda upp`)
};

const tr_shell_nav_upload = /** @type {(inputs: Shell_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yükle`)
};

const zh_shell_nav_upload = /** @type {(inputs: Shell_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传`)
};

const ja_shell_nav_upload = /** @type {(inputs: Shell_Nav_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アップロード`)
};

/**
* | output |
* | --- |
* | "Upload" |
*
* @param {Shell_Nav_UploadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_nav_upload = /** @type {((inputs?: Shell_Nav_UploadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Nav_UploadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_nav_upload(inputs)
	if (locale === "de") return de_shell_nav_upload(inputs)
	if (locale === "fr") return fr_shell_nav_upload(inputs)
	if (locale === "it") return it_shell_nav_upload(inputs)
	if (locale === "nl") return nl_shell_nav_upload(inputs)
	if (locale === "pl") return pl_shell_nav_upload(inputs)
	if (locale === "pt") return pt_shell_nav_upload(inputs)
	if (locale === "ru") return ru_shell_nav_upload(inputs)
	if (locale === "sv") return sv_shell_nav_upload(inputs)
	if (locale === "tr") return tr_shell_nav_upload(inputs)
	if (locale === "zh") return zh_shell_nav_upload(inputs)
	if (locale === "ja") return ja_shell_nav_upload(inputs)
	return en_shell_nav_upload(inputs)
});
