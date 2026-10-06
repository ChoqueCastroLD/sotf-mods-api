/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Tab_BasecampInputs */

const en_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
};

const es_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panel`)
};

const de_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
};

const fr_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tableau de bord`)
};

const it_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
};

const nl_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
};

const pl_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panel`)
};

const pt_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Painel`)
};

const ru_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Панель`)
};

const sv_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Översikt`)
};

const tr_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panel`)
};

const zh_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`控制台`)
};

const ja_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダッシュボード`)
};

/**
* | output |
* | --- |
* | "Dashboard" |
*
* @param {Console_Tab_BasecampInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_tab_basecamp = /** @type {((inputs?: Console_Tab_BasecampInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Tab_BasecampInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_tab_basecamp(inputs)
	if (locale === "de") return de_console_tab_basecamp(inputs)
	if (locale === "fr") return fr_console_tab_basecamp(inputs)
	if (locale === "it") return it_console_tab_basecamp(inputs)
	if (locale === "nl") return nl_console_tab_basecamp(inputs)
	if (locale === "pl") return pl_console_tab_basecamp(inputs)
	if (locale === "pt") return pt_console_tab_basecamp(inputs)
	if (locale === "ru") return ru_console_tab_basecamp(inputs)
	if (locale === "sv") return sv_console_tab_basecamp(inputs)
	if (locale === "tr") return tr_console_tab_basecamp(inputs)
	if (locale === "zh") return zh_console_tab_basecamp(inputs)
	if (locale === "ja") return ja_console_tab_basecamp(inputs)
	return en_console_tab_basecamp(inputs)
});
