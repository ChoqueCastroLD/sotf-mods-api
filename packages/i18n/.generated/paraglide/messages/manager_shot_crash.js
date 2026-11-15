/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Shot_CrashInputs */

const en_manager_shot_crash = /** @type {(inputs: Manager_Shot_CrashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The crash dialog offering the logs`)
};

const es_manager_shot_crash = /** @type {(inputs: Manager_Shot_CrashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El diálogo de cierre que ofrece los registros`)
};

const de_manager_shot_crash = /** @type {(inputs: Manager_Shot_CrashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Absturzdialog mit den Logs`)
};

const fr_manager_shot_crash = /** @type {(inputs: Manager_Shot_CrashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La fenêtre de plantage qui propose les journaux`)
};

const it_manager_shot_crash = /** @type {(inputs: Manager_Shot_CrashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La finestra di crash che offre i log`)
};

const nl_manager_shot_crash = /** @type {(inputs: Manager_Shot_CrashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het crashvenster dat de logs aanbiedt`)
};

const pl_manager_shot_crash = /** @type {(inputs: Manager_Shot_CrashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okno awarii z propozycją otwarcia logów`)
};

const pt_manager_shot_crash = /** @type {(inputs: Manager_Shot_CrashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A janela de travamento que oferece os logs`)
};

const ru_manager_shot_crash = /** @type {(inputs: Manager_Shot_CrashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Окно вылета с предложением открыть логи`)
};

const sv_manager_shot_crash = /** @type {(inputs: Manager_Shot_CrashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kraschdialogen som erbjuder loggarna`)
};

const tr_manager_shot_crash = /** @type {(inputs: Manager_Shot_CrashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Günlükleri öneren çökme penceresi`)
};

const zh_manager_shot_crash = /** @type {(inputs: Manager_Shot_CrashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`崩溃对话框提供日志`)
};

const ja_manager_shot_crash = /** @type {(inputs: Manager_Shot_CrashInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログを開くよう案内するクラッシュダイアログ`)
};

/**
* | output |
* | --- |
* | "The crash dialog offering the logs" |
*
* @param {Manager_Shot_CrashInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_shot_crash = /** @type {((inputs?: Manager_Shot_CrashInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Shot_CrashInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_shot_crash(inputs)
	if (locale === "de") return de_manager_shot_crash(inputs)
	if (locale === "fr") return fr_manager_shot_crash(inputs)
	if (locale === "it") return it_manager_shot_crash(inputs)
	if (locale === "nl") return nl_manager_shot_crash(inputs)
	if (locale === "pl") return pl_manager_shot_crash(inputs)
	if (locale === "pt") return pt_manager_shot_crash(inputs)
	if (locale === "ru") return ru_manager_shot_crash(inputs)
	if (locale === "sv") return sv_manager_shot_crash(inputs)
	if (locale === "tr") return tr_manager_shot_crash(inputs)
	if (locale === "zh") return zh_manager_shot_crash(inputs)
	if (locale === "ja") return ja_manager_shot_crash(inputs)
	return en_manager_shot_crash(inputs)
});
