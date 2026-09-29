/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Action_ConfirmInputs */

const en_common_action_confirm = /** @type {(inputs: Common_Action_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirm`)
};

const es_common_action_confirm = /** @type {(inputs: Common_Action_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmar`)
};

const de_common_action_confirm = /** @type {(inputs: Common_Action_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätigen`)
};

const fr_common_action_confirm = /** @type {(inputs: Common_Action_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmer`)
};

const it_common_action_confirm = /** @type {(inputs: Common_Action_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conferma`)
};

const nl_common_action_confirm = /** @type {(inputs: Common_Action_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestigen`)
};

const pl_common_action_confirm = /** @type {(inputs: Common_Action_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdź`)
};

const pt_common_action_confirm = /** @type {(inputs: Common_Action_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmar`)
};

const ru_common_action_confirm = /** @type {(inputs: Common_Action_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердить`)
};

const sv_common_action_confirm = /** @type {(inputs: Common_Action_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekräfta`)
};

const tr_common_action_confirm = /** @type {(inputs: Common_Action_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onayla`)
};

const zh_common_action_confirm = /** @type {(inputs: Common_Action_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认`)
};

const ja_common_action_confirm = /** @type {(inputs: Common_Action_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`確認`)
};

/**
* | output |
* | --- |
* | "Confirm" |
*
* @param {Common_Action_ConfirmInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_action_confirm = /** @type {((inputs?: Common_Action_ConfirmInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Action_ConfirmInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_action_confirm(inputs)
	if (locale === "de") return de_common_action_confirm(inputs)
	if (locale === "fr") return fr_common_action_confirm(inputs)
	if (locale === "it") return it_common_action_confirm(inputs)
	if (locale === "nl") return nl_common_action_confirm(inputs)
	if (locale === "pl") return pl_common_action_confirm(inputs)
	if (locale === "pt") return pt_common_action_confirm(inputs)
	if (locale === "ru") return ru_common_action_confirm(inputs)
	if (locale === "sv") return sv_common_action_confirm(inputs)
	if (locale === "tr") return tr_common_action_confirm(inputs)
	if (locale === "zh") return zh_common_action_confirm(inputs)
	if (locale === "ja") return ja_common_action_confirm(inputs)
	return en_common_action_confirm(inputs)
});
