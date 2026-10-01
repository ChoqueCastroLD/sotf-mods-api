/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Offline_CheckingInputs */

const en_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Looking for a signal…`)
};

const es_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscando señal…`)
};

const de_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suche nach Signal…`)
};

const fr_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recherche du signal…`)
};

const it_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerco il segnale…`)
};

const nl_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoeken naar signaal…`)
};

const pl_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukam sygnału…`)
};

const pt_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Procurando sinal…`)
};

const ru_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ищем сигнал…`)
};

const sv_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Letar efter signal…`)
};

const tr_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinyal aranıyor…`)
};

const zh_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在搜索信号…`)
};

const ja_shell_offline_checking = /** @type {(inputs: Shell_Offline_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`電波を探しています…`)
};

/**
* | output |
* | --- |
* | "Looking for a signal…" |
*
* @param {Shell_Offline_CheckingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_offline_checking = /** @type {((inputs?: Shell_Offline_CheckingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Offline_CheckingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_offline_checking(inputs)
	if (locale === "de") return de_shell_offline_checking(inputs)
	if (locale === "fr") return fr_shell_offline_checking(inputs)
	if (locale === "it") return it_shell_offline_checking(inputs)
	if (locale === "nl") return nl_shell_offline_checking(inputs)
	if (locale === "pl") return pl_shell_offline_checking(inputs)
	if (locale === "pt") return pt_shell_offline_checking(inputs)
	if (locale === "ru") return ru_shell_offline_checking(inputs)
	if (locale === "sv") return sv_shell_offline_checking(inputs)
	if (locale === "tr") return tr_shell_offline_checking(inputs)
	if (locale === "zh") return zh_shell_offline_checking(inputs)
	if (locale === "ja") return ja_shell_offline_checking(inputs)
	return en_shell_offline_checking(inputs)
});
