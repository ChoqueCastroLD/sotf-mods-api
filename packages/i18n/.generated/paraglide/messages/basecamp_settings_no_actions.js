/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_No_ActionsInputs */

const en_basecamp_settings_no_actions = /** @type {(inputs: Basecamp_Settings_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`There is nothing to change in this status.`)
};

const es_basecamp_settings_no_actions = /** @type {(inputs: Basecamp_Settings_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay nada que cambiar en este estado.`)
};

const de_basecamp_settings_no_actions = /** @type {(inputs: Basecamp_Settings_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In diesem Status gibt es nichts zu ändern.`)
};

const fr_basecamp_settings_no_actions = /** @type {(inputs: Basecamp_Settings_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien à changer dans cet état.`)
};

const it_basecamp_settings_no_actions = /** @type {(inputs: Basecamp_Settings_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non c’è nulla da cambiare in questo stato.`)
};

const nl_basecamp_settings_no_actions = /** @type {(inputs: Basecamp_Settings_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In deze status valt er niets te wijzigen.`)
};

const pl_basecamp_settings_no_actions = /** @type {(inputs: Basecamp_Settings_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W tym stanie nie ma nic do zmiany.`)
};

const pt_basecamp_settings_no_actions = /** @type {(inputs: Basecamp_Settings_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não há nada para mudar neste estado.`)
};

const ru_basecamp_settings_no_actions = /** @type {(inputs: Basecamp_Settings_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В этом статусе менять нечего.`)
};

const sv_basecamp_settings_no_actions = /** @type {(inputs: Basecamp_Settings_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det finns inget att ändra i den här statusen.`)
};

const tr_basecamp_settings_no_actions = /** @type {(inputs: Basecamp_Settings_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu durumda değiştirilecek bir şey yok.`)
};

const zh_basecamp_settings_no_actions = /** @type {(inputs: Basecamp_Settings_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前状态下没有可更改的内容。`)
};

const ja_basecamp_settings_no_actions = /** @type {(inputs: Basecamp_Settings_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この状態では変更できることはありません。`)
};

/**
* | output |
* | --- |
* | "There is nothing to change in this status." |
*
* @param {Basecamp_Settings_No_ActionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_no_actions = /** @type {((inputs?: Basecamp_Settings_No_ActionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_No_ActionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_no_actions(inputs)
	if (locale === "de") return de_basecamp_settings_no_actions(inputs)
	if (locale === "fr") return fr_basecamp_settings_no_actions(inputs)
	if (locale === "it") return it_basecamp_settings_no_actions(inputs)
	if (locale === "nl") return nl_basecamp_settings_no_actions(inputs)
	if (locale === "pl") return pl_basecamp_settings_no_actions(inputs)
	if (locale === "pt") return pt_basecamp_settings_no_actions(inputs)
	if (locale === "ru") return ru_basecamp_settings_no_actions(inputs)
	if (locale === "sv") return sv_basecamp_settings_no_actions(inputs)
	if (locale === "tr") return tr_basecamp_settings_no_actions(inputs)
	if (locale === "zh") return zh_basecamp_settings_no_actions(inputs)
	if (locale === "ja") return ja_basecamp_settings_no_actions(inputs)
	return en_basecamp_settings_no_actions(inputs)
});
