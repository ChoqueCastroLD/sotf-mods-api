/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Picker_SearchingInputs */

const en_kits_picker_searching = /** @type {(inputs: Kits_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Searching…`)
};

const es_kits_picker_searching = /** @type {(inputs: Kits_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscando…`)
};

const de_kits_picker_searching = /** @type {(inputs: Kits_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suche läuft …`)
};

const fr_kits_picker_searching = /** @type {(inputs: Kits_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recherche…`)
};

const it_kits_picker_searching = /** @type {(inputs: Kits_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricerca…`)
};

const nl_kits_picker_searching = /** @type {(inputs: Kits_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoeken…`)
};

const pl_kits_picker_searching = /** @type {(inputs: Kits_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyszukiwanie…`)
};

const pt_kits_picker_searching = /** @type {(inputs: Kits_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscando…`)
};

const ru_kits_picker_searching = /** @type {(inputs: Kits_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск…`)
};

const sv_kits_picker_searching = /** @type {(inputs: Kits_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Söker …`)
};

const tr_kits_picker_searching = /** @type {(inputs: Kits_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aranıyor…`)
};

const zh_kits_picker_searching = /** @type {(inputs: Kits_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在搜索…`)
};

const ja_kits_picker_searching = /** @type {(inputs: Kits_Picker_SearchingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索中…`)
};

/**
* | output |
* | --- |
* | "Searching…" |
*
* @param {Kits_Picker_SearchingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_picker_searching = /** @type {((inputs?: Kits_Picker_SearchingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Picker_SearchingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_picker_searching(inputs)
	if (locale === "de") return de_kits_picker_searching(inputs)
	if (locale === "fr") return fr_kits_picker_searching(inputs)
	if (locale === "it") return it_kits_picker_searching(inputs)
	if (locale === "nl") return nl_kits_picker_searching(inputs)
	if (locale === "pl") return pl_kits_picker_searching(inputs)
	if (locale === "pt") return pt_kits_picker_searching(inputs)
	if (locale === "ru") return ru_kits_picker_searching(inputs)
	if (locale === "sv") return sv_kits_picker_searching(inputs)
	if (locale === "tr") return tr_kits_picker_searching(inputs)
	if (locale === "zh") return zh_kits_picker_searching(inputs)
	if (locale === "ja") return ja_kits_picker_searching(inputs)
	return en_kits_picker_searching(inputs)
});
