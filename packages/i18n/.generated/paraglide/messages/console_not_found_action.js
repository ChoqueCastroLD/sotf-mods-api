/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Not_Found_ActionInputs */

const en_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to the dashboard`)
};

const es_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver al panel`)
};

const de_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück zum Dashboard`)
};

const fr_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour au tableau de bord`)
};

const it_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Torna alla dashboard`)
};

const nl_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug naar het dashboard`)
};

const pl_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wróć do panelu`)
};

const pt_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar ao painel`)
};

const ru_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вернуться на панель`)
};

const sv_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka till översikten`)
};

const tr_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panele dön`)
};

const zh_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回控制台`)
};

const ja_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダッシュボードに戻る`)
};

/**
* | output |
* | --- |
* | "Back to the dashboard" |
*
* @param {Console_Not_Found_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_not_found_action = /** @type {((inputs?: Console_Not_Found_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Not_Found_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_not_found_action(inputs)
	if (locale === "de") return de_console_not_found_action(inputs)
	if (locale === "fr") return fr_console_not_found_action(inputs)
	if (locale === "it") return it_console_not_found_action(inputs)
	if (locale === "nl") return nl_console_not_found_action(inputs)
	if (locale === "pl") return pl_console_not_found_action(inputs)
	if (locale === "pt") return pt_console_not_found_action(inputs)
	if (locale === "ru") return ru_console_not_found_action(inputs)
	if (locale === "sv") return sv_console_not_found_action(inputs)
	if (locale === "tr") return tr_console_not_found_action(inputs)
	if (locale === "zh") return zh_console_not_found_action(inputs)
	if (locale === "ja") return ja_console_not_found_action(inputs)
	return en_console_not_found_action(inputs)
});
