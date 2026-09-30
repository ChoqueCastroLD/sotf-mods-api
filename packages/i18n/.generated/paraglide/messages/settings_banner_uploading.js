/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Banner_UploadingInputs */

const en_settings_banner_uploading = /** @type {(inputs: Settings_Banner_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploading your banner…`)
};

const es_settings_banner_uploading = /** @type {(inputs: Settings_Banner_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Subiendo tu banner…`)
};

const de_settings_banner_uploading = /** @type {(inputs: Settings_Banner_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Banner wird hochgeladen…`)
};

const fr_settings_banner_uploading = /** @type {(inputs: Settings_Banner_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Envoi de votre bannière…`)
};

const it_settings_banner_uploading = /** @type {(inputs: Settings_Banner_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento del banner…`)
};

const nl_settings_banner_uploading = /** @type {(inputs: Settings_Banner_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je banner wordt geüpload…`)
};

const pl_settings_banner_uploading = /** @type {(inputs: Settings_Banner_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przesyłanie banera…`)
};

const pt_settings_banner_uploading = /** @type {(inputs: Settings_Banner_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviando seu banner…`)
};

const ru_settings_banner_uploading = /** @type {(inputs: Settings_Banner_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузка баннера…`)
};

const sv_settings_banner_uploading = /** @type {(inputs: Settings_Banner_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laddar upp din banner…`)
};

const tr_settings_banner_uploading = /** @type {(inputs: Settings_Banner_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afişin yükleniyor…`)
};

const zh_settings_banner_uploading = /** @type {(inputs: Settings_Banner_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在上传你的横幅…`)
};

const ja_settings_banner_uploading = /** @type {(inputs: Settings_Banner_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バナーをアップロード中…`)
};

/**
* | output |
* | --- |
* | "Uploading your banner…" |
*
* @param {Settings_Banner_UploadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_banner_uploading = /** @type {((inputs?: Settings_Banner_UploadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Banner_UploadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_banner_uploading(inputs)
	if (locale === "de") return de_settings_banner_uploading(inputs)
	if (locale === "fr") return fr_settings_banner_uploading(inputs)
	if (locale === "it") return it_settings_banner_uploading(inputs)
	if (locale === "nl") return nl_settings_banner_uploading(inputs)
	if (locale === "pl") return pl_settings_banner_uploading(inputs)
	if (locale === "pt") return pt_settings_banner_uploading(inputs)
	if (locale === "ru") return ru_settings_banner_uploading(inputs)
	if (locale === "sv") return sv_settings_banner_uploading(inputs)
	if (locale === "tr") return tr_settings_banner_uploading(inputs)
	if (locale === "zh") return zh_settings_banner_uploading(inputs)
	if (locale === "ja") return ja_settings_banner_uploading(inputs)
	return en_settings_banner_uploading(inputs)
});
