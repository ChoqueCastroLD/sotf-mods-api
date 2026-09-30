/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Checks_TitleInputs */

const en_ranger_checks_title = /** @type {(inputs: Ranger_Checks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automated checks`)
};

const es_ranger_checks_title = /** @type {(inputs: Ranger_Checks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comprobaciones automáticas`)
};

const de_ranger_checks_title = /** @type {(inputs: Ranger_Checks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatische Prüfungen`)
};

const fr_ranger_checks_title = /** @type {(inputs: Ranger_Checks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contrôles automatiques`)
};

const it_ranger_checks_title = /** @type {(inputs: Ranger_Checks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controlli automatici`)
};

const nl_ranger_checks_title = /** @type {(inputs: Ranger_Checks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatische controles`)
};

const pl_ranger_checks_title = /** @type {(inputs: Ranger_Checks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatyczne kontrole`)
};

const pt_ranger_checks_title = /** @type {(inputs: Ranger_Checks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificações automáticas`)
};

const ru_ranger_checks_title = /** @type {(inputs: Ranger_Checks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автоматические проверки`)
};

const sv_ranger_checks_title = /** @type {(inputs: Ranger_Checks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatiska kontroller`)
};

const tr_ranger_checks_title = /** @type {(inputs: Ranger_Checks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otomatik kontroller`)
};

const zh_ranger_checks_title = /** @type {(inputs: Ranger_Checks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自动检查`)
};

const ja_ranger_checks_title = /** @type {(inputs: Ranger_Checks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自動チェック`)
};

/**
* | output |
* | --- |
* | "Automated checks" |
*
* @param {Ranger_Checks_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_checks_title = /** @type {((inputs?: Ranger_Checks_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Checks_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_checks_title(inputs)
	if (locale === "de") return de_ranger_checks_title(inputs)
	if (locale === "fr") return fr_ranger_checks_title(inputs)
	if (locale === "it") return it_ranger_checks_title(inputs)
	if (locale === "nl") return nl_ranger_checks_title(inputs)
	if (locale === "pl") return pl_ranger_checks_title(inputs)
	if (locale === "pt") return pt_ranger_checks_title(inputs)
	if (locale === "ru") return ru_ranger_checks_title(inputs)
	if (locale === "sv") return sv_ranger_checks_title(inputs)
	if (locale === "tr") return tr_ranger_checks_title(inputs)
	if (locale === "zh") return zh_ranger_checks_title(inputs)
	if (locale === "ja") return ja_ranger_checks_title(inputs)
	return en_ranger_checks_title(inputs)
});
