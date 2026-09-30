/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Shortcut_Toggle_SidebarInputs */

const en_console_shortcut_toggle_sidebar = /** @type {(inputs: Console_Shortcut_Toggle_SidebarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collapse or expand the sidebar`)
};

const es_console_shortcut_toggle_sidebar = /** @type {(inputs: Console_Shortcut_Toggle_SidebarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contraer o expandir la barra lateral`)
};

const de_console_shortcut_toggle_sidebar = /** @type {(inputs: Console_Shortcut_Toggle_SidebarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seitenleiste ein- oder ausklappen`)
};

const fr_console_shortcut_toggle_sidebar = /** @type {(inputs: Console_Shortcut_Toggle_SidebarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réduire ou déployer la barre latérale`)
};

const it_console_shortcut_toggle_sidebar = /** @type {(inputs: Console_Shortcut_Toggle_SidebarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comprimi o espandi la barra laterale`)
};

const nl_console_shortcut_toggle_sidebar = /** @type {(inputs: Console_Shortcut_Toggle_SidebarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zijbalk in- of uitklappen`)
};

const pl_console_shortcut_toggle_sidebar = /** @type {(inputs: Console_Shortcut_Toggle_SidebarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zwiń lub rozwiń pasek boczny`)
};

const pt_console_shortcut_toggle_sidebar = /** @type {(inputs: Console_Shortcut_Toggle_SidebarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recolher ou expandir a barra lateral`)
};

const ru_console_shortcut_toggle_sidebar = /** @type {(inputs: Console_Shortcut_Toggle_SidebarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Свернуть или развернуть боковую панель`)
};

const sv_console_shortcut_toggle_sidebar = /** @type {(inputs: Console_Shortcut_Toggle_SidebarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fäll ihop eller ut sidofältet`)
};

const tr_console_shortcut_toggle_sidebar = /** @type {(inputs: Console_Shortcut_Toggle_SidebarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kenar çubuğunu daralt veya genişlet`)
};

const zh_console_shortcut_toggle_sidebar = /** @type {(inputs: Console_Shortcut_Toggle_SidebarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`收起或展开侧边栏`)
};

const ja_console_shortcut_toggle_sidebar = /** @type {(inputs: Console_Shortcut_Toggle_SidebarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイドバーを折りたたむ／展開する`)
};

/**
* | output |
* | --- |
* | "Collapse or expand the sidebar" |
*
* @param {Console_Shortcut_Toggle_SidebarInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_shortcut_toggle_sidebar = /** @type {((inputs?: Console_Shortcut_Toggle_SidebarInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Shortcut_Toggle_SidebarInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_shortcut_toggle_sidebar(inputs)
	if (locale === "de") return de_console_shortcut_toggle_sidebar(inputs)
	if (locale === "fr") return fr_console_shortcut_toggle_sidebar(inputs)
	if (locale === "it") return it_console_shortcut_toggle_sidebar(inputs)
	if (locale === "nl") return nl_console_shortcut_toggle_sidebar(inputs)
	if (locale === "pl") return pl_console_shortcut_toggle_sidebar(inputs)
	if (locale === "pt") return pt_console_shortcut_toggle_sidebar(inputs)
	if (locale === "ru") return ru_console_shortcut_toggle_sidebar(inputs)
	if (locale === "sv") return sv_console_shortcut_toggle_sidebar(inputs)
	if (locale === "tr") return tr_console_shortcut_toggle_sidebar(inputs)
	if (locale === "zh") return zh_console_shortcut_toggle_sidebar(inputs)
	if (locale === "ja") return ja_console_shortcut_toggle_sidebar(inputs)
	return en_console_shortcut_toggle_sidebar(inputs)
});
