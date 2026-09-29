/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Action_ApplyInputs */

const en_common_action_apply = /** @type {(inputs: Common_Action_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apply`)
};

const es_common_action_apply = /** @type {(inputs: Common_Action_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aplicar`)
};

const de_common_action_apply = /** @type {(inputs: Common_Action_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anwenden`)
};

const fr_common_action_apply = /** @type {(inputs: Common_Action_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appliquer`)
};

const it_common_action_apply = /** @type {(inputs: Common_Action_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Applica`)
};

const nl_common_action_apply = /** @type {(inputs: Common_Action_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toepassen`)
};

const pl_common_action_apply = /** @type {(inputs: Common_Action_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zastosuj`)
};

const pt_common_action_apply = /** @type {(inputs: Common_Action_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aplicar`)
};

const ru_common_action_apply = /** @type {(inputs: Common_Action_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Применить`)
};

const sv_common_action_apply = /** @type {(inputs: Common_Action_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd`)
};

const tr_common_action_apply = /** @type {(inputs: Common_Action_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uygula`)
};

const zh_common_action_apply = /** @type {(inputs: Common_Action_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`应用`)
};

const ja_common_action_apply = /** @type {(inputs: Common_Action_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`適用`)
};

/**
* | output |
* | --- |
* | "Apply" |
*
* @param {Common_Action_ApplyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_action_apply = /** @type {((inputs?: Common_Action_ApplyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Action_ApplyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_action_apply(inputs)
	if (locale === "de") return de_common_action_apply(inputs)
	if (locale === "fr") return fr_common_action_apply(inputs)
	if (locale === "it") return it_common_action_apply(inputs)
	if (locale === "nl") return nl_common_action_apply(inputs)
	if (locale === "pl") return pl_common_action_apply(inputs)
	if (locale === "pt") return pt_common_action_apply(inputs)
	if (locale === "ru") return ru_common_action_apply(inputs)
	if (locale === "sv") return sv_common_action_apply(inputs)
	if (locale === "tr") return tr_common_action_apply(inputs)
	if (locale === "zh") return zh_common_action_apply(inputs)
	if (locale === "ja") return ja_common_action_apply(inputs)
	return en_common_action_apply(inputs)
});
