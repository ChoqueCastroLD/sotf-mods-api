/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Bulk_Select_AllInputs */

const en_ranger_bulk_select_all = /** @type {(inputs: Ranger_Bulk_Select_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select all on this page`)
};

const es_ranger_bulk_select_all = /** @type {(inputs: Ranger_Bulk_Select_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seleccionar todo en esta página`)
};

const de_ranger_bulk_select_all = /** @type {(inputs: Ranger_Bulk_Select_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle auf dieser Seite auswählen`)
};

const fr_ranger_bulk_select_all = /** @type {(inputs: Ranger_Bulk_Select_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout sélectionner sur cette page`)
};

const it_ranger_bulk_select_all = /** @type {(inputs: Ranger_Bulk_Select_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seleziona tutto in questa pagina`)
};

const nl_ranger_bulk_select_all = /** @type {(inputs: Ranger_Bulk_Select_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles op deze pagina selecteren`)
};

const pl_ranger_bulk_select_all = /** @type {(inputs: Ranger_Bulk_Select_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaznacz wszystko na tej stronie`)
};

const pt_ranger_bulk_select_all = /** @type {(inputs: Ranger_Bulk_Select_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selecionar tudo nesta página`)
};

const ru_ranger_bulk_select_all = /** @type {(inputs: Ranger_Bulk_Select_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбрать всё на этой странице`)
};

const sv_ranger_bulk_select_all = /** @type {(inputs: Ranger_Bulk_Select_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markera alla på sidan`)
};

const tr_ranger_bulk_select_all = /** @type {(inputs: Ranger_Bulk_Select_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sayfadakilerin tümünü seç`)
};

const zh_ranger_bulk_select_all = /** @type {(inputs: Ranger_Bulk_Select_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择本页全部`)
};

const ja_ranger_bulk_select_all = /** @type {(inputs: Ranger_Bulk_Select_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このページをすべて選択`)
};

/**
* | output |
* | --- |
* | "Select all on this page" |
*
* @param {Ranger_Bulk_Select_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_bulk_select_all = /** @type {((inputs?: Ranger_Bulk_Select_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Bulk_Select_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_bulk_select_all(inputs)
	if (locale === "de") return de_ranger_bulk_select_all(inputs)
	if (locale === "fr") return fr_ranger_bulk_select_all(inputs)
	if (locale === "it") return it_ranger_bulk_select_all(inputs)
	if (locale === "nl") return nl_ranger_bulk_select_all(inputs)
	if (locale === "pl") return pl_ranger_bulk_select_all(inputs)
	if (locale === "pt") return pt_ranger_bulk_select_all(inputs)
	if (locale === "ru") return ru_ranger_bulk_select_all(inputs)
	if (locale === "sv") return sv_ranger_bulk_select_all(inputs)
	if (locale === "tr") return tr_ranger_bulk_select_all(inputs)
	if (locale === "zh") return zh_ranger_bulk_select_all(inputs)
	if (locale === "ja") return ja_ranger_bulk_select_all(inputs)
	return en_ranger_bulk_select_all(inputs)
});
