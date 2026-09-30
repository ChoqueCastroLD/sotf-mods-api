/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Template_Copyright_Claim_TitleInputs */

const en_ranger_template_copyright_claim_title = /** @type {(inputs: Ranger_Template_Copyright_Claim_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copyright claim`)
};

const es_ranger_template_copyright_claim_title = /** @type {(inputs: Ranger_Template_Copyright_Claim_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reclamación de derechos`)
};

const de_ranger_template_copyright_claim_title = /** @type {(inputs: Ranger_Template_Copyright_Claim_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Urheberrechtsbeschwerde`)
};

const fr_ranger_template_copyright_claim_title = /** @type {(inputs: Ranger_Template_Copyright_Claim_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réclamation de droits d’auteur`)
};

const it_ranger_template_copyright_claim_title = /** @type {(inputs: Ranger_Template_Copyright_Claim_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reclamo per copyright`)
};

const nl_ranger_template_copyright_claim_title = /** @type {(inputs: Ranger_Template_Copyright_Claim_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auteursrechtclaim`)
};

const pl_ranger_template_copyright_claim_title = /** @type {(inputs: Ranger_Template_Copyright_Claim_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Roszczenie praw autorskich`)
};

const pt_ranger_template_copyright_claim_title = /** @type {(inputs: Ranger_Template_Copyright_Claim_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reclamação de direitos autorais`)
};

const ru_ranger_template_copyright_claim_title = /** @type {(inputs: Ranger_Template_Copyright_Claim_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Жалоба правообладателя`)
};

const sv_ranger_template_copyright_claim_title = /** @type {(inputs: Ranger_Template_Copyright_Claim_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upphovsrättsanspråk`)
};

const tr_ranger_template_copyright_claim_title = /** @type {(inputs: Ranger_Template_Copyright_Claim_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telif hakkı talebi`)
};

const zh_ranger_template_copyright_claim_title = /** @type {(inputs: Ranger_Template_Copyright_Claim_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版权投诉`)
};

const ja_ranger_template_copyright_claim_title = /** @type {(inputs: Ranger_Template_Copyright_Claim_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`著作権の申し立て`)
};

/**
* | output |
* | --- |
* | "Copyright claim" |
*
* @param {Ranger_Template_Copyright_Claim_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_template_copyright_claim_title = /** @type {((inputs?: Ranger_Template_Copyright_Claim_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Template_Copyright_Claim_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_template_copyright_claim_title(inputs)
	if (locale === "de") return de_ranger_template_copyright_claim_title(inputs)
	if (locale === "fr") return fr_ranger_template_copyright_claim_title(inputs)
	if (locale === "it") return it_ranger_template_copyright_claim_title(inputs)
	if (locale === "nl") return nl_ranger_template_copyright_claim_title(inputs)
	if (locale === "pl") return pl_ranger_template_copyright_claim_title(inputs)
	if (locale === "pt") return pt_ranger_template_copyright_claim_title(inputs)
	if (locale === "ru") return ru_ranger_template_copyright_claim_title(inputs)
	if (locale === "sv") return sv_ranger_template_copyright_claim_title(inputs)
	if (locale === "tr") return tr_ranger_template_copyright_claim_title(inputs)
	if (locale === "zh") return zh_ranger_template_copyright_claim_title(inputs)
	if (locale === "ja") return ja_ranger_template_copyright_claim_title(inputs)
	return en_ranger_template_copyright_claim_title(inputs)
});
