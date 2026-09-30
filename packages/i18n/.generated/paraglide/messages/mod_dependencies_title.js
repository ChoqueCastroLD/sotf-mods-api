/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Dependencies_TitleInputs */

const en_mod_dependencies_title = /** @type {(inputs: Mod_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependencies`)
};

const es_mod_dependencies_title = /** @type {(inputs: Mod_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependencias`)
};

const de_mod_dependencies_title = /** @type {(inputs: Mod_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abhängigkeiten`)
};

const fr_mod_dependencies_title = /** @type {(inputs: Mod_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dépendances`)
};

const it_mod_dependencies_title = /** @type {(inputs: Mod_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dipendenze`)
};

const nl_mod_dependencies_title = /** @type {(inputs: Mod_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afhankelijkheden`)
};

const pl_mod_dependencies_title = /** @type {(inputs: Mod_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zależności`)
};

const pt_mod_dependencies_title = /** @type {(inputs: Mod_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependências`)
};

const ru_mod_dependencies_title = /** @type {(inputs: Mod_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Зависимости`)
};

const sv_mod_dependencies_title = /** @type {(inputs: Mod_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beroenden`)
};

const tr_mod_dependencies_title = /** @type {(inputs: Mod_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağımlılıklar`)
};

const zh_mod_dependencies_title = /** @type {(inputs: Mod_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前置`)
};

const ja_mod_dependencies_title = /** @type {(inputs: Mod_Dependencies_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前提 MOD`)
};

/**
* | output |
* | --- |
* | "Dependencies" |
*
* @param {Mod_Dependencies_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_dependencies_title = /** @type {((inputs?: Mod_Dependencies_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Dependencies_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_dependencies_title(inputs)
	if (locale === "de") return de_mod_dependencies_title(inputs)
	if (locale === "fr") return fr_mod_dependencies_title(inputs)
	if (locale === "it") return it_mod_dependencies_title(inputs)
	if (locale === "nl") return nl_mod_dependencies_title(inputs)
	if (locale === "pl") return pl_mod_dependencies_title(inputs)
	if (locale === "pt") return pt_mod_dependencies_title(inputs)
	if (locale === "ru") return ru_mod_dependencies_title(inputs)
	if (locale === "sv") return sv_mod_dependencies_title(inputs)
	if (locale === "tr") return tr_mod_dependencies_title(inputs)
	if (locale === "zh") return zh_mod_dependencies_title(inputs)
	if (locale === "ja") return ja_mod_dependencies_title(inputs)
	return en_mod_dependencies_title(inputs)
});
