/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Stat_ModsInputs */

const en_manager_stat_mods = /** @type {(inputs: Manager_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`mods ready to install`)
};

const es_manager_stat_mods = /** @type {(inputs: Manager_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`mods listos para instalar`)
};

const de_manager_stat_mods = /** @type {(inputs: Manager_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods bereit zur Installation`)
};

const fr_manager_stat_mods = /** @type {(inputs: Manager_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`mods prêts à installer`)
};

const it_manager_stat_mods = /** @type {(inputs: Manager_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`mod pronte da installare`)
};

const nl_manager_stat_mods = /** @type {(inputs: Manager_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`mods klaar om te installeren`)
};

const pl_manager_stat_mods = /** @type {(inputs: Manager_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`modów gotowych do instalacji`)
};

const pt_manager_stat_mods = /** @type {(inputs: Manager_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`mods prontos para instalar`)
};

const ru_manager_stat_mods = /** @type {(inputs: Manager_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`модов готовы к установке`)
};

const sv_manager_stat_mods = /** @type {(inputs: Manager_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`moddar redo att installera`)
};

const tr_manager_stat_mods = /** @type {(inputs: Manager_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`mod kurulmaya hazır`)
};

const zh_manager_stat_mods = /** @type {(inputs: Manager_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`个模组可直接安装`)
};

const ja_manager_stat_mods = /** @type {(inputs: Manager_Stat_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`件の Mod をすぐにインストール可能`)
};

/**
* | output |
* | --- |
* | "mods ready to install" |
*
* @param {Manager_Stat_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_stat_mods = /** @type {((inputs?: Manager_Stat_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Stat_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_stat_mods(inputs)
	if (locale === "de") return de_manager_stat_mods(inputs)
	if (locale === "fr") return fr_manager_stat_mods(inputs)
	if (locale === "it") return it_manager_stat_mods(inputs)
	if (locale === "nl") return nl_manager_stat_mods(inputs)
	if (locale === "pl") return pl_manager_stat_mods(inputs)
	if (locale === "pt") return pt_manager_stat_mods(inputs)
	if (locale === "ru") return ru_manager_stat_mods(inputs)
	if (locale === "sv") return sv_manager_stat_mods(inputs)
	if (locale === "tr") return tr_manager_stat_mods(inputs)
	if (locale === "zh") return zh_manager_stat_mods(inputs)
	if (locale === "ja") return ja_manager_stat_mods(inputs)
	return en_manager_stat_mods(inputs)
});
