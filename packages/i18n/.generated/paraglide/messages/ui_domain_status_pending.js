/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Status_PendingInputs */

const en_ui_domain_status_pending = /** @type {(inputs: Ui_Domain_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pending review`)
};

const es_ui_domain_status_pending = /** @type {(inputs: Ui_Domain_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pendiente de revisión`)
};

const de_ui_domain_status_pending = /** @type {(inputs: Ui_Domain_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wartet auf Prüfung`)
};

const fr_ui_domain_status_pending = /** @type {(inputs: Ui_Domain_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En attente de revue`)
};

const it_ui_domain_status_pending = /** @type {(inputs: Ui_Domain_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In attesa di revisione`)
};

const nl_ui_domain_status_pending = /** @type {(inputs: Ui_Domain_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wacht op controle`)
};

const pl_ui_domain_status_pending = /** @type {(inputs: Ui_Domain_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czeka na sprawdzenie`)
};

const pt_ui_domain_status_pending = /** @type {(inputs: Ui_Domain_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aguardando revisão`)
};

const ru_ui_domain_status_pending = /** @type {(inputs: Ui_Domain_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ожидает проверки`)
};

const sv_ui_domain_status_pending = /** @type {(inputs: Ui_Domain_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Väntar på granskning`)
};

const tr_ui_domain_status_pending = /** @type {(inputs: Ui_Domain_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İnceleme bekliyor`)
};

const zh_ui_domain_status_pending = /** @type {(inputs: Ui_Domain_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`待审核`)
};

const ja_ui_domain_status_pending = /** @type {(inputs: Ui_Domain_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`審査待ち`)
};

/**
* | output |
* | --- |
* | "Pending review" |
*
* @param {Ui_Domain_Status_PendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_status_pending = /** @type {((inputs?: Ui_Domain_Status_PendingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Status_PendingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_status_pending(inputs)
	if (locale === "de") return de_ui_domain_status_pending(inputs)
	if (locale === "fr") return fr_ui_domain_status_pending(inputs)
	if (locale === "it") return it_ui_domain_status_pending(inputs)
	if (locale === "nl") return nl_ui_domain_status_pending(inputs)
	if (locale === "pl") return pl_ui_domain_status_pending(inputs)
	if (locale === "pt") return pt_ui_domain_status_pending(inputs)
	if (locale === "ru") return ru_ui_domain_status_pending(inputs)
	if (locale === "sv") return sv_ui_domain_status_pending(inputs)
	if (locale === "tr") return tr_ui_domain_status_pending(inputs)
	if (locale === "zh") return zh_ui_domain_status_pending(inputs)
	if (locale === "ja") return ja_ui_domain_status_pending(inputs)
	return en_ui_domain_status_pending(inputs)
});
