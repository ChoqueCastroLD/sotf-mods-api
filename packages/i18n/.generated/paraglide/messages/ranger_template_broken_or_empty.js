/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Template_Broken_Or_EmptyInputs */

const en_ranger_template_broken_or_empty = /** @type {(inputs: Ranger_Template_Broken_Or_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The file is broken, empty or does not load with RedLoader.`)
};

const es_ranger_template_broken_or_empty = /** @type {(inputs: Ranger_Template_Broken_Or_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El archivo está roto, vacío o no carga con RedLoader.`)
};

const de_ranger_template_broken_or_empty = /** @type {(inputs: Ranger_Template_Broken_Or_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Datei ist defekt, leer oder lädt nicht mit RedLoader.`)
};

const fr_ranger_template_broken_or_empty = /** @type {(inputs: Ranger_Template_Broken_Or_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le fichier est cassé, vide ou ne se charge pas avec RedLoader.`)
};

const it_ranger_template_broken_or_empty = /** @type {(inputs: Ranger_Template_Broken_Or_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il file è danneggiato, vuoto o non si carica con RedLoader.`)
};

const nl_ranger_template_broken_or_empty = /** @type {(inputs: Ranger_Template_Broken_Or_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het bestand is kapot, leeg of laadt niet met RedLoader.`)
};

const pl_ranger_template_broken_or_empty = /** @type {(inputs: Ranger_Template_Broken_Or_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik jest uszkodzony, pusty lub nie ładuje się z RedLoaderem.`)
};

const pt_ranger_template_broken_or_empty = /** @type {(inputs: Ranger_Template_Broken_Or_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O arquivo está quebrado, vazio ou não carrega com o RedLoader.`)
};

const ru_ranger_template_broken_or_empty = /** @type {(inputs: Ranger_Template_Broken_Or_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл повреждён, пуст или не загружается через RedLoader.`)
};

const sv_ranger_template_broken_or_empty = /** @type {(inputs: Ranger_Template_Broken_Or_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen är trasig, tom eller laddar inte med RedLoader.`)
};

const tr_ranger_template_broken_or_empty = /** @type {(inputs: Ranger_Template_Broken_Or_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya bozuk, boş ya da RedLoader ile yüklenmiyor.`)
};

const zh_ranger_template_broken_or_empty = /** @type {(inputs: Ranger_Template_Broken_Or_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件已损坏、为空，或无法通过 RedLoader 加载。`)
};

const ja_ranger_template_broken_or_empty = /** @type {(inputs: Ranger_Template_Broken_Or_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルが破損しているか、空か、RedLoader で読み込めません。`)
};

/**
* | output |
* | --- |
* | "The file is broken, empty or does not load with RedLoader." |
*
* @param {Ranger_Template_Broken_Or_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_template_broken_or_empty = /** @type {((inputs?: Ranger_Template_Broken_Or_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Template_Broken_Or_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_template_broken_or_empty(inputs)
	if (locale === "de") return de_ranger_template_broken_or_empty(inputs)
	if (locale === "fr") return fr_ranger_template_broken_or_empty(inputs)
	if (locale === "it") return it_ranger_template_broken_or_empty(inputs)
	if (locale === "nl") return nl_ranger_template_broken_or_empty(inputs)
	if (locale === "pl") return pl_ranger_template_broken_or_empty(inputs)
	if (locale === "pt") return pt_ranger_template_broken_or_empty(inputs)
	if (locale === "ru") return ru_ranger_template_broken_or_empty(inputs)
	if (locale === "sv") return sv_ranger_template_broken_or_empty(inputs)
	if (locale === "tr") return tr_ranger_template_broken_or_empty(inputs)
	if (locale === "zh") return zh_ranger_template_broken_or_empty(inputs)
	if (locale === "ja") return ja_ranger_template_broken_or_empty(inputs)
	return en_ranger_template_broken_or_empty(inputs)
});
