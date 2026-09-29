/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Not_Found_TitleInputs */

const en_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not on the map`)
};

const es_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No está en el mapa`)
};

const de_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht auf der Karte`)
};

const fr_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Introuvable sur la carte`)
};

const it_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è sulla mappa`)
};

const nl_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet op de kaart`)
};

const pl_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie ma tego na mapie`)
};

const pt_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não está no mapa`)
};

const ru_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этого нет на карте`)
};

const sv_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte på kartan`)
};

const tr_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haritada yok`)
};

const zh_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地图上找不到`)
};

const ja_errors_code_not_found_title = /** @type {(inputs: Errors_Code_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地図に見当たりません`)
};

/**
* | output |
* | --- |
* | "Not on the map" |
*
* @param {Errors_Code_Not_Found_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_not_found_title = /** @type {((inputs?: Errors_Code_Not_Found_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Not_Found_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_not_found_title(inputs)
	if (locale === "de") return de_errors_code_not_found_title(inputs)
	if (locale === "fr") return fr_errors_code_not_found_title(inputs)
	if (locale === "it") return it_errors_code_not_found_title(inputs)
	if (locale === "nl") return nl_errors_code_not_found_title(inputs)
	if (locale === "pl") return pl_errors_code_not_found_title(inputs)
	if (locale === "pt") return pt_errors_code_not_found_title(inputs)
	if (locale === "ru") return ru_errors_code_not_found_title(inputs)
	if (locale === "sv") return sv_errors_code_not_found_title(inputs)
	if (locale === "tr") return tr_errors_code_not_found_title(inputs)
	if (locale === "zh") return zh_errors_code_not_found_title(inputs)
	if (locale === "ja") return ja_errors_code_not_found_title(inputs)
	return en_errors_code_not_found_title(inputs)
});
