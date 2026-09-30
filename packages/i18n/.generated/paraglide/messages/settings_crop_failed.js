/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Crop_FailedInputs */

const en_settings_crop_failed = /** @type {(inputs: Settings_Crop_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This image couldn’t be read. Try another file.`)
};

const es_settings_crop_failed = /** @type {(inputs: Settings_Crop_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se ha podido leer esta imagen. Prueba con otro archivo.`)
};

const de_settings_crop_failed = /** @type {(inputs: Settings_Crop_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieses Bild konnte nicht gelesen werden. Versuch es mit einer anderen Datei.`)
};

const fr_settings_crop_failed = /** @type {(inputs: Settings_Crop_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de lire cette image. Essayez un autre fichier.`)
};

const it_settings_crop_failed = /** @type {(inputs: Settings_Crop_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile leggere questa immagine. Prova un altro file.`)
};

const nl_settings_crop_failed = /** @type {(inputs: Settings_Crop_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze afbeelding kon niet worden gelezen. Probeer een ander bestand.`)
};

const pl_settings_crop_failed = /** @type {(inputs: Settings_Crop_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się odczytać tego obrazu. Spróbuj innego pliku.`)
};

const pt_settings_crop_failed = /** @type {(inputs: Settings_Crop_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível ler esta imagem. Tente outro arquivo.`)
};

const ru_settings_crop_failed = /** @type {(inputs: Settings_Crop_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось прочитать это изображение. Попробуйте другой файл.`)
};

const sv_settings_crop_failed = /** @type {(inputs: Settings_Crop_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilden kunde inte läsas. Prova en annan fil.`)
};

const tr_settings_crop_failed = /** @type {(inputs: Settings_Crop_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu görsel okunamadı. Başka bir dosya dene.`)
};

const zh_settings_crop_failed = /** @type {(inputs: Settings_Crop_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法读取这张图片。请换一个文件试试。`)
};

const ja_settings_crop_failed = /** @type {(inputs: Settings_Crop_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この画像を読み込めませんでした。別のファイルをお試しください。`)
};

/**
* | output |
* | --- |
* | "This image couldn’t be read. Try another file." |
*
* @param {Settings_Crop_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_crop_failed = /** @type {((inputs?: Settings_Crop_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Crop_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_crop_failed(inputs)
	if (locale === "de") return de_settings_crop_failed(inputs)
	if (locale === "fr") return fr_settings_crop_failed(inputs)
	if (locale === "it") return it_settings_crop_failed(inputs)
	if (locale === "nl") return nl_settings_crop_failed(inputs)
	if (locale === "pl") return pl_settings_crop_failed(inputs)
	if (locale === "pt") return pt_settings_crop_failed(inputs)
	if (locale === "ru") return ru_settings_crop_failed(inputs)
	if (locale === "sv") return sv_settings_crop_failed(inputs)
	if (locale === "tr") return tr_settings_crop_failed(inputs)
	if (locale === "zh") return zh_settings_crop_failed(inputs)
	if (locale === "ja") return ja_settings_crop_failed(inputs)
	return en_settings_crop_failed(inputs)
});
