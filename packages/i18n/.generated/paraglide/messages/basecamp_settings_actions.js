/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_ActionsInputs */

const en_basecamp_settings_actions = /** @type {(inputs: Basecamp_Settings_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What you can do`)
};

const es_basecamp_settings_actions = /** @type {(inputs: Basecamp_Settings_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qué puedes hacer`)
};

const de_basecamp_settings_actions = /** @type {(inputs: Basecamp_Settings_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was du tun kannst`)
};

const fr_basecamp_settings_actions = /** @type {(inputs: Basecamp_Settings_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce que tu peux faire`)
};

const it_basecamp_settings_actions = /** @type {(inputs: Basecamp_Settings_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cosa puoi fare`)
};

const nl_basecamp_settings_actions = /** @type {(inputs: Basecamp_Settings_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat je kunt doen`)
};

const pl_basecamp_settings_actions = /** @type {(inputs: Basecamp_Settings_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co możesz zrobić`)
};

const pt_basecamp_settings_actions = /** @type {(inputs: Basecamp_Settings_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que você pode fazer`)
};

const ru_basecamp_settings_actions = /** @type {(inputs: Basecamp_Settings_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что можно сделать`)
};

const sv_basecamp_settings_actions = /** @type {(inputs: Basecamp_Settings_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad du kan göra`)
};

const tr_basecamp_settings_actions = /** @type {(inputs: Basecamp_Settings_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neler yapabilirsin`)
};

const zh_basecamp_settings_actions = /** @type {(inputs: Basecamp_Settings_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可执行的操作`)
};

const ja_basecamp_settings_actions = /** @type {(inputs: Basecamp_Settings_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`できること`)
};

/**
* | output |
* | --- |
* | "What you can do" |
*
* @param {Basecamp_Settings_ActionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_actions = /** @type {((inputs?: Basecamp_Settings_ActionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_ActionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_actions(inputs)
	if (locale === "de") return de_basecamp_settings_actions(inputs)
	if (locale === "fr") return fr_basecamp_settings_actions(inputs)
	if (locale === "it") return it_basecamp_settings_actions(inputs)
	if (locale === "nl") return nl_basecamp_settings_actions(inputs)
	if (locale === "pl") return pl_basecamp_settings_actions(inputs)
	if (locale === "pt") return pt_basecamp_settings_actions(inputs)
	if (locale === "ru") return ru_basecamp_settings_actions(inputs)
	if (locale === "sv") return sv_basecamp_settings_actions(inputs)
	if (locale === "tr") return tr_basecamp_settings_actions(inputs)
	if (locale === "zh") return zh_basecamp_settings_actions(inputs)
	if (locale === "ja") return ja_basecamp_settings_actions(inputs)
	return en_basecamp_settings_actions(inputs)
});
