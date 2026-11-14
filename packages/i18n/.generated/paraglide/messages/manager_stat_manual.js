/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Stat_ManualInputs */

const en_manager_stat_manual = /** @type {(inputs: Manager_Stat_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`files to move by hand`)
};

const es_manager_stat_manual = /** @type {(inputs: Manager_Stat_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`archivos que mover a mano`)
};

const de_manager_stat_manual = /** @type {(inputs: Manager_Stat_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dateien von Hand verschieben`)
};

const fr_manager_stat_manual = /** @type {(inputs: Manager_Stat_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`fichiers à déplacer à la main`)
};

const it_manager_stat_manual = /** @type {(inputs: Manager_Stat_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`file da spostare a mano`)
};

const nl_manager_stat_manual = /** @type {(inputs: Manager_Stat_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`bestanden om met de hand te verplaatsen`)
};

const pl_manager_stat_manual = /** @type {(inputs: Manager_Stat_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`plików do ręcznego przenoszenia`)
};

const pt_manager_stat_manual = /** @type {(inputs: Manager_Stat_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`arquivos para mover à mão`)
};

const ru_manager_stat_manual = /** @type {(inputs: Manager_Stat_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`файлов переносить вручную`)
};

const sv_manager_stat_manual = /** @type {(inputs: Manager_Stat_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`filer att flytta för hand`)
};

const tr_manager_stat_manual = /** @type {(inputs: Manager_Stat_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`elle taşınacak dosya`)
};

const zh_manager_stat_manual = /** @type {(inputs: Manager_Stat_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`个文件需要手动移动`)
};

const ja_manager_stat_manual = /** @type {(inputs: Manager_Stat_ManualInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`手作業で動かすファイル`)
};

/**
* | output |
* | --- |
* | "files to move by hand" |
*
* @param {Manager_Stat_ManualInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_stat_manual = /** @type {((inputs?: Manager_Stat_ManualInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Stat_ManualInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_stat_manual(inputs)
	if (locale === "de") return de_manager_stat_manual(inputs)
	if (locale === "fr") return fr_manager_stat_manual(inputs)
	if (locale === "it") return it_manager_stat_manual(inputs)
	if (locale === "nl") return nl_manager_stat_manual(inputs)
	if (locale === "pl") return pl_manager_stat_manual(inputs)
	if (locale === "pt") return pt_manager_stat_manual(inputs)
	if (locale === "ru") return ru_manager_stat_manual(inputs)
	if (locale === "sv") return sv_manager_stat_manual(inputs)
	if (locale === "tr") return tr_manager_stat_manual(inputs)
	if (locale === "zh") return zh_manager_stat_manual(inputs)
	if (locale === "ja") return ja_manager_stat_manual(inputs)
	return en_manager_stat_manual(inputs)
});
