/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Review_Pending_TitleInputs */

const en_modpacks_review_pending_title = /** @type {(inputs: Modpacks_Review_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waiting for approval`)
};

const es_modpacks_review_pending_title = /** @type {(inputs: Modpacks_Review_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esperando aprobación`)
};

const de_modpacks_review_pending_title = /** @type {(inputs: Modpacks_Review_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warten auf Freigabe`)
};

const fr_modpacks_review_pending_title = /** @type {(inputs: Modpacks_Review_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En attente d’approbation`)
};

const it_modpacks_review_pending_title = /** @type {(inputs: Modpacks_Review_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In attesa di approvazione`)
};

const nl_modpacks_review_pending_title = /** @type {(inputs: Modpacks_Review_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachten op goedkeuring`)
};

const pl_modpacks_review_pending_title = /** @type {(inputs: Modpacks_Review_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czekają na zatwierdzenie`)
};

const pt_modpacks_review_pending_title = /** @type {(inputs: Modpacks_Review_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aguardando aprovação`)
};

const ru_modpacks_review_pending_title = /** @type {(inputs: Modpacks_Review_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ожидают одобрения`)
};

const sv_modpacks_review_pending_title = /** @type {(inputs: Modpacks_Review_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Väntar på godkännande`)
};

const tr_modpacks_review_pending_title = /** @type {(inputs: Modpacks_Review_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onay bekleyenler`)
};

const zh_modpacks_review_pending_title = /** @type {(inputs: Modpacks_Review_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`等待审核`)
};

const ja_modpacks_review_pending_title = /** @type {(inputs: Modpacks_Review_Pending_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`承認待ち`)
};

/**
* | output |
* | --- |
* | "Waiting for approval" |
*
* @param {Modpacks_Review_Pending_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_review_pending_title = /** @type {((inputs?: Modpacks_Review_Pending_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Review_Pending_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_review_pending_title(inputs)
	if (locale === "de") return de_modpacks_review_pending_title(inputs)
	if (locale === "fr") return fr_modpacks_review_pending_title(inputs)
	if (locale === "it") return it_modpacks_review_pending_title(inputs)
	if (locale === "nl") return nl_modpacks_review_pending_title(inputs)
	if (locale === "pl") return pl_modpacks_review_pending_title(inputs)
	if (locale === "pt") return pt_modpacks_review_pending_title(inputs)
	if (locale === "ru") return ru_modpacks_review_pending_title(inputs)
	if (locale === "sv") return sv_modpacks_review_pending_title(inputs)
	if (locale === "tr") return tr_modpacks_review_pending_title(inputs)
	if (locale === "zh") return zh_modpacks_review_pending_title(inputs)
	if (locale === "ja") return ja_modpacks_review_pending_title(inputs)
	return en_modpacks_review_pending_title(inputs)
});
