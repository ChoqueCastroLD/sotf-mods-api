/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Stat_ModpacksInputs */

const en_manager_stat_modpacks = /** @type {(inputs: Manager_Stat_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`modpacks to play`)
};

const es_manager_stat_modpacks = /** @type {(inputs: Manager_Stat_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`modpacks para jugar`)
};

const de_manager_stat_modpacks = /** @type {(inputs: Manager_Stat_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks zum Spielen`)
};

const fr_manager_stat_modpacks = /** @type {(inputs: Manager_Stat_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`modpacks à jouer`)
};

const it_manager_stat_modpacks = /** @type {(inputs: Manager_Stat_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`modpack da giocare`)
};

const nl_manager_stat_modpacks = /** @type {(inputs: Manager_Stat_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`modpacks om te spelen`)
};

const pl_manager_stat_modpacks = /** @type {(inputs: Manager_Stat_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`modpacków do grania`)
};

const pt_manager_stat_modpacks = /** @type {(inputs: Manager_Stat_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`modpacks para jogar`)
};

const ru_manager_stat_modpacks = /** @type {(inputs: Manager_Stat_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`модпаков для игры`)
};

const sv_manager_stat_modpacks = /** @type {(inputs: Manager_Stat_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`modpaket att spela`)
};

const tr_manager_stat_modpacks = /** @type {(inputs: Manager_Stat_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`oynanacak mod paketi`)
};

const zh_manager_stat_modpacks = /** @type {(inputs: Manager_Stat_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`个整合包可玩`)
};

const ja_manager_stat_modpacks = /** @type {(inputs: Manager_Stat_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`件の Modパック`)
};

/**
* | output |
* | --- |
* | "modpacks to play" |
*
* @param {Manager_Stat_ModpacksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_stat_modpacks = /** @type {((inputs?: Manager_Stat_ModpacksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Stat_ModpacksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_stat_modpacks(inputs)
	if (locale === "de") return de_manager_stat_modpacks(inputs)
	if (locale === "fr") return fr_manager_stat_modpacks(inputs)
	if (locale === "it") return it_manager_stat_modpacks(inputs)
	if (locale === "nl") return nl_manager_stat_modpacks(inputs)
	if (locale === "pl") return pl_manager_stat_modpacks(inputs)
	if (locale === "pt") return pt_manager_stat_modpacks(inputs)
	if (locale === "ru") return ru_manager_stat_modpacks(inputs)
	if (locale === "sv") return sv_manager_stat_modpacks(inputs)
	if (locale === "tr") return tr_manager_stat_modpacks(inputs)
	if (locale === "zh") return zh_manager_stat_modpacks(inputs)
	if (locale === "ja") return ja_manager_stat_modpacks(inputs)
	return en_manager_stat_modpacks(inputs)
});
