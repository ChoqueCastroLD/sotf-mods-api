/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Dependency_RemovedInputs */

const en_mod_dependency_removed = /** @type {(inputs: Mod_Dependency_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removed from the site`)
};

const es_mod_dependency_removed = /** @type {(inputs: Mod_Dependency_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirada del sitio`)
};

const de_mod_dependency_removed = /** @type {(inputs: Mod_Dependency_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Von der Seite entfernt`)
};

const fr_mod_dependency_removed = /** @type {(inputs: Mod_Dependency_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirée du site`)
};

const it_mod_dependency_removed = /** @type {(inputs: Mod_Dependency_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimossa dal sito`)
};

const nl_mod_dependency_removed = /** @type {(inputs: Mod_Dependency_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderd van de site`)
};

const pl_mod_dependency_removed = /** @type {(inputs: Mod_Dependency_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięte ze strony`)
};

const pt_mod_dependency_removed = /** @type {(inputs: Mod_Dependency_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removida do site`)
};

const ru_mod_dependency_removed = /** @type {(inputs: Mod_Dependency_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалено с сайта`)
};

const sv_mod_dependency_removed = /** @type {(inputs: Mod_Dependency_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borttagen från sajten`)
};

const tr_mod_dependency_removed = /** @type {(inputs: Mod_Dependency_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siteden kaldırıldı`)
};

const zh_mod_dependency_removed = /** @type {(inputs: Mod_Dependency_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已从本站移除`)
};

const ja_mod_dependency_removed = /** @type {(inputs: Mod_Dependency_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイトから削除済み`)
};

/**
* | output |
* | --- |
* | "Removed from the site" |
*
* @param {Mod_Dependency_RemovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_dependency_removed = /** @type {((inputs?: Mod_Dependency_RemovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Dependency_RemovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_dependency_removed(inputs)
	if (locale === "de") return de_mod_dependency_removed(inputs)
	if (locale === "fr") return fr_mod_dependency_removed(inputs)
	if (locale === "it") return it_mod_dependency_removed(inputs)
	if (locale === "nl") return nl_mod_dependency_removed(inputs)
	if (locale === "pl") return pl_mod_dependency_removed(inputs)
	if (locale === "pt") return pt_mod_dependency_removed(inputs)
	if (locale === "ru") return ru_mod_dependency_removed(inputs)
	if (locale === "sv") return sv_mod_dependency_removed(inputs)
	if (locale === "tr") return tr_mod_dependency_removed(inputs)
	if (locale === "zh") return zh_mod_dependency_removed(inputs)
	if (locale === "ja") return ja_mod_dependency_removed(inputs)
	return en_mod_dependency_removed(inputs)
});
