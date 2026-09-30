/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Checks_PendingInputs */

const en_ranger_checks_pending = /** @type {(inputs: Ranger_Checks_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checks still running`)
};

const es_ranger_checks_pending = /** @type {(inputs: Ranger_Checks_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comprobaciones en curso`)
};

const de_ranger_checks_pending = /** @type {(inputs: Ranger_Checks_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prüfungen laufen noch`)
};

const fr_ranger_checks_pending = /** @type {(inputs: Ranger_Checks_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contrôles en cours`)
};

const it_ranger_checks_pending = /** @type {(inputs: Ranger_Checks_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controlli in corso`)
};

const nl_ranger_checks_pending = /** @type {(inputs: Ranger_Checks_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controles lopen nog`)
};

const pl_ranger_checks_pending = /** @type {(inputs: Ranger_Checks_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrole w toku`)
};

const pt_ranger_checks_pending = /** @type {(inputs: Ranger_Checks_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificações em andamento`)
};

const ru_ranger_checks_pending = /** @type {(inputs: Ranger_Checks_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверки ещё идут`)
};

const sv_ranger_checks_pending = /** @type {(inputs: Ranger_Checks_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrollerna pågår`)
};

const tr_ranger_checks_pending = /** @type {(inputs: Ranger_Checks_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontroller sürüyor`)
};

const zh_ranger_checks_pending = /** @type {(inputs: Ranger_Checks_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`检查进行中`)
};

const ja_ranger_checks_pending = /** @type {(inputs: Ranger_Checks_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チェック実行中`)
};

/**
* | output |
* | --- |
* | "Checks still running" |
*
* @param {Ranger_Checks_PendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_checks_pending = /** @type {((inputs?: Ranger_Checks_PendingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Checks_PendingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_checks_pending(inputs)
	if (locale === "de") return de_ranger_checks_pending(inputs)
	if (locale === "fr") return fr_ranger_checks_pending(inputs)
	if (locale === "it") return it_ranger_checks_pending(inputs)
	if (locale === "nl") return nl_ranger_checks_pending(inputs)
	if (locale === "pl") return pl_ranger_checks_pending(inputs)
	if (locale === "pt") return pt_ranger_checks_pending(inputs)
	if (locale === "ru") return ru_ranger_checks_pending(inputs)
	if (locale === "sv") return sv_ranger_checks_pending(inputs)
	if (locale === "tr") return tr_ranger_checks_pending(inputs)
	if (locale === "zh") return zh_ranger_checks_pending(inputs)
	if (locale === "ja") return ja_ranger_checks_pending(inputs)
	return en_ranger_checks_pending(inputs)
});
