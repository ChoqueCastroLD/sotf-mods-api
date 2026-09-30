/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Action_DiscardInputs */

const en_admin_action_discard = /** @type {(inputs: Admin_Action_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discard changes`)
};

const es_admin_action_discard = /** @type {(inputs: Admin_Action_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartar cambios`)
};

const de_admin_action_discard = /** @type {(inputs: Admin_Action_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Änderungen verwerfen`)
};

const fr_admin_action_discard = /** @type {(inputs: Admin_Action_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler les modifications`)
};

const it_admin_action_discard = /** @type {(inputs: Admin_Action_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarta le modifiche`)
};

const nl_admin_action_discard = /** @type {(inputs: Admin_Action_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wijzigingen negeren`)
};

const pl_admin_action_discard = /** @type {(inputs: Admin_Action_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odrzuć zmiany`)
};

const pt_admin_action_discard = /** @type {(inputs: Admin_Action_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartar alterações`)
};

const ru_admin_action_discard = /** @type {(inputs: Admin_Action_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отменить изменения`)
};

const sv_admin_action_discard = /** @type {(inputs: Admin_Action_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förkasta ändringar`)
};

const tr_admin_action_discard = /** @type {(inputs: Admin_Action_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklikleri at`)
};

const zh_admin_action_discard = /** @type {(inputs: Admin_Action_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`放弃更改`)
};

const ja_admin_action_discard = /** @type {(inputs: Admin_Action_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更を破棄`)
};

/**
* | output |
* | --- |
* | "Discard changes" |
*
* @param {Admin_Action_DiscardInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_action_discard = /** @type {((inputs?: Admin_Action_DiscardInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Action_DiscardInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_action_discard(inputs)
	if (locale === "de") return de_admin_action_discard(inputs)
	if (locale === "fr") return fr_admin_action_discard(inputs)
	if (locale === "it") return it_admin_action_discard(inputs)
	if (locale === "nl") return nl_admin_action_discard(inputs)
	if (locale === "pl") return pl_admin_action_discard(inputs)
	if (locale === "pt") return pt_admin_action_discard(inputs)
	if (locale === "ru") return ru_admin_action_discard(inputs)
	if (locale === "sv") return sv_admin_action_discard(inputs)
	if (locale === "tr") return tr_admin_action_discard(inputs)
	if (locale === "zh") return zh_admin_action_discard(inputs)
	if (locale === "ja") return ja_admin_action_discard(inputs)
	return en_admin_action_discard(inputs)
});
