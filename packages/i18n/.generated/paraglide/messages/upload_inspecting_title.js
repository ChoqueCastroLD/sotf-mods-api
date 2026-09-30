/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Inspecting_TitleInputs */

const en_upload_inspecting_title = /** @type {(inputs: Upload_Inspecting_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checking the file…`)
};

const es_upload_inspecting_title = /** @type {(inputs: Upload_Inspecting_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comprobando el archivo…`)
};

const de_upload_inspecting_title = /** @type {(inputs: Upload_Inspecting_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datei wird geprüft…`)
};

const fr_upload_inspecting_title = /** @type {(inputs: Upload_Inspecting_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérification du fichier…`)
};

const it_upload_inspecting_title = /** @type {(inputs: Upload_Inspecting_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controllo del file…`)
};

const nl_upload_inspecting_title = /** @type {(inputs: Upload_Inspecting_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestand controleren…`)
};

const pl_upload_inspecting_title = /** @type {(inputs: Upload_Inspecting_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdzanie pliku…`)
};

const pt_upload_inspecting_title = /** @type {(inputs: Upload_Inspecting_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificando o arquivo…`)
};

const ru_upload_inspecting_title = /** @type {(inputs: Upload_Inspecting_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверяем файл…`)
};

const sv_upload_inspecting_title = /** @type {(inputs: Upload_Inspecting_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrollerar filen…`)
};

const tr_upload_inspecting_title = /** @type {(inputs: Upload_Inspecting_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya kontrol ediliyor…`)
};

const zh_upload_inspecting_title = /** @type {(inputs: Upload_Inspecting_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在检查文件…`)
};

const ja_upload_inspecting_title = /** @type {(inputs: Upload_Inspecting_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルを確認中…`)
};

/**
* | output |
* | --- |
* | "Checking the file…" |
*
* @param {Upload_Inspecting_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_inspecting_title = /** @type {((inputs?: Upload_Inspecting_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Inspecting_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_inspecting_title(inputs)
	if (locale === "de") return de_upload_inspecting_title(inputs)
	if (locale === "fr") return fr_upload_inspecting_title(inputs)
	if (locale === "it") return it_upload_inspecting_title(inputs)
	if (locale === "nl") return nl_upload_inspecting_title(inputs)
	if (locale === "pl") return pl_upload_inspecting_title(inputs)
	if (locale === "pt") return pt_upload_inspecting_title(inputs)
	if (locale === "ru") return ru_upload_inspecting_title(inputs)
	if (locale === "sv") return sv_upload_inspecting_title(inputs)
	if (locale === "tr") return tr_upload_inspecting_title(inputs)
	if (locale === "zh") return zh_upload_inspecting_title(inputs)
	if (locale === "ja") return ja_upload_inspecting_title(inputs)
	return en_upload_inspecting_title(inputs)
});
