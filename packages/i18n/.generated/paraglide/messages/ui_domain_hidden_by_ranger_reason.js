/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ reason: NonNullable<unknown> }} Ui_Domain_Hidden_By_Ranger_ReasonInputs */

const en_ui_domain_hidden_by_ranger_reason = /** @type {(inputs: Ui_Domain_Hidden_By_Ranger_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hidden by a moderator: ${i?.reason}`)
};

const es_ui_domain_hidden_by_ranger_reason = /** @type {(inputs: Ui_Domain_Hidden_By_Ranger_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oculto por un moderador: ${i?.reason}`)
};

const de_ui_domain_hidden_by_ranger_reason = /** @type {(inputs: Ui_Domain_Hidden_By_Ranger_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Von einem Moderator ausgeblendet: ${i?.reason}`)
};

const fr_ui_domain_hidden_by_ranger_reason = /** @type {(inputs: Ui_Domain_Hidden_By_Ranger_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Masqué par un modérateur : ${i?.reason}`)
};

const it_ui_domain_hidden_by_ranger_reason = /** @type {(inputs: Ui_Domain_Hidden_By_Ranger_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nascosto da un moderatore: ${i?.reason}`)
};

const nl_ui_domain_hidden_by_ranger_reason = /** @type {(inputs: Ui_Domain_Hidden_By_Ranger_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verborgen door een moderator: ${i?.reason}`)
};

const pl_ui_domain_hidden_by_ranger_reason = /** @type {(inputs: Ui_Domain_Hidden_By_Ranger_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ukryte przez moderatora: ${i?.reason}`)
};

const pt_ui_domain_hidden_by_ranger_reason = /** @type {(inputs: Ui_Domain_Hidden_By_Ranger_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ocultado por um moderador: ${i?.reason}`)
};

const ru_ui_domain_hidden_by_ranger_reason = /** @type {(inputs: Ui_Domain_Hidden_By_Ranger_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Скрыто модератором: ${i?.reason}`)
};

const sv_ui_domain_hidden_by_ranger_reason = /** @type {(inputs: Ui_Domain_Hidden_By_Ranger_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dold av en moderator: ${i?.reason}`)
};

const tr_ui_domain_hidden_by_ranger_reason = /** @type {(inputs: Ui_Domain_Hidden_By_Ranger_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bir moderatör tarafından gizlendi: ${i?.reason}`)
};

const zh_ui_domain_hidden_by_ranger_reason = /** @type {(inputs: Ui_Domain_Hidden_By_Ranger_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已被审核员隐藏：${i?.reason}`)
};

const ja_ui_domain_hidden_by_ranger_reason = /** @type {(inputs: Ui_Domain_Hidden_By_Ranger_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`モデレーターにより非表示：${i?.reason}`)
};

/**
* | output |
* | --- |
* | "Hidden by a moderator: {reason}" |
*
* @param {Ui_Domain_Hidden_By_Ranger_ReasonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_hidden_by_ranger_reason = /** @type {((inputs: Ui_Domain_Hidden_By_Ranger_ReasonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Hidden_By_Ranger_ReasonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_hidden_by_ranger_reason(inputs)
	if (locale === "de") return de_ui_domain_hidden_by_ranger_reason(inputs)
	if (locale === "fr") return fr_ui_domain_hidden_by_ranger_reason(inputs)
	if (locale === "it") return it_ui_domain_hidden_by_ranger_reason(inputs)
	if (locale === "nl") return nl_ui_domain_hidden_by_ranger_reason(inputs)
	if (locale === "pl") return pl_ui_domain_hidden_by_ranger_reason(inputs)
	if (locale === "pt") return pt_ui_domain_hidden_by_ranger_reason(inputs)
	if (locale === "ru") return ru_ui_domain_hidden_by_ranger_reason(inputs)
	if (locale === "sv") return sv_ui_domain_hidden_by_ranger_reason(inputs)
	if (locale === "tr") return tr_ui_domain_hidden_by_ranger_reason(inputs)
	if (locale === "zh") return zh_ui_domain_hidden_by_ranger_reason(inputs)
	if (locale === "ja") return ja_ui_domain_hidden_by_ranger_reason(inputs)
	return en_ui_domain_hidden_by_ranger_reason(inputs)
});
