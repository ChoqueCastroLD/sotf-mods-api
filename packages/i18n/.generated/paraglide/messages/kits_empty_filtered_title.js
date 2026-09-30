/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Empty_Filtered_TitleInputs */

const en_kits_empty_filtered_title = /** @type {(inputs: Kits_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No kit matches`)
};

const es_kits_empty_filtered_title = /** @type {(inputs: Kits_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ningún kit coincide`)
};

const de_kits_empty_filtered_title = /** @type {(inputs: Kits_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Kit passt`)
};

const fr_kits_empty_filtered_title = /** @type {(inputs: Kits_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun kit ne correspond`)
};

const it_kits_empty_filtered_title = /** @type {(inputs: Kits_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun kit corrisponde`)
};

const nl_kits_empty_filtered_title = /** @type {(inputs: Kits_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen kit gevonden`)
};

const pl_kits_empty_filtered_title = /** @type {(inputs: Kits_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak pasujących zestawów`)
};

const pt_kits_empty_filtered_title = /** @type {(inputs: Kits_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum kit corresponde`)
};

const ru_kits_empty_filtered_title = /** @type {(inputs: Kits_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подходящих наборов нет`)
};

const sv_kits_empty_filtered_title = /** @type {(inputs: Kits_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget kit matchar`)
};

const tr_kits_empty_filtered_title = /** @type {(inputs: Kits_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eşleşen kit yok`)
};

const zh_kits_empty_filtered_title = /** @type {(inputs: Kits_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有符合条件的套装`)
};

const ja_kits_empty_filtered_title = /** @type {(inputs: Kits_Empty_Filtered_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`該当するキットはありません`)
};

/**
* | output |
* | --- |
* | "No kit matches" |
*
* @param {Kits_Empty_Filtered_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_empty_filtered_title = /** @type {((inputs?: Kits_Empty_Filtered_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Empty_Filtered_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_empty_filtered_title(inputs)
	if (locale === "de") return de_kits_empty_filtered_title(inputs)
	if (locale === "fr") return fr_kits_empty_filtered_title(inputs)
	if (locale === "it") return it_kits_empty_filtered_title(inputs)
	if (locale === "nl") return nl_kits_empty_filtered_title(inputs)
	if (locale === "pl") return pl_kits_empty_filtered_title(inputs)
	if (locale === "pt") return pt_kits_empty_filtered_title(inputs)
	if (locale === "ru") return ru_kits_empty_filtered_title(inputs)
	if (locale === "sv") return sv_kits_empty_filtered_title(inputs)
	if (locale === "tr") return tr_kits_empty_filtered_title(inputs)
	if (locale === "zh") return zh_kits_empty_filtered_title(inputs)
	if (locale === "ja") return ja_kits_empty_filtered_title(inputs)
	return en_kits_empty_filtered_title(inputs)
});
