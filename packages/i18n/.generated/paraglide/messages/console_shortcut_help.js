/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Shortcut_HelpInputs */

const en_console_shortcut_help = /** @type {(inputs: Console_Shortcut_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show this list`)
};

const es_console_shortcut_help = /** @type {(inputs: Console_Shortcut_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar esta lista`)
};

const de_console_shortcut_help = /** @type {(inputs: Console_Shortcut_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Liste anzeigen`)
};

const fr_console_shortcut_help = /** @type {(inputs: Console_Shortcut_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher cette liste`)
};

const it_console_shortcut_help = /** @type {(inputs: Console_Shortcut_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra questo elenco`)
};

const nl_console_shortcut_help = /** @type {(inputs: Console_Shortcut_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze lijst tonen`)
};

const pl_console_shortcut_help = /** @type {(inputs: Console_Shortcut_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokaż tę listę`)
};

const pt_console_shortcut_help = /** @type {(inputs: Console_Shortcut_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar esta lista`)
};

const ru_console_shortcut_help = /** @type {(inputs: Console_Shortcut_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показать этот список`)
};

const sv_console_shortcut_help = /** @type {(inputs: Console_Shortcut_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa den här listan`)
};

const tr_console_shortcut_help = /** @type {(inputs: Console_Shortcut_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu listeyi göster`)
};

const zh_console_shortcut_help = /** @type {(inputs: Console_Shortcut_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示此列表`)
};

const ja_console_shortcut_help = /** @type {(inputs: Console_Shortcut_HelpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この一覧を表示`)
};

/**
* | output |
* | --- |
* | "Show this list" |
*
* @param {Console_Shortcut_HelpInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_shortcut_help = /** @type {((inputs?: Console_Shortcut_HelpInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Shortcut_HelpInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_shortcut_help(inputs)
	if (locale === "de") return de_console_shortcut_help(inputs)
	if (locale === "fr") return fr_console_shortcut_help(inputs)
	if (locale === "it") return it_console_shortcut_help(inputs)
	if (locale === "nl") return nl_console_shortcut_help(inputs)
	if (locale === "pl") return pl_console_shortcut_help(inputs)
	if (locale === "pt") return pt_console_shortcut_help(inputs)
	if (locale === "ru") return ru_console_shortcut_help(inputs)
	if (locale === "sv") return sv_console_shortcut_help(inputs)
	if (locale === "tr") return tr_console_shortcut_help(inputs)
	if (locale === "zh") return zh_console_shortcut_help(inputs)
	if (locale === "ja") return ja_console_shortcut_help(inputs)
	return en_console_shortcut_help(inputs)
});
