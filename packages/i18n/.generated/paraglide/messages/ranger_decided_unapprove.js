/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Ranger_Decided_UnapproveInputs */

const en_ranger_decided_unapprove = /** @type {(inputs: Ranger_Decided_UnapproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} is pending approval again`)
};

const es_ranger_decided_unapprove = /** @type {(inputs: Ranger_Decided_UnapproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} vuelve a estar pendiente de aprobación`)
};

const de_ranger_decided_unapprove = /** @type {(inputs: Ranger_Decided_UnapproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} wartet wieder auf Freigabe`)
};

const fr_ranger_decided_unapprove = /** @type {(inputs: Ranger_Decided_UnapproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} est de nouveau en attente d’approbation`)
};

const it_ranger_decided_unapprove = /** @type {(inputs: Ranger_Decided_UnapproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} è di nuovo in attesa di approvazione`)
};

const nl_ranger_decided_unapprove = /** @type {(inputs: Ranger_Decided_UnapproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} wacht weer op goedkeuring`)
};

const pl_ranger_decided_unapprove = /** @type {(inputs: Ranger_Decided_UnapproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} znów czeka na zatwierdzenie`)
};

const pt_ranger_decided_unapprove = /** @type {(inputs: Ranger_Decided_UnapproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} voltou a aguardar aprovação`)
};

const ru_ranger_decided_unapprove = /** @type {(inputs: Ranger_Decided_UnapproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} снова ожидает одобрения`)
};

const sv_ranger_decided_unapprove = /** @type {(inputs: Ranger_Decided_UnapproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} väntar på godkännande igen`)
};

const tr_ranger_decided_unapprove = /** @type {(inputs: Ranger_Decided_UnapproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} yeniden onay bekliyor`)
};

const zh_ranger_decided_unapprove = /** @type {(inputs: Ranger_Decided_UnapproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} 已重新变为待批准`)
};

const ja_ranger_decided_unapprove = /** @type {(inputs: Ranger_Decided_UnapproveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} は再び承認待ちになりました`)
};

/**
* | output |
* | --- |
* | "{title} is pending approval again" |
*
* @param {Ranger_Decided_UnapproveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_decided_unapprove = /** @type {((inputs: Ranger_Decided_UnapproveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Decided_UnapproveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_decided_unapprove(inputs)
	if (locale === "de") return de_ranger_decided_unapprove(inputs)
	if (locale === "fr") return fr_ranger_decided_unapprove(inputs)
	if (locale === "it") return it_ranger_decided_unapprove(inputs)
	if (locale === "nl") return nl_ranger_decided_unapprove(inputs)
	if (locale === "pl") return pl_ranger_decided_unapprove(inputs)
	if (locale === "pt") return pt_ranger_decided_unapprove(inputs)
	if (locale === "ru") return ru_ranger_decided_unapprove(inputs)
	if (locale === "sv") return sv_ranger_decided_unapprove(inputs)
	if (locale === "tr") return tr_ranger_decided_unapprove(inputs)
	if (locale === "zh") return zh_ranger_decided_unapprove(inputs)
	if (locale === "ja") return ja_ranger_decided_unapprove(inputs)
	return en_ranger_decided_unapprove(inputs)
});
