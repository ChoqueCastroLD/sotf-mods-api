/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Shortcut_Go_BasecampInputs */

const en_console_shortcut_go_basecamp = /** @type {(inputs: Console_Shortcut_Go_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Go to the dashboard`)
};

const es_console_shortcut_go_basecamp = /** @type {(inputs: Console_Shortcut_Go_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir al panel`)
};

const de_console_shortcut_go_basecamp = /** @type {(inputs: Console_Shortcut_Go_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zum Dashboard`)
};

const fr_console_shortcut_go_basecamp = /** @type {(inputs: Console_Shortcut_Go_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aller au tableau de bord`)
};

const it_console_shortcut_go_basecamp = /** @type {(inputs: Console_Shortcut_Go_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vai alla dashboard`)
};

const nl_console_shortcut_go_basecamp = /** @type {(inputs: Console_Shortcut_Go_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naar het dashboard`)
};

const pl_console_shortcut_go_basecamp = /** @type {(inputs: Console_Shortcut_Go_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przejdź do panelu`)
};

const pt_console_shortcut_go_basecamp = /** @type {(inputs: Console_Shortcut_Go_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ir para o painel`)
};

const ru_console_shortcut_go_basecamp = /** @type {(inputs: Console_Shortcut_Go_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перейти на панель`)
};

const sv_console_shortcut_go_basecamp = /** @type {(inputs: Console_Shortcut_Go_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gå till översikten`)
};

const tr_console_shortcut_go_basecamp = /** @type {(inputs: Console_Shortcut_Go_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panele git`)
};

const zh_console_shortcut_go_basecamp = /** @type {(inputs: Console_Shortcut_Go_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前往控制台`)
};

const ja_console_shortcut_go_basecamp = /** @type {(inputs: Console_Shortcut_Go_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダッシュボードへ移動`)
};

/**
* | output |
* | --- |
* | "Go to the dashboard" |
*
* @param {Console_Shortcut_Go_BasecampInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_shortcut_go_basecamp = /** @type {((inputs?: Console_Shortcut_Go_BasecampInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Shortcut_Go_BasecampInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_shortcut_go_basecamp(inputs)
	if (locale === "de") return de_console_shortcut_go_basecamp(inputs)
	if (locale === "fr") return fr_console_shortcut_go_basecamp(inputs)
	if (locale === "it") return it_console_shortcut_go_basecamp(inputs)
	if (locale === "nl") return nl_console_shortcut_go_basecamp(inputs)
	if (locale === "pl") return pl_console_shortcut_go_basecamp(inputs)
	if (locale === "pt") return pt_console_shortcut_go_basecamp(inputs)
	if (locale === "ru") return ru_console_shortcut_go_basecamp(inputs)
	if (locale === "sv") return sv_console_shortcut_go_basecamp(inputs)
	if (locale === "tr") return tr_console_shortcut_go_basecamp(inputs)
	if (locale === "zh") return zh_console_shortcut_go_basecamp(inputs)
	if (locale === "ja") return ja_console_shortcut_go_basecamp(inputs)
	return en_console_shortcut_go_basecamp(inputs)
});
