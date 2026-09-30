/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Picks_Tabs_LabelInputs */

const en_landing_picks_tabs_label = /** @type {(inputs: Landing_Picks_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sort mods`)
};

const es_landing_picks_tabs_label = /** @type {(inputs: Landing_Picks_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenar mods`)
};

const de_landing_picks_tabs_label = /** @type {(inputs: Landing_Picks_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods sortieren`)
};

const fr_landing_picks_tabs_label = /** @type {(inputs: Landing_Picks_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trier les mods`)
};

const it_landing_picks_tabs_label = /** @type {(inputs: Landing_Picks_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordina le mod`)
};

const nl_landing_picks_tabs_label = /** @type {(inputs: Landing_Picks_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods sorteren`)
};

const pl_landing_picks_tabs_label = /** @type {(inputs: Landing_Picks_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortuj mody`)
};

const pt_landing_picks_tabs_label = /** @type {(inputs: Landing_Picks_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenar mods`)
};

const ru_landing_picks_tabs_label = /** @type {(inputs: Landing_Picks_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сортировка модов`)
};

const sv_landing_picks_tabs_label = /** @type {(inputs: Landing_Picks_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortera moddar`)
};

const tr_landing_picks_tabs_label = /** @type {(inputs: Landing_Picks_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları sırala`)
};

const zh_landing_picks_tabs_label = /** @type {(inputs: Landing_Picks_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组排序`)
};

const ja_landing_picks_tabs_label = /** @type {(inputs: Landing_Picks_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODの並べ替え`)
};

/**
* | output |
* | --- |
* | "Sort mods" |
*
* @param {Landing_Picks_Tabs_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_picks_tabs_label = /** @type {((inputs?: Landing_Picks_Tabs_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Picks_Tabs_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_picks_tabs_label(inputs)
	if (locale === "de") return de_landing_picks_tabs_label(inputs)
	if (locale === "fr") return fr_landing_picks_tabs_label(inputs)
	if (locale === "it") return it_landing_picks_tabs_label(inputs)
	if (locale === "nl") return nl_landing_picks_tabs_label(inputs)
	if (locale === "pl") return pl_landing_picks_tabs_label(inputs)
	if (locale === "pt") return pt_landing_picks_tabs_label(inputs)
	if (locale === "ru") return ru_landing_picks_tabs_label(inputs)
	if (locale === "sv") return sv_landing_picks_tabs_label(inputs)
	if (locale === "tr") return tr_landing_picks_tabs_label(inputs)
	if (locale === "zh") return zh_landing_picks_tabs_label(inputs)
	if (locale === "ja") return ja_landing_picks_tabs_label(inputs)
	return en_landing_picks_tabs_label(inputs)
});
