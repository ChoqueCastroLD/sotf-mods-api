/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Template_Copyright_ClaimInputs */

const en_signals_template_copyright_claim = /** @type {(inputs: Signals_Template_Copyright_ClaimInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removed after a valid copyright claim.`)
};

const es_signals_template_copyright_claim = /** @type {(inputs: Signals_Template_Copyright_ClaimInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirado tras una reclamación de derechos de autor válida.`)
};

const de_signals_template_copyright_claim = /** @type {(inputs: Signals_Template_Copyright_ClaimInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nach einer gültigen Urheberrechtsbeschwerde entfernt.`)
};

const fr_signals_template_copyright_claim = /** @type {(inputs: Signals_Template_Copyright_ClaimInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimé après une réclamation de droits d’auteur valable.`)
};

const it_signals_template_copyright_claim = /** @type {(inputs: Signals_Template_Copyright_ClaimInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimosso dopo un reclamo per copyright valido.`)
};

const nl_signals_template_copyright_claim = /** @type {(inputs: Signals_Template_Copyright_ClaimInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderd na een geldige auteursrechtclaim.`)
};

const pl_signals_template_copyright_claim = /** @type {(inputs: Signals_Template_Copyright_ClaimInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięto po zasadnym roszczeniu praw autorskich.`)
};

const pt_signals_template_copyright_claim = /** @type {(inputs: Signals_Template_Copyright_ClaimInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removido após uma reclamação de direitos autorais válida.`)
};

const ru_signals_template_copyright_claim = /** @type {(inputs: Signals_Template_Copyright_ClaimInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалено по обоснованной жалобе правообладателя.`)
};

const sv_signals_template_copyright_claim = /** @type {(inputs: Signals_Template_Copyright_ClaimInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borttagen efter ett giltigt upphovsrättsanspråk.`)
};

const tr_signals_template_copyright_claim = /** @type {(inputs: Signals_Template_Copyright_ClaimInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geçerli bir telif hakkı talebinin ardından kaldırıldı.`)
};

const zh_signals_template_copyright_claim = /** @type {(inputs: Signals_Template_Copyright_ClaimInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`因有效的版权投诉被移除。`)
};

const ja_signals_template_copyright_claim = /** @type {(inputs: Signals_Template_Copyright_ClaimInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有効な著作権の申し立てにより削除されました。`)
};

/**
* | output |
* | --- |
* | "Removed after a valid copyright claim." |
*
* @param {Signals_Template_Copyright_ClaimInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_template_copyright_claim = /** @type {((inputs?: Signals_Template_Copyright_ClaimInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Template_Copyright_ClaimInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_template_copyright_claim(inputs)
	if (locale === "de") return de_signals_template_copyright_claim(inputs)
	if (locale === "fr") return fr_signals_template_copyright_claim(inputs)
	if (locale === "it") return it_signals_template_copyright_claim(inputs)
	if (locale === "nl") return nl_signals_template_copyright_claim(inputs)
	if (locale === "pl") return pl_signals_template_copyright_claim(inputs)
	if (locale === "pt") return pt_signals_template_copyright_claim(inputs)
	if (locale === "ru") return ru_signals_template_copyright_claim(inputs)
	if (locale === "sv") return sv_signals_template_copyright_claim(inputs)
	if (locale === "tr") return tr_signals_template_copyright_claim(inputs)
	if (locale === "zh") return zh_signals_template_copyright_claim(inputs)
	if (locale === "ja") return ja_signals_template_copyright_claim(inputs)
	return en_signals_template_copyright_claim(inputs)
});
