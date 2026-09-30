/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_List_ReadoutInputs */

const en_kits_list_readout = /** @type {(inputs: Kits_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Curated mod loadouts`)
};

const es_kits_list_readout = /** @type {(inputs: Kits_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loadouts de mods seleccionados`)
};

const de_kits_list_readout = /** @type {(inputs: Kits_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kuratierte Mod-Loadouts`)
};

const fr_kits_list_readout = /** @type {(inputs: Kits_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loadouts de mods sélectionnés`)
};

const it_kits_list_readout = /** @type {(inputs: Kits_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loadout di mod selezionate`)
};

const nl_kits_list_readout = /** @type {(inputs: Kits_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Samengestelde modloadouts`)
};

const pl_kits_list_readout = /** @type {(inputs: Kits_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyselekcjonowane zestawy modów`)
};

const pt_kits_list_readout = /** @type {(inputs: Kits_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loadouts de mods selecionados`)
};

const ru_kits_list_readout = /** @type {(inputs: Kits_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подборки модов`)
};

const sv_kits_list_readout = /** @type {(inputs: Kits_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utvalda moddpaket`)
};

const tr_kits_list_readout = /** @type {(inputs: Kits_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seçilmiş mod setleri`)
};

const zh_kits_list_readout = /** @type {(inputs: Kits_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`精选模组搭配`)
};

const ja_kits_list_readout = /** @type {(inputs: Kits_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`厳選 MOD 構成`)
};

/**
* | output |
* | --- |
* | "Curated mod loadouts" |
*
* @param {Kits_List_ReadoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_list_readout = /** @type {((inputs?: Kits_List_ReadoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_List_ReadoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_list_readout(inputs)
	if (locale === "de") return de_kits_list_readout(inputs)
	if (locale === "fr") return fr_kits_list_readout(inputs)
	if (locale === "it") return it_kits_list_readout(inputs)
	if (locale === "nl") return nl_kits_list_readout(inputs)
	if (locale === "pl") return pl_kits_list_readout(inputs)
	if (locale === "pt") return pt_kits_list_readout(inputs)
	if (locale === "ru") return ru_kits_list_readout(inputs)
	if (locale === "sv") return sv_kits_list_readout(inputs)
	if (locale === "tr") return tr_kits_list_readout(inputs)
	if (locale === "zh") return zh_kits_list_readout(inputs)
	if (locale === "ja") return ja_kits_list_readout(inputs)
	return en_kits_list_readout(inputs)
});
