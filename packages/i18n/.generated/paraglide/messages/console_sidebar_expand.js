/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Sidebar_ExpandInputs */

const en_console_sidebar_expand = /** @type {(inputs: Console_Sidebar_ExpandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expand sidebar`)
};

const es_console_sidebar_expand = /** @type {(inputs: Console_Sidebar_ExpandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expandir barra lateral`)
};

const de_console_sidebar_expand = /** @type {(inputs: Console_Sidebar_ExpandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seitenleiste ausklappen`)
};

const fr_console_sidebar_expand = /** @type {(inputs: Console_Sidebar_ExpandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déployer la barre latérale`)
};

const it_console_sidebar_expand = /** @type {(inputs: Console_Sidebar_ExpandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Espandi barra laterale`)
};

const nl_console_sidebar_expand = /** @type {(inputs: Console_Sidebar_ExpandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zijbalk uitklappen`)
};

const pl_console_sidebar_expand = /** @type {(inputs: Console_Sidebar_ExpandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozwiń pasek boczny`)
};

const pt_console_sidebar_expand = /** @type {(inputs: Console_Sidebar_ExpandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expandir barra lateral`)
};

const ru_console_sidebar_expand = /** @type {(inputs: Console_Sidebar_ExpandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Развернуть боковую панель`)
};

const sv_console_sidebar_expand = /** @type {(inputs: Console_Sidebar_ExpandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fäll ut sidofältet`)
};

const tr_console_sidebar_expand = /** @type {(inputs: Console_Sidebar_ExpandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kenar çubuğunu genişlet`)
};

const zh_console_sidebar_expand = /** @type {(inputs: Console_Sidebar_ExpandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`展开侧边栏`)
};

const ja_console_sidebar_expand = /** @type {(inputs: Console_Sidebar_ExpandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイドバーを展開する`)
};

/**
* | output |
* | --- |
* | "Expand sidebar" |
*
* @param {Console_Sidebar_ExpandInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_sidebar_expand = /** @type {((inputs?: Console_Sidebar_ExpandInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Sidebar_ExpandInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_sidebar_expand(inputs)
	if (locale === "de") return de_console_sidebar_expand(inputs)
	if (locale === "fr") return fr_console_sidebar_expand(inputs)
	if (locale === "it") return it_console_sidebar_expand(inputs)
	if (locale === "nl") return nl_console_sidebar_expand(inputs)
	if (locale === "pl") return pl_console_sidebar_expand(inputs)
	if (locale === "pt") return pt_console_sidebar_expand(inputs)
	if (locale === "ru") return ru_console_sidebar_expand(inputs)
	if (locale === "sv") return sv_console_sidebar_expand(inputs)
	if (locale === "tr") return tr_console_sidebar_expand(inputs)
	if (locale === "zh") return zh_console_sidebar_expand(inputs)
	if (locale === "ja") return ja_console_sidebar_expand(inputs)
	return en_console_sidebar_expand(inputs)
});
