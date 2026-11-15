/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_GithubInputs */

const en_manager_github = /** @type {(inputs: Manager_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Source code`)
};

const es_manager_github = /** @type {(inputs: Manager_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código fuente`)
};

const de_manager_github = /** @type {(inputs: Manager_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quellcode`)
};

const fr_manager_github = /** @type {(inputs: Manager_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code source`)
};

const it_manager_github = /** @type {(inputs: Manager_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codice sorgente`)
};

const nl_manager_github = /** @type {(inputs: Manager_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Broncode`)
};

const pl_manager_github = /** @type {(inputs: Manager_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kod źródłowy`)
};

const pt_manager_github = /** @type {(inputs: Manager_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código-fonte`)
};

const ru_manager_github = /** @type {(inputs: Manager_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Исходный код`)
};

const sv_manager_github = /** @type {(inputs: Manager_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Källkod`)
};

const tr_manager_github = /** @type {(inputs: Manager_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaynak kodu`)
};

const zh_manager_github = /** @type {(inputs: Manager_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`源代码`)
};

const ja_manager_github = /** @type {(inputs: Manager_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ソースコード`)
};

/**
* | output |
* | --- |
* | "Source code" |
*
* @param {Manager_GithubInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_github = /** @type {((inputs?: Manager_GithubInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_GithubInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_github(inputs)
	if (locale === "de") return de_manager_github(inputs)
	if (locale === "fr") return fr_manager_github(inputs)
	if (locale === "it") return it_manager_github(inputs)
	if (locale === "nl") return nl_manager_github(inputs)
	if (locale === "pl") return pl_manager_github(inputs)
	if (locale === "pt") return pt_manager_github(inputs)
	if (locale === "ru") return ru_manager_github(inputs)
	if (locale === "sv") return sv_manager_github(inputs)
	if (locale === "tr") return tr_manager_github(inputs)
	if (locale === "zh") return zh_manager_github(inputs)
	if (locale === "ja") return ja_manager_github(inputs)
	return en_manager_github(inputs)
});
