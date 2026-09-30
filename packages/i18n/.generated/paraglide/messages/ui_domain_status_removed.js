/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Status_RemovedInputs */

const en_ui_domain_status_removed = /** @type {(inputs: Ui_Domain_Status_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removed`)
};

const es_ui_domain_status_removed = /** @type {(inputs: Ui_Domain_Status_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirado`)
};

const de_ui_domain_status_removed = /** @type {(inputs: Ui_Domain_Status_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entfernt`)
};

const fr_ui_domain_status_removed = /** @type {(inputs: Ui_Domain_Status_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retiré`)
};

const it_ui_domain_status_removed = /** @type {(inputs: Ui_Domain_Status_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimossa`)
};

const nl_ui_domain_status_removed = /** @type {(inputs: Ui_Domain_Status_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderd`)
};

const pl_ui_domain_status_removed = /** @type {(inputs: Ui_Domain_Status_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięty`)
};

const pt_ui_domain_status_removed = /** @type {(inputs: Ui_Domain_Status_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removido`)
};

const ru_ui_domain_status_removed = /** @type {(inputs: Ui_Domain_Status_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалён`)
};

const sv_ui_domain_status_removed = /** @type {(inputs: Ui_Domain_Status_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borttagen`)
};

const tr_ui_domain_status_removed = /** @type {(inputs: Ui_Domain_Status_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaldırıldı`)
};

const zh_ui_domain_status_removed = /** @type {(inputs: Ui_Domain_Status_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已下架`)
};

const ja_ui_domain_status_removed = /** @type {(inputs: Ui_Domain_Status_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除済み`)
};

/**
* | output |
* | --- |
* | "Removed" |
*
* @param {Ui_Domain_Status_RemovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_status_removed = /** @type {((inputs?: Ui_Domain_Status_RemovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Status_RemovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_status_removed(inputs)
	if (locale === "de") return de_ui_domain_status_removed(inputs)
	if (locale === "fr") return fr_ui_domain_status_removed(inputs)
	if (locale === "it") return it_ui_domain_status_removed(inputs)
	if (locale === "nl") return nl_ui_domain_status_removed(inputs)
	if (locale === "pl") return pl_ui_domain_status_removed(inputs)
	if (locale === "pt") return pt_ui_domain_status_removed(inputs)
	if (locale === "ru") return ru_ui_domain_status_removed(inputs)
	if (locale === "sv") return sv_ui_domain_status_removed(inputs)
	if (locale === "tr") return tr_ui_domain_status_removed(inputs)
	if (locale === "zh") return zh_ui_domain_status_removed(inputs)
	if (locale === "ja") return ja_ui_domain_status_removed(inputs)
	return en_ui_domain_status_removed(inputs)
});
