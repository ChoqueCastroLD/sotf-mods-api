/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Status_PendingInputs */

const en_modpacks_status_pending = /** @type {(inputs: Modpacks_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pending approval`)
};

const es_modpacks_status_pending = /** @type {(inputs: Modpacks_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pendiente de aprobación`)
};

const de_modpacks_status_pending = /** @type {(inputs: Modpacks_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wartet auf Freigabe`)
};

const fr_modpacks_status_pending = /** @type {(inputs: Modpacks_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En attente d’approbation`)
};

const it_modpacks_status_pending = /** @type {(inputs: Modpacks_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In attesa di approvazione`)
};

const nl_modpacks_status_pending = /** @type {(inputs: Modpacks_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wacht op goedkeuring`)
};

const pl_modpacks_status_pending = /** @type {(inputs: Modpacks_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czeka na zatwierdzenie`)
};

const pt_modpacks_status_pending = /** @type {(inputs: Modpacks_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aguardando aprovação`)
};

const ru_modpacks_status_pending = /** @type {(inputs: Modpacks_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ожидает одобрения`)
};

const sv_modpacks_status_pending = /** @type {(inputs: Modpacks_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Väntar på godkännande`)
};

const tr_modpacks_status_pending = /** @type {(inputs: Modpacks_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onay bekliyor`)
};

const zh_modpacks_status_pending = /** @type {(inputs: Modpacks_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`等待审核`)
};

const ja_modpacks_status_pending = /** @type {(inputs: Modpacks_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`承認待ち`)
};

/**
* | output |
* | --- |
* | "Pending approval" |
*
* @param {Modpacks_Status_PendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_status_pending = /** @type {((inputs?: Modpacks_Status_PendingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Status_PendingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_status_pending(inputs)
	if (locale === "de") return de_modpacks_status_pending(inputs)
	if (locale === "fr") return fr_modpacks_status_pending(inputs)
	if (locale === "it") return it_modpacks_status_pending(inputs)
	if (locale === "nl") return nl_modpacks_status_pending(inputs)
	if (locale === "pl") return pl_modpacks_status_pending(inputs)
	if (locale === "pt") return pt_modpacks_status_pending(inputs)
	if (locale === "ru") return ru_modpacks_status_pending(inputs)
	if (locale === "sv") return sv_modpacks_status_pending(inputs)
	if (locale === "tr") return tr_modpacks_status_pending(inputs)
	if (locale === "zh") return zh_modpacks_status_pending(inputs)
	if (locale === "ja") return ja_modpacks_status_pending(inputs)
	return en_modpacks_status_pending(inputs)
});
