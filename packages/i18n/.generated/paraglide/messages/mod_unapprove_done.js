/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Unapprove_DoneInputs */

const en_mod_unapprove_done = /** @type {(inputs: Mod_Unapprove_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is pending approval again`)
};

const es_mod_unapprove_done = /** @type {(inputs: Mod_Unapprove_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} vuelve a estar pendiente de aprobación`)
};

const de_mod_unapprove_done = /** @type {(inputs: Mod_Unapprove_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} wartet wieder auf Freigabe`)
};

const fr_mod_unapprove_done = /** @type {(inputs: Mod_Unapprove_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} est de nouveau en attente d’approbation`)
};

const it_mod_unapprove_done = /** @type {(inputs: Mod_Unapprove_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} è di nuovo in attesa di approvazione`)
};

const nl_mod_unapprove_done = /** @type {(inputs: Mod_Unapprove_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} wacht weer op goedkeuring`)
};

const pl_mod_unapprove_done = /** @type {(inputs: Mod_Unapprove_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} znów czeka na zatwierdzenie`)
};

const pt_mod_unapprove_done = /** @type {(inputs: Mod_Unapprove_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} voltou a aguardar aprovação`)
};

const ru_mod_unapprove_done = /** @type {(inputs: Mod_Unapprove_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} снова ожидает одобрения`)
};

const sv_mod_unapprove_done = /** @type {(inputs: Mod_Unapprove_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} väntar på godkännande igen`)
};

const tr_mod_unapprove_done = /** @type {(inputs: Mod_Unapprove_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} yeniden onay bekliyor`)
};

const zh_mod_unapprove_done = /** @type {(inputs: Mod_Unapprove_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 已重新变为待批准`)
};

const ja_mod_unapprove_done = /** @type {(inputs: Mod_Unapprove_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} は再び承認待ちになりました`)
};

/**
* | output |
* | --- |
* | "{name} is pending approval again" |
*
* @param {Mod_Unapprove_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_unapprove_done = /** @type {((inputs: Mod_Unapprove_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Unapprove_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_unapprove_done(inputs)
	if (locale === "de") return de_mod_unapprove_done(inputs)
	if (locale === "fr") return fr_mod_unapprove_done(inputs)
	if (locale === "it") return it_mod_unapprove_done(inputs)
	if (locale === "nl") return nl_mod_unapprove_done(inputs)
	if (locale === "pl") return pl_mod_unapprove_done(inputs)
	if (locale === "pt") return pt_mod_unapprove_done(inputs)
	if (locale === "ru") return ru_mod_unapprove_done(inputs)
	if (locale === "sv") return sv_mod_unapprove_done(inputs)
	if (locale === "tr") return tr_mod_unapprove_done(inputs)
	if (locale === "zh") return zh_mod_unapprove_done(inputs)
	if (locale === "ja") return ja_mod_unapprove_done(inputs)
	return en_mod_unapprove_done(inputs)
});
