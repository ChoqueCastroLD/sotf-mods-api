/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Action_EditInputs */

const en_common_action_edit = /** @type {(inputs: Common_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit`)
};

const es_common_action_edit = /** @type {(inputs: Common_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar`)
};

const de_common_action_edit = /** @type {(inputs: Common_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bearbeiten`)
};

const fr_common_action_edit = /** @type {(inputs: Common_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier`)
};

const it_common_action_edit = /** @type {(inputs: Common_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifica`)
};

const nl_common_action_edit = /** @type {(inputs: Common_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewerken`)
};

const pl_common_action_edit = /** @type {(inputs: Common_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytuj`)
};

const pt_common_action_edit = /** @type {(inputs: Common_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar`)
};

const ru_common_action_edit = /** @type {(inputs: Common_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменить`)
};

const sv_common_action_edit = /** @type {(inputs: Common_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigera`)
};

const tr_common_action_edit = /** @type {(inputs: Common_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düzenle`)
};

const zh_common_action_edit = /** @type {(inputs: Common_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑`)
};

const ja_common_action_edit = /** @type {(inputs: Common_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`編集`)
};

/**
* | output |
* | --- |
* | "Edit" |
*
* @param {Common_Action_EditInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_action_edit = /** @type {((inputs?: Common_Action_EditInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Action_EditInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_action_edit(inputs)
	if (locale === "de") return de_common_action_edit(inputs)
	if (locale === "fr") return fr_common_action_edit(inputs)
	if (locale === "it") return it_common_action_edit(inputs)
	if (locale === "nl") return nl_common_action_edit(inputs)
	if (locale === "pl") return pl_common_action_edit(inputs)
	if (locale === "pt") return pt_common_action_edit(inputs)
	if (locale === "ru") return ru_common_action_edit(inputs)
	if (locale === "sv") return sv_common_action_edit(inputs)
	if (locale === "tr") return tr_common_action_edit(inputs)
	if (locale === "zh") return zh_common_action_edit(inputs)
	if (locale === "ja") return ja_common_action_edit(inputs)
	return en_common_action_edit(inputs)
});
