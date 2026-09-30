/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_Codes_DownloadInputs */

const en_settings_2fa_codes_download = /** @type {(inputs: Settings_2fa_Codes_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download`)
};

const es_settings_2fa_codes_download = /** @type {(inputs: Settings_2fa_Codes_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargar`)
};

const de_settings_2fa_codes_download = /** @type {(inputs: Settings_2fa_Codes_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herunterladen`)
};

const fr_settings_2fa_codes_download = /** @type {(inputs: Settings_2fa_Codes_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Télécharger`)
};

const it_settings_2fa_codes_download = /** @type {(inputs: Settings_2fa_Codes_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica`)
};

const nl_settings_2fa_codes_download = /** @type {(inputs: Settings_2fa_Codes_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloaden`)
};

const pl_settings_2fa_codes_download = /** @type {(inputs: Settings_2fa_Codes_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz`)
};

const pt_settings_2fa_codes_download = /** @type {(inputs: Settings_2fa_Codes_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixar`)
};

const ru_settings_2fa_codes_download = /** @type {(inputs: Settings_2fa_Codes_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать`)
};

const sv_settings_2fa_codes_download = /** @type {(inputs: Settings_2fa_Codes_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ner`)
};

const tr_settings_2fa_codes_download = /** @type {(inputs: Settings_2fa_Codes_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndir`)
};

const zh_settings_2fa_codes_download = /** @type {(inputs: Settings_2fa_Codes_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载`)
};

const ja_settings_2fa_codes_download = /** @type {(inputs: Settings_2fa_Codes_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード`)
};

/**
* | output |
* | --- |
* | "Download" |
*
* @param {Settings_2fa_Codes_DownloadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_codes_download = /** @type {((inputs?: Settings_2fa_Codes_DownloadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_Codes_DownloadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_codes_download(inputs)
	if (locale === "de") return de_settings_2fa_codes_download(inputs)
	if (locale === "fr") return fr_settings_2fa_codes_download(inputs)
	if (locale === "it") return it_settings_2fa_codes_download(inputs)
	if (locale === "nl") return nl_settings_2fa_codes_download(inputs)
	if (locale === "pl") return pl_settings_2fa_codes_download(inputs)
	if (locale === "pt") return pt_settings_2fa_codes_download(inputs)
	if (locale === "ru") return ru_settings_2fa_codes_download(inputs)
	if (locale === "sv") return sv_settings_2fa_codes_download(inputs)
	if (locale === "tr") return tr_settings_2fa_codes_download(inputs)
	if (locale === "zh") return zh_settings_2fa_codes_download(inputs)
	if (locale === "ja") return ja_settings_2fa_codes_download(inputs)
	return en_settings_2fa_codes_download(inputs)
});
