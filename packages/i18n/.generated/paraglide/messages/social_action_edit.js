/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Action_EditInputs */

const en_social_action_edit = /** @type {(inputs: Social_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit`)
};

const es_social_action_edit = /** @type {(inputs: Social_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar`)
};

const de_social_action_edit = /** @type {(inputs: Social_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bearbeiten`)
};

const fr_social_action_edit = /** @type {(inputs: Social_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier`)
};

const it_social_action_edit = /** @type {(inputs: Social_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifica`)
};

const nl_social_action_edit = /** @type {(inputs: Social_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewerken`)
};

const pl_social_action_edit = /** @type {(inputs: Social_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytuj`)
};

const pt_social_action_edit = /** @type {(inputs: Social_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar`)
};

const ru_social_action_edit = /** @type {(inputs: Social_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменить`)
};

const sv_social_action_edit = /** @type {(inputs: Social_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigera`)
};

const tr_social_action_edit = /** @type {(inputs: Social_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düzenle`)
};

const zh_social_action_edit = /** @type {(inputs: Social_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑`)
};

const ja_social_action_edit = /** @type {(inputs: Social_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`編集`)
};

/**
* | output |
* | --- |
* | "Edit" |
*
* @param {Social_Action_EditInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_action_edit = /** @type {((inputs?: Social_Action_EditInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Action_EditInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_action_edit(inputs)
	if (locale === "de") return de_social_action_edit(inputs)
	if (locale === "fr") return fr_social_action_edit(inputs)
	if (locale === "it") return it_social_action_edit(inputs)
	if (locale === "nl") return nl_social_action_edit(inputs)
	if (locale === "pl") return pl_social_action_edit(inputs)
	if (locale === "pt") return pt_social_action_edit(inputs)
	if (locale === "ru") return ru_social_action_edit(inputs)
	if (locale === "sv") return sv_social_action_edit(inputs)
	if (locale === "tr") return tr_social_action_edit(inputs)
	if (locale === "zh") return zh_social_action_edit(inputs)
	if (locale === "ja") return ja_social_action_edit(inputs)
	return en_social_action_edit(inputs)
});
