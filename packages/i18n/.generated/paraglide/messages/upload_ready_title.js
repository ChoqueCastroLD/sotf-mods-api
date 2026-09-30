/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Ready_TitleInputs */

const en_upload_ready_title = /** @type {(inputs: Upload_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File checked.`)
};

const es_upload_ready_title = /** @type {(inputs: Upload_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivo comprobado.`)
};

const de_upload_ready_title = /** @type {(inputs: Upload_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datei geprüft.`)
};

const fr_upload_ready_title = /** @type {(inputs: Upload_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fichier vérifié.`)
};

const it_upload_ready_title = /** @type {(inputs: Upload_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File controllato.`)
};

const nl_upload_ready_title = /** @type {(inputs: Upload_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestand gecontroleerd.`)
};

const pl_upload_ready_title = /** @type {(inputs: Upload_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik sprawdzony.`)
};

const pt_upload_ready_title = /** @type {(inputs: Upload_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivo verificado.`)
};

const ru_upload_ready_title = /** @type {(inputs: Upload_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл проверен.`)
};

const sv_upload_ready_title = /** @type {(inputs: Upload_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen är kontrollerad.`)
};

const tr_upload_ready_title = /** @type {(inputs: Upload_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya kontrol edildi.`)
};

const zh_upload_ready_title = /** @type {(inputs: Upload_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件检查通过。`)
};

const ja_upload_ready_title = /** @type {(inputs: Upload_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルを確認しました。`)
};

/**
* | output |
* | --- |
* | "File checked." |
*
* @param {Upload_Ready_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_ready_title = /** @type {((inputs?: Upload_Ready_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Ready_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_ready_title(inputs)
	if (locale === "de") return de_upload_ready_title(inputs)
	if (locale === "fr") return fr_upload_ready_title(inputs)
	if (locale === "it") return it_upload_ready_title(inputs)
	if (locale === "nl") return nl_upload_ready_title(inputs)
	if (locale === "pl") return pl_upload_ready_title(inputs)
	if (locale === "pt") return pt_upload_ready_title(inputs)
	if (locale === "ru") return ru_upload_ready_title(inputs)
	if (locale === "sv") return sv_upload_ready_title(inputs)
	if (locale === "tr") return tr_upload_ready_title(inputs)
	if (locale === "zh") return zh_upload_ready_title(inputs)
	if (locale === "ja") return ja_upload_ready_title(inputs)
	return en_upload_ready_title(inputs)
});
