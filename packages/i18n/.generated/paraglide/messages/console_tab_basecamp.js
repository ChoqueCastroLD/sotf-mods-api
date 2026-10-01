/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Tab_BasecampInputs */

const en_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Basecamp`)
};

const es_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Campo`)
};

const de_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lager`)
};

const fr_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Camp`)
};

const it_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Campo`)
};

const nl_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kamp`)
};

const pl_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obóz`)
};

const pt_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Campo`)
};

const ru_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лагерь`)
};

const sv_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läger`)
};

const tr_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kamp`)
};

const zh_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`营地`)
};

const ja_console_tab_basecamp = /** @type {(inputs: Console_Tab_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンプ`)
};

/**
* | output |
* | --- |
* | "Basecamp" |
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
