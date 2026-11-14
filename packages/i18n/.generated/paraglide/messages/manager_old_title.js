/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Old_TitleInputs */

const en_manager_old_title = /** @type {(inputs: Manager_Old_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The old way`)
};

const es_manager_old_title = /** @type {(inputs: Manager_Old_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A la antigua`)
};

const de_manager_old_title = /** @type {(inputs: Manager_Old_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der alte Weg`)
};

const fr_manager_old_title = /** @type {(inputs: Manager_Old_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’ancienne méthode`)
};

const it_manager_old_title = /** @type {(inputs: Manager_Old_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il vecchio modo`)
};

const nl_manager_old_title = /** @type {(inputs: Manager_Old_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De oude manier`)
};

const pl_manager_old_title = /** @type {(inputs: Manager_Old_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stary sposób`)
};

const pt_manager_old_title = /** @type {(inputs: Manager_Old_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O jeito antigo`)
};

const ru_manager_old_title = /** @type {(inputs: Manager_Old_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как раньше`)
};

const sv_manager_old_title = /** @type {(inputs: Manager_Old_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gamla sättet`)
};

const tr_manager_old_title = /** @type {(inputs: Manager_Old_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eski yol`)
};

const zh_manager_old_title = /** @type {(inputs: Manager_Old_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`旧方式`)
};

const ja_manager_old_title = /** @type {(inputs: Manager_Old_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`これまでの方法`)
};

/**
* | output |
* | --- |
* | "The old way" |
*
* @param {Manager_Old_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_old_title = /** @type {((inputs?: Manager_Old_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Old_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_old_title(inputs)
	if (locale === "de") return de_manager_old_title(inputs)
	if (locale === "fr") return fr_manager_old_title(inputs)
	if (locale === "it") return it_manager_old_title(inputs)
	if (locale === "nl") return nl_manager_old_title(inputs)
	if (locale === "pl") return pl_manager_old_title(inputs)
	if (locale === "pt") return pt_manager_old_title(inputs)
	if (locale === "ru") return ru_manager_old_title(inputs)
	if (locale === "sv") return sv_manager_old_title(inputs)
	if (locale === "tr") return tr_manager_old_title(inputs)
	if (locale === "zh") return zh_manager_old_title(inputs)
	if (locale === "ja") return ja_manager_old_title(inputs)
	return en_manager_old_title(inputs)
});
