/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Choose_FileInputs */

const en_logs_choose_file = /** @type {(inputs: Logs_Choose_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose file`)
};

const es_logs_choose_file = /** @type {(inputs: Logs_Choose_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elegir archivo`)
};

const de_logs_choose_file = /** @type {(inputs: Logs_Choose_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datei wählen`)
};

const fr_logs_choose_file = /** @type {(inputs: Logs_Choose_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisir un fichier`)
};

const it_logs_choose_file = /** @type {(inputs: Logs_Choose_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli file`)
};

const nl_logs_choose_file = /** @type {(inputs: Logs_Choose_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestand kiezen`)
};

const pl_logs_choose_file = /** @type {(inputs: Logs_Choose_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz plik`)
};

const pt_logs_choose_file = /** @type {(inputs: Logs_Choose_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolher ficheiro`)
};

const ru_logs_choose_file = /** @type {(inputs: Logs_Choose_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбрать файл`)
};

const sv_logs_choose_file = /** @type {(inputs: Logs_Choose_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj fil`)
};

const tr_logs_choose_file = /** @type {(inputs: Logs_Choose_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya seç`)
};

const zh_logs_choose_file = /** @type {(inputs: Logs_Choose_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择文件`)
};

const ja_logs_choose_file = /** @type {(inputs: Logs_Choose_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルを選択`)
};

/**
* | output |
* | --- |
* | "Choose file" |
*
* @param {Logs_Choose_FileInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_choose_file = /** @type {((inputs?: Logs_Choose_FileInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Choose_FileInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_choose_file(inputs)
	if (locale === "de") return de_logs_choose_file(inputs)
	if (locale === "fr") return fr_logs_choose_file(inputs)
	if (locale === "it") return it_logs_choose_file(inputs)
	if (locale === "nl") return nl_logs_choose_file(inputs)
	if (locale === "pl") return pl_logs_choose_file(inputs)
	if (locale === "pt") return pt_logs_choose_file(inputs)
	if (locale === "ru") return ru_logs_choose_file(inputs)
	if (locale === "sv") return sv_logs_choose_file(inputs)
	if (locale === "tr") return tr_logs_choose_file(inputs)
	if (locale === "zh") return zh_logs_choose_file(inputs)
	if (locale === "ja") return ja_logs_choose_file(inputs)
	return en_logs_choose_file(inputs)
});
