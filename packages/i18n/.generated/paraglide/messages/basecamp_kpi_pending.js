/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Kpi_PendingInputs */

const en_basecamp_kpi_pending = /** @type {(inputs: Basecamp_Kpi_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waiting for review`)
};

const es_basecamp_kpi_pending = /** @type {(inputs: Basecamp_Kpi_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esperando revisión`)
};

const de_basecamp_kpi_pending = /** @type {(inputs: Basecamp_Kpi_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In Prüfung`)
};

const fr_basecamp_kpi_pending = /** @type {(inputs: Basecamp_Kpi_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En attente de relecture`)
};

const it_basecamp_kpi_pending = /** @type {(inputs: Basecamp_Kpi_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In attesa di revisione`)
};

const nl_basecamp_kpi_pending = /** @type {(inputs: Basecamp_Kpi_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wacht op beoordeling`)
};

const pl_basecamp_kpi_pending = /** @type {(inputs: Basecamp_Kpi_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oczekuje na przegląd`)
};

const pt_basecamp_kpi_pending = /** @type {(inputs: Basecamp_Kpi_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aguardando revisão`)
};

const ru_basecamp_kpi_pending = /** @type {(inputs: Basecamp_Kpi_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ожидает проверки`)
};

const sv_basecamp_kpi_pending = /** @type {(inputs: Basecamp_Kpi_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Väntar på granskning`)
};

const tr_basecamp_kpi_pending = /** @type {(inputs: Basecamp_Kpi_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İnceleme bekleyen`)
};

const zh_basecamp_kpi_pending = /** @type {(inputs: Basecamp_Kpi_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`等待审核`)
};

const ja_basecamp_kpi_pending = /** @type {(inputs: Basecamp_Kpi_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`審査待ち`)
};

/**
* | output |
* | --- |
* | "Waiting for review" |
*
* @param {Basecamp_Kpi_PendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_kpi_pending = /** @type {((inputs?: Basecamp_Kpi_PendingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Kpi_PendingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_kpi_pending(inputs)
	if (locale === "de") return de_basecamp_kpi_pending(inputs)
	if (locale === "fr") return fr_basecamp_kpi_pending(inputs)
	if (locale === "it") return it_basecamp_kpi_pending(inputs)
	if (locale === "nl") return nl_basecamp_kpi_pending(inputs)
	if (locale === "pl") return pl_basecamp_kpi_pending(inputs)
	if (locale === "pt") return pt_basecamp_kpi_pending(inputs)
	if (locale === "ru") return ru_basecamp_kpi_pending(inputs)
	if (locale === "sv") return sv_basecamp_kpi_pending(inputs)
	if (locale === "tr") return tr_basecamp_kpi_pending(inputs)
	if (locale === "zh") return zh_basecamp_kpi_pending(inputs)
	if (locale === "ja") return ja_basecamp_kpi_pending(inputs)
	return en_basecamp_kpi_pending(inputs)
});
