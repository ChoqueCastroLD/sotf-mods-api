/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Old_1Inputs */

const en_manager_old_1 = /** @type {(inputs: Manager_Old_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Find the mod and download a zip`)
};

const es_manager_old_1 = /** @type {(inputs: Manager_Old_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar el mod y descargar un zip`)
};

const de_manager_old_1 = /** @type {(inputs: Manager_Old_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod suchen und ein Zip herunterladen`)
};

const fr_manager_old_1 = /** @type {(inputs: Manager_Old_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trouver le mod et télécharger un zip`)
};

const it_manager_old_1 = /** @type {(inputs: Manager_Old_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trovare la mod e scaricare uno zip`)
};

const nl_manager_old_1 = /** @type {(inputs: Manager_Old_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De mod zoeken en een zip downloaden`)
};

const pl_manager_old_1 = /** @type {(inputs: Manager_Old_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Znaleźć moda i pobrać zip`)
};

const pt_manager_old_1 = /** @type {(inputs: Manager_Old_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Achar o mod e baixar um zip`)
};

const ru_manager_old_1 = /** @type {(inputs: Manager_Old_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Найти мод и скачать zip`)
};

const sv_manager_old_1 = /** @type {(inputs: Manager_Old_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hitta modden och ladda ner en zip`)
};

const tr_manager_old_1 = /** @type {(inputs: Manager_Old_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modu bul ve bir zip indir`)
};

const zh_manager_old_1 = /** @type {(inputs: Manager_Old_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`找到模组并下载 zip`)
};

const ja_manager_old_1 = /** @type {(inputs: Manager_Old_1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod を探して zip をダウンロード`)
};

/**
* | output |
* | --- |
* | "Find the mod and download a zip" |
*
* @param {Manager_Old_1Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_old_1 = /** @type {((inputs?: Manager_Old_1Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Old_1Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_old_1(inputs)
	if (locale === "de") return de_manager_old_1(inputs)
	if (locale === "fr") return fr_manager_old_1(inputs)
	if (locale === "it") return it_manager_old_1(inputs)
	if (locale === "nl") return nl_manager_old_1(inputs)
	if (locale === "pl") return pl_manager_old_1(inputs)
	if (locale === "pt") return pt_manager_old_1(inputs)
	if (locale === "ru") return ru_manager_old_1(inputs)
	if (locale === "sv") return sv_manager_old_1(inputs)
	if (locale === "tr") return tr_manager_old_1(inputs)
	if (locale === "zh") return zh_manager_old_1(inputs)
	if (locale === "ja") return ja_manager_old_1(inputs)
	return en_manager_old_1(inputs)
});
