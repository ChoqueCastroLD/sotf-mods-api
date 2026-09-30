/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Tabs_LabelInputs */

const en_ranger_tabs_label = /** @type {(inputs: Ranger_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Item details`)
};

const es_ranger_tabs_label = /** @type {(inputs: Ranger_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalles del elemento`)
};

const de_ranger_tabs_label = /** @type {(inputs: Ranger_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details des Eintrags`)
};

const fr_ranger_tabs_label = /** @type {(inputs: Ranger_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Détails de l’élément`)
};

const it_ranger_tabs_label = /** @type {(inputs: Ranger_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dettagli dell’elemento`)
};

const nl_ranger_tabs_label = /** @type {(inputs: Ranger_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details van het item`)
};

const pl_ranger_tabs_label = /** @type {(inputs: Ranger_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szczegóły elementu`)
};

const pt_ranger_tabs_label = /** @type {(inputs: Ranger_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalhes do item`)
};

const ru_ranger_tabs_label = /** @type {(inputs: Ranger_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подробности элемента`)
};

const sv_ranger_tabs_label = /** @type {(inputs: Ranger_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Objektets detaljer`)
};

const tr_ranger_tabs_label = /** @type {(inputs: Ranger_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öğe ayrıntıları`)
};

const zh_ranger_tabs_label = /** @type {(inputs: Ranger_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`项目详情`)
};

const ja_ranger_tabs_label = /** @type {(inputs: Ranger_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`項目の詳細`)
};

/**
* | output |
* | --- |
* | "Item details" |
*
* @param {Ranger_Tabs_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_tabs_label = /** @type {((inputs?: Ranger_Tabs_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Tabs_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_tabs_label(inputs)
	if (locale === "de") return de_ranger_tabs_label(inputs)
	if (locale === "fr") return fr_ranger_tabs_label(inputs)
	if (locale === "it") return it_ranger_tabs_label(inputs)
	if (locale === "nl") return nl_ranger_tabs_label(inputs)
	if (locale === "pl") return pl_ranger_tabs_label(inputs)
	if (locale === "pt") return pt_ranger_tabs_label(inputs)
	if (locale === "ru") return ru_ranger_tabs_label(inputs)
	if (locale === "sv") return sv_ranger_tabs_label(inputs)
	if (locale === "tr") return tr_ranger_tabs_label(inputs)
	if (locale === "zh") return zh_ranger_tabs_label(inputs)
	if (locale === "ja") return ja_ranger_tabs_label(inputs)
	return en_ranger_tabs_label(inputs)
});
