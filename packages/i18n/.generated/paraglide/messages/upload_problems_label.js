/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Problems_LabelInputs */

const en_upload_problems_label = /** @type {(inputs: Upload_Problems_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Errors and warnings of the file`)
};

const es_upload_problems_label = /** @type {(inputs: Upload_Problems_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Errores y avisos del archivo`)
};

const de_upload_problems_label = /** @type {(inputs: Upload_Problems_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fehler und Warnungen der Datei`)
};

const fr_upload_problems_label = /** @type {(inputs: Upload_Problems_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erreurs et avertissements du fichier`)
};

const it_upload_problems_label = /** @type {(inputs: Upload_Problems_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Errori e avvisi del file`)
};

const nl_upload_problems_label = /** @type {(inputs: Upload_Problems_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fouten en waarschuwingen van het bestand`)
};

const pl_upload_problems_label = /** @type {(inputs: Upload_Problems_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Błędy i ostrzeżenia pliku`)
};

const pt_upload_problems_label = /** @type {(inputs: Upload_Problems_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erros e avisos do arquivo`)
};

const ru_upload_problems_label = /** @type {(inputs: Upload_Problems_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ошибки и предупреждения файла`)
};

const sv_upload_problems_label = /** @type {(inputs: Upload_Problems_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fel och varningar för filen`)
};

const tr_upload_problems_label = /** @type {(inputs: Upload_Problems_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosyanın hataları ve uyarıları`)
};

const zh_upload_problems_label = /** @type {(inputs: Upload_Problems_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件的错误和警告`)
};

const ja_upload_problems_label = /** @type {(inputs: Upload_Problems_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルのエラーと警告`)
};

/**
* | output |
* | --- |
* | "Errors and warnings of the file" |
*
* @param {Upload_Problems_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_problems_label = /** @type {((inputs?: Upload_Problems_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Problems_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_problems_label(inputs)
	if (locale === "de") return de_upload_problems_label(inputs)
	if (locale === "fr") return fr_upload_problems_label(inputs)
	if (locale === "it") return it_upload_problems_label(inputs)
	if (locale === "nl") return nl_upload_problems_label(inputs)
	if (locale === "pl") return pl_upload_problems_label(inputs)
	if (locale === "pt") return pt_upload_problems_label(inputs)
	if (locale === "ru") return ru_upload_problems_label(inputs)
	if (locale === "sv") return sv_upload_problems_label(inputs)
	if (locale === "tr") return tr_upload_problems_label(inputs)
	if (locale === "zh") return zh_upload_problems_label(inputs)
	if (locale === "ja") return ja_upload_problems_label(inputs)
	return en_upload_problems_label(inputs)
});
