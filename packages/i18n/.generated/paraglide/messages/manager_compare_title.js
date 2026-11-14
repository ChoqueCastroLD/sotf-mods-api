/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Compare_TitleInputs */

const en_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stop moving files around`)
};

const es_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deja de mover archivos`)
};

const de_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schluss mit Dateien verschieben`)
};

const fr_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arrêtez de déplacer des fichiers`)
};

const it_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Basta spostare file`)
};

const nl_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stop met bestanden verplaatsen`)
};

const pl_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koniec z przenoszeniem plików`)
};

const pt_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chega de mover arquivos`)
};

const ru_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Хватит переносить файлы`)
};

const sv_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sluta flytta filer`)
};

const tr_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya taşımaya son`)
};

const zh_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不再手动搬文件`)
};

const ja_manager_compare_title = /** @type {(inputs: Manager_Compare_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`もうファイルを動かさない`)
};

/**
* | output |
* | --- |
* | "Stop moving files around" |
*
* @param {Manager_Compare_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_compare_title = /** @type {((inputs?: Manager_Compare_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Compare_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_compare_title(inputs)
	if (locale === "de") return de_manager_compare_title(inputs)
	if (locale === "fr") return fr_manager_compare_title(inputs)
	if (locale === "it") return it_manager_compare_title(inputs)
	if (locale === "nl") return nl_manager_compare_title(inputs)
	if (locale === "pl") return pl_manager_compare_title(inputs)
	if (locale === "pt") return pt_manager_compare_title(inputs)
	if (locale === "ru") return ru_manager_compare_title(inputs)
	if (locale === "sv") return sv_manager_compare_title(inputs)
	if (locale === "tr") return tr_manager_compare_title(inputs)
	if (locale === "zh") return zh_manager_compare_title(inputs)
	if (locale === "ja") return ja_manager_compare_title(inputs)
	return en_manager_compare_title(inputs)
});
