/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Tab_ContentInputs */

const en_ranger_tab_content = /** @type {(inputs: Ranger_Tab_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Content`)
};

const es_ranger_tab_content = /** @type {(inputs: Ranger_Tab_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenido`)
};

const de_ranger_tab_content = /** @type {(inputs: Ranger_Tab_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhalt`)
};

const fr_ranger_tab_content = /** @type {(inputs: Ranger_Tab_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenu`)
};

const it_ranger_tab_content = /** @type {(inputs: Ranger_Tab_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenuto`)
};

const nl_ranger_tab_content = /** @type {(inputs: Ranger_Tab_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhoud`)
};

const pl_ranger_tab_content = /** @type {(inputs: Ranger_Tab_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Treść`)
};

const pt_ranger_tab_content = /** @type {(inputs: Ranger_Tab_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conteúdo`)
};

const ru_ranger_tab_content = /** @type {(inputs: Ranger_Tab_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Содержимое`)
};

const sv_ranger_tab_content = /** @type {(inputs: Ranger_Tab_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Innehåll`)
};

const tr_ranger_tab_content = /** @type {(inputs: Ranger_Tab_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İçerik`)
};

const zh_ranger_tab_content = /** @type {(inputs: Ranger_Tab_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`内容`)
};

const ja_ranger_tab_content = /** @type {(inputs: Ranger_Tab_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`内容`)
};

/**
* | output |
* | --- |
* | "Content" |
*
* @param {Ranger_Tab_ContentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_tab_content = /** @type {((inputs?: Ranger_Tab_ContentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Tab_ContentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_tab_content(inputs)
	if (locale === "de") return de_ranger_tab_content(inputs)
	if (locale === "fr") return fr_ranger_tab_content(inputs)
	if (locale === "it") return it_ranger_tab_content(inputs)
	if (locale === "nl") return nl_ranger_tab_content(inputs)
	if (locale === "pl") return pl_ranger_tab_content(inputs)
	if (locale === "pt") return pt_ranger_tab_content(inputs)
	if (locale === "ru") return ru_ranger_tab_content(inputs)
	if (locale === "sv") return sv_ranger_tab_content(inputs)
	if (locale === "tr") return tr_ranger_tab_content(inputs)
	if (locale === "zh") return zh_ranger_tab_content(inputs)
	if (locale === "ja") return ja_ranger_tab_content(inputs)
	return en_ranger_tab_content(inputs)
});
