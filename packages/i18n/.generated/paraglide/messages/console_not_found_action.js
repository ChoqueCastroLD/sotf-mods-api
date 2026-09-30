/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Not_Found_ActionInputs */

const en_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to Basecamp`)
};

const es_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver al Campamento`)
};

const de_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück zum Basislager`)
};

const fr_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour au camp de base`)
};

const it_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Torna al campo base`)
};

const nl_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug naar het basiskamp`)
};

const pl_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wróć do obozu`)
};

const pt_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar ao Acampamento`)
};

const ru_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вернуться в лагерь`)
};

const sv_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka till baslägret`)
};

const tr_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ana Kamp’a dön`)
};

const zh_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回营地`)
};

const ja_console_not_found_action = /** @type {(inputs: Console_Not_Found_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ベースキャンプに戻る`)
};

/**
* | output |
* | --- |
* | "Back to Basecamp" |
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
