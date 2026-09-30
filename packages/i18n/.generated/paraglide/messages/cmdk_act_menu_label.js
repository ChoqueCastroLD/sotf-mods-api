/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Cmdk_Act_Menu_LabelInputs */

const en_cmdk_act_menu_label = /** @type {(inputs: Cmdk_Act_Menu_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Actions for ${i?.title}`)
};

const es_cmdk_act_menu_label = /** @type {(inputs: Cmdk_Act_Menu_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Acciones para ${i?.title}`)
};

const de_cmdk_act_menu_label = /** @type {(inputs: Cmdk_Act_Menu_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aktionen für ${i?.title}`)
};

const fr_cmdk_act_menu_label = /** @type {(inputs: Cmdk_Act_Menu_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Actions pour ${i?.title}`)
};

const it_cmdk_act_menu_label = /** @type {(inputs: Cmdk_Act_Menu_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Azioni per ${i?.title}`)
};

const nl_cmdk_act_menu_label = /** @type {(inputs: Cmdk_Act_Menu_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Acties voor ${i?.title}`)
};

const pl_cmdk_act_menu_label = /** @type {(inputs: Cmdk_Act_Menu_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Działania dla ${i?.title}`)
};

const pt_cmdk_act_menu_label = /** @type {(inputs: Cmdk_Act_Menu_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ações para ${i?.title}`)
};

const ru_cmdk_act_menu_label = /** @type {(inputs: Cmdk_Act_Menu_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Действия для ${i?.title}`)
};

const sv_cmdk_act_menu_label = /** @type {(inputs: Cmdk_Act_Menu_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Åtgärder för ${i?.title}`)
};

const tr_cmdk_act_menu_label = /** @type {(inputs: Cmdk_Act_Menu_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} için eylemler`)
};

const zh_cmdk_act_menu_label = /** @type {(inputs: Cmdk_Act_Menu_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} 的操作`)
};

const ja_cmdk_act_menu_label = /** @type {(inputs: Cmdk_Act_Menu_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} の操作`)
};

/**
* | output |
* | --- |
* | "Actions for {title}" |
*
* @param {Cmdk_Act_Menu_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_act_menu_label = /** @type {((inputs: Cmdk_Act_Menu_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Act_Menu_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_act_menu_label(inputs)
	if (locale === "de") return de_cmdk_act_menu_label(inputs)
	if (locale === "fr") return fr_cmdk_act_menu_label(inputs)
	if (locale === "it") return it_cmdk_act_menu_label(inputs)
	if (locale === "nl") return nl_cmdk_act_menu_label(inputs)
	if (locale === "pl") return pl_cmdk_act_menu_label(inputs)
	if (locale === "pt") return pt_cmdk_act_menu_label(inputs)
	if (locale === "ru") return ru_cmdk_act_menu_label(inputs)
	if (locale === "sv") return sv_cmdk_act_menu_label(inputs)
	if (locale === "tr") return tr_cmdk_act_menu_label(inputs)
	if (locale === "zh") return zh_cmdk_act_menu_label(inputs)
	if (locale === "ja") return ja_cmdk_act_menu_label(inputs)
	return en_cmdk_act_menu_label(inputs)
});
