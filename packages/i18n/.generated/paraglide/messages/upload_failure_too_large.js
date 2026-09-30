/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Failure_Too_LargeInputs */

const en_upload_failure_too_large = /** @type {(inputs: Upload_Failure_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The file is too large for your account.`)
};

const es_upload_failure_too_large = /** @type {(inputs: Upload_Failure_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El archivo es demasiado grande para tu cuenta.`)
};

const de_upload_failure_too_large = /** @type {(inputs: Upload_Failure_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Datei ist für dein Konto zu groß.`)
};

const fr_upload_failure_too_large = /** @type {(inputs: Upload_Failure_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le fichier est trop volumineux pour votre compte.`)
};

const it_upload_failure_too_large = /** @type {(inputs: Upload_Failure_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il file è troppo grande per il tuo account.`)
};

const nl_upload_failure_too_large = /** @type {(inputs: Upload_Failure_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het bestand is te groot voor je account.`)
};

const pl_upload_failure_too_large = /** @type {(inputs: Upload_Failure_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik jest za duży dla twojego konta.`)
};

const pt_upload_failure_too_large = /** @type {(inputs: Upload_Failure_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O arquivo é grande demais para sua conta.`)
};

const ru_upload_failure_too_large = /** @type {(inputs: Upload_Failure_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл слишком большой для вашего аккаунта.`)
};

const sv_upload_failure_too_large = /** @type {(inputs: Upload_Failure_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen är för stor för ditt konto.`)
};

const tr_upload_failure_too_large = /** @type {(inputs: Upload_Failure_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya hesabın için çok büyük.`)
};

const zh_upload_failure_too_large = /** @type {(inputs: Upload_Failure_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件超出你账号的上限。`)
};

const ja_upload_failure_too_large = /** @type {(inputs: Upload_Failure_Too_LargeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このアカウントでアップロードできるサイズを超えています。`)
};

/**
* | output |
* | --- |
* | "The file is too large for your account." |
*
* @param {Upload_Failure_Too_LargeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_failure_too_large = /** @type {((inputs?: Upload_Failure_Too_LargeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Failure_Too_LargeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_failure_too_large(inputs)
	if (locale === "de") return de_upload_failure_too_large(inputs)
	if (locale === "fr") return fr_upload_failure_too_large(inputs)
	if (locale === "it") return it_upload_failure_too_large(inputs)
	if (locale === "nl") return nl_upload_failure_too_large(inputs)
	if (locale === "pl") return pl_upload_failure_too_large(inputs)
	if (locale === "pt") return pt_upload_failure_too_large(inputs)
	if (locale === "ru") return ru_upload_failure_too_large(inputs)
	if (locale === "sv") return sv_upload_failure_too_large(inputs)
	if (locale === "tr") return tr_upload_failure_too_large(inputs)
	if (locale === "zh") return zh_upload_failure_too_large(inputs)
	if (locale === "ja") return ja_upload_failure_too_large(inputs)
	return en_upload_failure_too_large(inputs)
});
