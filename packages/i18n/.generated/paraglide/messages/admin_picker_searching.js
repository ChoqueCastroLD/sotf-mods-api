/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Picker_SearchingInputs */

const en_admin_picker_searching = /** @type {(inputs: Admin_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Searching…`)
};

const es_admin_picker_searching = /** @type {(inputs: Admin_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscando…`)
};

const de_admin_picker_searching = /** @type {(inputs: Admin_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suche läuft …`)
};

const fr_admin_picker_searching = /** @type {(inputs: Admin_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recherche…`)
};

const it_admin_picker_searching = /** @type {(inputs: Admin_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricerca in corso…`)
};

const nl_admin_picker_searching = /** @type {(inputs: Admin_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoeken…`)
};

const pl_admin_picker_searching = /** @type {(inputs: Admin_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukanie…`)
};

const pt_admin_picker_searching = /** @type {(inputs: Admin_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscando…`)
};

const ru_admin_picker_searching = /** @type {(inputs: Admin_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ищем…`)
};

const sv_admin_picker_searching = /** @type {(inputs: Admin_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Söker …`)
};

const tr_admin_picker_searching = /** @type {(inputs: Admin_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aranıyor…`)
};

const zh_admin_picker_searching = /** @type {(inputs: Admin_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在搜索……`)
};

const ja_admin_picker_searching = /** @type {(inputs: Admin_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索中…`)
};

/**
* | output |
* | --- |
* | "Searching…" |
*
* @param {Admin_Picker_SearchingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_picker_searching = /** @type {((inputs?: Admin_Picker_SearchingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Picker_SearchingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_picker_searching(inputs)
	if (locale === "de") return de_admin_picker_searching(inputs)
	if (locale === "fr") return fr_admin_picker_searching(inputs)
	if (locale === "it") return it_admin_picker_searching(inputs)
	if (locale === "nl") return nl_admin_picker_searching(inputs)
	if (locale === "pl") return pl_admin_picker_searching(inputs)
	if (locale === "pt") return pt_admin_picker_searching(inputs)
	if (locale === "ru") return ru_admin_picker_searching(inputs)
	if (locale === "sv") return sv_admin_picker_searching(inputs)
	if (locale === "tr") return tr_admin_picker_searching(inputs)
	if (locale === "zh") return zh_admin_picker_searching(inputs)
	if (locale === "ja") return ja_admin_picker_searching(inputs)
	return en_admin_picker_searching(inputs)
});
