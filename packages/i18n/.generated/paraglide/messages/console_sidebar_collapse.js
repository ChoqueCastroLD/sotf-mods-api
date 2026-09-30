/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Sidebar_CollapseInputs */

const en_console_sidebar_collapse = /** @type {(inputs: Console_Sidebar_CollapseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collapse sidebar`)
};

const es_console_sidebar_collapse = /** @type {(inputs: Console_Sidebar_CollapseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contraer barra lateral`)
};

const de_console_sidebar_collapse = /** @type {(inputs: Console_Sidebar_CollapseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seitenleiste einklappen`)
};

const fr_console_sidebar_collapse = /** @type {(inputs: Console_Sidebar_CollapseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réduire la barre latérale`)
};

const it_console_sidebar_collapse = /** @type {(inputs: Console_Sidebar_CollapseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comprimi barra laterale`)
};

const nl_console_sidebar_collapse = /** @type {(inputs: Console_Sidebar_CollapseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zijbalk inklappen`)
};

const pl_console_sidebar_collapse = /** @type {(inputs: Console_Sidebar_CollapseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zwiń pasek boczny`)
};

const pt_console_sidebar_collapse = /** @type {(inputs: Console_Sidebar_CollapseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recolher barra lateral`)
};

const ru_console_sidebar_collapse = /** @type {(inputs: Console_Sidebar_CollapseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Свернуть боковую панель`)
};

const sv_console_sidebar_collapse = /** @type {(inputs: Console_Sidebar_CollapseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fäll ihop sidofältet`)
};

const tr_console_sidebar_collapse = /** @type {(inputs: Console_Sidebar_CollapseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kenar çubuğunu daralt`)
};

const zh_console_sidebar_collapse = /** @type {(inputs: Console_Sidebar_CollapseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`收起侧边栏`)
};

const ja_console_sidebar_collapse = /** @type {(inputs: Console_Sidebar_CollapseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイドバーを折りたたむ`)
};

/**
* | output |
* | --- |
* | "Collapse sidebar" |
*
* @param {Console_Sidebar_CollapseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_sidebar_collapse = /** @type {((inputs?: Console_Sidebar_CollapseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Sidebar_CollapseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_sidebar_collapse(inputs)
	if (locale === "de") return de_console_sidebar_collapse(inputs)
	if (locale === "fr") return fr_console_sidebar_collapse(inputs)
	if (locale === "it") return it_console_sidebar_collapse(inputs)
	if (locale === "nl") return nl_console_sidebar_collapse(inputs)
	if (locale === "pl") return pl_console_sidebar_collapse(inputs)
	if (locale === "pt") return pt_console_sidebar_collapse(inputs)
	if (locale === "ru") return ru_console_sidebar_collapse(inputs)
	if (locale === "sv") return sv_console_sidebar_collapse(inputs)
	if (locale === "tr") return tr_console_sidebar_collapse(inputs)
	if (locale === "zh") return zh_console_sidebar_collapse(inputs)
	if (locale === "ja") return ja_console_sidebar_collapse(inputs)
	return en_console_sidebar_collapse(inputs)
});
